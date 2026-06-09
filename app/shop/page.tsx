import Header from '@/components/header';
import Footer from '@/components/footer';
import MarketingImageSections from '@/components/marketing-image-sections';

export const metadata = {
  title: 'Shop | Nav Sanyogita Foundation',
  description: 'Shop handmade products created by women artisans empowered by our programs.',
};

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: 'Embroidered Cushion Cover',
      category: 'Handicrafts',
      price: '₹499',
      description: 'Beautiful hand-embroidered cushion cover with traditional designs',
      image: '/NavSanogita3.png',
      details: 'Handmade embroidered cushion cover - 16x16 inches, traditional patterns, premium fabric'
    },
    {
      id: 2,
      name: 'Hand-Stitched Tote Bag',
      category: 'Tailoring',
      price: '₹699',
      description: 'Durable canvas tote bag with hand-stitched designs',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
      details: 'Hand-stitched premium canvas tote bag - spacious design, beautiful embroidery accents'
    },
    {
      id: 3,
      name: 'Pink Silk Dupatta',
      category: 'Tailoring',
      price: '₹899',
      description: 'Traditional silk dupatta with embroidered borders',
      image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=400&h=400&fit=crop',
      details: 'Pure silk dupatta - hand-embroidered borders, traditional patterns, 2.5 meters'
    },
    {
      id: 4,
      name: 'Quilted Bed Spread',
      category: 'Handicrafts',
      price: '₹1,299',
      description: 'Handmade quilted bedspread with traditional prints',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
      details: 'Hand-quilted bedspread - floral prints, 90x100 inches, premium cotton'
    },
    {
      id: 5,
      name: 'Embroidered Blouse',
      category: 'Tailoring',
      price: '₹799',
      description: 'Traditional embroidered blouse with mirror work',
      image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=400&h=400&fit=crop',
      details: 'Handmade embroidered blouse - mirror work, traditional designs, customizable sizes'
    },
    {
      id: 6,
      name: 'Decorative Wall Hanging',
      category: 'Handicrafts',
      price: '₹599',
      description: 'Beautiful macramé and embroidered wall hanging',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=400&fit=crop',
      details: 'Hand-crafted wall hanging - macramé with beads, 24x30 inches, ready to hang'
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FCFCF9] text-[#6E675A] font-sans">
      <Header />

      {/* Hero Section */}
      <section className="w-full relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-gray-900">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=1920&h=800&fit=crop"
            alt="Handmade Products at Nav Sanyogita Foundation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.05em] mb-6 drop-shadow-lg">
            Our Handmade Products
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-md">
            Support our women artisans by purchasing products made with love and skill. Click any product to order via WhatsApp.
          </p>
        </div>

        {/* Smooth Wavy Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px] block">
            <path fill="#FCFCF9" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
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
                  className="group bg-white rounded-[24px] overflow-hidden shadow-[0_18px_40px_rgba(20,12,0,0.12)] border border-[rgba(36,22,1,0.06)] hover:-translate-y-[5px] transition duration-300"
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden bg-[#F8F8F0]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#241601] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm bg-opacity-90">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold tracking-[-0.05em] text-[#211600] mb-2 group-hover:text-[#F46403] transition">
                      {product.name}
                    </h3>
                    <p className="text-[#6E675A] text-sm mb-4 leading-[1.8]">
                      {product.description}
                    </p>
                    
                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-[rgba(36,22,1,0.08)]">
                      <span className="text-2xl font-extrabold text-[#211600]">
                        {product.price}
                      </span>
                      <div className="flex items-center gap-2 text-[#F46403] font-bold group-hover:gap-3 transition">
                        <span className="text-sm uppercase tracking-wide">Order Now</span>
                        <span className="text-lg">→</span>
                      </div>
                    </div>

                    {/* WhatsApp Badge */}
                    <div className="mt-4 pt-4 border-t border-[rgba(36,22,1,0.08)] flex items-center justify-center gap-2 text-[#241601] font-semibold text-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#4D7A4C" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.12.66 4.08 1.78 5.69L2 22l4.45-1.63C8.01 21.43 9.94 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
                      <span>Direct WhatsApp Message</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <MarketingImageSections />
      <Footer />
    </div>
  );
}