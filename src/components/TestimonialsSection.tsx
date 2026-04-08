import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "Advaita Yoga Academy transformed my life. The meditation practice gave me a clarity I never knew was possible.",
    name: "Sarah M.",
    detail: "Yoga & Meditation Student",
  },
  {
    text: "The teacher training program was profound. I now carry the wisdom of this practice into every class I teach.",
    name: "Ravi K.",
    detail: "Certified Yoga Teacher",
  },
  {
    text: "I came for stress relief and found a deeper connection to myself. The mindfulness sessions are truly magical.",
    name: "Elena P.",
    detail: "Mindfulness Practitioner",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3">Voices of Transformation</p>
          <h2 className="heading-lg text-foreground">What Our Students Say</h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 150}>
            <div className="card-calm h-full flex flex-col">
              <Quote className="w-6 h-6 text-gold/50 mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 italic">"{t.text}"</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-heading text-sm text-foreground font-medium">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.detail}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
