import ScrollReveal from "./ScrollReveal";
const images = [
  { src: "/photos/pdf/advaita-page-8.png", alt: "Mass yoga event and demonstration" },
  { src: "/photos/pdf/advaita-page-9.png", alt: "Advaita students community class" },
  { src: "/photos/pdf/advaita-page-12.png", alt: "Advaita yogashaala group photo" },
  { src: "/photos/pdf/advaita-page-14.png", alt: "Yoga practitioners gathering" },
  { src: "/photos/pdf/advaita-page-18.png", alt: "Community alignment and practice" },
  { src: "/photos/pdf/advaita-page-22.png", alt: "Children's yoga session" },
  { src: "/photos/WhatsApp Image 2026-04-08 at 3.06.38 PM.jpeg", alt: "Students engaging in activities" },
  { src: "/photos/WhatsApp Image 2026-04-08 at 3.06.52 PM.jpeg", alt: "Classroom learning session" },
  { src: "/photos/WhatsApp Image 2026-04-08 at 3.07.10 PM.jpeg", alt: "Creative work" },
  { src: "/photos/WhatsApp Image 2026-04-08 at 3.07.25 PM.jpeg", alt: "Group playing time" },
  { src: "/photos/WhatsApp Image 2026-04-08 at 3.07.36 PM.jpeg", alt: "Art and craft activity" },
  { src: "/photos/WhatsApp Image 2026-04-08 at 3.07.49 PM.jpeg", alt: "Outdoor games and fun" },
  { src: "/photos/WhatsApp Image 2026-04-08 at 3.08.03 PM.jpeg", alt: "Teacher with students" },
  { src: "/photos/WhatsApp Image 2026-04-08 at 3.08.19 PM.jpeg", alt: "Indoor play area" },
  { src: "/photos/WhatsApp Image 2026-04-08 at 3.08.33 PM.jpeg", alt: "Storytelling session" },
  { src: "/photos/WhatsApp Image 2026-04-08 at 3.09.02 PM.jpeg", alt: "Kids learning together" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3">Our Space</p>
          <h2 className="heading-lg text-foreground">Gallery</h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="rounded-2xl overflow-hidden group aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={800}
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
