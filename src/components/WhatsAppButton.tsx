import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // WhatsApp link - replace with your actual WhatsApp number
  const whatsappLink = "https://wa.me/917799188869";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;