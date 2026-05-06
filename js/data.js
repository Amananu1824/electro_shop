// ====== PRODUCTS DATA ======
const products = [
  {id:1, emoji:'📱', name:'Samsung Galaxy A55 5G', price:32999, oldPrice:38000, category:'Mobile', tag:'Best Seller', desc:'Samsung Galaxy A55 5G ek premium mid-range smartphone hai jisme 50MP triple camera, 5000mAh battery, aur blazing fast 5G connectivity milti hai. Display super AMOLED hai aur gaming ke liye perfect hai.', specs:[{l:'Display',v:'6.6" Super AMOLED'},{l:'Processor',v:'Exynos 1480'},{l:'RAM',v:'8GB'},{l:'Storage',v:'128GB / 256GB'},{l:'Battery',v:'5000mAh'},{l:'Camera',v:'50MP Triple'}]},

  {id:2, emoji:'💻', name:'HP Laptop 15s – Core i5', price:52999, oldPrice:62000, category:'Laptop', tag:'Popular', desc:'HP 15s ek reliable aur powerful laptop hai daily use, office work aur light gaming ke liye. Intel Core i5 12th Gen processor ke saath yeh fast aur smooth performance deta hai.', specs:[{l:'Processor',v:'Intel Core i5-12th Gen'},{l:'RAM',v:'8GB DDR4'},{l:'Storage',v:'512GB SSD'},{l:'Display',v:'15.6" FHD IPS'},{l:'Battery',v:'41Wh'},{l:'OS',v:'Windows 11'}]},

  {id:3, emoji:'🎧', name:'boAt Rockerz 550 Pro', price:2499, oldPrice:3999, category:'Audio', tag:'Hot Deal', desc:'boAt Rockerz 550 Pro ek premium wireless headphone hai jisme 70H playtime, Active Noise Cancellation aur booming bass milta hai. Travel ke liye best choice!', specs:[{l:'Type',v:'Over-Ear Wireless'},{l:'Battery',v:'70 hours'},{l:'Driver',v:'40mm'},{l:'Connectivity',v:'Bluetooth 5.3'},{l:'ANC',v:'Active Noise Cancel'},{l:'Weight',v:'270g'}]},

  {id:4, emoji:'⌚', name:'Noise Pulse 4 Smartwatch', price:3499, oldPrice:4999, category:'Wearable', tag:'New', desc:'Noise Pulse 4 ek feature-packed smartwatch hai jisme AMOLED display, SpO2 monitor, 100+ sports modes aur 7-day battery life hai. Fitness ke liye perfect!', specs:[{l:'Display',v:'1.96" AMOLED'},{l:'Battery',v:'7 days'},{l:'Health',v:'SpO2, Heart Rate'},{l:'Sports Modes',v:'100+'},{l:'Water Resist',v:'IP67'},{l:'Connectivity',v:'Bluetooth 5.3'}]},

  {id:5, emoji:'📱', name:'Redmi Note 13 Pro+', price:29999, oldPrice:33000, category:'Mobile', tag:'5G', desc:'Redmi Note 13 Pro+ mein 200MP ka mind-blowing camera milta hai. MediaTek Dimensity 7200 Ultra processor ke saath yeh gaming aur photography dono mein top class hai.', specs:[{l:'Display',v:'6.67" AMOLED 120Hz'},{l:'Processor',v:'Dimensity 7200 Ultra'},{l:'Camera',v:'200MP Triple'},{l:'Battery',v:'5000mAh 67W'},{l:'RAM',v:'12GB'},{l:'Storage',v:'256GB'}]},

  {id:6, emoji:'🎮', name:'Sony WH-1000XM5', price:24999, oldPrice:34990, category:'Audio', tag:'Premium', desc:'Sony WH-1000XM5 duniya ke best ANC headphones mein se ek hai. Industry-leading noise cancellation aur 30-hour battery ke saath yeh professionals ka first choice hai.', specs:[{l:'Type',v:'Over-Ear Wireless'},{l:'ANC',v:'Industry Leading'},{l:'Battery',v:'30 hours'},{l:'Driver',v:'30mm'},{l:'Connectivity',v:'Bluetooth 5.2'},{l:'Weight',v:'250g'}]},

  {id:7, emoji:'💻', name:'Lenovo IdeaPad Slim 3', price:44999, oldPrice:52000, category:'Laptop', tag:'Budget', desc:'Lenovo IdeaPad Slim 3 budget-friendly laptop hai students aur first-time buyers ke liye. AMD Ryzen 5 processor ke saath fast performance aur long battery life milti hai.', specs:[{l:'Processor',v:'AMD Ryzen 5 7520U'},{l:'RAM',v:'8GB LPDDR5'},{l:'Storage',v:'512GB SSD'},{l:'Display',v:'15.6" FHD'},{l:'Battery',v:'47Wh'},{l:'OS',v:'Windows 11 Home'}]},
  
  {id:8, emoji:'📱', name:'iPhone 15 (128GB)', price:79900, oldPrice:89900, category:'Mobile', tag:'Apple', desc:'iPhone 15 Apple ka latest smartphone hai A16 Bionic chip ke saath. Dynamic Island, 48MP camera system aur USB-C connectivity ke saath yeh premium experience deta hai.', specs:[{l:'Chip',v:'A16 Bionic'},{l:'Display',v:'6.1" Super Retina XDR'},{l:'Camera',v:'48MP Main'},{l:'Storage',v:'128GB'},{l:'Battery',v:'3279mAh'},{l:'Connectivity',v:'5G + USB-C'}]},
];

// ====== CONFIG ======
const WHATSAPP_NUMBER = '6397384741'; // 👈 Apna number yahan dalo

// ====== SHARED STATE ======
let previousPage = 'products';