import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, X, ChevronLeft, ChevronRight, Check, Loader2, Send } from 'lucide-react';
import { products, shippingOptions, algerianStates } from '@/data';
import { submitOrderToAirtable } from '@/services/airtable';
import type { Product } from '@/types';

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [showOrderForm, setShowOrderForm] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state: '',
    commune: '',
    shippingOption: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.product-card');
      if (cards) {
        gsap.fromTo(cards,
          { y: 100, opacity: 0, rotateX: 15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setSelectedColor(product.colors[0]?.value || '');
    setShowOrderForm(false);
    setFormSubmitted(false);
    setSubmitError(null);
    setFormData({
      name: '',
      phone: '',
      state: '',
      commune: '',
      shippingOption: ''
    });
    document.body.style.overflow = 'hidden';
    fbq('track', 'ViewContent', { content_ids: [product.id], content_type: 'product', currency: 'DZD', value: product.price });
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowOrderForm(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) =>
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ar-DZ');
  };

  const getCommunes = () => {
    if (!formData.state) return [];
    const state = algerianStates.find(s => s.id === formData.state);
    return state?.communes || [];
  };

  const getStateName = (stateId: string) => {
    const state = algerianStates.find(s => s.id === stateId);
    return state?.nameAr || '';
  };

  const getCommuneName = (communeId: string) => {
    const commune = getCommunes().find(c => c.id === communeId);
    return commune?.nameAr || '';
  };

  const getShippingOptionName = (optionId: string) => {
    const option = shippingOptions.find(s => s.id === optionId);
    return option?.nameAr || '';
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'الاسم مطلوب';
    if (!formData.phone.trim()) errors.phone = 'رقم الهاتف مطلوب';
    if (!formData.state) errors.state = 'الولاية مطلوبة';
    if (!formData.commune) errors.commune = 'البلدية مطلوبة';
    if (!formData.shippingOption) errors.shippingOption = 'طريقة التوصيل مطلوبة';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitOrder = async () => {
    if (!validateForm() || !selectedProduct) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const shipping = shippingOptions.find(s => s.id === formData.shippingOption);
    const shippingPrice = shipping?.price || 0;
    const totalPrice = selectedProduct.price + shippingPrice;

    const orderData = {
      name: formData.name,
      phone: formData.phone,
      product: selectedProduct.nameAr,
      state: getStateName(formData.state),
      commune: getCommuneName(formData.commune),
      shipments: getShippingOptionName(formData.shippingOption),
      total: totalPrice,
    };

    try {
      const result = await submitOrderToAirtable(orderData);
      
      if (result.success) {
        setFormSubmitted(true);
      } else {
        setSubmitError(result.error || 'حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
      }
    } catch (error) {
      setSubmitError('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="products"
      className="section-padding bg-white relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            منتجاتنا
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-400 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 text-lg">
            اختر الطاولة التي تناسب احتياجاتك
          </p>
        </div>

        {/* Products Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card group cursor-pointer"
              onClick={() => openProductModal(product)}
            >
              {/* Image */}
              <div className="product-card-image relative">
                <img
                  src={product.images[0]}
                  alt={product.nameAr}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm">اضغط للتفاصيل</span>
                  <div className="price-tag">
                    {formatPrice(product.price)} د.ج
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {product.nameAr}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {product.descriptionAr}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Colors */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-slate-500">الألوان:</span>
                  <div className="flex gap-1">
                    {product.colors.map((color) => (
                      <div
                        key={color.value}
                        className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color.value }}
                        title={color.nameAr}
                      />
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div className="price-tag">
                    {formatPrice(product.price)} د.ج
                  </div>
                  <button className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    اشتري الآن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {!showOrderForm ? (
              <>
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-800">
                    {selectedProduct.nameAr}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div>
                      <div className="gallery-main relative">
                        <img
                          src={selectedProduct.images[currentImageIndex]}
                          alt={selectedProduct.nameAr}
                          className="w-full h-full object-cover"
                        />
                        {selectedProduct.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Thumbnails */}
                      {selectedProduct.images.length > 1 && (
                        <div className="gallery-thumbs">
                          {selectedProduct.images.map((img, idx) => (
                            <div
                              key={idx}
                              className={`gallery-thumb ${idx === currentImageIndex ? 'active' : ''}`}
                              onClick={() => setCurrentImageIndex(idx)}
                            >
                              <img src={img} alt={`${selectedProduct.nameAr} ${idx + 1}`} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div>
                      <p className="text-slate-600 mb-6">
                        {selectedProduct.descriptionAr}
                      </p>

                      {/* Specifications */}
                      <div className="bg-slate-50 rounded-xl p-4 mb-6">
                        <h4 className="font-bold text-slate-800 mb-3">المواصفات</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-500">الأبعاد:</span>
                            <span className="font-medium">{selectedProduct.dimensions}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-500">العجلات:</span>
                            <span className="font-medium">{selectedProduct.wheels}</span>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-bold text-slate-800 mb-3">المميزات</h4>
                        <ul className="space-y-2">
                          {selectedProduct.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-slate-600">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Colors */}
                      <div className="mb-6">
                        <h4 className="font-bold text-slate-800 mb-3">الألوان المتوفرة</h4>
                        <div className="flex gap-3">
                          {selectedProduct.colors.map((color) => (
                            <button
                              key={color.value}
                              onClick={() => setSelectedColor(color.value)}
                              className={`color-option ${selectedColor === color.value ? 'selected' : ''}`}
                              style={{ backgroundColor: color.value }}
                              title={color.nameAr}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div>
                          <span className="text-slate-500 text-sm">السعر</span>
                          <div className="text-3xl font-bold text-blue-600">
                            {formatPrice(selectedProduct.price)} د.ج
                          </div>
                        </div>
                        <button
                          onClick={() => setShowOrderForm(true)}
                          className="btn-gold text-lg py-3 px-8 flex items-center gap-2"
                        >
                          <Send className="w-5 h-5" />
                          اطلب الآن
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Order Form */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                  <h3 className="text-xl font-bold text-slate-800">
                    إتمام الطلب - {selectedProduct.nameAr}
                  </h3>
                  <button
                    onClick={() => setShowOrderForm(false)}
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 max-h-[70vh] overflow-y-auto">
                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
                        <Check className="w-10 h-10 text-green-500" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">
                        تم إرسال طلبك بنجاح!
                      </h4>
                      <p className="text-slate-600">
                        سنتواصل معك قريباً لتأكيد الطلب
                      </p>
                      <button
                        onClick={closeModal}
                        className="mt-6 btn-primary"
                      >
                        العودة للمنتجات
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Product Summary */}
                      <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-4">
                        <img
                          src={selectedProduct.images[0]}
                          alt={selectedProduct.nameAr}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-bold text-slate-800">{selectedProduct.nameAr}</h4>
                          <p className="text-blue-600 font-bold">{formatPrice(selectedProduct.price)} د.ج</p>
                        </div>
                      </div>

                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          الاسم الكامل *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="أدخل اسمك الكامل"
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          رقم الهاتف *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="مثال: 0555123456"
                        />
                        {formErrors.phone && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                        )}
                      </div>

                      {/* State */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          الولاية *
                        </label>
                        <select
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value, commune: '' })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        >
                          <option value="">اختر الولاية</option>
                          {algerianStates.map((state) => (
                            <option key={state.id} value={state.id}>
                              {state.nameAr}
                            </option>
                          ))}
                        </select>
                        {formErrors.state && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.state}</p>
                        )}
                      </div>

                      {/* Commune */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          البلدية *
                        </label>
                        <select
                          value={formData.commune}
                          onChange={(e) => setFormData({ ...formData, commune: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          disabled={!formData.state}
                        >
                          <option value="">اختر البلدية</option>
                          {getCommunes().map((commune) => (
                            <option key={commune.id} value={commune.id}>
                              {commune.nameAr}
                            </option>
                          ))}
                        </select>
                        {formErrors.commune && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.commune}</p>
                        )}
                      </div>

                      {/* Shipping Options */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-3">
                          طريقة التوصيل *
                        </label>
                        <div className="space-y-3">
                          {shippingOptions.map((option) => (
                            <div
                              key={option.id}
                              onClick={() => setFormData({ ...formData, shippingOption: option.id })}
                              className={`shipping-option ${formData.shippingOption === option.id ? 'selected' : ''}`}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-medium text-slate-800">{option.nameAr}</div>
                                  <div className="text-sm text-slate-500">{option.descriptionAr}</div>
                                </div>
                                <div className="price-tag text-sm">
                                  {formatPrice(option.price)} د.ج
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {formErrors.shippingOption && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.shippingOption}</p>
                        )}
                      </div>

                      {/* Total */}
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-600">سعر المنتج</span>
                          <span className="font-medium">{formatPrice(selectedProduct.price)} د.ج</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-600">التوصيل</span>
                          <span className="font-medium">
                            {formData.shippingOption
                              ? formatPrice(shippingOptions.find(s => s.id === formData.shippingOption)?.price || 0) + ' د.ج'
                              : '-'}
                          </span>
                        </div>
                        <div className="border-t border-slate-200 pt-2 mt-2">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-slate-800">الإجمالي</span>
                            <span className="text-xl font-bold text-blue-600">
                              {formatPrice(
                                selectedProduct.price +
                                (formData.shippingOption
                                  ? shippingOptions.find(s => s.id === formData.shippingOption)?.price || 0
                                  : 0)
                              )} د.ج
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Error Message */}
                      {submitError && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-center">
                          {submitError}
                        </div>
                      )}

                      {/* Submit */}
                      <button
                        onClick={submitOrder}
                        disabled={isSubmitting}
                        className="w-full btn-gold text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            جاري الإرسال...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            إرسال الطلب
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
