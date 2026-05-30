'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MarketingImageSections from '@/components/marketing-image-sections';


const categories = ['All Products', 'Tailoring', 'Handicrafts', 'Embroidery', 'Wellness'];

const allProducts = [
  {
    id: 1,
    name: 'Embroidered Cushion Cover',
    category: 'Handicrafts',
    price: '₹499',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop',
    description: 'Beautiful hand-embroidered cushion cover with traditional designs',
    details: 'Handmade embroidered cushion cover - 16x16 inches, traditional patterns, premium fabric'
  },
  {
    id: 2,
    name: 'Hand-Stitched Tote Bag',
    category: 'Tailoring',
    price: '₹699',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
    description: 'Durable canvas tote bag with hand-stitched designs',
    details: 'Hand-stitched premium canvas tote bag - spacious design, beautiful embroidery accents'
  },
  {
    id: 3,
    name: 'Pink Silk Dupatta',
    category: 'Tailoring',
    price: '₹899',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=400&fit=crop',
    description: 'Traditional silk dupatta with embroidered borders',
    details: 'Pure silk dupatta - hand-embroidered borders, traditional patterns, 2.5 meters'
  },
  {
    id: 4,
    name: 'Quilted Bed Spread',
    category: 'Handicrafts',
    price: '₹1,299',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
    description: 'Handmade quilted bedspread with traditional prints',
    details: 'Hand-quilted bedspread - floral prints, 90x100 inches, premium cotton'
  },
  {
    id: 5,
    name: 'Embroidered Blouse',
    category: 'Embroidery',
    price: '₹799',
    image: 'https://images.unsplash.com/photo-1595568022181-92d282ce6134?w=400&h=400&fit=crop',
    description: 'Traditional embroidered blouse with mirror work',
    details: 'Handmade embroidered blouse - mirror work, traditional designs, customizable sizes'
  },
  {
    id: 6,
    name: 'Decorative Wall Hanging',
    category: 'Handicrafts',
    price: '₹599',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=400&fit=crop',
    description: 'Beautiful macramé and embroidered wall hanging',
    details: 'Hand-crafted wall hanging - macramé with beads, 24x30 inches, ready to hang'
  },
  {
    id: 7,
    name: 'Eco-Friendly Menstrual Pads',
    category: 'Wellness',
    price: '₹399',
    image: 'https://images.unsplash.com/photo-1631217174694-f8a9f2ee0c87?w=400&h=400&fit=crop',
    description: 'Sustainable organic menstrual hygiene products',
    details: 'Eco-friendly reusable pads - organic cotton, set of 5, washable and durable'
  },
  {
    id: 8,
    name: 'Hand-Woven Table Runner',
    category: 'Handicrafts',
    price: '₹649',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=400&fit=crop',
    description: 'Elegant hand-woven table runner with traditional patterns',
    details: 'Premium hand-woven table runner - 60x14 inches, traditional Indian designs'
  },
  {
    id: 9,
    name: 'Embroidered Mirror Work Shawl',
    category: 'Embroidery',
    price: '₹1,099',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=400&fit=crop',
    description: 'Beautiful shawl with intricate mirror embroidery work',
    details: 'Hand-embroidered shawl - mirror work, premium fabric, traditional craftsmanship'
  },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts = selectedCategory === 'All Products'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#F7EBE0]">
      <Header />

      {/* Hero Section */}
      <section className="w-full relative bg-gradient-to-r from-[#6A2A43] to-[#C53357] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shop Our Products</h1>
          <p className="text-xl text-white/90 max-w-2xl">Handmade products created by women artisans. Every purchase supports economic empowerment.</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#6A2A43] mb-6">Filter by Category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    selectedCategory === category
                      ? 'bg-[#C53357] text-white'
                      : 'bg-[#F7EBE0] text-[#6A2A43] hover:bg-[#D2BEB5]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const whatsappMessage = encodeURIComponent(
                `Hello! I'm interested in: ${product.name}\n\n📝 Details: ${product.details}\n💰 Price: ${product.price}\n\nPlease provide more information.`
              );
              const whatsappLink = `https://wa.me/9891075655?text=${whatsappMessage}`;

              return (
                <a
                  key={product.id}
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105"
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-[#C53357] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#6A2A43] mb-2 group-hover:text-[#C53357] transition">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#D2BEB5]">
                      <span className="text-2xl font-bold text-[#CF8322]">
                        {product.price}
                      </span>
                      <div className="flex items-center gap-2 text-[#C53357] font-semibold group-hover:gap-3 transition">
                        <span className="text-sm">Order</span>
                        <span className="text-lg">→</span>
                      </div>
                    </div>

                    {/* WhatsApp Badge */}
                    <div className="mt-3 pt-3 border-t border-[#D2BEB5] flex items-center justify-center gap-2 text-green-600 font-semibold text-sm">
                      <span>💬</span>
                      <span>Direct WhatsApp</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full bg-[#F7EBE0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#6A2A43] mb-12 text-center">Why Shop With Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '👩', title: 'Women-Made', desc: 'Created by trained women artisans' },
              { icon: '🎨', title: 'Handcrafted', desc: 'Traditional skills & modern designs' },
              { icon: '💚', title: 'Eco-Friendly', desc: 'Sustainable & ethical production' },
              { icon: '🤝', title: 'Direct Support', desc: 'Income goes directly to makers' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition border-t-4 border-[#CF8322]">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#6A2A43] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarketingImageSections />
      <Footer />
    </div>
  );
}

