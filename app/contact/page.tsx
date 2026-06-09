import Header from '@/components/header';
import Footer from '@/components/footer';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import MarketingImageSections from '@/components/marketing-image-sections';

export const metadata = {
  title: 'Contact Us | Nav Sanyogita Foundation',
  description: 'Get in touch with Nav Sanyogita Foundation. We would love to hear from you.',
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[#FCFCF9] text-[#6E675A] font-sans">
      <Header />

      {/* Hero Section */}
      <section className="w-full relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-gray-900">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515378960530-7c0da6229674?w=1920&h=800&fit=crop"
            alt="Contact Nav Sanyogita Foundation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.05em] mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-md">
            Have a question about our programs, want to volunteer, or interested in custom orders? We'd love to hear from you.
          </p>
        </div>

        {/* Smooth Wavy Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px] block">
            <path fill="#FCFCF9" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-[#211600] mb-6">
                Get In Touch
              </h2>
              <p className="text-[#6E675A] leading-[1.8] mb-10">
                Whether you're looking to support our cause, join our skill development programs, or simply want to learn more about our mission, our team is ready to answer all your questions.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F8F8F0] text-[#F46403] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-[rgba(36,22,1,0.06)]">
                    <MapPin className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#211600] mb-1">Our Location</h3>
                    <p className="text-[#6E675A] leading-[1.6]">
                      Plot No - 469, Ground Floor, Opposite Chandra Laxmi Hospital, Sector - 4, Vaishali, Ghaziabad
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F8F8F0] text-[#4D7A4C] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-[rgba(36,22,1,0.06)]">
                    <Phone className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#211600] mb-1">Phone</h3>
                    <a href="tel:9891075655" className="text-[#6E675A] hover:text-[#F46403] transition leading-[1.6]">
                      +91 98910 75655
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F8F8F0] text-[#F46403] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-[rgba(36,22,1,0.06)]">
                    <Mail className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#211600] mb-1">Email</h3>
                    <a href="mailto:contact@navsanyogita.org" className="text-[#6E675A] hover:text-[#F46403] transition leading-[1.6]">
                      contact@navsanyogita.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_18px_40px_rgba(20,12,0,0.12)] border border-[rgba(36,22,1,0.06)]">
              <h3 className="text-2xl font-extrabold tracking-[-0.05em] text-[#211600] mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-[#211600] mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-[#FCFCF9] border border-[rgba(36,22,1,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#F46403] focus:ring-1 focus:ring-[#F46403] transition" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-[#211600] mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-[#FCFCF9] border border-[rgba(36,22,1,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#F46403] focus:ring-1 focus:ring-[#F46403] transition" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#211600] mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full bg-[#FCFCF9] border border-[rgba(36,22,1,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#F46403] focus:ring-1 focus:ring-[#F46403] transition" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#211600] mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-[#FCFCF9] border border-[rgba(36,22,1,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#F46403] focus:ring-1 focus:ring-[#F46403] transition resize-none" placeholder="How can we help you?"></textarea>
                </div>
              <button type="button" className="w-full bg-[#F46403] hover:bg-[#D95200] text-white font-bold px-8 py-4 rounded-full transition duration-300 shadow-md flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <MarketingImageSections />
      <Footer />
    </div>
  );
}