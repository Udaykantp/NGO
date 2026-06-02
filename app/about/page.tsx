import Header from '@/components/header';
import Footer from '@/components/footer';
import MarketingImageSections from '@/components/marketing-image-sections';
import { Target, Eye, Shield, Briefcase, Heart, Leaf, Handshake } from 'lucide-react';
import TopAnnouncementBar from '@/components/TopAnnouncementBar';


export const metadata = {
  title: 'About Us | Nav Sanyogita Foundation',
  description: 'Learn about our mission, vision, and commitment to empowering women through skill development.',
};

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#FCFCF9] text-[#6E675A] font-sans">
      <Header />

      {/* Hero Section */}
      <section className="w-full relative bg-[#CCD3B1] py-20 md:py-32 overflow-hidden border-b border-[rgba(36,22,1,0.08)]">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.05em] text-[#211600] mb-6">
            About Nav Sanyogita Foundation
          </h1>
          <p className="text-xl md:text-2xl text-[#211600]/80 max-w-3xl mx-auto font-medium mb-12">
            Empowering women through skill development and sustainable livelihood since our inception.
          </p>
          <div className="relative h-64 md:h-96 max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-[0_24px_50px_rgba(20,12,0,0.15)] border border-[rgba(36,22,1,0.06)]">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=600&fit=crop"
              alt="Women skills training"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-[#FCFCF9] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-10 rounded-[24px] shadow-[0_18px_40px_rgba(20,12,0,0.12)] border border-[rgba(36,22,1,0.06)] hover:-translate-y-[5px] transition duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#4D7A4C]"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#4D7A4C] rounded-full flex items-center justify-center text-white shadow-sm">
                  <Target className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h2 className="text-2xl font-extrabold tracking-[-0.05em] text-[#211600]">Our Mission</h2>
              </div>
              <p className="text-[#6E675A] leading-[1.8]">
                To empower women through vocational education, skill development, entrepreneurship programs, and livelihood opportunities while promoting environmental sustainability and social welfare.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-10 rounded-[24px] shadow-[0_18px_40px_rgba(20,12,0,0.12)] border border-[rgba(36,22,1,0.06)] hover:-translate-y-[5px] transition duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#F46403]"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#F46403] rounded-full flex items-center justify-center text-white shadow-sm">
                  <Eye className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h2 className="text-2xl font-extrabold tracking-[-0.05em] text-[#211600]">Our Vision</h2>
              </div>
              <p className="text-[#6E675A] leading-[1.8]">
                To create a society where every woman is economically independent, socially empowered, and has the freedom to shape her own destiny with dignity and self-reliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full bg-[#DEE2CB] py-20 md:py-32 border-y border-[rgba(36,22,1,0.08)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.05em] text-center mb-12 text-[#211600]">Our Story</h2>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p className="text-[#6E675A] leading-[1.8] mb-6">
              Nav Sanyogita Foundation was founded with a clear vision: to empower underprivileged women and transform their lives through education, skill development, and economic opportunity.
            </p>
            <p className="text-[#6E675A] leading-[1.8] mb-6">
              Based in Vaishali, Ghaziabad, our organization works directly with communities to identify needs, develop tailored solutions, and create sustainable pathways to independence and dignity.
            </p>
            <p className="text-[#6E675A] leading-[1.8]">
              Today, we proudly serve women across multiple skill areas, providing training, mentorship, and market linkage that enables them to become entrepreneurs and financial contributors to their families and society.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full bg-[#FCFCF9] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.05em] text-center mb-16 text-[#211600]">Our Values</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: <Shield className="w-8 h-8 text-[#CCD3B1]" />, title: 'Empowerment', desc: 'Enabling women to take control of their futures' },
              { icon: <Briefcase className="w-8 h-8 text-[#CCD3B1]" />, title: 'Professionalism', desc: 'Excellence in training and service delivery' },
              { icon: <Heart className="w-8 h-8 text-[#CCD3B1]" />, title: 'Compassion', desc: 'Understanding and supporting real needs' },
              { icon: <Leaf className="w-8 h-8 text-[#CCD3B1]" />, title: 'Sustainability', desc: 'Creating long-term lasting impact' },
              { icon: <Handshake className="w-8 h-8 text-[#CCD3B1]" />, title: 'Collaboration', desc: 'Partnering for greater good' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[24px] text-center shadow-[0_8px_24px_rgba(20,12,0,0.06)] hover:shadow-[0_18px_40px_rgba(20,12,0,0.12)] hover:-translate-y-[5px] transition duration-300 border border-[rgba(36,22,1,0.06)]">
                <div className="w-16 h-16 mx-auto bg-[#241601] rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-extrabold tracking-[-0.02em] text-[#211600] mb-2">{value.title}</h3>
                <p className="text-sm text-[#6E675A] leading-[1.6]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="w-full bg-[#241601] py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.05em] text-center mb-16 text-[#FCFCF9]">Impact at a Glance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '5000+', label: 'Women Trained', color: '#CCD3B1' },
              { number: '15+', label: 'Skill Programs', color: '#F46403' },
              { number: '50+', label: 'Communities Served', color: '#4D7A4C' },
              { number: '100%', label: 'Success Commitment', color: '#F9D05F' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[24px] text-center hover:bg-white/10 hover:-translate-y-[5px] transition duration-300 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: stat.color }}></div>
                <div className="text-4xl md:text-5xl font-extrabold mb-3 tracking-[-0.02em]" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <p className="text-[#E8EBD8] font-bold text-sm tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarketingImageSections />
      <Footer />
      <TopAnnouncementBar />
    </div>
  );
}
