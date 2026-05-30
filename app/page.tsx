import Header from '@/components/header';
import Footer from '@/components/footer';
import MarketingImageSections from '@/components/marketing-image-sections';


export const metadata = {
  title: 'Nav Sanyogita Foundation | Women Empowerment Through Skills',
  description: 'Empowering women through skill development, entrepreneurship, and sustainable livelihood programs.',
};

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#F7EBE0] text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="w-full relative bg-black pt-12 pb-0 overflow-hidden">
        {/* Wave Divider Top */}
        <svg className="w-full h-16 md:h-24 text-[#CF8322]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,30 Q150,60 300,50 T600,40 T900,55 T1200,40 L1200,0 L0,0 Z" fill="currentColor"/>
        </svg>

        {/* Full Width Video Background */}
        <div className="relative w-full h-screen max-h-96 md:max-h-full md:h-[600px] overflow-hidden">
          <video
            src="https://videos.unsplash.com/video-1519389950473-47ba0277781c?w=1200"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6A2A43]/80 to-[#C53357]/60"></div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                कोशल से आत्मनिर्भरता
              </h1>
              <p className="text-2xl md:text-3xl font-semibold mb-6 drop-shadow-lg">
                Empowering Women, Building Future
              </p>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
                Nav Sanyogita Foundation - Transforming Lives Through Skill Development
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="https://wa.me/9891075655?text=Hello! I would like to make a donation." target="_blank" rel="noopener noreferrer" className="bg-[#C53357] hover:bg-[#6A2A43] text-white font-bold px-8 py-3 rounded-lg transition shadow-lg inline-block">
                  Donate Now
                </a>
                <a href="/programs" className="bg-[#CF8322] hover:bg-[#6A2A43] text-white font-bold px-8 py-3 rounded-lg transition shadow-lg inline-block">
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider Bottom */}
        <svg className="w-full h-16 md:h-24 text-[#CF8322]" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ transform: 'scaleY(-1)' }}>
          <path d="M0,30 Q150,60 300,50 T600,40 T900,55 T1200,40 L1200,0 L0,0 Z" fill="currentColor"/>
        </svg>
      </section>

      {/* Products Section */}
      <section className="w-full bg-[#F7EBE0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6A2A43] mb-4">
              Our Handmade Products
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-4">
              जो skill से सिखाया गया है, उस पर ये लोग जो भी product बनायेंगे वो इसी page पे sell हो
            </p>
            <p className="text-[#C53357] font-semibold">
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
                image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop',
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
                image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=400&fit=crop',
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
                image: 'https://images.unsplash.com/photo-1595568022181-92d282ce6134?w=400&h=400&fit=crop',
                details: 'Handmade embroidered blouse - mirror work, traditional designs, customizable sizes'
              },
              {
                id: 6,
                name: 'Decorative Wall Hanging',
                category: 'Handicrafts',
                price: '₹599',
                description: 'Beautiful macramé and embroidered wall hanging',
                image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=400&fit=crop',
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
                    <div className="flex items-center justify-between pt-3 border-t border-[#E5D4C1]">
                      <span className="text-2xl font-bold text-[#CF8322]">
                        {product.price}
                      </span>
                      <div className="flex items-center gap-2 text-[#C53357] font-semibold group-hover:gap-3 transition">
                        <span className="text-sm">Order Now</span>
                        <span className="text-lg">→</span>
                      </div>
                    </div>

                    {/* WhatsApp Badge */}
                    <div className="mt-3 pt-3 border-t border-[#E5D4C1] flex items-center justify-center gap-2 text-green-600 font-semibold text-sm">
                      <span>💬</span>
                      <span>Direct WhatsApp Message</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Browse More CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-700 mb-4">
              Don't see what you're looking for? Contact us for custom orders!
            </p>
            <a
              href="https://wa.me/9891075655?text=Hello! I'm interested in custom products. Can you help me with details?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#5B1D47] hover:bg-[#E8247B] text-white font-bold px-8 py-3 rounded-lg transition shadow-lg"
            >
              📲 Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Impact Gallery Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#6A2A43]">
            Our Work in Action
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See the real impact of women empowerment and skill development
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                img: 'https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=400&h=300&fit=crop',
                title: 'Tailoring Training'
              },
              {
                img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
                title: 'Group Activities'
              },
              {
                img: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop',
                title: 'Craft Production'
              },
              {
                img: 'https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=400&h=300&fit=crop',
                title: 'Digital Literacy'
              },
              {
                img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
                title: 'Success Stories'
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative h-40 md:h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6A2A43]/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-4">
                  <p className="text-white font-semibold text-center">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#5B1D47]">About Nav Sanyogita Foundation</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nav Sanyogita Foundation is a non-profit, non-governmental organization dedicated to empowering women and promoting sustainable development. Located in Vaishali, Ghaziabad, we focus on skill development, entrepreneurship, education, health awareness, and environmental conservation.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our mission is to provide women with vocational education, entrepreneurship development, and livelihood opportunities in tailoring, handicrafts, digital literacy, beauty & wellness, and other self-employment activities.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed font-semibold text-[#E8247B]">
                महिला सशक्तिकरण हमारा संकल्प आपका साथ हमारी ताकत
              </p>
              <div className="bg-[#F5E6D3] border-l-4 border-[#E8247B] p-4 rounded">
                <p className="text-gray-800 font-semibold">Our Promise:</p>
                <p className="text-gray-700 text-sm mt-2">
                  When women become self-reliant, society and the nation progress forward!
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578992673578-77c20e0f1e2a?w=500&h=400&fit=crop"
                alt="Women skills training"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full bg-[#F5E6D3] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#5B1D47]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#D4A017] rounded-full flex items-center justify-center">
                  <span className="text-xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#5B1D47]">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To create a society where every woman is economically independent, socially empowered, and has the freedom to shape her own destiny with dignity and self-reliance.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#E8247B]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#E8247B] rounded-full flex items-center justify-center text-white">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-[#5B1D47]">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower women through vocational education, skill development, entrepreneurship programs, and livelihood opportunities while promoting environmental sustainability and social welfare.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-12 grid md:grid-cols-5 gap-6">
            {[
              { icon: '💪', title: 'Skill Development', color: '#E8247B' },
              { icon: '💰', title: 'Economic Independence', color: '#D4A017' },
              { icon: '☀️', title: 'Self-Reliance', color: '#F4A200' },
              { icon: '👥', title: 'Community Support', color: '#5B1D47' },
              { icon: '❤️', title: 'Women Welfare', color: '#C44569' },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="font-bold text-gray-900">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="w-full bg-gradient-to-r from-[#5B1D47] to-[#E8247B] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Our Impact & Objectives</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
                className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-lg text-center hover:bg-white/20 transition"
              >
                <p className="text-white font-bold text-lg mb-2">{item.label}</p>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-12 pt-12 border-t border-white/20">
            {[
              { emoji: '👩', label: 'Women Trained' },
              { emoji: '🛍️', label: 'Products Sold' },
              { emoji: '🏢', label: 'Partnerships' },
              { emoji: '🌍', label: 'Communities' },
              { emoji: '💪', label: 'Success Rate' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{item.emoji}</div>
                <p className="text-white font-semibold text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#6A2A43]">Our Programs & Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tailoring & Stitching',
                description: 'Professional tailoring and stitching training for women to gain employment and start businesses.',
                icon: '🪡',
                image: 'https://images.unsplash.com/photo-1595568022181-92d282ce6134?w=400&h=300&fit=crop'
              },
              {
                title: 'Handicrafts & Embroidery',
                description: 'Traditional art forms combined with modern techniques for creative income generation.',
                icon: '🎨',
                image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
              },
              {
                title: 'Digital Literacy',
                description: 'Essential computer and internet skills to help women participate in the digital economy.',
                icon: '💻',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop'
              },
              {
                title: 'Beauty & Wellness',
                description: 'Beauty services, wellness, and personal care training programs.',
                icon: '💄',
                image: 'https://images.unsplash.com/photo-1596885642239-c3b8fb8b0c84?w=400&h=300&fit=crop'
              },
              {
                title: 'Entrepreneurship',
                description: 'Business development and mentorship for women entrepreneurs to start their own ventures.',
                icon: '💼',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
              },
              {
                title: 'Menstrual Health',
                description: 'Health awareness and eco-friendly menstrual hygiene product promotion.',
                icon: '🌿',
                image: 'https://images.unsplash.com/photo-1631217174694-f8a9f2ee0c87?w=400&h=300&fit=crop'
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition border-l-4 border-[#C53357] group"
              >
                {/* Program Image */}
                <div className="relative h-40 overflow-hidden bg-gray-200">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-3 left-3 text-4xl bg-white/90 w-14 h-14 rounded-lg flex items-center justify-center shadow-md">
                    {program.icon}
                  </div>
                </div>

                {/* Program Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#6A2A43] mb-2">{program.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{program.description}</p>
                  <div className="mt-4 pt-4 border-t border-[#E5D4C1]">
                    <button className="text-[#C53357] font-semibold text-sm hover:text-[#6A2A43] transition">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="w-full bg-[#F7EBE0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#6A2A43]">
            Success Stories
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Meet the women whose lives have been transformed through our programs
          </p>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                story: 'Started her own tailoring business and now earns ₹25,000/month',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
                role: 'Tailoring Entrepreneur'
              },
              {
                name: 'Anjali Verma',
                story: 'Developed skills in embroidery and now runs a successful home business',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
                role: 'Craft Artisan'
              },
              {
                name: 'Meera Singh',
                story: 'Gained digital literacy and now works as a virtual assistant',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
                role: 'Digital Professional'
              },
            ].map((story, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                {/* Story Image */}
                <div className="relative h-64 overflow-hidden bg-gray-300">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Story Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#6A2A43] mb-1">{story.name}</h3>
                  <p className="text-[#C53357] font-semibold text-sm mb-3">{story.role}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">"{story.story}"</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#CF8322]">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#6A2A43] to-[#C53357] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            जब महिलाएँ आत्मनिर्भर बनती हैं, तभी समाज और देश आगे बढ़ता है!
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            When women become self-reliant, society and the nation progress forward!
          </p>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join us in empowering women through skill development, entrepreneurship, and livelihood opportunities. Your support creates lasting change!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#CF8322] hover:bg-white/20 text-white font-bold px-8 py-3 rounded-lg transition">
              Donate Now
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#6A2A43] font-bold px-8 py-3 rounded-lg transition">
              Become a Volunteer
            </button>
            <button className="border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-3 rounded-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <MarketingImageSections />
      <Footer />
    </div>
  );
}

