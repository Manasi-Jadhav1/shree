// ==================== API CONFIGURATION ====================
const API_BASE = 'https://shree-mxuo.onrender.com/api';

// // ==================== I18N DICTIONARY ====================
const i18n = {
  en: {
    "top.trusted": "🌾 Trusted by 10,000+ Farmers",
    "top.guidance": "📞 Expert Guidance: +91 90964 06006",
    "nav.home": "Home", "nav.products": "Products", "nav.about": "About", "nav.services": "Services", "nav.fertilizers": "Fertilizers", "nav.gallery": "Gallery", "nav.contact": "Contact", "nav.cart": "Cart",
    "hero.badge": "Smart Agriculture Solutions",
    "hero.title": "Empowering<br>Farmers with <span class=\"highlight\">Smart</span><br><span class=\"highlight\">Agriculture Solutions</span>",
    "hero.desc": "Shree Mangalmurti Krushi Seva Kendra provides quality fertilizers, pesticides, seeds, and expert farming guidance to help farmers increase productivity and crop health.",
    "hero.btnProducts": "<i class=\"fas fa-store\"></i> Explore Products →",
    "hero.btnGuidance": "<i class=\"fas fa-leaf\"></i> Get Crop Guidance",
    "hero.seeds": "Seeds", "hero.protection": "Protection", "hero.fertilizers": "Fertilizers",
    "prod.badge": "Our Products", "prod.title": "Premium Farming Solutions", "prod.sub": "Browse our complete range of quality farming products trusted by thousands of farmers.",
    "prod.search": "Search products...", "prod.found": "products found", "prod.sort": "Sort by:",
    "prod.default": "Default", "prod.priceLow": "Price: Low to High", "prod.priceHigh": "Price: High to Low", "prod.nameSort": "Name A-Z",
    "about.badge": "ABOUT US", "about.title": "About Shree Mangalmurti Krushi Seva Kendra", "about.desc": "Shree Mangalmurti Krushi Seva Kendra is dedicated to supporting farmers with modern agricultural solutions.",
    "about.mission": "Our Mission", "about.mission_p": "High-quality products & expert guidance",
    "about.community": "Community", "about.community_p": "Empowered farmers network",
    "about.innovation": "Innovation", "about.innovation_p": "Modern agricultural techniques",
    "about.quality": "Quality", "about.quality_p": "Best products from trusted suppliers",
    "about.years": "15+ Years of Service Excellence", "about.tip": "🌱 Ideal growing conditions",
    "about.trusted_since": "Trusted Since 2009", "about.dedication": "Serving farmers with dedication",
    "serv.badge": "Our Services", "serv.title": "What We Offer", "serv.sub": "Comprehensive agricultural support for modern farming",
    "serv.soil": "Soil Testing", "serv.soil_p": "Professional soil analysis",
    "serv.guide": "Expert Guidance", "serv.guide_p": "One-on-one consultation",
    "serv.delivery": "Doorstep Delivery", "serv.delivery_p": "Fast delivery to your farm",
    "serv.training": "Farmer Training", "serv.training_p": "Workshops on modern techniques",
    "impact.growth": "Plant Growth", "impact.yield": "Higher Yield", "impact.vitality": "Soil Vitality",
    "gall.badge": "Gallery", "gall.title": "Our Farming Moments", "gall.sub": "Capturing the essence of sustainable agriculture",
    "cont.title": "Get In Touch", "cont.sub": "Have questions? We're here to help you with all your farming needs.",
    "cont.addr": "Near Main Market, Kolhapur, Maharashtra - 416001", "cont.hours": "Mon-Sat: 8:00 AM - 7:00 PM",
    "cont.name": "Your Name", "cont.email": "Your Email", "cont.phone": "Phone Number", "cont.msg": "Your Message / Query about farming...", "cont.btn": "Send Message",
    "foot.rights": "&copy; 2024 Shree Mangalmurti Krushi Seva Kendra. All rights reserved.",
    "gate.login": "Login to Farm", "gate.register": "Join Community",
    "gate.certified": "Certified Products", "gate.expert": "Expert Guidance", "gate.organic": "Organic Options",
    "gate.100prod": "100+ Products", "gate.delivery": "Farm Delivery", "gate.helpline": "24/7 Helpline",
    "gate.title": "Shree Mangalmurti Krushi Seva Kendra",
    "gate.subtitle": "SMART AGRICULTURE SOLUTIONS",
    "gate.desc": "Providing high-quality fertilizers, pesticides, seeds, and expert farming guidance since 2009. We empower farmers with modern techniques to ensure better crop health and higher yields.",
    "product.buy": "<i class=\"fas fa-forward\"></i> Buy Now →", "product.feedback": "<i class=\"fas fa-star\"></i> Feedback",
    "filter.all": "All Products", "filter.fertilizers": "🌱 Fertilizers", "filter.insecticides": "🐛 Insecticides", "filter.fungicides": "🍄 Fungicides", "filter.herbicides": "🌿 Herbicides", "filter.seeds": "🌾 Seeds", "filter.growthboosters": "💪 Growth Boosters", "filter.organic": "☘️ Organic", "filter.cropprotection": "🛡️ Protection",
    "fertilizer.badge": "WHY ARE FERTILIZERS IMPORTANT?",
    "fertilizer.main": "Fertilizers play a vital role in improving soil fertility and ensuring healthy crop growth. They provide essential nutrients like Nitrogen, Phosphorus, and Potassium that help plants grow strong and increase crop yield.",
    "fertilizer.tagline": "Healthy Soil + Right Fertilizer = Better Yield",
    "admin.title": "Admin Dashboard",
    "admin.tabProducts": "Products",
    "admin.tabOrders": "Orders",
    "admin.tabUsers": "Users",
    "admin.tabAnalytics": "Analytics",
    "admin.tabUPI": "UPI Scanners",
    "admin.ordersTitle": "Customer Orders",
    "admin.usersTitle": "Registered Users & Login Data",
    "admin.analyticsTitle": "Sales Analytics Dashboard",
    "admin.upiTitle": "UPI Scanners (QR Codes)",
    "admin.tabContact": "Contact",
    "admin.contactTitle": "Shop & Contact Information",
    "user.title": "User Dashboard",
    "user.welcome": "Welcome,",
    "user.manage": "Manage your agricultural journey with Shree Mangalmurti.",
    "user.orders": "My Orders",
    "user.orders_p": "Track deliveries",
    "user.shop": "Shop Now",
    "user.shop_p": "Browse products",
    "user.advice": "Expert Advice",
    "user.advice_p": "Get crop help",
    "user.activity": "Recent Activity",
    "user.seeAll": "See All",
    "user.paymentQRs": "Payment QR Codes",
    "user.paymentDesc": "Use these QR codes for manual UPI payments during your purchase.",
    "user.quickLinks": "Quick Links",
    "user.changeLang": "Change Language",
    "user.logout": "Logout",
    "admin.id": "#ID",
    "admin.customer": "Customer",
    "admin.products": "Products",
    "admin.amount": "Amount",
    "admin.payment": "Payment",
    "admin.date": "Date",
    "admin.status": "Status",
    "admin.actions": "Actions",
    "admin.name": "Name",
    "admin.email": "Email",
    "admin.role": "Role",
    "admin.joined": "Joined Date",
    "admin.addProduct": "Add New Product",
    "admin.prodName": "Product Name",
    "admin.prodDesc": "Product Description",
    "admin.prodPrice": "Price (₹)",
    "admin.size": "Size",
    "admin.prodSize": "Size / Volume (e.g., 500 ml, 1 Liter)",
    "admin.prodImage": "Image URL (optional)",
    "admin.addBtn": "Add Product",
    "admin.currentProducts": "Current Products",
    "admin.upiName": "GPay / PhonePe / Business Name",
    "admin.upiID": "UPI ID (e.g. name@okicici)",
    "admin.upiUpload": "Or Upload Photo:",
    "admin.addUPIBtn": "Add UPI Scanner",
    "status.processing": "Processing",
    "status.shipped": "Shipped",
    "status.delivered": "Delivered",
    "method.cod": "Cash on Delivery",
    "method.upi": "UPI Payment",
    "method.card": "Card Payment"
  },
  hi: {
    "top.trusted": "🌾 10,000+ किसानों द्वारा विश्वसनीय",
    "top.guidance": "📞 विशेषज्ञ मार्गदर्शन: +91 90964 06006",
    "nav.home": "होम", "nav.products": "उत्पाद", "nav.about": "हमारे बारे में", "nav.services": "सेवाएं", "nav.fertilizers": "उर्वरक", "nav.gallery": "गैलरी", "nav.contact": "संपर्क", "nav.cart": "कार्ट",
    "hero.badge": "स्मार्ट कृषि समाधान",
    "hero.title": "किसानों को <span class=\"highlight\">स्मार्ट कृषि</span><br><span class=\"highlight\">समाधानों</span> के साथ सशक्त बनाना",
    "hero.desc": "श्री मंगलमूर्ति कृषि सेवा केंद्र उत्पादकता और फसल स्वास्थ्य बढ़ाने के लिए गुणवत्तापूर्ण उर्वरक, कीटनाशक, बीज और विशेषज्ञ कृषि मार्गदर्शन प्रदान करता है।",
    "hero.btnProducts": "<i class=\"fas fa-store\"></i> उत्पाद देखें →",
    "hero.btnGuidance": "<i class=\"fas fa-leaf\"></i> फसल मार्गदर्शन प्राप्त करें",
    "hero.seeds": "बीज", "hero.protection": "सुरक्षा", "hero.fertilizers": "उर्वरक",
    "prod.badge": "हमारे उत्पाद", "prod.title": "प्रीमियम कृषि समाधान", "prod.sub": "हजारों किसानों द्वारा विश्वसनीय हमारे गुणवत्तापूर्ण कृषि उत्पादों की पूरी श्रृंखला देखें।",
    "prod.search": "उत्पाद खोजें...", "prod.found": "उत्पाद मिले", "prod.sort": "क्रमबद्ध करें:",
    "prod.default": "डिफ़ॉल्ट", "prod.priceLow": "कीमत: कम से अधिक", "prod.priceHigh": "कीमत: अधिक से कम", "prod.nameSort": "नाम A-Z",
    "about.badge": "हमारे बारे में", "about.title": "श्री मंगलमूर्ति कृषि सेवा केंद्र के बारे में", "about.desc": "श्री मंगलमूर्ति कृषि सेवा केंद्र आधुनिक कृषि समाधानों के साथ किसानों की सहायता के लिए समर्पित है।",
    "about.mission": "हमारा मिशन", "about.mission_p": "उच्च गुणवत्ता वाले उत्पाद और विशेषज्ञ मार्गदर्शन",
    "about.community": "समुदाय", "about.community_p": "सशक्त किसान नेटवर्क",
    "about.innovation": "नवाचार", "about.innovation_p": "आधुनिक कृषि तकनीक",
    "about.quality": "गुणवत्ता", "about.quality_p": "विश्वसनीय आपूर्तिकर्ताओं से सर्वोत्तम उत्पाद",
    "about.years": "15+ वर्षों की सेवा उत्कृष्टता", "about.tip": "🌱 आदर्श खेती की स्थिति",
    "about.trusted_since": "2009 से विश्वसनीय", "about.dedication": "समर्पण के साथ किसानों की सेवा",
    "serv.badge": "हमारी सेवाएं", "serv.title": "हम क्या प्रदान करते हैं", "serv.sub": "आधुनिक खेती के लिए व्यापक कृषि सहायता",
    "serv.soil": "मिट्टी परीक्षण", "serv.soil_p": "व्यावसायिक मिट्टी विश्लेषण",
    "serv.guide": "विशेषज्ञ मार्गदर्शन", "serv.guide_p": "आमने-सामने परामर्श",
    "serv.delivery": "द्वार पर डिलीवरी", "serv.delivery_p": "आपके खेत तक तेज़ डिलीवरी",
    "serv.training": "किसान प्रशिक्षण", "serv.training_p": "आधुनिक तकनीकों पर कार्यशालाएं",
    "impact.growth": "पौधों की वृद्धि", "impact.yield": "उच्च पैदावार", "impact.vitality": "मिट्टी की जीवंतता",
    "gall.badge": "गैलरी", "gall.title": "हमारे खेती के क्षण", "gall.sub": "स्थायी कृषि के सार को कैद करना",
    "cont.title": "संपर्क करें", "cont.sub": "कोई सवाल है? हम आपकी सभी खेती की जरूरतों में आपकी मदद करने के लिए यहां हैं।",
    "cont.addr": "मुख्य बाजार के पास, कोल्हापुर, महाराष्ट्र - 416001", "cont.hours": "सोम-शनि: सुबह 8:00 - शाम 7:00",
    "cont.name": "आपका नाम", "cont.email": "आपका ईमेल", "cont.phone": "फ़ोन नंबर", "cont.msg": "खेती के बारे में आपका संदेश / प्रश्न...", "cont.btn": "संदेश भेजें",
    "foot.rights": "&copy; 2024 श्री मंगलमूर्ति कृषि सेवा केंद्र। सर्वाधिकार सुरक्षित।",
    "gate.login": "फार्म में लॉगिन करें", "gate.register": "समुदाय में शामिल हों",
    "gate.certified": "प्रमाणित उत्पाद", "gate.expert": "विशेषज्ञ मार्गदर्शन", "gate.organic": "जैविक विकल्प",
    "gate.100prod": "100+ उत्पाद", "gate.delivery": "फार्म डिलीवरी", "gate.helpline": "24/7 हेल्पलाइन",
    "gate.title": "श्री मंगलमूर्ति कृषि सेवा केंद्र",
    "gate.subtitle": "स्मार्ट कृषि समाधान",
    "gate.desc": "2009 से उच्च गुणवत्ता वाले उर्वरक, कीटनाशक, बीज और विशेषज्ञ कृषि मार्गदर्शन प्रदान करना। हम किसानों को बेहतर फसल स्वास्थ्य और उच्च पैदावार सुनिश्चित करने के लिए आधुनिक तकनीकों के साथ सशक्त बनाते हैं।",
    "product.buy": "<i class=\"fas fa-forward\"></i> अभी खरीदें →", "product.feedback": "<i class=\"fas fa-star\"></i> प्रतिक्रिया",
    "filter.all": "सभी उत्पाद", "filter.fertilizers": "🌱 उर्वरक", "filter.insecticides": "🐛 कीटनाशक", "filter.fungicides": "🍄 फफूंदनाशक", "filter.herbicides": "🌿 शाकनाशी", "filter.seeds": "🌾 बीज", "filter.growthboosters": "💪 विकास वर्धक", "filter.organic": "☘️ जैविक", "filter.cropprotection": "🛡️ सुरक्षा",
    "fertilizer.badge": "उर्वरक क्यों महत्वपूर्ण हैं?",
    "fertilizer.main": "मिट्टी की उर्वरता में सुधार और स्वस्थ फसल विकास सुनिश्चित करने में उर्वरक महत्वपूर्ण भूमिका निभाते हैं। वे नाइट्रोजन, फास्फोरस और पोटेशियम जैसे आवश्यक पोषक तत्व प्रदान करते हैं जो पौधों को मजबूत बनाने और फसल की पैदावार बढ़ाने में मदद करते हैं।",
    "fertilizer.tagline": "स्वस्थ मिट्टी + सही उर्वरक = बेहतर पैदावार",
    "admin.title": "एडमिन डैशबोर्ड",
    "admin.tabProducts": "उत्पाद",
    "admin.tabOrders": "ऑर्डर",
    "admin.tabUsers": "उपयोगकर्ता",
    "admin.tabAnalytics": "एनालिटिक्स",
    "admin.tabUPI": "UPI स्कैनर",
    "admin.ordersTitle": "ग्राहक ऑर्डर",
    "admin.usersTitle": "पंजीकृत उपयोगकर्ता और लॉगिन डेटा",
    "admin.analyticsTitle": "बिक्री एनालिटिक्स डैशबोर्ड",
    "admin.upiTitle": "UPI स्कैनर (QR कोड)",
    "admin.tabContact": "संपर्क",
    "admin.contactTitle": "दुकान और संपर्क माहिती",
    "user.title": "उपयोगकर्ता डैशबोर्ड",
    "user.welcome": "स्वागत है,",
    "user.manage": "श्री मंगलमूर्ति के साथ अपनी कृषि यात्रा प्रबंधित करें।",
    "user.orders": "मेरे ऑर्डर",
    "user.orders_p": "डिलीवरी ट्रैक करें",
    "user.shop": "अभी खरीदारी करें",
    "user.shop_p": "उत्पाद देखें",
    "user.advice": "विशेषज्ञ सलाह",
    "user.advice_p": "फसल सहायता प्राप्त करें",
    "user.activity": "हालिया गतिविधि",
    "user.seeAll": "सभी देखें",
    "user.paymentQRs": "भुगतान QR कोड",
    "user.paymentDesc": "अपनी खरीदारी के दौरान मैन्युअल UPI भुगतान के लिए इन QR कोड का उपयोग करें।",
    "user.quickLinks": "त्वरित लिंक",
    "user.changeLang": "भाषा बदलें",
    "user.logout": "लॉगआउट",
    "admin.id": "#आईडी",
    "admin.customer": "ग्राहक",
    "admin.products": "उत्पाद",
    "admin.amount": "राशि",
    "admin.payment": "भुगतान",
    "admin.date": "तारीख",
    "admin.status": "स्थिति",
    "admin.name": "नाम",
    "admin.email": "ईमेल",
    "admin.role": "भूमिका",
    "admin.joined": "जुड़ने की तिथि",
    "admin.addProduct": "नया उत्पाद जोड़ें",
    "admin.prodName": "उत्पाद का नाम",
    "admin.prodDesc": "उत्पाद विवरण",
    "admin.prodPrice": "कीमत (₹)",
    "admin.size": "आकार",
    "admin.prodSize": "आकार / मात्रा (जैसे, 500 मिली, 1 लीटर)",
    "admin.prodImage": "छवि URL (वैकल्पिक)",
    "admin.addBtn": "उत्पाद जोड़ें",
    "admin.currentProducts": "वर्तमान उत्पाद",
    "admin.upiName": "GPay / PhonePe / व्यवसाय का नाम",
    "admin.upiID": "UPI आईडी (जैसे name@okicici)",
    "admin.upiUpload": "या फोटो अपलोड करें:",
    "admin.addUPIBtn": "UPI स्कैनर जोड़ें",
    "status.processing": "प्रसंस्करण",
    "status.shipped": "भेजा गया",
    "status.delivered": "डिलीवर किया गया",
    "method.cod": "कैश ऑन डिलीवरी",
    "method.upi": "UPI भुगतान",
    "method.card": "कार्ड भुगतान"
  },
  mr: {
    "top.trusted": "🌾 10,000+ शेतकऱ्यांचा विश्वास",
    "top.guidance": "📞 तज्ञ मार्गदर्शन: +91 90964 06006",
    "nav.home": "मुखपृष्ठ", "nav.products": "उत्पादने", "nav.about": "आमच्याबद्दल", "nav.services": "सेवा", "nav.fertilizers": "खते", "nav.gallery": "गॅलरी", "nav.contact": "संपर्क", "nav.cart": "कार्ट",
    "hero.badge": "स्मार्ट कृषी उपाय",
    "hero.title": "<span class=\"highlight\">स्मार्ट कृषी</span><br><span class=\"highlight\"> उपायांसह</span><br>शेतकऱ्यांचे सक्षमीकरण",
    "hero.desc": "श्री मंगलमूर्ती कृषी सेवा केंद्र उत्पादकता आणि पिकांचे आरोग्य वाढवण्यासाठी दर्जेदार खते, रसायने, बियाणे आणि तज्ञांचे मार्गदर्शन पुरवते।",
    "hero.btnProducts": "<i class=\"fas fa-store\"></i> उत्पादने पहा →",
    "hero.btnGuidance": "<i class=\"fas fa-leaf\"></i> पीक मार्गदर्शन मिळवा",
    "hero.seeds": "बियाणे", "hero.protection": "संरक्षण", "hero.fertilizers": "खते",
    "prod.badge": "आमची उत्पादने", "prod.title": "प्रीमियम कृषी उपाय", "prod.sub": "हजारो शेतकऱ्यांनी विश्वास ठेवलेल्या आमच्या दर्जेदार कृषी उत्पादनांची संपूर्ण श्रेणी पहा।",
    "prod.search": "उत्पादने शोधा...", "prod.found": "उत्पादने सापडली", "prod.sort": "क्रमवारी लावा:",
    "prod.default": "डीफॉल्ट", "prod.priceLow": "किंमत: कमी ते जास्त", "prod.priceHigh": "किंमत: जास्त ते कमी", "prod.nameSort": "नाव A-Z",
    "about.badge": "आमच्याबद्दल", "about.title": "श्री मंगलमूर्ती कृषी सेवा केंद्राबद्दल", "about.desc": "श्री मंगलमूर्ती कृषी सेवा केंद्र आधुनिक कृषी उपायांसह शेतकऱ्यांना मदत करण्यासाठी समर्पित आहे।",
    "about.mission": "आमचे ध्येय", "about.mission_p": "उच्च दर्जाची उत्पादने आणि तज्ञ मार्गदर्शन",
    "about.community": "समुदाय", "about.community_p": "सशक्त शेतकरी नेटवर्क",
    "about.innovation": "नवनिर्मिती", "about.innovation_p": "आधुनिक कृषी तंत्र",
    "about.quality": "गुणवत्ता", "about.quality_p": "विश्वासार्ह पुरवठादारांकडून सर्वोत्तम उत्पादने",
    "about.years": "15+ वर्षांची सेवा उत्कृष्टता", "about.tip": "🌱 आदर्श पीक परिस्थिती",
    "about.trusted_since": "2009 पासून विश्वसनीय", "about.dedication": "समर्पणाने शेतकऱ्यांची सेवा",
    "serv.badge": "आमच्या सेवा", "serv.title": "आम्ही काय ऑफर करतो", "serv.sub": "आधुनिक शेतीसाठी व्यापक कृषी मदत",
    "serv.soil": "माती परीक्षण", "serv.soil_p": "व्यावसायिक माती विश्लेषण",
    "serv.guide": "तज्ञ मार्गदर्शन", "serv.guide_p": "वैयक्तिक सल्ला",
    "serv.delivery": "घरपोच डिलिव्हरी", "serv.delivery_p": "तुमच्या शेतापर्यंत जलद डिलिव्हरी",
    "serv.training": "शेतकरी प्रशिक्षण", "serv.training_p": "आधुनिक तंत्रांवर कार्यशाळा",
    "impact.growth": "झाडांची वाढ", "impact.yield": "जास्त उत्पन्न", "impact.vitality": "मातीची चैतन्य",
    "gall.badge": "गॅलरी", "gall.title": "आमचे शेतीचे क्षण", "gall.sub": "शाश्वत शेतीचे सार टिपणे",
    "cont.title": "संपर्क साधा", "cont.sub": "काही प्रश्न आहेत? आम्ही तुमच्या सर्व शेतीविषयक गरजा पूर्ण करण्यासाठी येथे आहोत।",
    "cont.addr": "मुख्य बाजाराजवळ, कोल्हापूर, महाराष्ट्र - 416001", "cont.hours": "सोम-शनी: सकाळी 8:00 - संध्याकाळी 7:00",
    "cont.name": "तुमचे नाव", "cont.email": "तुमचा ईमेल", "cont.phone": "फोन नंबर", "cont.msg": "शेतीबद्दल तुमचा संदेश / प्रश्न...", "cont.btn": "संदेश पाठवा",
    "foot.rights": "&copy; 2024 श्री मंगलमूर्ती कृषी सेवा केंद्र। सर्व हक्क राखीव।",
    "gate.login": "फार्ममध्ये लॉगिन करा", "gate.register": "समुदायात सामील व्हा",
    "gate.certified": "प्रमाणित उत्पादने", "gate.expert": "तज्ञ मार्गदर्शन", "gate.organic": "सेंद्रिय पर्याय",
    "gate.100prod": "100+ उत्पादने", "gate.delivery": "फार्म डिलिव्हरी", "gate.helpline": "24/7 हेल्पलाइन",
    "gate.title": "श्री मंगलमूर्ती कृषी सेवा केंद्र",
    "gate.subtitle": "स्मार्ट कृषी उपाय",
    "gate.desc": "2009 पासून दर्जेदार खते, कीटकनाशके, बियाणे आणि तज्ञ शेती मार्गदर्शन प्रदान करत आहोत। आम्ही शेतकऱ्यांना चांगल्या पिकांचे आरोग्य आणि उच्च उत्पन्न सुनिश्चित करण्यासाठी आधुनिक तंत्रज्ञानासह सक्षम करतो।",
    "product.buy": "<i class=\"fas fa-forward\"></i> आता खरेदी करा →", "product.feedback": "<i class=\"fas fa-star\"></i> अभिप्राय",
    "filter.all": "सर्व उत्पादने", "filter.fertilizers": "🌱 खते", "filter.insecticides": "🐛 कीटकनाशके", "filter.fungicides": "🍄 बुरशीनाशके", "filter.herbicides": "🌿 तणनाशके", "filter.seeds": "🌾 बियाणे", "filter.growthboosters": "💪 वाढ वर्धक", "filter.organic": "☘️ सेंद्रिय", "filter.cropprotection": "🛡️ संरक्षण",
    "fertilizer.badge": "खते का महत्त्वाची आहेत?",
    "fertilizer.main": "मातीची सुपीकता सुधारण्यात आणि पिकांची निरोगी वाढ सुनिश्चित करण्यात खते महत्त्वाची भूमिका बजावतात। ते नत्र, स्फुरद आणि पालाश यांसारखी आवश्यक पोषक तत्वे पुरवतात ज्यामुळे झाडे मजबूत होतात आणि पिकांच्या उत्पादनात वाढ होते.",
    "fertilizer.tagline": "आरोग्यदायी माती + योग्य खते = उत्तम उत्पन्न",
    "admin.title": "एडमिन डॅशबोर्ड",
    "admin.tabProducts": "उत्पादने",
    "admin.tabOrders": "ऑर्डर्स",
    "admin.tabUsers": "वापरकर्ते",
    "admin.tabAnalytics": "अॅनालिटिक्स",
    "admin.tabUPI": "UPI स्कॅनर्स",
    "admin.ordersTitle": "ग्राहक ऑर्डर्स",
    "admin.usersTitle": "नोंदणीकृत वापरकर्ते आणि लॉगिन डेटा",
    "admin.analyticsTitle": "विक्री अॅनालिटिक्स डॅशबोर्ड",
    "admin.upiTitle": "UPI स्कॅनर्स (QR कोड)",
    "admin.tabContact": "संपर्क",
    "admin.contactTitle": "दुकान आणि संपर्क माहिती",
    "user.title": "वापरकर्ता डॅशबोर्ड",
    "user.welcome": "स्वागत आहे,",
    "user.manage": "श्री मंगलमूर्तीसोबत तुमचा शेतीचा प्रवास व्यवस्थापित करा।",
    "user.orders": "माझ्या ऑर्डर्स",
    "user.orders_p": "डिलिव्हरी ट्रॅक करा",
    "user.shop": "आता खरेदी करा",
    "user.shop_p": "उत्पादने पहा",
    "user.advice": "तज्ञ सल्ला",
    "user.advice_p": "पीक मदत मिळवा",
    "user.activity": "अलीकडील क्रियाकलाप",
    "user.seeAll": "सर्व पहा",
    "user.paymentQRs": "पेमेंट QR कोड",
    "user.paymentDesc": "तुमच्या खरेदी दरम्यान मॅन्युअल UPI पेमेंटसाठी हे QR कोड वापरा।",
    "user.quickLinks": "द्रुत दुवे",
    "user.changeLang": "भाषा बदला",
    "user.logout": "लॉगआउट",
    "admin.id": "#आयडी",
    "admin.customer": "ग्राहक",
    "admin.products": "उत्पादने",
    "admin.amount": "रक्कम",
    "admin.payment": "पेमेंट",
    "admin.date": "तारीख",
    "admin.status": "स्थिती",
    "admin.name": "नाव",
    "admin.email": "ईमेल",
    "admin.role": "भूमिका",
    "admin.joined": "नोंदणी तारीख",
    "admin.addProduct": "नवीन उत्पादन जोडा",
    "admin.prodName": "उत्पादनाचे नाव",
    "admin.prodDesc": "उत्पादन वर्णन",
    "admin.prodPrice": "किंमत (₹)",
    "admin.size": "आकार",
    "admin.prodSize": "आकार / प्रमाण (उदा. 500 मिली, 1 लीटर)",
    "admin.prodImage": "इमेज URL (पर्यायी)",
    "admin.addBtn": "उत्पादन जोडा",
    "admin.currentProducts": "सध्याची उत्पादने",
    "admin.upiName": "GPay / PhonePe / व्यवसायाचे नाव",
    "admin.upiID": "UPI आयडी (उदा. name@okicici)",
    "admin.upiUpload": "किंवा फोटो अपलोड करा:",
    "admin.addUPIBtn": "UPI स्कॅनर जोडा",
    "status.processing": "प्रक्रिया सुरू",
    "status.shipped": "पाठवले",
    "status.delivered": "पोहोचवले",
    "method.cod": "कॅश ऑन डिलिव्हरी",
    "method.upi": "UPI पेमेंट",
    "method.card": "कार्ड पेमेंट"
  }
};

