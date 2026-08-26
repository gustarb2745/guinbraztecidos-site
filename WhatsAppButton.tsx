import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phone = "5518981607075";
  const message = encodeURIComponent("Olá! Vim pelo site e gostaria de mais informações.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}