import ScrollReveal from "./ScrollReveal";

const AboutSection = () => (
  <section id="about" className="section-padding bg-muted/50">
    <div className="max-w-4xl mx-auto text-center">
      <ScrollReveal>
        <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3">Our Philosophy</p>
        <h2 className="heading-lg text-foreground mb-8">The Meaning of Advaita</h2>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="text-body text-muted-foreground mb-6">
          <span className="font-heading italic text-foreground">Advaita</span> — the ancient Sanskrit word for
          "non-duality" — teaches us that the separation we perceive between self and universe is an illusion.
          At Advaita Yoga Academy, we guide you back to this fundamental truth.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Inner Awareness", text: "Cultivate a deep, compassionate relationship with your true self through consistent practice." },
            { title: "Holistic Wellbeing", text: "Nourish body, mind, and spirit as interconnected dimensions of your whole being." },
            { title: "Living Wisdom", text: "Integrate timeless yogic philosophy into modern life for lasting transformation." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-12 h-0.5 bg-gold mx-auto mb-5" />
              <h3 className="heading-md text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSection;
