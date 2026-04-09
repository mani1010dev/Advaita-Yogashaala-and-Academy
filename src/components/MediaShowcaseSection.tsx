import ScrollReveal from "./ScrollReveal";
import { Play } from "lucide-react";

const MediaShowcaseSection = () => {
  return (
    <section id="media-showcase" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto text-center px-4">
        <ScrollReveal>
          <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3">Experience</p>
          <h2 className="heading-lg text-foreground mb-12">A Glimpse of the Practice</h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group aspect-video bg-muted/30">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/photos/pdf/advaita-page-8.png"
              preload="metadata"
            >
              <source src="/advaita-promo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play button overlay that disappears when native controls take over, we'll just rely on native controls for simplicity, but a nice poster helps */}
          </div>
          
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <p className="text-body text-muted-foreground">
              Witness the energy and dedication of our students. We provide a space where individuals can explore their limits, find inner peace, and connect with a like-minded community.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MediaShowcaseSection;