function updateLanguage(lang) {
  currentLanguage = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang] && i18n[lang][key]) {
      el.placeholder = i18n[lang][key];
    }
  });

  // Re-render dynamic parts if dashboards are open
  if (document.getElementById('adminPanel').style.display === 'block') {
    renderAdminOrders();
    renderAdminUsers();
  }
  if (document.getElementById('userPanel').style.display === 'block') {
    renderUserDashboard();
  }
}

function translateStatus(status) {
  const key = `status.${status.toLowerCase()}`;
  return (i18n[currentLanguage] && i18n[currentLanguage][key]) || status;
}

function translateMethod(method) {
  const key = `method.${method.toLowerCase()}`;
  return (i18n[currentLanguage] && i18n[currentLanguage][key]) || method;
}

// ==================== STATE ====================
let currentLanguage = "en";
let activeFilter = "all";
let searchTerm = "";
let sortBy = "default";
let cart = JSON.parse(localStorage.getItem('smk_cart') || '[]');
let products = [];
let currentDetailProduct = null;
const galleryData = [
  { title: "Premium Wheat Harvest", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop" },
  { title: "Healthy Vegetable Production", image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=800&auto=format&fit=crop" },
  { title: "Sustainable Farming Practices", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop" },
  { title: "Precision Crop Protection", image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop" },
  { title: "Nutrient-Rich Soil Management", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop" },
  { title: "Advanced Pest Management", image: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?q=80&w=800&auto=format&fit=crop" }
];

// Helper for API calls
async function apiCall(endpoint, options = {}) {
  const token = localStorage.getItem('smk_token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers
  };

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });

    // Check if response is JSON
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || `API Error (${res.status})`);
      return { ok: true, data };
    } else {
      // Handle non-JSON responses (like HTML 404/500 pages)
      if (!res.ok) throw new Error(`Server returned error ${res.status}. Please check if the backend is running correctly.`);
      return { ok: true, data: null };
    }
  } catch (error) {
    let msg = error.message;
    if (msg === 'Failed to fetch' || msg.includes('Failed to fetch')) {
      msg = 'Cannot connect to server. Please ensure the backend server is running.';
    }
    return { ok: false, msg };
  }
}

// User helper
function getCurrentUser() {
  const user = localStorage.getItem('smk_user');
  return user ? JSON.parse(user) : null;
}

// ==================== AUTH SYSTEM ====================
function updateAuthUI() {
  const user = getCurrentUser();
  const authButtons = document.getElementById('authButtons');
  const userInfo = document.getElementById('userInfo');
  const authGate = document.getElementById('authGate');
  const adminBtn = document.getElementById('adminPanelBtn');
  const trackingBtn = document.getElementById('trackingBtn');

  if (user) {
    authButtons.style.display = 'none';
    userInfo.style.display = 'flex';
    document.getElementById('userNameDisplay').textContent = '👤 ' + user.name;

    // If logged in, hide the auth gate
    authGate.classList.add('hidden');
    document.body.classList.remove('auth-locked');

    // Show/Hide Admin specific buttons
    adminBtn.style.display = user.role === 'admin' ? 'inline-block' : 'none';
    const userDashBtn = document.getElementById('userDashboardBtn');
    if (userDashBtn) userDashBtn.style.display = user.role === 'user' ? 'inline-block' : 'none';

    // Hide Cart button globally if admin
    const shopNowBtn = document.getElementById('shopNowBtn');
    if (shopNowBtn) shopNowBtn.style.display = user.role === 'admin' ? 'none' : 'inline-block';

    const adminLink = document.getElementById('adminMenuLink');
    if (adminLink) adminLink.style.display = user.role === 'admin' ? 'inline-block' : 'none';

    const userOrdersLink = document.getElementById('userOrdersLink');
    if (userOrdersLink) userOrdersLink.style.display = user.role === 'user' ? 'inline-block' : 'none';

    trackingBtn.style.display = user.role === 'admin' ? 'none' : 'inline-block';

    // Show all Admin Tabs for Admin Role
    const adminOrdersBtn = document.getElementById('adminOrdersTabBtn');
    const adminUsersBtn = document.getElementById('adminUsersTabBtn');
    const adminAnalyticsBtn = document.getElementById('adminAnalyticsTabBtn');
    if (adminOrdersBtn) adminOrdersBtn.classList.remove('restricted');
    if (adminUsersBtn) adminUsersBtn.classList.remove('restricted');
    if (adminAnalyticsBtn) adminAnalyticsBtn.classList.remove('restricted');
  } else {
    authButtons.style.display = 'flex';
    userInfo.style.display = 'none';
    authGate.classList.remove('hidden');
    document.body.classList.add('auth-locked');
    adminBtn.style.display = 'none';

    const shopNowBtn = document.getElementById('shopNowBtn');
    if (shopNowBtn) shopNowBtn.style.display = 'inline-block';

    const adminLink = document.getElementById('adminMenuLink');
    if (adminLink) adminLink.style.display = 'none';
    trackingBtn.style.display = 'none';
    closeAllModals();
  }
  updateCartCount();
}

function logoutUser() {
  localStorage.removeItem('smk_token');
  localStorage.removeItem('smk_user');
  cart = [];
  saveCart();
  updateAuthUI();
  showToast('👋 Logged out successfully!');
}

// ==================== MODAL SYSTEM ====================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) { modal.style.display = 'none'; document.body.style.overflow = ''; }
}
function closeAllModals() {
  document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
  document.body.style.overflow = '';
}

