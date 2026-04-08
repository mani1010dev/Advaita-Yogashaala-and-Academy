import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay for a premium entry
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in learning more about Advaita Yogashaala and Academy.");
    window.open(`https://wa.me/919500055350?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "fixed bottom-8 right-8 z-[60] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none" />
      <span className="absolute inset-[-4px] rounded-full border border-[#25D366]/20 animate-pulse group-hover:animate-none" />
      
      <MessageCircle size={28} className="relative z-10 fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
    </button>
  );
};

export default FloatingWhatsApp;
