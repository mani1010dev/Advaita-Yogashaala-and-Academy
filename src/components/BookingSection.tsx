import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const BookingSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book" className="section-padding bg-muted/50">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-body text-sm text-primary tracking-[0.2em] uppercase mb-3">Begin Today</p>
            <h2 className="heading-lg text-foreground">Book a Session</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {submitted ? (
            <div className="text-center card-calm">
              <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="heading-md text-foreground mb-2">Namaste!</h3>
              <p className="font-body text-sm text-muted-foreground">
                Thank you for reaching out. We'll connect with you soon on your journey.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-calm space-y-5">
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1.5 block">Full Name</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1.5 block">Phone</label>
                <input
                  required
                  type="tel"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1.5 block">Program</label>
                <select
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                >
                  <option value="">Select a program</option>
                  <option>Beginner Yoga</option>
                  <option>Advanced Yoga</option>
                  <option>Meditation Classes</option>
                  <option>Mindfulness Sessions</option>
                  <option>Teacher Training</option>
                </select>
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  rows={3}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Start Your Journey
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BookingSection;
