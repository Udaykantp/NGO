import React from 'react';

type ImageSection = {
  img: string;
  title: string;
};

const sections: ImageSection[] = [
  {
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=800&fit=crop',
    title: 'Skill Training → Real Independence',
  },
  {
    img: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=1200&h=800&fit=crop',
    title: 'Women-Made Products, Made with Love',
  },
  {
    img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&h=800&fit=crop',
    title: 'Community Support That Keeps Growing',
  },
  {
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    title: 'Your Contribution Creates Lasting Change',
  },
];

export default function MarketingImageSections() {
  return (
    <section className="w-full bg-[#FCFCF9] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.05em] text-[#211600] mb-4">
            Highlights
          </h2>
          <p className="text-[#6E675A] max-w-2xl mx-auto leading-[1.8] text-lg">
            Four quick moments of impact—light content, beautiful images.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((s, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[24px] shadow-[0_18px_40px_rgba(20,12,0,0.12)] hover:-translate-y-[5px] border border-[rgba(36,22,1,0.06)] transition duration-300 cursor-pointer"
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241601]/80 via-[#241601]/20 to-transparent opacity-90 group-hover:opacity-100 transition duration-300" />
              <div className="absolute left-6 right-6 bottom-6">
                <p className="text-white font-extrabold tracking-[-0.02em] text-xl drop-shadow-sm">
                  {s.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
