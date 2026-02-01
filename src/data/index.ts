import type { Product, ShippingOption, State, Feature } from '@/types';

export const products: Product[] = [
  {
    id: 'table-home',
    name: 'Home Cutting Table',
    nameAr: 'طاولة تفصيل منزلية',
    price: 15000,
    description: 'Foldable cutting table with dimensions 90×180 cm, height 90 cm. Folds to 30 cm thickness. Comes with 6 wheels for easy mobility.',
    descriptionAr: 'طاولة قابلة للطي بأبعاد 90×180 سم، ارتفاع 90 سم، تطوى لتصبح بسمك 30 سم. تأتي بـ 6 عجلات للحركة السهلة.',
    images: [
      '/images/table2.jpeg',
      '/images/received_1293390441784496.jpeg',
      '/images/1729541438044.jpg',
      '/images/1729541449851.jpg',
      '/images/___creation_1545701639386594.jpeg',
      '/images/1750830526344.jpg'
    ],
    colors: [
      { name: 'White', nameAr: 'أبيض', value: '#ffffff' },
      { name: 'Beige', nameAr: 'بيج', value: '#f5f5dc' },
      { name: 'Brown', nameAr: 'مارون', value: '#8b4513' }
    ],
    features: [
      'HDF imported wood',
      '12mm solid iron frame',
      'Epoxy scratch-resistant paint',
      'PVC edge protection',
      '6 high-quality wheels',
      'Easy folding mechanism'
    ],
    dimensions: '90×180 سم',
    wheels: 6
  },
  {
    id: 'table-shelves',
    name: 'Cutting Table with Shelves',
    nameAr: 'طاولة تفصيل برفوف',
    price: 17000,
    description: 'Same specifications as the regular table with additional storage shelves underneath for organizing your sewing equipment.',
    descriptionAr: 'نفس مواصفات الطاولة العادية مع إضافة رفوف تخزين في الأسفل لتنظيم معدات الخياطة.',
    images: [
      '/images/1748109946146.jpg',
      '/images/received_942391677768380.jpeg',
      '/images/orca-image--1256197463.jpeg',
      '/images/orca-image--1885493409.jpeg'
    ],
    colors: [
      { name: 'White', nameAr: 'أبيض', value: '#ffffff' },
      { name: 'Beige', nameAr: 'بيج', value: '#f5f5dc' },
      { name: 'Brown', nameAr: 'مارون', value: '#8b4513' }
    ],
    features: [
      'HDF imported wood',
      '12mm solid iron frame',
      'Epoxy scratch-resistant paint',
      'PVC edge protection',
      '6 high-quality wheels',
      'Storage shelves included'
    ],
    dimensions: '90×180 سم',
    wheels: 6
  },
  {
    id: 'table-plus',
    name: 'Cutting Table Plus',
    nameAr: 'طاولة تفصيل بلس',
    price: 20000,
    description: 'Upgraded version with full metal frame including HDF edges. Stronger and more durable construction for professional use.',
    descriptionAr: 'النسخة المطورة بإطار كامل من الحديد مع حواف HDF. بناء أقوى وأكثر متانة للاستخدام المهني.',
    images: [
      '/images/IMG20250530215110.jpg',
      '/images/IMG20250605080254.jpg',
      '/images/IMG20250605080256.jpg',
      '/images/IMG20250605080258.jpg'
    ],
    colors: [
      { name: 'White', nameAr: 'أبيض', value: '#ffffff' },
      { name: 'Beige', nameAr: 'بيج', value: '#f5f5dc' },
      { name: 'Brown', nameAr: 'مارون', value: '#8b4513' }
    ],
    features: [
      'Full metal frame with HDF edges',
      '12mm reinforced iron construction',
      'Premium epoxy paint',
      'Industrial-grade PVC edging',
      '6 heavy-duty wheels',
      'Professional-grade durability'
    ],
    dimensions: '90×180 سم',
    wheels: 6
  },
  {
    id: 'table-large',
    name: 'Cutting Table 120×200',
    nameAr: 'طاولة تفصيل 120×200',
    price: 30000,
    description: 'Same Plus system with larger dimensions 120×200 cm. Comes with 8 wheels for extra stability and weight capacity.',
    descriptionAr: 'نفس نظام الطاولة بلس مع أبعاد أكبر 120×200 سم. تأتي بـ 8 عجلات لثبات إضافي وقدرة تحمل أكبر.',
    images: [
      '/images/IMG20250605081053.jpg',
      '/images/IMG20250605081911.jpg',
      '/images/IMG20250605082953.jpg'
    ],
    colors: [
      { name: 'White', nameAr: 'أبيض', value: '#ffffff' },
      { name: 'Beige', nameAr: 'بيج', value: '#f5f5dc' },
      { name: 'Brown', nameAr: 'مارون', value: '#8b4513' }
    ],
    features: [
      'Full metal frame with HDF edges',
      '12mm reinforced iron construction',
      'Premium epoxy paint',
      'Industrial-grade PVC edging',
      '8 heavy-duty wheels',
      'Extra-large working surface'
    ],
    dimensions: '120×200 سم',
    wheels: 8
  }
];

export const shippingOptions: ShippingOption[] = [
  {
    id: 'home-delivery',
    name: 'Home Delivery',
    nameAr: 'توصيل للمنزل',
    price: 2000,
    description: 'We deliver the product directly to your home address',
    descriptionAr: 'نوصل المنتج مباشرة إلى عنوان منزلك'
  },
  {
    id: 'bureau-pickup',
    name: 'Bureau Pickup',
    nameAr: 'استلام من المكتب',
    price: 1800,
    description: 'Pick up your order from the nearest shipping bureau',
    descriptionAr: 'استلم طلبك من أقرب مكتب شحن'
  }
];

