'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MarketingImageSections from '@/components/marketing-image-sections';

import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/9891075655?text=${whatsappMessage}`, '_blank');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="w-full min-h-screen bg-[#F7EBE0]">
      <Header />

      {/* Hero Section */}
      <section className="w-full relative bg-gradient-to-r from-[#6A2A43] to-[#C53357] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">Get in touch with us. We'd love to hear from you and answer any questions.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#6A2A43] mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#6A2A43] mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#D2BEB5] rounded-lg focus:outline-none focus:border-[#C53357] transition bg-[#F7EBE0]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#6A2A43] mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#D2BEB5] rounded-lg focus:outline-none focus:border-[#C53357] transition bg-[#F7EBE0]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#6A2A43] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#D2BEB5] rounded-lg focus:outline-none focus:border-[#C53357] transition bg-[#F7EBE0]"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#6A2A43] mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#D2BEB5] rounded-lg focus:outline-none focus:border-[#C53357] transition bg-[#F7EBE0]"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#6A2A43] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#D2BEB5] rounded-lg focus:outline-none focus:border-[#C53357] transition bg-[#F7EBE0] resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#C53357] hover:bg-[#6A2A43] text-white font-bold py-3 rounded-lg transition shadow-lg"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#6A2A43] mb-8">Contact Information</h2>
              
              {/* Address */}
              <div className="mb-8 p-6 bg-[#F7EBE0] rounded-lg border-l-4 border-[#CF8322]">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#CF8322] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#6A2A43] mb-2">Office Address</h3>
                    <p className="text-gray-700">
                      Plot No - 469, Ground Floor,<br />
                      Opposite Chandra Laxmi Hospital,<br />
                      Sector - 4, Vaishali, Ghaziabad<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8 p-6 bg-[#F7EBE0] rounded-lg border-l-4 border-[#CF8322]">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#CF8322] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#6A2A43] mb-2">Phone</h3>
                    <a href="tel:9891075655" className="text-[#C53357] font-bold hover:text-[#6A2A43] transition text-lg">
                      9891075655
                    </a>
                    <p className="text-gray-700 text-sm mt-1">Available Mon-Sat: 9AM-6PM IST</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8 p-6 bg-[#F7EBE0] rounded-lg border-l-4 border-[#CF8322]">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#CF8322] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#6A2A43] mb-2">Email</h3>
                    <a href="mailto:contact@navsanyogita.org" className="text-[#C53357] font-bold hover:text-[#6A2A43] transition">
                      contact@navsanyogita.org
                    </a>
                    <p className="text-gray-700 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 bg-gradient-to-br from-[#6A2A43] to-[#C53357] rounded-lg text-white">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Facebook', icon: '📘' },
                    { name: 'Instagram', icon: '📷' },
                    { name: 'Twitter', icon: '𝕏' },
                    { name: 'LinkedIn', icon: '💼' },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition font-semibold"
                    >
                      {social.icon} {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#F7EBE0] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A2A43] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I enroll in a program?',
                a: 'You can contact us via WhatsApp, phone, or email. We&apos;ll provide information about program schedules, fees, and enrollment requirements.'
              },
              {
                q: 'Are the programs free?',
                a: 'Program fees are minimal and subsidized for low-income women. We also offer scholarship and payment plans for eligible candidates.'
              },
              {
                q: 'How long are the programs?',
                a: 'Program duration varies from 1-6 months depending on the skill. Most programs are 2-3 months with flexible scheduling options.'
              },
              {
                q: 'Do you provide job placement?',
                a: 'Yes! We provide job placement assistance and help connect graduates with employers. We also support those interested in starting their own businesses.'
              },
              {
                q: 'How can I purchase products?',
                a: 'You can browse our shop section and click any product to order via WhatsApp. We deliver across India with secure payment options.'
              },
              {
                q: 'How can I support your mission?',
                a: 'You can donate, volunteer, purchase our products, or recommend our programs to others. Every contribution makes a difference!'
              },
            ].map((item: any, idx: number) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C53357]">
                <h3 className="text-lg font-bold text-[#6A2A43] mb-3">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#6A2A43] to-[#C53357] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8">Join us in empowering women. Whether you want to learn, teach, donate, or volunteer—there's a way for you to be part of this movement.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/programs" className="bg-[#CF8322] hover:bg-white hover:text-[#6A2A43] text-white font-bold px-8 py-3 rounded-lg transition">
              Explore Programs
            </a>
            <a href="https://wa.me/9891075655?text=Hello! I want to volunteer with Nav Sanyogita Foundation." target="_blank" rel="noopener noreferrer" className="bg-white text-[#6A2A43] hover:bg-[#F7EBE0] font-bold px-8 py-3 rounded-lg transition">
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>

      <MarketingImageSections />
      <Footer />
    </div>
  );
}

