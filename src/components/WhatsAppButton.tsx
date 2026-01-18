import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '919204909192';
  const message = 'Hello! I would like to enquire about Hilsa Heritage banquet hall services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white fill-white" />
    </a>
  );
};

export default WhatsAppButton;