export const features: Feature[] = [
  {
    id: 'hdf-wood',
    title: 'Imported HDF Wood',
    titleAr: 'خشب HDF مستورد',
    description: 'High-quality imported HDF wood for superior durability',
    descriptionAr: 'أجود أنواع الخشب المضغوط المستورد للمتانة الفائقة',
    icon: '🪵'
  },
  {
    id: 'iron-frame',
    title: '12mm Solid Iron',
    titleAr: 'حديد 12 ملم متين',
    description: 'Thick 12mm iron frame that lasts for years',
    descriptionAr: 'إطار صلب سمك 12 ملم يدوم لسنوات',
    icon: '⚙️'
  },
  {
    id: 'epoxy-paint',
    title: 'Epoxy Paint',
    titleAr: 'بوية إيبوكسي',
    description: 'Scratch and rust-resistant epoxy coating',
    descriptionAr: 'طلاء مقاوم للخدش والصدأ',
    icon: '🎨'
  },
  {
    id: 'pvc-edge',
    title: 'PVC Edge Protection',
    titleAr: 'حافة PVC',
    description: 'Machine-applied PVC edge for perfect protection',
    descriptionAr: 'حماية مثالية للحواف بالماشينة',
    icon: '🔧'
  },
  {
    id: 'wheels',
    title: 'Quality Wheels',
    titleAr: 'عجلات نوعية',
    description: 'Best quality wheels available in the market',
    descriptionAr: 'أفضل جودة متوفرة في السوق',
    icon: '🔵'
  },
  {
    id: 'folding',
    title: 'Easy Folding',
    titleAr: 'سهلة الطي',
    description: 'Practical design for easy storage',
    descriptionAr: 'تصميم عملي يسهل التخزين',
    icon: '📦'
  }
];

