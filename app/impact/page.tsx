import Header from '@/components/header';
import Footer from '@/components/footer';
import MarketingImageSections from '@/components/marketing-image-sections';


export const metadata = {
  title: 'Our Impact | Nav Sanyogita Foundation',
  description: 'Discover the measurable impact of our programs and the lives we have transformed.',
};

export default function Impact() {
  return (
    <div className="w-full min-h-screen bg-[#F7EBE0]">
      <Header />

      {/* Hero Section */}
      <section className="w-full relative bg-gradient-to-r from-[#6A2A43] to-[#C53357] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact</h1>
          <p className="text-xl text-white/90 max-w-2xl">Measurable change in women's lives through skill development and economic empowerment.</p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A2A43] mb-12 text-center">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { number: '5,000+', label: 'Women Trained', color: '#6A2A43' },
              { number: '15+', label: 'Skill Programs', color: '#C53357' },
              { number: '2,500+', label: 'Businesses Started', color: '#CF8322' },
              { number: '₹2Cr+', label: 'Income Generated', color: '#DA878B' },
              { number: '50+', label: 'Communities', color: '#6A2A43' },
              { number: '92%', label: 'Success Rate', color: '#C53357' },
              { number: '10K+', label: 'Lives Impacted', color: '#CF8322' },
              { number: '100%', label: 'Commitment', color: '#DA878B' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#F7EBE0] to-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition border-t-4" style={{ borderTopColor: stat.color }}>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <p className="text-gray-700 font-semibold text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact by Program */}
      <section className="w-full bg-[#F7EBE0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A2A43] mb-12 text-center">Program Outcomes</h2>
          <div className="space-y-8">
            {[
              {
                program: 'Tailoring & Stitching',
                participants: '1,200+',
                income: '₹18-30K/month',
                success: '88%',
                description: 'Women earning steady income through tailoring businesses and employment opportunities.'
              },
              {
                program: 'Handicrafts & Embroidery',
                participants: '800+',
                income: '₹15-25K/month',
                success: '85%',
                description: 'Artisans creating beautiful handmade products with market linkage and online sales.'
              },
              {
                program: 'Digital Literacy',
                participants: '1,500+',
                income: '₹12-20K/month',
                success: '90%',
                description: 'Women working as virtual assistants, data entry professionals, and digital entrepreneurs.'
              },
              {
                program: 'Entrepreneurship',
                participants: '600+',
                income: '₹25-50K/month',
                success: '87%',
                description: 'Women-led startups and businesses generating significant revenue and employment.'
              },
              {
                program: 'Beauty & Wellness',
                participants: '400+',
                income: '₹15-22K/month',
                success: '86%',
                description: 'Professional beauty consultants and wellness entrepreneurs serving their communities.'
              },
              {
                program: 'Menstrual Health',
                participants: '300+',
                income: '₹10-18K/month',
                success: '89%',
                description: 'Women manufacturing and selling eco-friendly menstrual products with health benefits.'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-[#C53357]">
                <h3 className="text-2xl font-bold text-[#6A2A43] mb-4">{item.program}</h3>
                <p className="text-gray-700 mb-6">{item.description}</p>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#CF8322]">{item.participants}</p>
                    <p className="text-sm text-gray-600">Participants</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#C53357]">{item.income}</p>
                    <p className="text-sm text-gray-600">Avg. Monthly Income</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#6A2A43]">{item.success}</p>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#DA878B]">★★★★★</p>
                    <p className="text-sm text-gray-600">Satisfaction</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A2A43] mb-12 text-center">Community Transformation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Economic Empowerment',
                icon: '💰',
                metrics: [
                  '5,000+ women with independent income',
                  '₹2 Crore+ annual income generated',
                  '88% average income increase',
                  'Financial independence for families'
                ]
              },
              {
                title: 'Social Impact',
                icon: '🤝',
                metrics: [
                  '10,000+ family members benefited',
                  'Improved household financial security',
                  'Reduced gender-based discrimination',
                  'Enhanced community participation'
                ]
              },
              {
                title: 'Long-term Change',
                icon: '🌱',
                metrics: [
                  'Generational wealth creation starting',
                  'Children attending school full-time',
                  'Healthcare access improved',
                  'Community leadership roles expanded'
                ]
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F7EBE0] p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-[#CF8322]">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#6A2A43] mb-6">{item.title}</h3>
                <ul className="space-y-3">
                  {item.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-[#C53357] font-bold mt-1">✓</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full bg-gradient-to-r from-[#6A2A43] to-[#C53357] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-2xl md:text-3xl font-bold mb-4 italic">
            "This program didn't just teach me a skill—it gave me my life back. I went from being dependent to supporting my entire family."
          </p>
          <p className="text-lg">— Priya Sharma, Tailoring Program Graduate</p>
        </div>
      </section>

      <MarketingImageSections />
      <Footer />
    </div>
  );
}

