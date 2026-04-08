import ScrollReveal from "./ScrollReveal";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";

const instructors = [
  {
    name: "Ananya Sharma",
    role: "Lead Yoga Instructor",
    experience: "15+ years",
    approach: "Combines traditional Hatha with modern alignment techniques for a transformative practice.",
    image: instructor1,
  },
  {
    name: "David Chen",
    role: "Meditation Guide",
    experience: "20+ years",
    approach: "Trained in Vipassana and Zen traditions, guiding students toward deep inner stillness.",
    image: instructor2,
  },
  {
    name: "Priya Nair",
    role: "Mindfulness Coach",
    experience: "12+ years",
    approach: "Specializes in mindful living, breathwork, and integrating awareness into everyday moments.",
    image: instructor3,
  },
];

const InstructorsSection = () => (
  <section id="instructors" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3">Meet Your Guides</p>
          <h2 className="heading-lg text-foreground">Our Instructors</h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {instructors.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 150}>
            <div className="text-center group">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-sage-light group-hover:ring-primary/30 transition-all duration-500">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={640}
                  height={800}
                />
              </div>
              <h3 className="heading-md text-foreground mb-1">{t.name}</h3>
              <p className="font-body text-xs text-primary font-medium mb-1">{t.role}</p>
              <p className="font-body text-xs text-gold font-medium mb-3">{t.experience} experience</p>
              <p className="font-body text-sm text-muted-foreground max-w-xs mx-auto">{t.approach}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default InstructorsSection;
