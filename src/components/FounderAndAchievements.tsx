import ScrollReveal from "./ScrollReveal";
import { Award, Star, Heart } from "lucide-react";

const FounderAndAchievements = () => {
  return (
    <section id="founder" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Founder Profile Area */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none z-10" />
                <img 
                  src="/photos/pdf/advaita-page-2.png" 
                  alt="Dr. Rathna Barath - Founder" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          </div>
          
          <div className="w-full lg:w-1/2">
            <ScrollReveal delay={200}>
              <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3">Our Founder</p>
              <h2 className="heading-lg text-foreground mb-6">Dr. Rathna Barath</h2>
              <div className="w-12 h-0.5 bg-gold mb-6" />
              
              <div className="space-y-4 text-body text-muted-foreground">
                <p>
                  The journey of Advaita Yogalayam began with a profound vision to share the transformative power of authentic yoga. Dr. Rathna Barath has dedicated her life to mastering and teaching these ancient sciences, tailoring them for modern wellbeing.
                </p>
                <p>
                  With years of rigorous practice and thousands of students trained, she stands as a beacon of discipline, compassion, and yogic wisdom in our community. Her mission is to illuminate the path of self-discovery and holistic health for everyone.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Achievements / Awards Grid */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3">Recognition</p>
            <h2 className="heading-md text-foreground">Awards & Achievements</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              src: "/photos/pdf/advaita-page-3.png",
              title: "Award Ceremony & Recognition",
              description: "Eminent recognition for outstanding contributions to community health through yoga."
            },
            {
              src: "/photos/pdf/advaita-page-4.png",
              title: "Noble Seva Ratna Award",
              description: "Honored with the Noble Seva Ratna Award in 2021 for selfless service."
            },
            {
              src: "/photos/pdf/advaita-page-5.png",
              title: "Nova World Records",
              description: "Proud recipient of the Nova World Records Pride Award in 2022."
            }
          ].map((award, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="group bg-background rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden relative">
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={award.src} 
                    alt={award.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-heading font-medium text-foreground mb-2">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderAndAchievements;
