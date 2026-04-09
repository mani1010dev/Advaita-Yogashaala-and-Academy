import ScrollReveal from "./ScrollReveal";

const UpcomingEventsSection = () => {
  const posters = [
    { src: "/posters/poster-1.jpeg", alt: "Advaita Yoga Poster 1" },
    { src: "/posters/poster-2.jpeg", alt: "Advaita Yoga Poster 2" },
    { src: "/posters/poster-3.jpeg", alt: "Advaita Yoga Poster 3" },
  ];

  return (
    <section id="events" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3">Join Us</p>
            <h2 className="heading-lg text-foreground mb-4">Upcoming Events & Workshops</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our latest special classes, community gatherings, and wellness workshops designed to deepen your practice.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posters.map((poster, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Poster container with aspect ratio suited for portrait or square posters */}
                <div className="aspect-[3/4] sm:aspect-[4/5] bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={poster.src}
                    alt={poster.alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
