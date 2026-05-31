import React from 'react';

type ImageSection = {
  img: string;
  title: string;
};

const sections: ImageSection[] = [
  {
    img: 'https://images.unsplash.com/photo-1520975958225-9f1b6dd6f0a4?w=1200&h=800&fit=crop',
    title: 'Skill Training → Real Independence',
  },
  {
    img: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=1200&h=800&fit=crop',
    title: 'Women-Made Products, Made with Love',
  },
  {
    img: 'https://images.unsplash.com/photo-1543269865-cbfdb2d7a0c7?w=1200&h=800&fit=crop',
    title: 'Community Support That Keeps Growing',
  },
  {
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    title: 'Your Contribution Creates Lasting Change',
  },
];

export default function MarketingImageSections() {
  return (
    <section className="w-full bg-[#F7EBE0] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[#6A2A43] mb-3">
            Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium tracking-wide">
            Four quick moments of impact—light content, beautiful images.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((s, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-72 md:h-80 object-cover group-hover:scale-110 transition duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5">
                <p className="text-white font-semibold tracking-wide text-lg drop-shadow">
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
