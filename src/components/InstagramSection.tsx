import ScrollReveal from "./ScrollReveal";
import { Instagram } from "lucide-react";
import { useEffect } from "react";

const InstagramSection = () => {
  useEffect(() => {
    // Manually trigger Instagram embed processing on component mount
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section id="instagram" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3 text-center">Get Social</p>
            <h2 className="heading-lg text-foreground text-center">Follow Our Journey</h2>
            <p className="text-body text-muted-foreground mt-4 max-w-2xl mx-auto text-center">
              Stay connected with our community and witness the moments of transformation at Advaita Yogashaala.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 items-start justify-center max-w-4xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="flex justify-center w-full min-h-[400px]">
              <div className="w-full max-w-[360px]">
                <blockquote 
                  className="instagram-media w-full" 
                  data-instgrm-captioned 
                  data-instgrm-permalink="https://www.instagram.com/p/C3Jm-t_hIbV/?utm_source=ig_embed&amp;utm_campaign=loading" 
                  data-instgrm-version="14"
                >
                  <a href="https://www.instagram.com/p/C3Jm-t_hIbV/">View post on Instagram</a>
                </blockquote>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex justify-center w-full min-h-[400px]">
              <div className="w-full max-w-[360px]">
                <blockquote 
                  className="instagram-media w-full" 
                  data-instgrm-captioned 
                  data-instgrm-permalink="https://www.instagram.com/p/CxF8NQ7SFlO/?utm_source=ig_embed&amp;utm_campaign=loading" 
                  data-instgrm-version="14"
                >
                  <a href="https://www.instagram.com/p/CxF8NQ7SFlO/">View post on Instagram</a>
                </blockquote>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-16 text-center">
            <a 
              href="https://www.instagram.com/advaita_dance_studio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline flex items-center justify-center gap-2 mx-auto w-fit"
            >
              <Instagram size={20} />
              Follow @advaita_dance_studio
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InstagramSection;