// ==================== CART SYSTEM ====================
function saveCart() { localStorage.setItem('smk_cart', JSON.stringify(cart)); }

function addToCart(productId) {
  if (!getCurrentUser()) { showToast('⚠️ Please login to add items to cart!'); openModal('loginModal'); return; }
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image_url: product.image_url,
      size: product.size,
      qty: 1
    });
  }
  saveCart();
  updateCartCount();
  showToast(`✅ ${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart(); updateCartCount(); renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(productId); return; }
  saveCart(); updateCartCount(); renderCart();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').textContent = count;
}

function getCartTotal() { return cart.reduce((sum, item) => sum + (item.price * item.qty), 0); }

function renderCart() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p></div>';
    totalEl.textContent = '';
    checkoutBtn.style.display = 'none';
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <img src="${item.image_url}?t=${Date.now()}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80'">
        <div class="cart-item-details">
          <strong>${item.name}</strong>
          <span>₹${item.price.toLocaleString()} × ${item.qty} ${item.size ? `• ${item.size}` : ''}</span>
        </div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
  totalEl.innerHTML = `<strong>Total: ₹${getCartTotal().toLocaleString()}</strong>`;
  checkoutBtn.style.display = 'block';
}

// ==================== LOAD & RENDER DATA ====================
async function loadProducts() {
  let url = '/products';
  const query = new URLSearchParams();
  if (activeFilter !== 'all') query.append('category', activeFilter);
  if (searchTerm) query.append('search', searchTerm);

  if (query.toString()) url += `?${query.toString()}`;

  const res = await apiCall(url);
  if (res.ok) {
    products = res.data;

    // Client side sorting
    if (sortBy === "price-low") products.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") products.sort((a, b) => b.price - a.price);
    else if (sortBy === "name") products.sort((a, b) => a.name.localeCompare(b.name));

    renderProductsUI();
  } else {
    document.getElementById("productGrid").innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px;">❌ Error loading products. Server might be down.</div>';
  }
}

function renderProductsUI() {
  document.getElementById("productCount").innerText = `${products.length} products found`;
  const grid = document.getElementById("productGrid");
  if (products.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px;">🌱 No products found.</div>';
    return;
  }

  const user = getCurrentUser();
  const isAdmin = user && user.role === 'admin';
  const displayButtons = isAdmin ? 'none' : 'inline-block';

  grid.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-img"><img src="${product.image_url}?t=${Date.now()}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80'"></div>
      <div class="product-title">${product.name}</div>
      <div class="product-category">${product.category} ${product.size ? `<span style="background:#eef6ee; color:#2b5e2f; padding:2px 6px; border-radius:4px; font-weight:bold; font-size:0.75rem; margin-left:6px;"><i class="fas fa-weight-hanging"></i> ${product.size}</span>` : ''}</div>
      <div class="product-desc">${product.description.substring(0, 80)}...</div>
      <div class="price">₹${Number(product.price).toLocaleString()}</div>
      <button class="buy-btn" onclick="openProductDetail(${product.id})" style="margin-bottom:8px; display: ${displayButtons};" data-i18n="product.buy"><i class="fas fa-forward"></i> Buy Now →</button>
      <button class="feedback-btn" onclick="openFeedback(${product.id})" style="display: ${displayButtons};" data-i18n="product.feedback"><i class="fas fa-star"></i> Feedback</button>
    </div>
  `).join("");
  updateLanguage(currentLanguage);
}

