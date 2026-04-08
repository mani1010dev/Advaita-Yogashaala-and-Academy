import { useState } from "react";
import { Leaf, Brain, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: Leaf,
    title: "Yoga",
    subtitle: "Union of Body & Spirit",
    benefits: ["Increased flexibility & strength", "Better posture & alignment", "Stress relief & relaxation"],
    programs: ["Hatha Yoga", "Vinyasa Flow", "Restorative Yoga"],
  },
  {
    icon: Brain,
    title: "Meditation",
    subtitle: "Stillness Within",
    benefits: ["Deep mental clarity", "Emotional balance", "Enhanced focus & awareness"],
    programs: ["Guided Meditation", "Vipassana", "Transcendental Meditation"],
  },
  {
    icon: Heart,
    title: "Mindfulness",
    subtitle: "Present Moment Living",
    benefits: ["Reduced anxiety & stress", "Greater self-awareness", "Improved relationships"],
    programs: ["Mindful Living Course", "Breathwork Sessions", "Walking Meditation"],
  },
];

const PillarsSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section-padding bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3">The Three Pillars</p>
            <h2 className="heading-lg text-foreground">Your Path to Balance</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const isActive = active === i;
            return (
              <ScrollReveal key={p.title} delay={i * 150}>
                <div
                  onClick={() => setActive(isActive ? null : i)}
                  className={`card-calm cursor-pointer ${isActive ? "ring-2 ring-primary/30 shadow-xl" : ""}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="heading-md text-foreground">{p.title}</h3>
                      <p className="font-body text-xs text-muted-foreground">{p.subtitle}</p>
                    </div>
                  </div>

                  <div
                    className="overflow-hidden transition-all duration-700 ease-out"
                    style={{ maxHeight: isActive ? "400px" : "0", opacity: isActive ? 1 : 0 }}
                  >
                    <div className="pt-4 border-t border-border">
                      <p className="font-body text-xs text-primary font-medium uppercase tracking-wider mb-2">Benefits</p>
                      <ul className="space-y-1.5 mb-4">
                        {p.benefits.map((b) => (
                          <li key={b} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <p className="font-body text-xs text-primary font-medium uppercase tracking-wider mb-2">Programs</p>
                      <ul className="space-y-1.5">
                        {p.programs.map((pr) => (
                          <li key={pr} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                            {pr}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="font-body text-xs text-muted-foreground mt-4">
                    {isActive ? "Click to collapse" : "Click to explore"}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
