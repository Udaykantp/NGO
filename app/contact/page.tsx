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
      <section className="w-full relative bg-[#CCD3B1] py-20 md:py-32 overflow-hidden border-b border-[rgba(36,22,1,0.08)]">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.05em] text-[#211600] mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-[#211600]/80 max-w-3xl mx-auto font-medium">
            Have a question about our programs, want to volunteer, or interested in custom orders? We'd love to hear from you.
          </p>
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