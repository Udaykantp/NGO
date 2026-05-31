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
      <section className="w-full relative bg-[#CCD3B1] py-20 md:py-32 overflow-hidden border-b border-[rgba(36,22,1,0.08)]">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.05em] text-[#211600] mb-6">
            Our Programs & Skills
          </h1>
          <p className="text-xl md:text-2xl text-[#211600]/80 max-w-3xl mx-auto font-medium">
            We offer comprehensive training programs designed to provide women with practical skills, leading to economic independence and self-reliance.
          </p>
        </div>
      </section>

      {/* Programs List Section */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Tailoring & Stitching',
                description: 'Professional tailoring and stitching training for women to gain employment and start businesses.',
                icon: <Scissors className="w-7 h-7 text-[#F46403] stroke-[1.5]" />,
                image: 'https://images.unsplash.com/photo-1595568022181-92d282ce6134?w=800&h=600&fit=crop'
              },
              {
                title: 'Handicrafts & Embroidery',
                description: 'Traditional art forms combined with modern techniques for creative income generation.',
                icon: <Palette className="w-7 h-7 text-[#F9D05F] stroke-[1.5]" />,
                image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&h=600&fit=crop'
              },
              {
                title: 'Digital Literacy',
                description: 'Essential computer and internet skills to help women participate in the digital economy.',
                icon: <Laptop className="w-7 h-7 text-[#4E9B71] stroke-[1.5]" />,
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
              },
              {
                title: 'Beauty & Wellness',
                description: 'Beauty services, wellness, and personal care training programs.',
                icon: <Sparkles className="w-7 h-7 text-[#F46403] stroke-[1.5]" />,
                image: 'https://images.unsplash.com/photo-1596885642239-c3b8fb8b0c84?w=800&h=600&fit=crop'
              },
              {
                title: 'Entrepreneurship',
                description: 'Business development and mentorship for women entrepreneurs to start their own ventures.',
                icon: <Briefcase className="w-7 h-7 text-[#F9D05F] stroke-[1.5]" />,
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
              },
              {
                title: 'Menstrual Health',
                description: 'Health awareness and eco-friendly menstrual hygiene product promotion.',
                icon: <Droplets className="w-7 h-7 text-[#4E9B71] stroke-[1.5]" />,
                image: 'https://images.unsplash.com/photo-1631217174694-f8a9f2ee0c87?w=800&h=600&fit=crop'
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] overflow-hidden shadow-[0_18px_40px_rgba(20,12,0,0.12)] border border-[rgba(36,22,1,0.06)] group hover:-translate-y-[5px] transition duration-300"
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
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold tracking-[-0.05em] text-[#211600] mb-3">{program.title}</h3>
                  <p className="text-[#6E675A] leading-[1.8] text-base">{program.description}</p>
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