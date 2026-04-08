import heroBg from "@/assets/hero-bg-yoga.png";

const particles = Array.from({ length: 8 }, (_, i) => i);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-0">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Peaceful yoga studio with natural light"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Lighter, brighter overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-brightness-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-background/50" />
      </div>

      {/* Floating particles */}
      {particles.map((i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/40 animate-float-particle"
          style={{
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Brilliant sun glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px] animate-gentle-glow" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-8 md:mt-0">
        <p className="font-body text-xs md:text-base text-primary tracking-[0.3em] uppercase mb-4 md:mb-6 animate-fade-in-up">
          Advaita Yogashaala and Academy
        </p>
        <h1 className="heading-xl text-foreground mb-4 md:mb-6 animate-fade-in-up animation-delay-200">
          Discover Inner Peace<br />& Wisdom
        </h1>
        <p className="text-body text-muted-foreground max-w-xl mx-auto mb-8 md:mb-10 animate-fade-in-up animation-delay-400">
          A space for transformation through Yoga, Meditation, and Mindfulness.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <a href="#book" className="btn-primary">Start Your Journey</a>
          <a href="#programs" className="btn-outline">Explore Programs</a>
        </div>
      </div>

      {/* Breathing circle hint */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-fade-in-up animation-delay-1200">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary/40 animate-breathe flex items-center justify-center">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
