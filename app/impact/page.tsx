import Header from '@/components/header';
import Footer from '@/components/footer';
import MarketingImageSections from '@/components/marketing-image-sections';

export const metadata = {
  title: 'Our Impact | Nav Sanyogita Foundation',
  description: 'See the real impact of women empowerment and skill development.',
};

export default function ImpactPage() {
  return (
    <div className="w-full min-h-screen bg-[#FCFCF9] text-[#6E675A] font-sans">
      <Header />

      {/* Hero Section */}
      <section className="w-full relative bg-[#CCD3B1] py-12 md:py-24 overflow-hidden border-b border-[rgba(36,22,1,0.08)]">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-[-0.05em] text-[#211600] mb-4 md:mb-6">
            Our Impact & Objectives
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#211600]/80 max-w-3xl mx-auto font-medium leading-relaxed">
            See the real impact of women empowerment and skill development. We are committed to creating lasting change in our communities.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex md:grid overflow-x-auto md:overflow-visible md:grid-cols-4 gap-4 md:gap-6 text-center pb-6 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0 after:content-[''] after:w-[1px] after:flex-shrink-0 after:md:hidden">
            {[
              { number: '5,000+', label: 'Women Trained' },
              { number: '10,000+', label: 'Products Sold' },
              { number: '50+', label: 'Communities Reached' },
              { number: '100%', label: 'Commitment' },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[65vw] sm:w-[40vw] md:w-auto snap-center bg-white rounded-[16px] md:rounded-[24px] p-6 md:p-8 shadow-[0_8px_24px_rgba(20,12,0,0.08)] md:shadow-[0_18px_40px_rgba(20,12,0,0.12)] border border-[rgba(36,22,1,0.06)] flex flex-col justify-center items-center min-h-[140px]"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F46403] mb-1 sm:mb-2">{stat.number}</div>
                <p className="text-[#211600] font-bold text-sm md:text-base leading-snug">{stat.label}</p>
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