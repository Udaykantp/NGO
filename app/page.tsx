import Header from '@/components/header';
import Footer from '@/components/footer';
import MarketingImageSections from '@/components/marketing-image-sections';
import TopAnnouncementBar from '@/components/TopAnnouncementBar';

// Decorative SVG Components
const CornerSticker = ({ className = '' }: { className?: string }) => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute z-10 pointer-events-none ${className}`}>
    <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#693754"/>
    <path d="M50 15L85 50L50 85L15 50L50 15Z" fill="#E5008D"/>
    <path d="M50 30L70 50L50 70L30 50L50 30Z" fill="#B67A99"/>
    <path d="M50 42L58 50L50 58L42 50L50 42Z" fill="#693754"/>
  </svg>
);

const SunDoodle = ({ className = '' }: { className?: string }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#35353A" strokeWidth="2" className={`opacity-60 stroke-[2px] pointer-events-none ${className}`} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const CloudDoodle = ({ className = '' }: { className?: string }) => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#35353A" strokeWidth="2" className={`opacity-60 stroke-[2px] pointer-events-none ${className}`} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const LeafDoodle = ({ className = '' }: { className?: string }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#35353A" strokeWidth="2" className={`opacity-60 stroke-[2px] pointer-events-none ${className}`} strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 4 13c0-3.5 3-7 8-11 5 4 8 7.5 8 11a7 7 0 0 1-7 7z" />
    <path d="M11 20v-8" />
  </svg>
);

const FlowerDoodle = ({ className = '' }: { className?: string }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#35353A" strokeWidth="2" className={`opacity-60 stroke-[2px] pointer-events-none ${className}`} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9A3 3 0 0 1 12 3a3 3 0 0 1 0 6M12 15a3 3 0 0 0 0 6 3 3 0 0 0 0-6M9 12a3 3 0 0 1-6 0 3 3 0 0 1 6 0M15 12a3 3 0 0 0 6 0 3 3 0 0 0-6 0" />
  </svg>
);

export const metadata = {
  title: 'Nav Sanyogita Foundation | Women Empowerment Through Skills',
  description: 'Empowering women through skill development, entrepreneurship, and sustainable livelihood programs.',
};

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] text-[#35353A] font-sans">
      <Header />

      {/* Hero Section */}
      <section
        className="w-full relative min-h-[90vh] flex flex-col justify-end pt-24 pb-24 md:pb-32 overflow-hidden bg-cover bg-left-top bg-no-repeat bg-[url('/NavSanogitamobile1.png')] md:bg-[url('/NavSanogita1.png')]"
      >
        {/* Corner Stickers */}
        <CornerSticker className="-top-8 -left-8 md:-top-4 md:-left-4" />
        <CornerSticker className="-bottom-8 -right-8 md:-bottom-4 md:-right-4 transform rotate-180" />
        
        {/* Hand Drawn Doodles */}
        <SunDoodle className="absolute top-16 left-[10%] md:left-[20%] animate-[bounce_4s_infinite]" />
        <CloudDoodle className="absolute top-24 right-[10%] md:right-[20%] animate-[pulse_5s_infinite]" />
        <LeafDoodle className="absolute bottom-16 left-[15%] md:left-[30%] animate-[bounce_6s_infinite]" />
        <FlowerDoodle className="absolute bottom-24 right-[15%] md:right-[25%] animate-[pulse_4s_infinite]" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-20 w-full">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="/programs" className="bg-white/90 backdrop-blur-sm border border-white/20 text-[#35353A] hover:bg-white font-bold px-8 py-[14px] rounded-full transition duration-300 shadow-md w-full md:w-auto">
              Get Involved
            </a>
            <a href="https://wa.me/9891075655?text=Hello! I would like to make a donation." target="_blank" rel="noopener noreferrer" className="bg-[#E5008D] hover:bg-[#C80079] text-white font-bold px-8 py-[14px] rounded-full transition duration-300 shadow-md w-full md:w-auto">
              Donate Now
            </a>
          </div>
        </div>

        {/* Smooth Wavy Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path fill="#FFFFFF" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            <path fill="none" stroke="#E5008D" strokeWidth="4" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64"></path>
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full bg-[#FFFFFF] py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.05em] text-[#35353A] mb-4">
              Our Handmade Products
            </h2>
            <p className="text-[#35353A]/90 max-w-2xl mx-auto mb-4 leading-[1.8]">
              हमारे कौशल विकास कार्यक्रमों के माध्यम से प्रशिक्षित महिलाओं द्वारा तैयार किए गए सभी हस्तनिर्मित उत्पाद यहाँ बिक्री के लिए उपलब्ध हैं। आपके द्वारा की गई हर खरीदारी सीधे उनकी आत्मनिर्भरता में योगदान देती है।
            </p>
            <p className="text-[#35353A] font-semibold">
              Products made with love and skill by our trained women | Click any product to order via WhatsApp
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((product) => {
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
                  className="group bg-white rounded-[24px] overflow-hidden shadow-[0_18px_40px_rgba(20,12,0,0.12)] border border-[#C89AB4]/40 hover:-translate-y-[5px] transition duration-300"
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden bg-[#FAF2F7]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#693754] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm bg-opacity-90">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                  <h3 className="text-xl font-extrabold tracking-[-0.05em] text-[#35353A] mb-2 group-hover:text-[#E5008D] transition">
                    {product.name}
                  </h3>
                    <p className="text-[#35353A]/80 text-sm mb-4 leading-[1.8]">
                      {product.description}
                    </p>
                    
                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#C89AB4]/40">
                      <span className="text-2xl font-extrabold text-[#35353A]">
                        {product.price}
                      </span>
                      <div className="flex items-center gap-2 text-[#E5008D] font-bold group-hover:gap-3 transition">
                        <span className="text-sm uppercase tracking-wide">Order Now</span>
                        <span className="text-lg">→</span>
                      </div>
                    </div>

                    {/* WhatsApp Badge */}
                    <div className="mt-4 pt-4 border-t border-[#C89AB4]/40 flex items-center justify-center gap-2 text-[#35353A] font-semibold text-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#E5008D" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.12.66 4.08 1.78 5.69L2 22l4.45-1.63C8.01 21.43 9.94 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
                      <span>Direct WhatsApp Message</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Browse More CTA */}
          <div className="text-center mt-12">
            <p className="text-[#35353A] mb-6 font-semibold">
              Don't see what you're looking for? Contact us for custom orders!
            </p>
            <a
              href="https://wa.me/9891075655?text=Hello! I'm interested in custom products. Can you help me with details?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#E5008D] hover:bg-[#C80079] text-white font-bold px-8 py-[14px] rounded-full transition duration-300 shadow-md items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.12.66 4.08 1.78 5.69L2 22l4.45-1.63C8.01 21.43 9.94 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Impact Gallery Section */}
      <section className="w-full bg-[#693754] py-20 md:py-32 relative overflow-hidden">
        <CornerSticker className="-top-8 -left-8 opacity-20" />
        <CornerSticker className="-bottom-8 -right-8 transform rotate-180 opacity-20" />
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.05em] text-center mb-4 text-[#FFFFFF]">
            Our Work in Action
          </h2>
          <p className="text-center text-[#F7D8EC] mb-12 max-w-2xl mx-auto leading-[1.8]">
            See the real impact of women empowerment and skill development
          </p>

          {/* Gallery Grid */}
          <div className="flex md:grid overflow-x-auto md:overflow-visible md:grid-cols-4 gap-4 pb-8 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0 after:content-[''] after:w-[1px] after:flex-shrink-0 after:md:hidden">
            {[
              {
                img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
                title: 'Community Training'
              },
              {
                img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop',
                title: 'Skill Development'
              },
              {
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
                title: 'Women Empowerment'
              },
              {
                img: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=400&h=300&fit=crop',
                title: 'Tailoring Training'
              },
              {
                img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
                title: 'Group Activities',
                hideOnMobile: true
              },
              {
                img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&h=300&fit=crop',
                title: 'Craft Production'
              },
              {
                img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop',
                title: 'Digital Literacy'
              },
              {
                img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
                title: 'Success Stories',
                hideOnMobile: true
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`relative flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-auto snap-center h-48 md:h-64 rounded-[16px] md:rounded-[24px] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.2)] border border-white/10 hover:-translate-y-[5px] transition duration-300 group cursor-pointer ${item.hideOnMobile ? 'hidden md:block' : ''}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-[#35353A]/90 via-[#35353A]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-4 md:pb-6">
                  <p className="text-white font-bold text-sm md:text-lg text-center px-2 md:px-4">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-[#F7D8EC] py-16 md:py-32 relative border-y border-[#C89AB4]/40 overflow-hidden">
        <CloudDoodle className="hidden md:block absolute top-12 left-[15%] animate-[pulse_4s_infinite]" />
        <LeafDoodle className="hidden md:block absolute bottom-12 right-[15%] animate-[bounce_5s_infinite]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.05em] mb-10 md:mb-16 text-center text-[#35353A]">About Nav Sanyogita Foundation</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-[#35353A]/90 mb-6 leading-[1.8] text-sm md:text-base">
                Nav Sanyogita Foundation is a non-profit, non-governmental organization dedicated to empowering women and promoting sustainable development. Located in Vaishali, Ghaziabad, we focus on skill development, entrepreneurship, education, health awareness, and environmental conservation.
              </p>
              <p className="text-[#35353A]/90 mb-8 leading-[1.8] text-sm md:text-base">
                Our mission is to provide women with vocational education, entrepreneurship development, and livelihood opportunities in tailoring, handicrafts, digital literacy, beauty & wellness, and other self-employment activities.
              </p>
              <p className="text-[#35353A] mb-8 text-lg md:text-xl font-bold tracking-[-0.02em]">
                महिला सशक्तिकरण हमारा संकल्प आपका साथ हमारी ताकत
              </p>
              <div className="bg-white p-6 rounded-[20px] md:rounded-[24px] shadow-[0_18px_40px_rgba(20,12,0,0.08)] border border-[#C89AB4]/40 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#E5008D]"></div>
                <p className="text-[#35353A] font-bold text-lg mb-2">Our Promise:</p>
                <p className="text-[#35353A]/90 leading-[1.8] text-sm md:text-base">
                  When women become self-reliant, society and the nation progress forward!
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=400&fit=crop"
                alt="Women skills training"
                className="rounded-[24px] md:rounded-[32px] shadow-[0_24px_50px_rgba(20,12,0,0.15)] w-full object-cover h-[300px] sm:h-[400px] md:h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full bg-[#FAF2F7] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-10 rounded-[24px] shadow-[0_18px_40px_rgba(20,12,0,0.12)] border border-[#C89AB4]/40 hover:-translate-y-[5px] transition duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#E5008D]"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#693754] text-white rounded-full flex items-center justify-center shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </div>
                <h3 className="text-2xl font-extrabold tracking-[-0.05em] text-[#35353A]">Our Vision</h3>
              </div>
              <p className="text-[#35353A]/90 leading-[1.8]">
                To create a society where every woman is economically independent, socially empowered, and has the freedom to shape her own destiny with dignity and self-reliance.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 rounded-[24px] shadow-[0_18px_40px_rgba(20,12,0,0.12)] border border-[#C89AB4]/40 hover:-translate-y-[5px] transition duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#B67A99]"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#B67A99] rounded-full flex items-center justify-center text-white shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/></svg>
                </div>
                <h3 className="text-2xl font-extrabold tracking-[-0.05em] text-[#35353A]">Our Mission</h3>
              </div>
              <p className="text-[#35353A]/90 leading-[1.8]">
                To empower women through vocational education, skill development, entrepreneurship programs, and livelihood opportunities while promoting environmental sustainability and social welfare.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16 grid md:grid-cols-5 gap-6">
            {[
              { icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="#B67A99" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, title: 'Skill Development' },
              { icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="#E5008D" xmlns="http://www.w3.org/2000/svg"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>, title: 'Economic Independence' },
              { icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5" fill="#B67A99"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#B67A99" strokeWidth="2" strokeLinecap="round"/></svg>, title: 'Self-Reliance' },
              { icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="#693754" xmlns="http://www.w3.org/2000/svg"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>, title: 'Community Support' },
              { icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="#E5008D" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>, title: 'Women Welfare' },
            ].map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-[24px] text-center shadow-[0_8px_24px_rgba(20,12,0,0.06)] hover:shadow-[0_18px_40px_rgba(20,12,0,0.12)] border border-[#C89AB4]/40 hover:-translate-y-[5px] transition duration-300">
                <div className="mb-4">{value.icon}</div>
                <h4 className="font-extrabold tracking-[-0.02em] text-[#35353A]">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="w-full bg-[#693754] py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.05em] text-center mb-16 text-[#FFFFFF]">Our Impact & Objectives</h2>
          <div className="flex md:grid overflow-x-auto md:overflow-visible md:grid-cols-3 gap-4 md:gap-6 pb-6 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0 after:content-[''] after:w-[1px] after:flex-shrink-0 after:md:hidden">
            {[
              { label: 'Vocational Training', description: 'Tailoring, handicrafts, digital literacy' },
              { label: 'Women Empowerment', description: 'Economic independence & skill development' },
              { label: 'Menstrual Health', description: 'Awareness & eco-friendly products' },
              { label: 'Education Support', description: 'Schools, training centers & workshops' },
              { label: 'Self-Help Groups', description: 'Market linkage & business support' },
              { label: 'Environmental Focus', description: 'Sustainable & eco-friendly initiatives' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-auto snap-center bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[24px] text-center hover:bg-white/10 hover:-translate-y-[5px] transition duration-300 shadow-lg h-full"
              >
                <p className="text-[#FFFFFF] font-extrabold text-lg mb-3 tracking-[-0.02em]">{item.label}</p>
                <p className="text-[#F7D8EC] text-sm leading-[1.8]">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex md:grid overflow-x-auto md:overflow-visible md:grid-cols-5 gap-4 md:gap-6 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/10 pb-6 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0 after:content-[''] after:w-[1px] after:flex-shrink-0 after:md:hidden">
            {[
              { icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="#B67A99" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>, label: 'Women Trained' },
              { icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="#E5008D" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>, label: 'Products Sold' },
              { icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="#B67A99" xmlns="http://www.w3.org/2000/svg"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>, label: 'Partnerships' },
              { icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="#B67A99" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>, label: 'Communities' },
              { icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="#E5008D" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>, label: 'Success Rate' },
            ].map((item, index) => (
              <div key={index} className="flex-shrink-0 w-[45vw] sm:w-[30vw] md:w-auto snap-center text-center">
                <div className="mb-4">{item.icon}</div>
                <p className="text-[#FFFFFF] font-bold tracking-[-0.02em]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full bg-[#FFFFFF] py-20 md:py-32 border-y border-[#C89AB4]/40 relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.05em] text-center mb-16 text-[#35353A]">Our Programs & Skills</h2>
          <div className="flex md:grid overflow-x-auto md:overflow-visible md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0 after:content-[''] after:w-[1px] after:flex-shrink-0 after:md:hidden">
            {[
              {
                title: 'Tailoring & Stitching',
                description: 'Professional tailoring and stitching training for women to gain employment and start businesses.',
                icon: <svg className="w-8 h-8 text-[#E5008D]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>,
                image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=400&h=300&fit=crop'
              },
              {
                title: 'Handicrafts & Embroidery',
                description: 'Traditional art forms combined with modern techniques for creative income generation.',
                icon: <svg className="w-8 h-8 text-[#B67A99]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z"/></svg>,
                image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=300&fit=crop'
              },
              {
                title: 'Digital Literacy',
                description: 'Essential computer and internet skills to help women participate in the digital economy.',
                icon: <svg className="w-8 h-8 text-[#693754]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8M12 17v4"/></svg>,
                image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&h=300&fit=crop'
              },
              {
                title: 'Beauty & Wellness',
                description: 'Beauty services, wellness, and personal care training programs.',
                icon: <svg className="w-8 h-8 text-[#E5008D]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 8v4l3 3"/></svg>,
                image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=300&fit=crop'
              },
              {
                title: 'Entrepreneurship',
                description: 'Business development and mentorship for women entrepreneurs to start their own ventures.',
                icon: <svg className="w-8 h-8 text-[#B67A99]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
              },
              {
                title: 'Menstrual Health',
                description: 'Health awareness and eco-friendly menstrual hygiene product promotion.',
                icon: <svg className="w-8 h-8 text-[#693754]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
                image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop'
              },
            ].map((program, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-auto snap-center bg-white rounded-[24px] overflow-hidden shadow-[0_18px_40px_rgba(20,12,0,0.12)] hover:-translate-y-[5px] transition duration-300 border border-[#C89AB4]/40 group relative flex flex-col h-full"
              >
                {/* Program Image */}
                <div className="relative h-48 overflow-hidden bg-[#FAF2F7]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                    {program.icon}
                  </div>
                </div>

                {/* Program Info */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold tracking-[-0.05em] text-[#35353A] mb-3">{program.title}</h3>
                  <p className="text-[#35353A]/90 leading-[1.8] text-sm flex-grow">{program.description}</p>
                  <div className="mt-6 pt-4 border-t border-[#C89AB4]/40">
                    <button className="text-[#E5008D] font-bold text-sm hover:text-[#C80079] transition">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#F7D8EC] py-24 md:py-32 relative overflow-hidden">
        <CornerSticker className="-top-8 -left-8 md:-top-4 md:-left-4" />
        <CornerSticker className="-bottom-8 -right-8 md:-bottom-4 md:-right-4 transform rotate-180" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.05em] text-[#35353A] mb-6 leading-snug md:leading-tight">
            जब महिलाएँ आत्मनिर्भर बनती हैं, तभी समाज और देश आगे बढ़ता है!
          </h2>
          <p className="text-[#35353A]/80 text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium">
            When women become self-reliant, society and the nation progress forward!
          </p>
          <p className="text-[#35353A]/80 mb-12 max-w-2xl mx-auto leading-[1.8]">
            Join us in empowering women through skill development, entrepreneurship, and livelihood opportunities. Your support creates lasting change!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#E5008D] hover:bg-[#C80079] text-white font-bold px-10 py-[16px] rounded-full transition duration-300 shadow-md">
              Donate Now
            </button>
            <button className="bg-white border border-[#C89AB4]/40 hover:bg-[#FAF2F7] text-[#35353A] font-bold px-10 py-[16px] rounded-full transition duration-300 shadow-[0_8px_16px_rgba(20,12,0,0.05)]">
              Become a Volunteer
            </button>
            <button className="bg-transparent border border-[#C89AB4]/80 hover:bg-[#693754]/5 text-[#35353A] font-bold px-10 py-[16px] rounded-full transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <MarketingImageSections />
      <Footer />
      <TopAnnouncementBar />
    </div>
  );
}
