const Footer = () => (
  <footer className="px-6 py-16 text-center bg-[#0a192f] border-t border-white/10">
    <div className="flex justify-center mb-8">
      <img 
        src="/yoga logo.png" 
        alt="Advaita Yogashaala and Academy" 
        className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-500" 
      />
    </div>
    <p className="font-heading text-2xl text-white mb-3">
      Advaita <span className="text-primary font-body">Yogashala</span>
    </p>
    <p className="font-body text-xs text-white/50 tracking-widest uppercase">
      © {new Date().getFullYear()} Advaita Yogashala. All rights reserved.
    </p>
  </footer>
);

export default Footer;