function openProductDetail(id) {
  currentDetailProduct = products.find(p => p.id === id);
  if (!currentDetailProduct) return;

  document.getElementById('detailImage').src = `${currentDetailProduct.image_url}?t=${Date.now()}`;
  document.getElementById('detailName').textContent = currentDetailProduct.name;
  document.getElementById('detailPrice').textContent = `₹${Number(currentDetailProduct.price).toLocaleString()}`;
  document.getElementById('detailOldPrice').textContent = Math.round(currentDetailProduct.price * 1.22); // mock old price
  document.getElementById('detailDesc').textContent = currentDetailProduct.description;

  document.getElementById('detailAddToCartBtn').onclick = () => {
    addToCart(id);
  };

  document.getElementById('detailBuyNowBtn').onclick = () => {
    if (!getCurrentUser()) { showToast('⚠️ Please login to purchase!'); closeModal('productDetailModal'); openModal('loginModal'); return; }
    addToCart(id);
    closeModal('productDetailModal');
    processCheckout();
  };

  const user = getCurrentUser();
  const isAdmin = user && user.role === 'admin';
  document.getElementById('detailAddToCartBtn').style.display = isAdmin ? 'none' : 'flex';
  document.getElementById('detailBuyNowBtn').style.display = isAdmin ? 'none' : 'flex';

  openModal('productDetailModal');
}

function renderGallery() {
  document.getElementById('galleryGrid').innerHTML = galleryData.map(item => `
    <div class="gallery-item">
      <img class="gallery-img" src="${item.image}" alt="${item.title}" onerror="this.style.background='linear-gradient(135deg,#2b5e2f,#1e4521)'">
      <div class="gallery-overlay"><p>${item.title}</p></div>
    </div>
  `).join('');
}

