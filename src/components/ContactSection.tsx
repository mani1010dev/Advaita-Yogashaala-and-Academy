import { Phone, MapPin, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-muted/50">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3">Reach Out</p>
          <h2 className="heading-lg text-foreground">Contact Us</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Phone, label: "Phone", value: "+91 95000 55350", href: "tel:+919500055350" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919500055350" },
            { 
              icon: MapPin, 
              label: "Location", 
              value: "Anna Nagar, Chennai", 
              href: "https://maps.google.com/?q=76,+Lakshmi+Street,+Agathiyar+Nagar+Extension+1st+St,+Anna+Nagar,+Chennai,+Tamil+Nadu+600049" 
            },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <a key={c.label} href={c.href} className="card-calm flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</p>
                <p className="font-body text-sm text-foreground">{c.value}</p>
              </a>
            );
          })}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ContactSection;
