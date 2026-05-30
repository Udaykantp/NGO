import Header from '@/components/header';
import Footer from '@/components/footer';
import MarketingImageSections from '@/components/marketing-image-sections';


export const metadata = {
  title: 'About Us | Nav Sanyogita Foundation',
  description: 'Learn about our mission, vision, and commitment to empowering women through skill development.',
};

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#F7EBE0]">
      <Header />

      {/* Hero Section */}
      <section className="w-full relative bg-gradient-to-r from-[#6A2A43] to-[#C53357] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Nav Sanyogita Foundation</h1>
          <p className="text-xl text-white/90 max-w-2xl">Empowering women through skill development and sustainable livelihood since our inception.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#F7EBE0] to-white p-8 rounded-lg shadow-md border-l-4 border-[#C53357]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#CF8322] rounded-full flex items-center justify-center text-white text-2xl">
                  🎯
                </div>
                <h2 className="text-3xl font-bold text-[#6A2A43]">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower women through vocational education, skill development, entrepreneurship programs, and livelihood opportunities while promoting environmental sustainability and social welfare.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#F7EBE0] to-white p-8 rounded-lg shadow-md border-l-4 border-[#CF8322]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#C53357] rounded-full flex items-center justify-center text-white text-2xl">
                  👁️
                </div>
                <h2 className="text-3xl font-bold text-[#6A2A43]">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To create a society where every woman is economically independent, socially empowered, and has the freedom to shape her own destiny with dignity and self-reliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full bg-[#F7EBE0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A2A43] mb-12 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              Nav Sanyogita Foundation was founded with a clear vision: to empower underprivileged women and transform their lives through education, skill development, and economic opportunity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Based in Vaishali, Ghaziabad, our organization works directly with communities to identify needs, develop tailored solutions, and create sustainable pathways to independence and dignity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we proudly serve women across multiple skill areas, providing training, mentorship, and market linkage that enables them to become entrepreneurs and financial contributors to their families and society.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A2A43] mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: '💪', title: 'Empowerment', desc: 'Enabling women to take control of their futures' },
              { icon: '💼', title: 'Professionalism', desc: 'Excellence in training and service delivery' },
              { icon: '❤️', title: 'Compassion', desc: 'Understanding and supporting real needs' },
              { icon: '🌱', title: 'Sustainability', desc: 'Creating long-term lasting impact' },
              { icon: '🤝', title: 'Collaboration', desc: 'Partnering for greater good' },
            ].map((value, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#F7EBE0] to-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition border-t-4 border-[#CF8322]">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="font-bold text-[#6A2A43] mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="w-full bg-[#F7EBE0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A2A43] mb-12 text-center">Impact at a Glance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '5000+', label: 'Women Trained', color: '#6A2A43' },
              { number: '15+', label: 'Skill Programs', color: '#C53357' },
              { number: '50+', label: 'Communities Served', color: '#CF8322' },
              { number: '100%', label: 'Success Commitment', color: '#DA878B' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition border-t-4" style={{ borderTopColor: stat.color }}>
                <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
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

