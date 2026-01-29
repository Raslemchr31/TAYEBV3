export interface Product {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  description: string;
  descriptionAr: string;
  images: string[];
  colors: { name: string; nameAr: string; value: string }[];
  features: string[];
  dimensions: string;
  wheels: number;
}

export interface ShippingOption {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  description: string;
  descriptionAr: string;
}

export interface State {
  id: string;
  name: string;
  nameAr: string;
  communes: Commune[];
}

export interface Commune {
  id: string;
  name: string;
  nameAr: string;
}

export interface OrderForm {
  name: string;
  phone: string;
  state: string;
  commune: string;
  shippingOption: string;
  productId: string;
  productName: string;
  productPrice: number;
}

export interface Feature {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
}
