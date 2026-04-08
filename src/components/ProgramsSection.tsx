import ScrollReveal from "./ScrollReveal";

const programs = [
  { title: "Beginner Yoga", desc: "Gentle introduction to foundational poses, breathing, and alignment for new practitioners." },
  { title: "Advanced Yoga", desc: "Deepen your practice with challenging sequences, inversions, and advanced pranayama." },
  { title: "Meditation Classes", desc: "Guided sessions to cultivate inner stillness, clarity, and emotional resilience." },
  { title: "Mindfulness Sessions", desc: "Learn to bring present-moment awareness into every aspect of daily life." },
  { title: "Teacher Training", desc: "Comprehensive 200-hour certification for aspiring yoga teachers and leaders." },
];

const ProgramsSection = () => (
  <section id="programs" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-10 md:mb-16">
          <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3">What We Offer</p>
          <h2 className="heading-lg text-foreground">Our Programs</h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 100}>
            <div className="card-calm group h-full">
              <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-500">
                <span className="font-heading text-sm text-accent-foreground font-semibold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="heading-md text-foreground mb-3">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
