import Header from '@/components/header';
import Footer from '@/components/footer';
import MarketingImageSections from '@/components/marketing-image-sections';


export const metadata = {
  title: 'Our Programs | Nav Sanyogita Foundation',
  description: 'Explore our comprehensive skill development and training programs designed to empower women.',
};

export default function Programs() {
  const programs = [
    {
      title: 'Tailoring & Stitching',
      description: 'Professional tailoring and stitching training for women to gain employment and start businesses.',
      image: 'https://images.unsplash.com/photo-1595568022181-92d282ce6134?w=400&h=300&fit=crop',
      icon: '🪡',
      outcomes: ['Professional Certifications', 'Employment Opportunities', 'Business Startup Support', 'Market Linkage'],
      duration: '3-6 months'
    },
    {
      title: 'Handicrafts & Embroidery',
      description: 'Traditional art forms combined with modern techniques for creative income generation.',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop',
      icon: '🎨',
      outcomes: ['Skill Certification', 'Product Development', 'E-commerce Integration', 'Exhibition Opportunities'],
      duration: '2-4 months'
    },
    {
      title: 'Digital Literacy',
      description: 'Essential computer and internet skills to help women participate in the digital economy.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      icon: '💻',
      outcomes: ['MS Office Proficiency', 'Internet Skills', 'Email & Cloud', 'Job Readiness'],
      duration: '1-2 months'
    },
    {
      title: 'Beauty & Wellness',
      description: 'Beauty services, wellness, and personal care training programs.',
      image: 'https://images.unsplash.com/photo-1596885642239-c3b8fb8b0c84?w=400&h=300&fit=crop',
      icon: '💄',
      outcomes: ['Beauty Certification', 'Salon Setup', 'Home Business', 'Product Knowledge'],
      duration: '2-3 months'
    },
    {
      title: 'Entrepreneurship',
      description: 'Business development and mentorship for women entrepreneurs to start their own ventures.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      icon: '💼',
      outcomes: ['Business Planning', 'Financial Literacy', 'Marketing Skills', 'Investor Pitch'],
      duration: '3 months'
    },
    {
      title: 'Menstrual Health',
      description: 'Health awareness and eco-friendly menstrual hygiene product promotion.',
      image: 'https://images.unsplash.com/photo-1631217174694-f8a9f2ee0c87?w=400&h=300&fit=crop',
      icon: '🌿',
      outcomes: ['Health Awareness', 'Product Manufacturing', 'Community Education', 'Business Model'],
      duration: '1 month'
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F7EBE0]">
      <Header />

      {/* Hero Section */}
      <section className="w-full relative bg-gradient-to-r from-[#6A2A43] to-[#C53357] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Programs</h1>
          <p className="text-xl text-white/90 max-w-2xl">Comprehensive skill development programs designed to transform lives and build sustainable livelihoods.</p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition border-l-4 border-[#C53357] group">
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
                  <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                  
                  {/* Duration */}
                  <div className="mb-4 pb-4 border-b border-[#D2BEB5]">
                    <p className="text-xs text-[#CF8322] font-semibold">Duration: {program.duration}</p>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[#6A2A43] mb-2">What You'll Learn:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {program.outcomes.slice(0, 2).map((outcome, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-[#C53357]">✓</span> {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/9891075655?text=I'm interested in the ${program.title} program. Please provide more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#CF8322] hover:bg-[#6A2A43] text-white font-bold py-2 rounded-lg transition text-center text-sm"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-[#F7EBE0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A2A43] mb-12 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                program: 'Tailoring & Stitching',
                story: 'Started my tailoring business and now earn ₹25,000/month with consistent orders.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
              },
              {
                name: 'Anjali Verma',
                program: 'Handicrafts & Embroidery',
                story: 'My embroidered products are now sold online. The program changed my financial situation completely.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
              },
              {
                name: 'Meera Singh',
                program: 'Digital Literacy',
                story: 'Gained digital skills and now work as a virtual assistant earning steady income from home.',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
              },
            ].map((story, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto border-4 border-[#CF8322]">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-[#6A2A43] text-center mb-1">{story.name}</h3>
                <p className="text-[#C53357] font-semibold text-center text-sm mb-3">{story.program}</p>
                <p className="text-gray-700 text-sm text-center leading-relaxed">"{story.story}"</p>
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

