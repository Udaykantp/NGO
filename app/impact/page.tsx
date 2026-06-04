import Header from '@/components/header';
import Footer from '@/components/footer';
import MarketingImageSections from '@/components/marketing-image-sections';
import { Users, ShoppingBag, Map, Heart } from 'lucide-react';

export const metadata = {
  title: 'Our Impact | Nav Sanyogita Foundation',
  description: 'See the real impact of women empowerment and skill development.',
};

export default function ImpactPage() {
  return (
    <div className="w-full min-h-screen bg-[#FCFCF9] text-[#6E675A] font-sans">
      <Header />

      {/* Hero Section */}
      <section className="w-full relative py-20 md:py-32 overflow-hidden bg-[#241601]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1600&h=800&fit=crop" 
            alt="Impact Background" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#241601] via-[#241601]/80 to-transparent z-0"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#F46403]/20 text-[#F46403] font-bold text-sm mb-6 border border-[#F46403]/30 tracking-widest uppercase shadow-sm">
            Our Impact
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Driving Change, <br className="hidden md:block"/> Empowering Lives
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
            See the real impact of women empowerment and skill development. We are committed to creating lasting, sustainable change in our communities.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-[#FCFCF9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex md:grid overflow-x-auto md:overflow-visible md:grid-cols-4 gap-6 md:gap-8 text-center pb-8 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0 after:content-[''] after:w-[1px] after:flex-shrink-0 after:md:hidden">
            {[
              { number: '5,000+', label: 'Women Trained', icon: <Users className="w-8 h-8 text-[#F46403]" />, color: 'from-[#F46403]/10 to-transparent', borderColor: 'border-[#F46403]/20' },
              { number: '10,000+', label: 'Products Sold', icon: <ShoppingBag className="w-8 h-8 text-[#4E9B71]" />, color: 'from-[#4E9B71]/10 to-transparent', borderColor: 'border-[#4E9B71]/20' },
              { number: '50+', label: 'Communities Reached', icon: <Map className="w-8 h-8 text-[#F9D05F]" />, color: 'from-[#F9D05F]/10 to-transparent', borderColor: 'border-[#F9D05F]/20' },
              { number: '100%', label: 'Commitment', icon: <Heart className="w-8 h-8 text-[#C53357]" />, color: 'from-[#C53357]/10 to-transparent', borderColor: 'border-[#C53357]/20' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[70vw] sm:w-[45vw] md:w-auto snap-center bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border ${stat.borderColor} flex flex-col justify-center items-center relative overflow-hidden group hover:-translate-y-2`}
              >
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-[#211600] mb-2 relative z-10 tracking-tight">{stat.number}</div>
                <p className="text-[#6E675A] font-bold text-sm md:text-base relative z-10 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Gallery Section */}
      <section className="w-full bg-[#241601] py-12 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.05em] text-center mb-3 md:mb-4 text-[#FCFCF9]">
            Our Work in Action
          </h2>
          <p className="text-center text-[#E8EBD8] mb-8 md:mb-12 max-w-2xl mx-auto leading-[1.6] md:leading-[1.8] text-sm md:text-base">
            Glimpses of our ongoing efforts to empower women and promote self-reliance.
          </p>

          <div className="flex md:grid overflow-x-auto md:overflow-visible md:grid-cols-4 gap-4 pb-8 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0 after:content-[''] after:w-[1px] after:flex-shrink-0 after:md:hidden">
            {[
              { img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', title: 'Community Training' },
              { img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop', title: 'Skill Development' },
              { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop', title: 'Women Empowerment' },
              { img: 'https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=400&h=300&fit=crop', title: 'Tailoring Training' },
              { img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', title: 'Group Activities', hideOnMobile: true },
              { img: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop', title: 'Craft Production' },
              { img: 'https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=400&h=300&fit=crop', title: 'Digital Literacy' },
              { img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', title: 'Success Stories', hideOnMobile: true },
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#241601]/90 via-[#241601]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-4 md:pb-6">
                  <p className="text-white font-bold text-sm md:text-lg text-center px-2 md:px-4">{item.title}</p>
                </div>
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