// ==================== ADMIN PANEL ====================
async function renderAdminOrders() {
  const list = document.getElementById('ordersList');
  const countBadge = document.getElementById('ordersCountBadge');

  list.innerHTML = '<tr><td colspan="7" style="text-align:center;">Loading orders...</td></tr>';
  list.style.opacity = '0.6';

  // ✅ Get token from localStorage
  const token = localStorage.getItem('smk_token');

  // ✅ Debug: Check if token exists
  console.log('Token exists:', !!token);

  if (!token) {
    list.innerHTML = `<tr><td colspan="7" style="color:red;text-align:center;">
      ❌ Not authenticated. Please login again.
      <br><button onclick="logoutUser(); location.reload();" style="margin-top:10px; padding:8px 16px; background:#2b7a2b; color:white; border:none; border-radius:5px; cursor:pointer;">
        Go to Login
      </button>
    </td></tr>`;
    list.style.opacity = '1';
    if (countBadge) countBadge.textContent = '0 orders';
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Response status:', res.status);

    if (res.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('smk_token');
      localStorage.removeItem('smk_user');
      list.innerHTML = `<tr><td colspan="7" style="color:red;text-align:center;">
        ⚠️ Session expired. Please login again.
        <br><button onclick="logoutUser(); location.reload();" style="margin-top:10px; padding:8px 16px; background:#2b7a2b; color:white; border:none; border-radius:5px; cursor:pointer;">
          Login
        </button>
      </td></tr>`;
      list.style.opacity = '1';
      return;
    }

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Error response:', errorText);
      list.innerHTML = `<tr><td colspan="7" style="color:red;text-align:center;">
        ❌ Error ${res.status}: Could not load orders. Make sure you are logged in as admin.
      </td></tr>`;
      list.style.opacity = '1';
      return;
    }

    const orders = await res.json();
    console.log('Orders loaded:', orders.length);

    if (countBadge) countBadge.textContent = `${orders.length} orders`;

    if (orders.length === 0) {
      list.innerHTML = '<tr><td colspan="7" style="color:#999;text-align:center;padding:20px;">No orders yet.</td></tr>';
      list.style.opacity = '1';
      return;
    }

    list.innerHTML = orders.map(o => {
      const d = new Date(o.created_at);
      const dateStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return `
        <tr>
          <td><strong>#${o.id}</strong></td>
          <td>
            <div style="font-weight:600;">${o.customer_name}</div>
            <div style="font-size:0.8rem; color:#666;">${o.phone || ''}</div>
          </td>
          <td>
            <div style="display:flex; flex-direction:column; gap:4px; max-height:120px; overflow-y:auto;">
              ${(o.items || []).map(i => `
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                  <img src="${i.image_url}" class="mini-thumb" onerror="this.src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80'">
                  <span style="font-size:0.85rem;">${i.name} ${i.size ? `(${i.size})` : ''} <b>×${i.quantity}</b></span>
                </div>
              `).join('')}
            </div>
          </td>
          <td style="font-weight:bold;">₹${Number(o.total).toLocaleString()}</td>
          <td style="text-align:center;">
            <span class="pay-method-badge">${translateMethod(o.payment_method)}</span>
            ${o.payment_proof ? `<br><a href="${o.payment_proof}" target="_blank" style="display:inline-block; margin-top:5px; font-size:0.75rem; padding:4px 8px; background:#eef6ee; color:#2b5e2f; border:1px solid #2b5e2f; border-radius:4px; text-decoration:none;"><i class="fas fa-image"></i> View Receipt</a>` : ''}
          </td>
          <td>${dateStr}</td>
          <td>
            <select class="status-select status-${o.status.toLowerCase()}" onchange="updateOrderStatus(${o.id}, this.value)">
              <option value="Processing" ${o.status === 'Processing' ? 'selected' : ''}>${translateStatus('Processing')}</option>
              <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>${translateStatus('Shipped')}</option>
              <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>${translateStatus('Delivered')}</option>
            </select>
          </td>
          <td>
            <button class="admin-delete-btn" onclick="deleteOrder(${o.id})" title="Delete Order">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
    }).join('');
    list.style.opacity = '1';

  } catch (error) {
    console.error('Error loading orders:', error);
    list.innerHTML = `<tr><td colspan="7" style="color:red;text-align:center;">
      🌐 Network error: Cannot connect to server. Please check if backend is running at ${API_BASE}
    </td></tr>`;
    list.style.opacity = '1';
  }
}
async function updateProduct(id) {
  const priceInput = document.getElementById(`priceInput_${id}`);
  const sizeInput = document.getElementById(`sizeInput_${id}`);
  const newPrice = parseInt(priceInput.value);
  const newSize = sizeInput.value;

  if (!newPrice || newPrice < 1) { showToast('⚠️ Please enter a valid price!'); return; }

  const res = await apiCall(`/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      price: newPrice,
      size: newSize
    })
  });

  if (res.ok) {
    showToast('✅ Product updated successfully!');
    await loadProducts();
    setTimeout(renderAdminProducts, 400);
  } else {
    showToast('❌ Error: ' + res.msg);
  }
}

async function deleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  const res = await apiCall(`/products/${id}`, { method: 'DELETE' });
  if (res.ok) {
    showToast('🗑️ Product deleted!');
    loadProducts();
    setTimeout(renderAdminProducts, 500);
  } else {
    showToast('❌ ' + res.msg);
  }
}
async function renderAdminOrders() {
  const list = document.getElementById('ordersList');
  const countBadge = document.getElementById('ordersCountBadge');

  list.innerHTML = '<tr><td colspan="7" style="text-align:center;">Loading...</td></tr>';

  // ✅ IMPORTANT FIX: Get token from localStorage
  const token = localStorage.getItem('smk_token');

  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!res.ok) {
      const errorData = await res.json();
      list.innerHTML = `<tr><td colspan="7" style="color:red;text-align:center;">Error: ${errorData.message || 'Unauthorized'}</td></tr>`;
      return;
    }

    const orders = await res.json();

    if (countBadge) countBadge.textContent = `${orders.length} orders`;

    if (orders.length === 0) {
      list.innerHTML = '<tr><td colspan="7" style="color:#999;text-align:center;padding:20px;">No orders yet.</td></tr>';
      return;
    }

    list.innerHTML = orders.map(o => {
      const d = new Date(o.created_at);
      const dateStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return `
        <tr>
          <td><strong>#${o.id}</strong></td>
          <td>
            <div style="font-weight:600;">${o.customer_name}</div>
            <div style="font-size:0.8rem; color:#666;">${o.phone}</div>
          </td>
          <td>
            <div style="display:flex; flex-direction:column; gap:4px; max-height:120px; overflow-y:auto;">
              ${o.items.map(i => `
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                  <img src="${i.image_url}" class="mini-thumb" onerror="this.src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80'">
                  <span style="font-size:0.85rem;">${i.name} ${i.size ? `(${i.size})` : ''} <b>×${i.quantity}</b></span>
                </div>
              `).join('')}
            </div>
          </td>
          <td style="font-weight:bold;">₹${Number(o.total).toLocaleString()}</td>
          <td style="text-align:center;">
            <span class="pay-method-badge">${translateMethod(o.payment_method)}</span>
            ${o.payment_proof ? `<br><a href="${o.payment_proof}" target="_blank" style="display:inline-block; margin-top:5px; font-size:0.75rem; padding:4px 8px; background:#eef6ee; color:#2b5e2f; border:1px solid #2b5e2f; border-radius:4px; text-decoration:none;"><i class="fas fa-image"></i> View Receipt</a>` : ''}
          </td>
          <td>${dateStr}</td>
          <td>
            <select class="status-select status-${o.status.toLowerCase()}" onchange="updateOrderStatus(${o.id}, this.value)">
              <option value="Processing" ${o.status === 'Processing' ? 'selected' : ''}>${translateStatus('Processing')}</option>
              <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>${translateStatus('Shipped')}</option>
              <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>${translateStatus('Delivered')}</option>
            </select>
          </td>
          <td>
            <button class="admin-delete-btn" onclick="deleteOrder(${o.id})" title="Delete Order">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
    }).join('');
  } catch (error) {
    console.error('Error loading orders:', error);
    list.innerHTML = '<tr><td colspan="7" style="color:red;text-align:center;">Network error: Cannot connect to server</td></tr>';
  }
}

async function updateOrderStatus(id, status) {
  const res = await apiCall(`/orders/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status })
  });
  if (res.ok) showToast('✅ Status updated to ' + status);
  else showToast('❌ Error: ' + res.msg);
}

async function deleteOrder(id) {
  if (!confirm('Are you sure you want to delete this order? This action cannot be undone.')) return;

  const res = await apiCall(`/orders/${id}`, { method: 'DELETE' });
  if (res.ok) {
    showToast('🗑️ Order deleted successfully!');
    renderAdminOrders();
    // Also refresh analytics if open
    if (document.getElementById('adminAnalyticsTab').classList.contains('active')) {
      renderAdminAnalytics();
    }
  } else {
    showToast('❌ Error deleting order: ' + res.msg);
  }
}

