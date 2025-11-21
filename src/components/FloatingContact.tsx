import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactInfo = {
    phone: "+918087203095",
    whatsapp: "+918087203095",
    message: "I am interested in the Data Science Course",
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${
      contactInfo.whatsapp
    }?text=${encodeURIComponent(contactInfo.message)}`;
    window.open(url, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Floating Options */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-4 invisible"
        }`}
      >
        <div className="bg-card border border-border rounded-xl shadow-lg p-4 w-48 space-y-3">
          <Button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md py-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>

          <Button
            onClick={handleCall}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-md py-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </div>
      </div>

      {/* Main Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="h-14 w-14 rounded-full shadow-xl bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform duration-300"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </Button>
    </div>
  );
};

export default FloatingContact;
