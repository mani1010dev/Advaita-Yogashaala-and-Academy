const Footer = () => (
  <footer className="px-6 py-12 text-center border-t border-border">
    <div className="flex justify-center mb-6">
      <img 
        src="/play school logo.png" 
        alt="Advaita Yogashaala and Academy" 
        className="h-16 w-auto object-contain brightness-90" 
      />
    </div>
    <p className="font-heading text-lg text-foreground mb-2">
      Advaita <span className="text-primary">Yogashaala</span> and Academy
    </p>
    <p className="font-body text-xs text-muted-foreground">
      © {new Date().getFullYear()} Advaita Yogashaala and Academy. All rights reserved.
    </p>
  </footer>
);

export default Footer;