async function renderAdminUsers() {
  const list = document.getElementById('usersList');
  const countBadge = document.getElementById('usersCountBadge');
  list.innerHTML = '<tr><td colspan="6" style="text-align:center;">Loading...</td></tr>';
  const res = await apiCall('/users');
  if (!res.ok) { list.innerHTML = `<tr><td colspan="6" style="color:red;text-align:center;">Error: ${res.msg}</td></tr>`; return; }

  const users = res.data;
  if (countBadge) countBadge.textContent = `${users.length} users`;

  if (users.length === 0) { list.innerHTML = '<tr><td colspan="6" style="color:#999;text-align:center;padding:20px;">No users yet.</td></tr>'; return; }

  list.innerHTML = users.map(u => {
    const badgeClass = u.role === 'admin' ? 'role-admin' : 'role-user';
    const d = new Date(u.created_at);
    const dateStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `
      <tr>
        <td><strong>#${u.id}</strong></td>
        <td><div style="font-weight:600; color:#1a2e1c;">${u.name}</div></td>
        <td>${u.email}</td>
        <td><span class="role-badge ${badgeClass}"><i class="${u.role === 'admin' ? 'fas fa-crown' : 'fas fa-user'}"></i> ${u.role}</span></td>
        <td>${dateStr}</td>
        <td>
          <button class="admin-delete-btn" onclick="deleteUser(${u.id})" title="Delete User">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// ==================== ADMIN ANALYTICS ====================
let salesChartInstance = null;
let categoryChartInstance = null;
let ordersTimeChartInstance = null;

async function deleteUser(id) {
  if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;

  const res = await apiCall(`/users/${id}`, { method: 'DELETE' });
  if (res.ok) {
    showToast('🗑️ User deleted successfully!');
    renderAdminUsers();
    // Refresh analytics if open
    if (document.getElementById('adminAnalyticsTab').classList.contains('active')) {
      renderAdminAnalytics();
    }
  } else {
    showToast('❌ Error: ' + res.msg);
  }
}

function saveShopInfo() {
  const shopName = document.getElementById('adminShopName').value;
  const ownerName = document.getElementById('adminOwnerName').value;
  const shopPhone = document.getElementById('adminShopPhone').value;
  const shopEmail = document.getElementById('adminShopEmail').value;
  const shopAddress = document.getElementById('adminShopAddress').value;

  const displayOwner = document.getElementById('displayOwner');
  const displayAddress = document.getElementById('displayAddress');
  const displayPhone = document.getElementById('displayPhone');
  const displayEmail = document.getElementById('displayEmail');

  if (displayOwner) displayOwner.textContent = ownerName;
  if (displayAddress) displayAddress.textContent = shopAddress;
  if (displayPhone) displayPhone.textContent = shopPhone;
  if (displayEmail) displayEmail.textContent = shopEmail;

  // Update top bar phone number
  const topGuidance = document.querySelector('.top-bar-content span:last-child');
  if (topGuidance) {
    topGuidance.innerHTML = `<i class=\"fas fa-phone-alt\"></i> <span data-i18n="top.guidance">Expert Guidance: ${shopPhone}</span>`;
  }

  showToast('✅ Shop information updated successfully!');
}

async function renderAdminAnalytics() {
  const [ordersRes, usersRes] = await Promise.all([
    apiCall('/orders'),
    apiCall('/users')
  ]);

  if (!ordersRes.ok || !usersRes.ok) return;
  const orders = ordersRes.data;
  const users = usersRes.data;

  // 1. KPI Calculations
  const totalRevenue = orders.reduce((sum, o) => sum + Number(o.total), 0);
  const totalOrders = orders.length;
  const totalUsers = users.length;
  const totalProducts = products.length; // From global state

  document.getElementById('kpiRevenue').textContent = `₹${totalRevenue.toLocaleString()}`;
  document.getElementById('kpiOrders').textContent = totalOrders;
  document.getElementById('kpiUsers').textContent = totalUsers;
  document.getElementById('kpiProducts').textContent = totalProducts;

  // 2. Compute Analytics Data
  const productSalesMap = {};
  const categorySalesMap = {};
  const ordersByDateMap = {};

  orders.forEach(order => {
    // Orders over time
    const dateStr = new Date(order.created_at).toLocaleDateString();
    ordersByDateMap[dateStr] = (ordersByDateMap[dateStr] || 0) + 1;

    // Product and Category sales
    order.items.forEach(item => {
      productSalesMap[item.name] = (productSalesMap[item.name] || 0) + item.quantity;

      // Determine category (fallback if missing)
      const prod = products.find(p => p.id === item.product_id || p.name === item.name);
      const cat = prod ? prod.category : 'Other';
      categorySalesMap[cat] = (categorySalesMap[cat] || 0) + (item.quantity * Number(item.price));
    });
  });

  // Reusable Chart Destroy
  if (salesChartInstance) salesChartInstance.destroy();
  if (categoryChartInstance) categoryChartInstance.destroy();
  if (ordersTimeChartInstance) ordersTimeChartInstance.destroy();

  // Chart 1: Top Selling Products (Bar)
  const topProducts = Object.entries(productSalesMap).sort((a, b) => b[1] - a[1]).slice(0, 7);
  salesChartInstance = new Chart(document.getElementById('salesChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: topProducts.map(i => i[0]),
      datasets: [{
        label: 'Units Sold',
        data: topProducts.map(i => i[1]),
        backgroundColor: '#2b7a2b',
        borderRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
    }
  });

  // Chart 2: Revenue by Category (Doughnut)
  // Use professional color palette
  const catColors = ['#2b7a2b', '#e68a2e', '#007bff', '#6f42c1', '#17a2b8', '#dc3545'];
  categoryChartInstance = new Chart(document.getElementById('categoryChart').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: Object.keys(categorySalesMap),
      datasets: [{
        data: Object.values(categorySalesMap),
        backgroundColor: catColors,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'right' }
      }
    }
  });

  // Chart 3: Orders over time (Line)
  ordersTimeChartInstance = new Chart(document.getElementById('ordersTimeChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: Object.keys(ordersByDateMap),
      datasets: [{
        label: 'Number of Orders',
        data: Object.values(ordersByDateMap),
        borderColor: '#e68a2e',
        backgroundColor: 'rgba(230, 138, 46, 0.2)',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
    }
  });
}

// ==================== ADMIN UPI SCANNERS ====================
async function renderAdminUPIs() {
  const list = document.getElementById('adminUPIList');
  if (!list) return;
  list.innerHTML = '<p style="text-align:center; color:#999; padding:20px;">Loading UPI Scanners...</p>';
  const res = await apiCall('/upi');
  if (!res.ok) { list.innerHTML = `<p style="color:red; text-align:center;">Error: ${res.msg}</p>`; return; }

  const upis = res.data;
  if (upis.length === 0) { list.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">No UPI Scanners found. Add one above.</p>'; return; }

  list.innerHTML = upis.map(u => `
    <div class="admin-upi-card" style="border: 1px solid #eee; border-radius: 8px; padding: 15px; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between;">
      <div style="display: flex; align-items: center; gap: 15px;">
        <img src="${u.image_url}" alt="${u.name}" style="width: 50px; height: 50px; object-fit: contain; border: 1px solid #ddd; border-radius: 4px;" onerror="this.src='https://via.placeholder.com/50'">
        <div>
          <div style="font-weight: bold; color: #333;">${u.name}</div>
          <div style="font-size: 0.85rem; color: #666;">ID: ${u.upi_id}</div>
        </div>
      </div>
      <button class="delete-btn" onclick="deleteUPIScanner(${u.id})" style="background: transparent; color: #dc3545; border: 1px solid #dc3545; padding: 5px 10px; border-radius: 4px; cursor: pointer;"><i class="fas fa-trash"></i> Delete</button>
    </div>
  `).join('');
}

async function deleteUPIScanner(id) {
  if (!confirm('Are you sure you want to delete this UPI scanner?')) return;
  const res = await apiCall('/upi/' + id, { method: 'DELETE' });
  if (res.ok) {
    showToast('🗑️ UPI Scanner deleted!');
    renderAdminUPIs();
  } else {
    showToast('❌ Error: ' + res.msg);
  }
}

// ==================== USER DASHBOARD ====================
async function renderUserDashboard() {
  const user = getCurrentUser();
  if (!user) return;

  const nameEl = document.getElementById('userDashName');
  if (nameEl) nameEl.textContent = user.name;

  const listEl = document.getElementById('dashRecentOrdersList');
  if (!listEl) return;

  listEl.innerHTML = '<p style="text-align:center; padding:20px;">Loading your activity...</p>';

  const res = await apiCall('/orders');
  if (!res.ok) {
    listEl.innerHTML = '<p style="text-align:center; color:red; padding:20px;">Could not load recent activity.</p>';
    return;
  }

  const orders = res.data.slice(0, 3);

  if (orders.length === 0) {
    listEl.innerHTML = '<p style="text-align:center; color:#999; padding:20px;">No recent orders found. Start your journey today!</p>';
    return;
  }

  listEl.innerHTML = orders.map(o => `
    <div class="order-item" style="margin-bottom:8px; border-left:4px solid ${o.status === 'Delivered' ? '#2b7a2b' : '#e68a2e'};">
      <div style="flex:1;">
        <div style="font-weight:600; font-size:0.85rem;">Order #${o.id}</div>
        <div style="font-size:0.75rem; color:#666;">${new Date(o.created_at).toLocaleDateString()} • ₹${Number(o.total).toLocaleString()}</div>
      </div>
      <div style="text-align:right;">
        <span class="status-badge status-${o.status}" style="font-size:0.7rem; padding:2px 8px;">${translateStatus(o.status)}</span>
      </div>
    </div>
  `).join('');
}

// ==================== USER TRACKING ====================
async function renderUserOrders() {
  const list = document.getElementById('userOrdersList');
  list.innerHTML = 'Loading...';
  const res = await apiCall('/orders');
  if (!res.ok) { list.innerHTML = `<p style="color:red;">Error: ${res.msg}</p>`; return; }

  const orders = res.data;
  if (orders.length === 0) { list.innerHTML = '<p style="color:#999;padding:20px;">You have no orders yet.</p>'; return; }

  list.innerHTML = orders.map(o => `
    <div class="order-item">
      <div style="flex:1;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
          <strong>Order #${o.id} — ₹${Number(o.total).toLocaleString()}</strong>
          <span class="status-badge status-${o.status}">${translateStatus(o.status)}</span>
        </div>
        <div class="order-items-detail">
          ${o.items.map(i => `
            <div class="order-item-row">
              <img src="${i.image_url}" class="order-thumb" onerror="this.src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80'">
              <div>
                <div style="font-weight:600; font-size:0.9rem;">${i.name}</div>
                <div style="font-size:0.8rem; color:#666;">${i.quantity} × ₹${Number(i.price).toLocaleString()} ${i.size ? `• ${i.size}` : ''}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div style="text-align:right;">
        <small>Date: ${new Date(o.created_at).toLocaleDateString()}</small><br>
        <small style="color:#e68a2e;">Est. Delivery: ${o.estimated_days} Days</small>
      </div>
    </div>
  `).join('');
}

// ==================== TOAST ====================
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ==================== CHECKOUT ====================
function processCheckout() {
  closeModal('cartModal');
  const user = getCurrentUser();
  const form = document.getElementById('checkoutForm');
  if (user) {
    document.getElementById('checkoutName').value = user.name;
  }
  document.getElementById('checkoutSummary').innerHTML = `
    <div class="checkout-items">${cart.map(i => `
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <img src="${i.image_url}" class="mini-thumb" onerror="this.src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80'">
        <div>
          <div style="font-weight:600;">${i.name}</div>
          <div style="font-size:0.8rem; color:#666;">${i.qty} × ₹${i.price.toLocaleString()} ${i.size ? `• ${i.size}` : ''}</div>
        </div>
        <div style="margin-left:auto; font-weight:700;">₹${(i.price * i.qty).toLocaleString()}</div>
      </div>
    `).join('')}</div>
    <div class="checkout-total"><strong>Total: ₹${getCartTotal().toLocaleString()}</strong></div>
  `;
  openModal('checkoutModal');
}

async function placeOrder(name, phone, phoneAlt, district, city, address, pincode, payment, paymentProofB64 = null) {
  const fullAddress = `${address}, ${city}, ${district}`;
  const payload = {
    customer_name: name,
    phone, phoneAlt, address: fullAddress, pincode, payment_method: payment,
    payment_proof_b64: paymentProofB64,
    cart_items: cart,
    total: getCartTotal()
  };

  const res = await apiCall('/orders', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    cart = [];
    saveCart();
    updateCartCount();
    closeModal('checkoutModal');
    document.getElementById('orderIdDisplay').textContent = 'Order ID: #' + res.data.orderId;
    document.getElementById('estimatedDeliveryMsg').textContent = `🚚 Estimated Delivery time: ${res.data.estimated_days} Days`;
    openModal('orderSuccessModal');
  } else {
    showToast('❌ Checkout Error: ' + res.msg);
  }
}

// ==================== FEEDBACK ====================
function openFeedback(productId) {
  if (!getCurrentUser()) { showToast('⚠️ Please login first!'); openModal('loginModal'); return; }
  document.getElementById('feedbackTargetId').value = productId;
  document.getElementById('feedbackForm').reset();
  document.querySelectorAll('#ratingStars i').forEach(star => star.classList.add('active'));
  document.getElementById('feedbackRating').value = 5;
  openModal('feedbackModal');
}

// ==================== DASHBOARD OPENERS ====================
async function openAdminDashboard() {
  if (products.length === 0) await loadProducts();
  renderAdminProducts(); renderAdminOrders(); renderAdminUsers(); renderAdminAnalytics(); renderAdminUPIs(); openModal('adminPanel');
}

function openUserDashboard() {
  renderUserDashboard(); openModal('userPanel');
}

// ==================== ABOUT IMAGE SLIDER ====================
let aboutCurrentSlide = 0;
let aboutAutoPlayTimer = null;

const aboutSlides = [
  {
    src: 'images/about/award_ceremony.jpg',
    caption: 'Highest Sell Award 2025-26 – Felicitation Ceremony'
  },
  {
    src: 'images/about/award_trophy.jpg',
    caption: '🏆 Highest Sell Trophy 2025-26 – Mangalmurti Krushi Seva Kendra, Bahe'
  }
];

function changeAboutSlide(index) {
  if (index === aboutCurrentSlide) return;

  const mainImg = document.getElementById('aboutSliderMainImg');
  const captionEl = document.getElementById('aboutSliderCaption');
  const thumbItems = document.querySelectorAll('.about-thumb-item');
  const dots = document.querySelectorAll('.about-dot');

  const direction = index > aboutCurrentSlide ? 'slide-in-right' : 'slide-in-left';
  aboutCurrentSlide = index;

  const slide = aboutSlides[index];

  // Remove old animation classes then set new src
  mainImg.classList.remove('slide-in-left', 'slide-in-right');
  // Force reflow so the animation re-triggers
  void mainImg.offsetWidth;

  mainImg.src = slide.src;
  mainImg.onerror = null;
  mainImg.classList.add(direction);
  captionEl.textContent = slide.caption;

  // Update active thumbnail
  thumbItems.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });

  // Update active dot
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });

  // Reset auto-play timer
  resetAboutAutoPlay();
}

function resetAboutAutoPlay() {
  clearInterval(aboutAutoPlayTimer);
  aboutAutoPlayTimer = setInterval(() => {
    const next = (aboutCurrentSlide + 1) % aboutSlides.length;
    changeAboutSlide(next);
  }, 4000);
}

function initAboutSlider() {
  // Start auto-play
  resetAboutAutoPlay();

  // Pause auto-play on hover
  const sliderCard = document.querySelector('.about-slider-card');
  if (sliderCard) {
    sliderCard.addEventListener('mouseenter', () => clearInterval(aboutAutoPlayTimer));
    sliderCard.addEventListener('mouseleave', () => resetAboutAutoPlay());
  }
}

// ==================== INIT ====================
function init() {
  updateAuthUI();
  loadProducts();
  renderGallery();
  initAboutSlider();

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const rightControls = document.getElementById('rightControls');
  if (mobileMenuBtn && navLinks && rightControls) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      rightControls.classList.toggle('show');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 991) {
          navLinks.classList.remove('show');
          rightControls.classList.remove('show');
        }
      });
    });
  }

  // Auth gate buttons
  document.getElementById('gateLoginBtn').addEventListener('click', () => openModal('loginModal'));
  document.getElementById('gateRegisterBtn').addEventListener('click', () => openModal('registerModal'));
  document.getElementById('gateSkipBtn').addEventListener('click', () => {
    document.getElementById('authGate').classList.add('hidden');
    document.body.classList.remove('auth-locked');
  });

  // Header auth buttons
  document.getElementById('loginBtn').addEventListener('click', () => openModal('loginModal'));
  document.getElementById('registerBtn').addEventListener('click', () => openModal('registerModal'));
  document.getElementById('logoutBtn').addEventListener('click', logoutUser);

  document.getElementById('trackingBtn').addEventListener('click', () => {
    renderUserOrders(); openModal('trackingModal');
  });

  document.getElementById('adminPanelBtn').addEventListener('click', openAdminDashboard);
  const userDashBtn = document.getElementById('userDashboardBtn');
  if (userDashBtn) userDashBtn.addEventListener('click', openUserDashboard);
  const adminLinkEl = document.getElementById('adminMenuLink');
  if (adminLinkEl) adminLinkEl.addEventListener('click', (e) => { e.preventDefault(); openAdminDashboard(); });

  const userOrdersLink = document.getElementById('userOrdersLink');
  if (userOrdersLink) {
    userOrdersLink.addEventListener('click', (e) => {
      e.preventDefault();
      renderUserOrders();
      openModal('trackingModal');
    });
  }

  // User Dashboard Handlers
  document.getElementById('dashViewOrders').addEventListener('click', () => {
    closeModal('userPanel'); renderUserOrders(); openModal('trackingModal');
  });
  document.getElementById('dashSeeAllOrders').addEventListener('click', () => {
    closeModal('userPanel'); renderUserOrders(); openModal('trackingModal');
  });
  document.getElementById('dashStartShopping').addEventListener('click', () => {
    closeModal('userPanel');
    const productsSec = document.getElementById('products');
    if (productsSec) productsSec.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('dashGetGuidance').addEventListener('click', () => {
    closeModal('userPanel');
    const aboutSec = document.getElementById('about');
    if (aboutSec) aboutSec.scrollIntoView({ behavior: 'smooth' });
    showToast('🌿 Expert crop guidance available!');
  });
  document.getElementById('dashLogoutBtn').addEventListener('click', logoutUser);

  // Switch login <-> register
  document.getElementById('switchToRegister').addEventListener('click', (e) => { e.preventDefault(); closeModal('loginModal'); openModal('registerModal'); });
  document.getElementById('switchToLogin').addEventListener('click', (e) => { e.preventDefault(); closeModal('registerModal'); openModal('loginModal'); });

  // Forgot password
  document.getElementById('showForgotPassword').addEventListener('click', (e) => {
    e.preventDefault(); closeModal('loginModal'); openModal('forgotPasswordModal');
  });
  document.getElementById('backToLoginFromForgot').addEventListener('click', (e) => {
    e.preventDefault(); closeModal('forgotPasswordModal'); openModal('loginModal');
  });

  // Close modals
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.getAttribute('data-modal')));
  });
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal.id); });
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAllModals(); });

  // Login form
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const errEl = document.getElementById('loginError');
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;

    const res = await apiCall('/auth/login', {
      method: 'POST', body: JSON.stringify({ email, password: pass })
    });

    if (res.ok) {
      errEl.style.display = 'none';
      localStorage.setItem('smk_token', res.data.token);
      localStorage.setItem('smk_user', JSON.stringify(res.data.user));
      closeModal('loginModal');
      updateAuthUI();
      // Auto-open dashboard on login
      if (res.data.user.role === 'admin') openAdminDashboard();
      else openUserDashboard();

      showToast('🎉 Welcome back, ' + res.data.user.name + '!');
      document.getElementById('loginForm').reset();
    } else {
      errEl.textContent = res.msg; errEl.style.display = 'block';
    }
  });

  // Register form
  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const errEl = document.getElementById('registerError');
    const successEl = document.getElementById('registerSuccess');
    const payload = {
      name: document.getElementById('regName').value,
      email: document.getElementById('regEmail').value,
      password: document.getElementById('regPassword').value,
      role: document.getElementById('regRole').value
    };

    const res = await apiCall('/auth/register', { method: 'POST', body: JSON.stringify(payload) });

    if (res.ok) {
      errEl.style.display = 'none';
      successEl.textContent = res.data.message; successEl.style.display = 'block';
      document.getElementById('registerForm').reset();
      setTimeout(() => { successEl.style.display = 'none'; closeModal('registerModal'); openModal('loginModal'); }, 1500);
    } else {
      successEl.style.display = 'none';
      errEl.textContent = res.msg; errEl.style.display = 'block';
    }
  });

  // Forgot Password Form Add
  document.getElementById('forgotPasswordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const errEl = document.getElementById('forgotError');
    const successEl = document.getElementById('forgotSuccess');
    const email = document.getElementById('forgotEmail').value;

    errEl.style.display = 'none'; successEl.style.display = 'none';
    showToast('⏳ Sending OTP to your email...');

    const res = await apiCall('/auth/forgot-password', {
      method: 'POST', body: JSON.stringify({ email })
    });

    if (res.ok) {
      successEl.textContent = res.data.message; successEl.style.display = 'block';
      setTimeout(() => {
        document.getElementById('resetEmailHidden').value = email;
        closeModal('forgotPasswordModal');
        openModal('resetPasswordModal');
        document.getElementById('forgotPasswordForm').reset();
        successEl.style.display = 'none';
      }, 1500);
    } else {
      errEl.textContent = res.msg; errEl.style.display = 'block';
    }
  });

  // Reset Password Form
  document.getElementById('resetPasswordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const errEl = document.getElementById('resetError');
    const successEl = document.getElementById('resetSuccess');

    const email = document.getElementById('resetEmailHidden').value;
    const otp = document.getElementById('resetOtp').value;
    const newPassword = document.getElementById('resetNewPassword').value;

    errEl.style.display = 'none'; successEl.style.display = 'none';

    const res = await apiCall('/auth/reset-password', {
      method: 'POST', body: JSON.stringify({ email, otp, newPassword })
    });

    if (res.ok) {
      successEl.textContent = res.data.message; successEl.style.display = 'block';
      setTimeout(() => {
        closeModal('resetPasswordModal');
        openModal('loginModal');
        document.getElementById('resetPasswordForm').reset();
        successEl.style.display = 'none';
      }, 2000);
    } else {
      errEl.textContent = res.msg; errEl.style.display = 'block';
    }
  });

  // Cart button
  document.getElementById('shopNowBtn').addEventListener('click', () => {
    if (!getCurrentUser()) { showToast('⚠️ Please login first!'); openModal('loginModal'); return; }
    renderCart(); openModal('cartModal');
  });

  // Checkout
  document.getElementById('checkoutBtn').addEventListener('click', processCheckout);

  // Payment Method change -> show UPI section
  document.getElementById('paymentMethod').addEventListener('change', async (e) => {
    const upiSection = document.getElementById('upiPaymentSection');
    const screenshotInput = document.getElementById('upiScreenshot');
    const warningEl = document.getElementById('upiWarning');
    const amountInput = document.getElementById('upiAmountPaid');

    if (warningEl) warningEl.style.display = 'none';
    if (amountInput) amountInput.value = '';

    if (e.target.value === 'upi') {
      upiSection.style.display = 'block';
      screenshotInput.required = true;
      const display = document.getElementById('checkoutUpiDisplay');
      const amountDisplay = document.getElementById('upiPayableAmount');

      const total = getCartTotal();
      if (amountDisplay) amountDisplay.textContent = `₹${total.toLocaleString()}`;

      display.innerHTML = 'Loading UPI Scanner...';
      const res = await apiCall('/upi');
      if (res.ok && res.data.length > 0) {
        const topScanner = res.data[0];
        // Generate a dynamic UPI QR code if possible, otherwise use the uploaded one
        // upi://pay?pa=UPI_ID&pn=NAME&am=AMOUNT&cu=INR
        const upiUri = `upi://pay?pa=${topScanner.upi_id}&pn=${encodeURIComponent(topScanner.name)}&am=${total}&cu=INR`;
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUri)}`;

        display.innerHTML = `
          <div style="margin-bottom:10px;">
            <img src="${qrUrl}" style="max-width:180px; border:4px solid white; box-shadow:0 4px 15px rgba(0,0,0,0.1); border-radius:12px;">
            <p style="font-size:0.8rem; color:#666; margin-top:5px;">Scan to pay exactly ₹${total.toLocaleString()}</p>
          </div>
          <div style="border-top:1px solid #eee; padding-top:10px; margin-top:10px;">
            <small style="color:#888;">Alternative Scanner:</small><br>
            <img src="${topScanner.image_url}" style="max-width:120px; border-radius:8px; border:1px solid #eee; margin-top:5px;"><br>
            <strong>${topScanner.name}</strong><br>
            <small style="color:#666;">${topScanner.upi_id}</small>
          </div>
        `;
      } else {
        display.innerHTML = '<span style="color:#e68a2e;">No UPI Scanner available. Please try another method.</span>';
      }
    } else {
      upiSection.style.display = 'none';
      screenshotInput.required = false;
    }
  });

  document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('checkoutName').value;
    const phone = document.getElementById('checkoutPhone').value;
    const phoneAlt = document.getElementById('checkoutPhoneAlt').value;
    const district = document.getElementById('checkoutDistrict').value;
    const city = document.getElementById('checkoutCity').value;
    const address = document.getElementById('checkoutAddress').value;
    const pincode = document.getElementById('checkoutPincode').value;
    const payment = document.getElementById('paymentMethod').value;

    if (payment === 'upi') {
      const amountPaid = parseFloat(document.getElementById('upiAmountPaid').value);
      const total = getCartTotal();
      const warningEl = document.getElementById('upiWarning');

      if (isNaN(amountPaid) || amountPaid !== total) {
        warningEl.textContent = `⚠️ Amount mismatch! You must pay exactly ₹${total.toLocaleString()}. Please enter the correct amount paid.`;
        warningEl.style.display = 'block';
        showToast("⚠️ Payment amount mismatch!");
        return;
      }
      warningEl.style.display = 'none';

      const fileInput = document.getElementById('upiScreenshot');
      if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          placeOrder(name, phone, phoneAlt, district, city, address, pincode, payment, ev.target.result);
        };
        reader.readAsDataURL(fileInput.files[0]);
      } else {
        showToast("⚠️ Screenshot is required for UPI Payment!");
      }
    } else {
      placeOrder(name, phone, phoneAlt, district, city, address, pincode, payment, null);
    }
  });

  // Feedback form
  const stars = document.querySelectorAll('#ratingStars i');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const val = parseInt(star.getAttribute('data-value'));
      document.getElementById('feedbackRating').value = val;
      stars.forEach(s => {
        if (parseInt(s.getAttribute('data-value')) <= val) s.classList.add('active');
        else s.classList.remove('active');
      });
    });
  });

  document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      target_id: document.getElementById('feedbackTargetId').value,
      type: document.getElementById('feedbackType').value,
      rating: document.getElementById('feedbackRating').value,
      comment: document.getElementById('feedbackComment').value
    };
    const res = await apiCall('/feedback', { method: 'POST', body: JSON.stringify(payload) });
    if (res.ok) {
      showToast('⭐ Thank you for your feedback!');
      closeModal('feedbackModal');
    } else {
      showToast('❌ Error: ' + res.msg);
    }
  });

  // Admin tabs
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('admin' + tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1) + 'Tab').classList.add('active');
    });
  });

  // Add product form (admin)
  document.getElementById('addProductForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('prodName').value;
    const description = document.getElementById('prodDesc').value;
    const price = parseInt(document.getElementById('prodPrice').value);
    const size = document.getElementById('prodSize') ? document.getElementById('prodSize').value : '';
    const category = document.getElementById('prodCategory').value;
    const imageUrl = document.getElementById('prodImage').value;
    const fileInput = document.getElementById('prodImageFile');

    const submitProduct = async (img) => {
      const payload = {
        name, description, price, category, size,
        image_url: img
      };

      const res = await apiCall('/products', { method: 'POST', body: JSON.stringify(payload) });
      if (res.ok) {
        document.getElementById('addProductForm').reset();
        showToast('✅ Product added!');
        loadProducts();
        setTimeout(renderAdminProducts, 500);
      } else {
        showToast('❌ Error: ' + res.msg);
      }
    };

    if (fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (ev) => submitProduct(ev.target.result);
      reader.readAsDataURL(fileInput.files[0]);
    } else {
      submitProduct(imageUrl);
    }
  });

  // Add UPI Scanner form (admin)
  const addUPIForm = document.getElementById('addUPIForm');
  if (addUPIForm) {
    addUPIForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('upiName').value;
      const upi_id = document.getElementById('upiID').value;
      const imageUrl = document.getElementById('upiImage').value;
      const fileInput = document.getElementById('upiImageFile');

      let finalImageUrl = imageUrl;

      const submitScanner = async (img) => {
        const payload = { name, upi_id, image_url: img };
        const res = await apiCall('/upi', { method: 'POST', body: JSON.stringify(payload) });
        if (res.ok) {
          addUPIForm.reset();
          showToast('✅ UPI Scanner added!');
          renderAdminUPIs();
        } else {
          showToast('❌ Error: ' + res.msg);
        }
      };

      if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (ev) => submitScanner(ev.target.result);
        reader.readAsDataURL(fileInput.files[0]);
      } else if (imageUrl) {
        submitScanner(imageUrl);
      } else {
        showToast('⚠️ Please provide an Image URL or upload a Photo!');
      }
    });
  }

  // Search
  let searchTimeout;
  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchTerm = e.target.value;
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(loadProducts, 300); // debounce API call
  });

  document.getElementById('clearSearch').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    searchTerm = '';
    loadProducts();
  });

  // Filters
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', function () {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      activeFilter = this.getAttribute('data-filter');
      loadProducts();
    });
  });

  // Sort
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    sortBy = e.target.value;
    loadProducts(); // Call loadProducts to apply the new sort
  });

  // Language
  document.getElementById('languageSelect').addEventListener('change', (e) => {
    updateLanguage(e.target.value);
    showToast('🌐 Language changed!');
  });

  // Crop guidance
  document.getElementById('cropGuidanceBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showToast('🌿 Expert crop guidance available! Call +91 98765 43210');
  });

  // Smooth scroll nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Active nav on scroll
  window.addEventListener('scroll', () => {
    const sections = ['home', 'products', 'about', 'services', 'fertilizer-impact', 'gallery', 'contact'];
    let current = '';
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section && window.scrollY >= section.offsetTop - 150) current = id;
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });

  // Animation Observer
  const observerOptions = { threshold: 0.2 };
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.anim-fade-up, .fertilizer-impact-section').forEach(el => {
    animObserver.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', init);