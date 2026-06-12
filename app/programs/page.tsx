import Header from '@/components/header';
import Footer from '@/components/footer';
import MarketingImageSections from '@/components/marketing-image-sections';
import { Scissors, Palette, Laptop, Sparkles, Briefcase, Droplets } from 'lucide-react';

export const metadata = {
  title: 'Our Programs | Nav Sanyogita Foundation',
  description: 'Explore our skill development and empowerment programs for women.',
};

export default function ProgramsPage() {
  return (
    <div className="w-full min-h-screen bg-[#FCFCF9] text-[#6E675A] font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-gray-900">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=800&fit=crop"
            alt="Our Programs at Nav Sanyogita Foundation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.05em] mb-6 drop-shadow-lg">
            Our Programs & Skills
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-md">
            We offer comprehensive training programs designed to provide women with practical skills, leading to economic independence and self-reliance.
          </p>
        </div>

        {/* Smooth Wavy Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px] block">
            <path fill="#FCFCF9" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Programs List Section */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex md:grid overflow-x-auto md:overflow-visible md:grid-cols-2 gap-6 md:gap-12 pb-8 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0 after:content-[''] after:w-[1px] after:flex-shrink-0 after:md:hidden">
            {[
              {
                title: 'Tailoring & Stitching',
                id: 'tailoring',
                description: 'Professional tailoring and stitching training for women to gain employment and start businesses.',
                icon: <Scissors className="w-7 h-7 text-[#F46403] stroke-[1.5]" />,
                image: 'https://images.unsplash.com/photo-1595568022181-92d282ce6134?w=800&h=600&fit=crop'
              },
              {
                title: 'Handicrafts & Embroidery',
                id: 'handicrafts',
                description: 'Traditional art forms combined with modern techniques for creative income generation.',
                icon: <Palette className="w-7 h-7 text-[#F9D05F] stroke-[1.5]" />,
                image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&h=600&fit=crop'
              },
              {
                title: 'Digital Literacy',
                id: 'digital-literacy',
                description: 'Essential computer and internet skills to help women participate in the digital economy.',
                icon: <Laptop className="w-7 h-7 text-[#4E9B71] stroke-[1.5]" />,
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
              },
              {
                title: 'Beauty & Wellness',
                id: 'beauty-wellness',
                description: 'Beauty services, wellness, and personal care training programs.',
                icon: <Sparkles className="w-7 h-7 text-[#F46403] stroke-[1.5]" />,
                image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=600&fit=crop'
              },
              {
                title: 'Entrepreneurship',
                id: 'entrepreneurship',
                description: 'Business development and mentorship for women entrepreneurs to start their own ventures.',
                icon: <Briefcase className="w-7 h-7 text-[#F9D05F] stroke-[1.5]" />,
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
              },
              {
                title: 'Menstrual Health',
                id: 'menstrual-health',
                description: 'Health awareness and eco-friendly menstrual hygiene product promotion.',
                icon: <Droplets className="w-7 h-7 text-[#4E9B71] stroke-[1.5]" />,
                image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop'
              },
            ].map((program, index) => (
              <div
                key={index}
                id={program.id}
                className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-auto snap-center bg-white rounded-[24px] overflow-hidden shadow-[0_18px_40px_rgba(20,12,0,0.12)] border border-[rgba(36,22,1,0.06)] group hover:-translate-y-[5px] transition duration-300 flex flex-col h-full scroll-mt-32"
              >
                <div className="relative h-64 overflow-hidden bg-[#F8F8F0]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                    {program.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-extrabold tracking-[-0.05em] text-[#211600] mb-3">{program.title}</h3>
                  <p className="text-[#6E675A] leading-[1.8] text-base flex-grow">{program.description}</p>
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