import ScrollReveal from "./ScrollReveal";

const BreathingCircle = () => {
  return (
    <section className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3">Pause & Breathe</p>
          <h2 className="heading-lg text-foreground mb-4">Breathing Circle</h2>
          <p className="font-body text-sm text-muted-foreground mb-12">
            Sync your breath with the circle. Inhale as it expands. Exhale as it contracts.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-sage-light animate-breathe" />
              {/* Middle ring */}
              <div
                className="absolute rounded-full border border-gold/30 animate-breathe"
                style={{ width: "70%", height: "70%", animationDelay: "0.3s" }}
              />
              {/* Inner circle */}
              <div
                className="w-16 h-16 rounded-full bg-sage-light/60 animate-breathe flex items-center justify-center"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="w-4 h-4 rounded-full bg-primary/40" />
              </div>
            </div>
          </div>
          <p className="font-body text-xs text-muted-foreground mt-8 italic">
            "Breath is the bridge between body and soul."
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BreathingCircle;