export const algerianStates: State[] = [
  {
    id: '1',
    name: 'Adrar',
    nameAr: 'أدرار',
    communes: [
      { id: '101', name: 'Adrar', nameAr: 'أدرار' },
      { id: '102', name: 'Tamest', nameAr: 'تامست' },
      { id: '103', name: 'Charouine', nameAr: 'شروين' },
      { id: '104', name: 'Reggane', nameAr: 'رقان' },
      { id: '105', name: 'Timimoun', nameAr: 'تيميمون' }
    ]
  },
  {
    id: '2',
    name: 'Chlef',
    nameAr: 'الشلف',
    communes: [
      { id: '201', name: 'Chlef', nameAr: 'الشلف' },
      { id: '202', name: 'Tenes', nameAr: 'تنس' },
      { id: '203', name: 'El Karimia', nameAr: 'الكريمية' },
      { id: '204', name: 'Boukadir', nameAr: 'بوقادير' },
      { id: '205', name: 'Oued Fodda', nameAr: 'وادي الفضة' },
      { id: '206', name: 'Oued Sly', nameAr: 'وادي سلي' },
      { id: '207', name: 'Zeboudja', nameAr: 'الزبوجة' },
      { id: '208', name: 'Abou El Hassan', nameAr: 'أبو الحسن' }
    ]
  },
  {
    id: '3',
    name: 'Laghouat',
    nameAr: 'الأغواط',
    communes: [
      { id: '301', name: 'Laghouat', nameAr: 'الأغواط' },
      { id: '302', name: 'Ksar El Hirane', nameAr: 'قصر الحيران' },
      { id: '303', name: 'Benacer Benchohra', nameAr: 'بن ناصر بن شهرة' },
      { id: '304', name: 'Sidi Makhlouf', nameAr: 'سيدي مخلوف' },
      { id: '305', name: 'Aflou', nameAr: 'أفلو' }
    ]
  },
  {
    id: '4',
    name: 'Oum El Bouaghi',
    nameAr: 'أم البواقي',
    communes: [
      { id: '401', name: 'Oum El Bouaghi', nameAr: 'أم البواقي' },
      { id: '402', name: 'Ain Beida', nameAr: 'عين البيضاء' },
      { id: '403', name: 'Ksar Sbahi', nameAr: 'قصر الصباحي' },
      { id: '404', name: 'Souk Naamane', nameAr: 'سوق نعمان' },
      { id: '405', name: 'Ain Mlila', nameAr: 'عين مليلة' }
    ]
  },
  {
    id: '5',
    name: 'Batna',
    nameAr: 'باتنة',
    communes: [
      { id: '501', name: 'Batna', nameAr: 'باتنة' },
      { id: '502', name: 'Merouana', nameAr: 'مروانة' },
      { id: '503', name: 'Seriana', nameAr: 'سريانة' },
      { id: '504', name: 'Menaa', nameAr: 'منعة' },
      { id: '505', name: 'El Madher', nameAr: 'الماضر' },
      { id: '506', name: 'Tazoult', nameAr: 'تازولت' }
    ]
  },
  {
    id: '6',
    name: 'Bejaia',
    nameAr: 'بجاية',
    communes: [
      { id: '601', name: 'Bejaia', nameAr: 'بجاية' },
      { id: '602', name: 'Adekar', nameAr: 'أدكار' },
      { id: '603', name: 'Amizour', nameAr: 'أميزور' },
      { id: '604', name: 'Aokas', nameAr: 'أوقاس' },
      { id: '605', name: 'Barbacha', nameAr: 'برباشة' },
      { id: '606', name: 'El Kseur', nameAr: 'القصر' }
    ]
  },
  {
    id: '7',
    name: 'Biskra',
    nameAr: 'بسكرة',
    communes: [
      { id: '701', name: 'Biskra', nameAr: 'بسكرة' },
      { id: '702', name: 'Oumache', nameAr: 'أوماش' },
      { id: '703', name: 'Branis', nameAr: 'البرانس' },
      { id: '704', name: 'El Kantara', nameAr: 'القنطرة' },
      { id: '705', name: 'Tolga', nameAr: 'طولقة' }
    ]
  },
  {
    id: '8',
    name: 'Bechar',
    nameAr: 'بشار',
    communes: [
      { id: '801', name: 'Bechar', nameAr: 'بشار' },
      { id: '802', name: 'Erg Ferradj', nameAr: 'عرق فراج' },
      { id: '803', name: 'Ouled Khoudir', nameAr: 'أولاد خدير' },
      { id: '804', name: 'Lahmar', nameAr: 'الأحمر' },
      { id: '805', name: 'Beni Ounif', nameAr: 'بني ونيف' }
    ]
  },
  {
    id: '9',
    name: 'Blida',
    nameAr: 'البليدة',
    communes: [
      { id: '901', name: 'Blida', nameAr: 'البليدة' },
      { id: '902', name: 'Boufarik', nameAr: 'بوفاريك' },
      { id: '903', name: 'Bougara', nameAr: 'بوقرة' },
      { id: '904', name: 'Bouinan', nameAr: 'بوعينان' },
      { id: '905', name: 'El Affroun', nameAr: 'العفرون' },
      { id: '906', name: 'Larbaa', nameAr: 'الأربعاء' },
      { id: '907', name: 'Meftah', nameAr: 'مفتاح' },
      { id: '908', name: 'Mouzaia', nameAr: 'موزاية' }
    ]
  },
  {
    id: '10',
    name: 'Bouira',
    nameAr: 'البويرة',
    communes: [
      { id: '1001', name: 'Bouira', nameAr: 'البويرة' },
      { id: '1002', name: 'Ain Bessem', nameAr: 'عين بسام' },
      { id: '1003', name: 'El Asnam', nameAr: 'الأصنام' },
      { id: '1004', name: 'Lakhdaria', nameAr: 'الأخضرية' },
      { id: '1005', name: 'Sour El Ghozlane', nameAr: 'سور الغزلان' }
    ]
  },
  {
    id: '11',
    name: 'Tamanrasset',
    nameAr: 'تمنراست',
    communes: [
      { id: '1101', name: 'Tamanrasset', nameAr: 'تمنراست' },
      { id: '1102', name: 'Abalessa', nameAr: 'أبلسة' },
      { id: '1103', name: 'Idles', nameAr: 'إدلس' },
      { id: '1104', name: 'In Guezzam', nameAr: 'إن قزام' }
    ]
  },
  {
    id: '12',
    name: 'Tebessa',
    nameAr: 'تبسة',
    communes: [
      { id: '1201', name: 'Tebessa', nameAr: 'تبسة' },
      { id: '1202', name: 'Bir El Ater', nameAr: 'بئر العاتر' },
      { id: '1203', name: 'Cheria', nameAr: 'الشريعة' },
      { id: '1204', name: 'El Aouinet', nameAr: 'العوينات' },
      { id: '1205', name: 'El Kouif', nameAr: 'الكويف' }
    ]
  },
  {
    id: '13',
    name: 'Tlemcen',
    nameAr: 'تلمسان',
    communes: [
      { id: '1301', name: 'Tlemcen', nameAr: 'تلمسان' },
      { id: '1302', name: 'Ain Fezza', nameAr: 'عين فزة' },
      { id: '1303', name: 'Bab El Assa', nameAr: 'باب العسة' },
      { id: '1304', name: 'Fellaoucene', nameAr: 'فلاوسن' },
      { id: '1305', name: 'Ghazaouet', nameAr: 'الغزوات' },
      { id: '1306', name: 'Hennaya', nameAr: 'الحناية' },
      { id: '1307', name: 'Maghnia', nameAr: 'مغنية' },
      { id: '1308', name: 'Nedroma', nameAr: 'ندرومة' }
    ]
  },
  {
    id: '14',
    name: 'Tiaret',
    nameAr: 'تيارت',
    communes: [
      { id: '1401', name: 'Tiaret', nameAr: 'تيارت' },
      { id: '1402', name: 'Ain Deheb', nameAr: 'عين الذهب' },
      { id: '1403', name: 'Dahmouni', nameAr: 'دحموني' },
      { id: '1404', name: 'Frenda', nameAr: 'فرندة' },
      { id: '1405', name: 'Mahdia', nameAr: 'مهدية' }
    ]
  },
  {
    id: '15',
    name: 'Tizi Ouzou',
    nameAr: 'تيزي وزو',
    communes: [
      { id: '1501', name: 'Tizi Ouzou', nameAr: 'تيزي وزو' },
      { id: '1502', name: 'Ain El Hammam', nameAr: 'عين الحمام' },
      { id: '1503', name: 'Azazga', nameAr: 'عزازقة' },
      { id: '1504', name: 'Bouzeguene', nameAr: 'بوزقن' },
      { id: '1505', name: 'Draa Ben Khedda', nameAr: 'ذراع بن خدة' },
      { id: '1506', name: 'Larbaa Nath Irathen', nameAr: 'الأربعاء ناث إيراثن' },
      { id: '1507', name: 'Makouda', nameAr: 'ماكودة' }
    ]
  },
  {
    id: '16',
    name: 'Algiers',
    nameAr: 'الجزائر',
    communes: [
      { id: '1601', name: 'Algiers', nameAr: 'الجزائر' },
      { id: '1602', name: 'Bab Ezzouar', nameAr: 'باب الزوار' },
      { id: '1603', name: 'Baba Hassen', nameAr: 'بابا حسن' },
      { id: '1604', name: 'Bir Mourad Rais', nameAr: 'بير مراد رايس' },
      { id: '1605', name: 'Birkhadem', nameAr: 'بئر خادم' },
      { id: '1606', name: 'Cheraga', nameAr: 'الشراقة' },
      { id: '1607', name: 'Dar El Beida', nameAr: 'الدار البيضاء' },
      { id: '1608', name: 'Draria', nameAr: 'درارية' },
      { id: '1609', name: 'El Harrach', nameAr: 'الحراش' },
      { id: '1610', name: 'Hussein Dey', nameAr: 'حسين داي' },
      { id: '1611', name: 'Kouba', nameAr: 'القبة' },
      { id: '1612', name: 'Mohammadia', nameAr: 'المحمدية' },
      { id: '1613', name: 'Rouiba', nameAr: 'الرويبة' },
      { id: '1614', name: 'Sidi Mhamed', nameAr: 'سيدي امحمد' }
    ]
  },
  {
    id: '17',
    name: 'Djelfa',
    nameAr: 'الجلفة',
    communes: [
      { id: '1701', name: 'Djelfa', nameAr: 'الجلفة' },
      { id: '1702', name: 'Ain El Ibel', nameAr: 'عين الإبل' },
      { id: '1703', name: 'Ain Oussera', nameAr: 'عين وسارة' },
      { id: '1704', name: 'Hassi Bahbah', nameAr: 'حاسي بحبح' },
      { id: '1705', name: 'Messaad', nameAr: 'مسعد' }
    ]
  },
  {
    id: '18',
    name: 'Jijel',
    nameAr: 'جيجل',
    communes: [
      { id: '1801', name: 'Jijel', nameAr: 'جيجل' },
      { id: '1802', name: 'El Ancer', nameAr: 'العنصر' },
      { id: '1803', name: 'El Milia', nameAr: 'الميلية' },
      { id: '1804', name: 'Settara', nameAr: 'السطارة' },
      { id: '1805', name: 'Taher', nameAr: 'الطاهير' }
    ]
  },
  {
    id: '19',
    name: 'Setif',
    nameAr: 'سطيف',
    communes: [
      { id: '1901', name: 'Setif', nameAr: 'سطيف' },
      { id: '1902', name: 'Ain Arnat', nameAr: 'عين أرنات' },
      { id: '1903', name: 'Ain Oulmene', nameAr: 'عين ولمان' },
      { id: '1904', name: 'Bougaa', nameAr: 'بوعقاز' },
      { id: '1905', name: 'El Eulma', nameAr: 'العلمة' },
      { id: '1906', name: 'Maaouia', nameAr: 'معاوية' }
    ]
  },
  {
    id: '20',
    name: 'Saida',
    nameAr: 'سعيدة',
    communes: [
      { id: '2001', name: 'Saida', nameAr: 'سعيدة' },
      { id: '2002', name: 'Ain El Hadjar', nameAr: 'عين الحجر' },
      { id: '2003', name: 'El Hassasna', nameAr: 'الحساسنة' },
      { id: '2004', name: 'Ouled Brahim', nameAr: 'أولاد ابراهيم' },
      { id: '2005', name: 'Youb', nameAr: 'يوب' }
    ]
  },
  {
    id: '21',
    name: 'Skikda',
    nameAr: 'سكيكدة',
    communes: [
      { id: '2101', name: 'Skikda', nameAr: 'سكيكدة' },
      { id: '2102', name: 'Ain Zouit', nameAr: 'عين زويت' },
      { id: '2103', name: 'El Hadaiek', nameAr: 'الحدائق' },
      { id: '2104', name: 'El Harrouch', nameAr: 'الحروش' },
      { id: '2105', name: 'Tamalous', nameAr: 'تمالوس' }
    ]
  },
  {
    id: '22',
    name: 'Sidi Bel Abbes',
    nameAr: 'سيدي بلعباس',
    communes: [
      { id: '2201', name: 'Sidi Bel Abbes', nameAr: 'سيدي بلعباس' },
      { id: '2202', name: 'Ain Thrid', nameAr: 'عين الثريد' },
      { id: '2203', name: 'El Hacaiba', nameAr: 'الحصيبة' },
      { id: '2204', name: 'Merine', nameAr: 'مرين' },
      { id: '2205', name: 'Ras El Ma', nameAr: 'رأس الماء' },
      { id: '2206', name: 'Tessala', nameAr: 'تسالة' }
    ]
  },
  {
    id: '23',
    name: 'Annaba',
    nameAr: 'عنابة',
    communes: [
      { id: '2301', name: 'Annaba', nameAr: 'عنابة' },
      { id: '2302', name: 'Ain Berda', nameAr: 'عين الباردة' },
      { id: '2303', name: 'Berrahal', nameAr: 'برحال' },
      { id: '2304', name: 'El Hadjar', nameAr: 'الحجار' },
      { id: '2305', name: 'Seraidi', nameAr: 'سرايدي' }
    ]
  },
  {
    id: '24',
    name: 'Guelma',
    nameAr: 'قالمة',
    communes: [
      { id: '2401', name: 'Guelma', nameAr: 'قالمة' },
      { id: '2402', name: 'Ain Hessainia', nameAr: 'عين حساينية' },
      { id: '2403', name: 'Bouchegouf', nameAr: 'بوشقوف' },
      { id: '2404', name: 'Guelaat Bou Sbaa', nameAr: 'قلعة بوصبع' },
      { id: '2405', name: 'Hammam Debagh', nameAr: 'حمام دباغ' }
    ]
  },
  {
    id: '25',
    name: 'Constantine',
    nameAr: 'قسنطينة',
    communes: [
      { id: '2501', name: 'Constantine', nameAr: 'قسنطينة' },
      { id: '2502', name: 'Ain Abid', nameAr: 'عين عبيد' },
      { id: '2503', name: 'Ain Smara', nameAr: 'عين السمارة' },
      { id: '2504', name: 'El Khroub', nameAr: 'الخروب' },
      { id: '2505', name: 'Hamma Bouziane', nameAr: 'حامة بوزيان' },
      { id: '2506', name: 'Zighoud Youcef', nameAr: 'زيغود يوسف' }
    ]
  },
  {
    id: '26',
    name: 'Medea',
    nameAr: 'المدية',
    communes: [
      { id: '2601', name: 'Medea', nameAr: 'المدية' },
      { id: '2602', name: 'Ain Boucif', nameAr: 'عين بوسيف' },
      { id: '2603', name: 'Beni Slimane', nameAr: 'بني سليمان' },
      { id: '2604', name: 'Berrouaghia', nameAr: 'البرواقية' },
      { id: '2605', name: 'El Omaria', nameAr: 'العمارية' },
      { id: '2606', name: 'Ouzera', nameAr: 'وزرة' }
    ]
  },
  {
    id: '27',
    name: 'Mostaganem',
    nameAr: 'مستغانم',
    communes: [
      { id: '2701', name: 'Mostaganem', nameAr: 'مستغانم' },
      { id: '2702', name: 'Ain Nouissy', nameAr: 'عين نويسي' },
      { id: '2703', name: 'Ain Tadles', nameAr: 'عين تادلس' },
      { id: '2704', name: 'Hassi Maameche', nameAr: 'حاسي معمش' },
      { id: '2705', name: 'Mazagran', nameAr: 'مازغران' }
    ]
  },
  {
    id: '28',
    name: 'Msila',
    nameAr: 'المسيلة',
    communes: [
      { id: '2801', name: 'Msila', nameAr: 'المسيلة' },
      { id: '2802', name: 'Ain El Hadjel', nameAr: 'عين الحجل' },
      { id: '2803', name: 'Bou Saada', nameAr: 'بو سعادة' },
      { id: '2804', name: 'Chellal', nameAr: 'شلال' },
      { id: '2805', name: 'Hammam Dalaa', nameAr: 'حمام الضلعة' }
    ]
  },
  {
    id: '29',
    name: 'Mascara',
    nameAr: 'معسكر',
    communes: [
      { id: '2901', name: 'Mascara', nameAr: 'معسكر' },
      { id: '2902', name: 'Ain Fares', nameAr: 'عين فارس' },
      { id: '2903', name: 'Bou Hanifia', nameAr: 'بوحنيفية' },
      { id: '2904', name: 'El Bordj', nameAr: 'البرج' },
      { id: '2905', name: 'Ghriss', nameAr: 'غريس' },
      { id: '2906', name: 'Oued Taria', nameAr: 'وادي التاغية' },
      { id: '2907', name: 'Sig', nameAr: 'سيق' }
    ]
  },
  {
    id: '30',
    name: 'Ouargla',
    nameAr: 'ورقلة',
    communes: [
      { id: '3001', name: 'Ouargla', nameAr: 'ورقلة' },
      { id: '3002', name: 'Ain Beida', nameAr: 'عين البيضاء' },
      { id: '3003', name: 'Hassi Ben Abdellah', nameAr: 'حاسي بن عبد الله' },
      { id: '3004', name: 'Hassi Messaoud', nameAr: 'حاسي مسعود' },
      { id: '3005', name: 'Ngoussa', nameAr: 'نقوسة' }
    ]
  },
  {
    id: '31',
    name: 'Oran',
    nameAr: 'وهران',
    communes: [
      { id: '3101', name: 'Oran', nameAr: 'وهران' },
      { id: '3102', name: 'Ain El Turk', nameAr: 'عين الترك' },
      { id: '3103', name: 'Arzew', nameAr: 'أرزيو' },
      { id: '3104', name: 'Bethioua', nameAr: 'بطيوة' },
      { id: '3105', name: 'Bir El Djir', nameAr: 'بئر الجير' },
      { id: '3106', name: 'Es Senia', nameAr: 'السانية' },
      { id: '3107', name: 'Gdyel', nameAr: 'قديل' },
      { id: '3108', name: 'Mers El Kebir', nameAr: 'المرسى الكبير' }
    ]
  },
  {
    id: '32',
    name: 'El Bayadh',
    nameAr: 'البيض',
    communes: [
      { id: '3201', name: 'El Bayadh', nameAr: 'البيض' },
      { id: '3202', name: 'Boualem', nameAr: 'بوعلام' },
      { id: '3203', name: 'Bougtoub', nameAr: 'بوغطوب' },
      { id: '3204', name: 'Chellala', nameAr: 'شلالة' },
      { id: '3205', name: 'El Bnoud', nameAr: 'البنود' }
    ]
  },
  {
    id: '33',
    name: 'Illizi',
    nameAr: 'إليزي',
    communes: [
      { id: '3301', name: 'Illizi', nameAr: 'إليزي' },
      { id: '3302', name: 'Debdeb', nameAr: 'دبدب' },
      { id: '3303', name: 'In Amenas', nameAr: 'إن أمناس' }
    ]
  },
  {
    id: '34',
    name: 'Bordj Bou Arreridj',
    nameAr: 'برج بوعريريج',
    communes: [
      { id: '3401', name: 'Bordj Bou Arreridj', nameAr: 'برج بوعريريج' },
      { id: '3402', name: 'Ain Taghrout', nameAr: 'عين تاغروت' },
      { id: '3403', name: 'Bir Kasd Ali', nameAr: 'بير قاصد علي' },
      { id: '3404', name: 'El Achir', nameAr: 'العشير' },
      { id: '3405', name: 'Medjana', nameAr: 'مجانة' },
      { id: '3406', name: 'Ras El Oued', nameAr: 'رأس الوادي' }
    ]
  },
  {
    id: '35',
    name: 'Boumerdes',
    nameAr: 'بومرداس',
    communes: [
      { id: '3501', name: 'Boumerdes', nameAr: 'بومرداس' },
      { id: '3502', name: 'Bordj Menaiel', nameAr: 'برج منايل' },
      { id: '3503', name: 'Dellys', nameAr: 'دلس' },
      { id: '3504', name: 'Khemis El Khechna', nameAr: 'خميس الخشنة' },
      { id: '3505', name: 'Naciria', nameAr: 'الناصرية' },
      { id: '3506', name: 'Thenia', nameAr: 'الثنية' }
    ]
  },
  {
    id: '36',
    name: 'El Tarf',
    nameAr: 'الطارف',
    communes: [
      { id: '3601', name: 'El Tarf', nameAr: 'الطارف' },
      { id: '3602', name: 'Ben Mhidi', nameAr: 'بن مهيدي' },
      { id: '3603', name: 'Bougous', nameAr: 'بوقوس' },
      { id: '3604', name: 'El Kala', nameAr: 'القالة' },
      { id: '3605', name: 'Souk Ahras', nameAr: 'سوق أهراس' }
    ]
  },
  {
    id: '37',
    name: 'Tindouf',
    nameAr: 'تندوف',
    communes: [
      { id: '3701', name: 'Tindouf', nameAr: 'تندوف' },
      { id: '3702', name: 'Oum El Assel', nameAr: 'أم العسل' }
    ]
  },
  {
    id: '38',
    name: 'Tissemsilt',
    nameAr: 'تيسمسيلت',
    communes: [
      { id: '3801', name: 'Tissemsilt', nameAr: 'تيسمسيلت' },
      { id: '3802', name: 'Ammari', nameAr: 'عماري' },
      { id: '3803', name: 'Bordj Bounaama', nameAr: 'برج بونعامة' },
      { id: '3804', name: 'Lardjem', nameAr: 'لرجام' },
      { id: '3805', name: 'Theniet El Had', nameAr: 'ثنية الحد' }
    ]
  },
  {
    id: '39',
    name: 'El Oued',
    nameAr: 'الوادي',
    communes: [
      { id: '3901', name: 'El Oued', nameAr: 'الوادي' },
      { id: '3902', name: 'Bayadha', nameAr: 'البياضة' },
      { id: '3903', name: 'Debila', nameAr: 'الدبيلة' },
      { id: '3904', name: 'Guemar', nameAr: 'قمار' },
      { id: '3905', name: 'Kouinine', nameAr: 'كوينين' },
      { id: '3906', name: 'Magrane', nameAr: 'مقرن' },
      { id: '3907', name: 'Mih Ouansa', nameAr: 'ميه وانسة' },
      { id: '3908', name: 'Robbah', nameAr: 'الرباح' },
      { id: '3909', name: 'Taleb Larbi', nameAr: 'طالب العربي' }
    ]
  },
  {
    id: '40',
    name: 'Khenchela',
    nameAr: 'خنشلة',
    communes: [
      { id: '4001', name: 'Khenchela', nameAr: 'خنشلة' },
      { id: '4002', name: 'Babar', nameAr: 'بابار' },
      { id: '4003', name: 'Chelia', nameAr: 'شلية' },
      { id: '4004', name: 'El Hamma', nameAr: 'الحامة' },
      { id: '4005', name: 'Kais', nameAr: 'قايس' }
    ]
  },
  {
    id: '41',
    name: 'Souk Ahras',
    nameAr: 'سوق أهراس',
    communes: [
      { id: '4101', name: 'Souk Ahras', nameAr: 'سوق أهراس' },
      { id: '4102', name: 'Ain Zana', nameAr: 'عين الزانة' },
      { id: '4103', name: 'Bir Bouhouche', nameAr: 'بئر بوحوش' },
      { id: '4104', name: 'Heddada', nameAr: 'الحدادة' },
      { id: '4105', name: 'Mdaourouch', nameAr: 'مداوروش' },
      { id: '4106', name: 'Taoura', nameAr: 'تاورة' }
    ]
  },
  {
    id: '42',
    name: 'Tipaza',
    nameAr: 'تيبازة',
    communes: [
      { id: '4201', name: 'Tipaza', nameAr: 'تيبازة' },
      { id: '4202', name: 'Ahmer El Ain', nameAr: 'أحمر العين' },
      { id: '4203', name: 'Bou Ismail', nameAr: 'بواسماعيل' },
      { id: '4204', name: 'Cherchell', nameAr: 'شرشال' },
      { id: '4205', name: 'Fouka', nameAr: 'فوكة' },
      { id: '4206', name: 'Gouraya', nameAr: 'قوراية' },
      { id: '4207', name: 'Hadjout', nameAr: 'حجوط' }
    ]
  },
  {
    id: '43',
    name: 'Mila',
    nameAr: 'ميلة',
    communes: [
      { id: '4301', name: 'Mila', nameAr: 'ميلة' },
      { id: '4302', name: 'Ain Beida Harriche', nameAr: 'عين البيضاء حريش' },
      { id: '4303', name: 'Chelghoum Laid', nameAr: 'شلغوم العيد' },
      { id: '4304', name: 'Ferdjioua', nameAr: 'فرجيوة' },
      { id: '4305', name: 'Grarem Gouga', nameAr: 'قرارم قوقة' },
      { id: '4306', name: 'Oued Athmenia', nameAr: 'وادي العثمانية' },
      { id: '4307', name: 'Rouached', nameAr: 'رواشد' },
      { id: '4308', name: 'Tadjenanet', nameAr: 'تاجنانت' },
      { id: '4309', name: 'Teleghma', nameAr: 'تالخمت' }
    ]
  },
  {
    id: '44',
    name: 'Ain Defla',
    nameAr: 'عين الدفلى',
    communes: [
      { id: '4401', name: 'Ain Defla', nameAr: 'عين الدفلى' },
      { id: '4402', name: 'Ain Lechiakh', nameAr: 'عين الرياض' },
      { id: '4403', name: 'Bathia', nameAr: 'بطحية' },
      { id: '4404', name: 'Bordj Emir Khaled', nameAr: 'برج الأمير خالد' },
      { id: '4405', name: 'Djelida', nameAr: 'جليدة' },
      { id: '4406', name: 'El Amra', nameAr: 'العامرة' },
      { id: '4407', name: 'El Attaf', nameAr: 'العطاف' },
      { id: '4408', name: 'Khemis Miliana', nameAr: 'خميس مليانة' },
      { id: '4409', name: 'Miliana', nameAr: 'مليانة' },
      { id: '4410', name: 'Rouina', nameAr: 'الروينة' }
    ]
  },
  {
    id: '45',
    name: 'Naama',
    nameAr: 'النعامة',
    communes: [
      { id: '4501', name: 'Naama', nameAr: 'النعامة' },
      { id: '4502', name: 'Ain Sefra', nameAr: 'عين الصفراء' },
      { id: '4503', name: 'Assela', nameAr: 'عسلة' },
      { id: '4504', name: 'Mekmen Ben Amar', nameAr: 'مكمن بن عمار' },
      { id: '4505', name: 'Mecheria', nameAr: 'المشرية' }
    ]
  },
  {
    id: '46',
    name: 'Ain Temouchent',
    nameAr: 'عين تموشنت',
    communes: [
      { id: '4601', name: 'Ain Temouchent', nameAr: 'عين تموشنت' },
      { id: '4602', name: 'Ain El Arbaa', nameAr: 'عين الأربعاء' },
      { id: '4603', name: 'Beni Saf', nameAr: 'بني صاف' },
      { id: '4604', name: 'El Amria', nameAr: 'العامرية' },
      { id: '4605', name: 'El Malah', nameAr: 'الملاح' },
      { id: '4606', name: 'Hammam Bou Hadjar', nameAr: 'حمام بوحجر' },
      { id: '4607', name: 'Oulhaca El Gheraba', nameAr: 'ولهاصة الغرابة' }
    ]
  },
  {
    id: '47',
    name: 'Ghardaia',
    nameAr: 'غرداية',
    communes: [
      { id: '4701', name: 'Ghardaia', nameAr: 'غرداية' },
      { id: '4702', name: 'Berriane', nameAr: 'بريان' },
      { id: '4703', name: 'Dayet Ben Dahoua', nameAr: 'ضاية بن ضحوة' },
      { id: '4704', name: 'El Atteuf', nameAr: 'العطف' },
      { id: '4705', name: 'Metlili', nameAr: 'متليلي' },
      { id: '4706', name: 'Zelfana', nameAr: 'زلفانة' }
    ]
  },
  {
    id: '48',
    name: 'Relizane',
    nameAr: 'غليزان',
    communes: [
      { id: '4801', name: 'Relizane', nameAr: 'غليزان' },
      { id: '4802', name: 'Ammi Moussa', nameAr: 'عمي موسى' },
      { id: '4803', name: 'Djidiouia', nameAr: 'جديوية' },
      { id: '4804', name: 'El Hassaiane', nameAr: 'الحسيان' },
      { id: '4805', name: 'Mazouna', nameAr: 'مازونة' },
      { id: '4806', name: 'Mendes', nameAr: 'منداس' },
      { id: '4807', name: 'Oued Rhiou', nameAr: 'وادي رهيو' },
      { id: '4808', name: 'Ramka', nameAr: 'رمكة' },
      { id: '4809', name: 'Sidi Mhamed Ben Ali', nameAr: 'سيدي أمحمد بن علي' },
      { id: '4810', name: 'Yellel', nameAr: 'يلل' }
    ]
  },
  {
    id: '49',
    name: 'Timimoun',
    nameAr: 'تيميمون',
    communes: [
      { id: '4901', name: 'Timimoun', nameAr: 'تيميمون' },
      { id: '4902', name: 'Aoulef', nameAr: 'أولف' },
      { id: '4903', name: 'Fenoughil', nameAr: 'فنوغيل' },
      { id: '4904', name: 'Tinerkouk', nameAr: 'تينركوك' }
    ]
  },
  {
    id: '50',
    name: 'Bordj Badji Mokhtar',
    nameAr: 'برج باجي مختار',
    communes: [
      { id: '5001', name: 'Bordj Badji Mokhtar', nameAr: 'برج باجي مختار' },
      { id: '5002', name: 'Timiaouine', nameAr: 'تيمياوين' }
    ]
  },
  {
    id: '51',
    name: 'Ouled Djellal',
    nameAr: 'أولاد جلال',
    communes: [
      { id: '5101', name: 'Ouled Djellal', nameAr: 'أولاد جلال' },
      { id: '5102', name: 'Besbes', nameAr: 'بسباس' },
      { id: '5103', name: 'Ras El Miaad', nameAr: 'رأس الميعاد' },
      { id: '5104', name: 'Sidi Khaled', nameAr: 'سيدي خالد' }
    ]
  },
  {
    id: '52',
    name: 'Beni Abbes',
    nameAr: 'بني عباس',
    communes: [
      { id: '5201', name: 'Beni Abbes', nameAr: 'بني عباس' },
      { id: '5202', name: 'El Ouata', nameAr: 'الواتة' },
      { id: '5203', name: 'Igli', nameAr: 'إقلي' },
      { id: '5204', name: 'Kerzaz', nameAr: 'كرزاز' },
      { id: '5205', name: 'Tamtert', nameAr: 'تامترت' }
    ]
  },
  {
    id: '53',
    name: 'In Salah',
    nameAr: 'إن صالح',
    communes: [
      { id: '5301', name: 'In Salah', nameAr: 'إن صالح' },
      { id: '5302', name: 'Foggaret Ezzaouia', nameAr: 'فقارة الزاوية' },
      { id: '5303', name: 'In Ghar', nameAr: 'إن غار' }
    ]
  },
  {
    id: '54',
    name: 'In Guezzam',
    nameAr: 'إن قزام',
    communes: [
      { id: '5401', name: 'In Guezzam', nameAr: 'إن قزام' },
      { id: '5402', name: 'Tin Zaouatene', nameAr: 'تين زاوتن' }
    ]
  },
  {
    id: '55',
    name: 'Touggourt',
    nameAr: 'تقرت',
    communes: [
      { id: '5501', name: 'Touggourt', nameAr: 'تقرت' },
      { id: '5502', name: 'El Hadjira', nameAr: 'الحجيرة' },
      { id: '5503', name: 'Megarine', nameAr: 'المقارين' },
      { id: '5504', name: 'Nezla', nameAr: 'نزلة' },
      { id: '5505', name: 'Sidi Slimane', nameAr: 'سيدي سليمان' },
      { id: '5506', name: 'Taibet', nameAr: 'الطيبات' },
      { id: '5507', name: 'Tebesbest', nameAr: 'تبسبست' }
    ]
  },
  {
    id: '56',
    name: 'Djanet',
    nameAr: 'جانت',
    communes: [
      { id: '5601', name: 'Djanet', nameAr: 'جانت' },
      { id: '5602', name: 'Bordj El Haouass', nameAr: 'برج الحواس' }
    ]
  },
  {
    id: '57',
    name: 'El Mghair',
    nameAr: 'المغير',
    communes: [
      { id: '5701', name: 'El Mghair', nameAr: 'المغير' },
      { id: '5702', name: 'Djamaa', nameAr: 'جامعة' },
      { id: '5703', name: 'Oum Touyour', nameAr: 'أم الطيور' },
      { id: '5704', name: 'Sidi Amrane', nameAr: 'سيدي عمران' },
      { id: '5705', name: 'Sidi Khelil', nameAr: 'سيدي خليل' }
    ]
  },
  {
    id: '58',
    name: 'El Menia',
    nameAr: 'المنيعة',
    communes: [
      { id: '5801', name: 'El Menia', nameAr: 'المنيعة' },
      { id: '5802', name: 'Hassi Fehal', nameAr: 'حاسي فحل' },
      { id: '5803', name: 'Hassi Gara', nameAr: 'حاسي قارة' },
      { id: '5804', name: 'Mansoura', nameAr: 'المنصورة' }
    ]
  }
];

export const businessInfo = {
  name: 'Mr.Tayeb∞',
  nameAr: 'Mr.Tayeb∞',
  tagline: 'جودة عالية، سعر منافس، خدمة ممتازة',
  phone: '+213 771 64 08 48',
  phoneRaw: '0771640848',
  email: 'm.t.infinity.01@gmail.com',
  address: 'بوقادير، ولاية الشلف، الجزائر',
  facebook: 'https://facebook.com/Mr.Tayeb1infinity',
  instagram: 'https://instagram.com/mr.tayeb3',
  whatsapp: 'https://wa.me/213771640848',
  hours: 'السبت - الخميس: 9:00 - 18:00'
};
