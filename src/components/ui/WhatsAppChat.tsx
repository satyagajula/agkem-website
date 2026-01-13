'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import Image from 'next/image';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      text: '¡Hola! 👋 Bienvenido a AG KEM. ¿En qué podemos ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const predefinedMessages = [
    '¡Hola! Me gustaría conocer más sobre sus productos',
    'Necesito información sobre precios',
    'Quiero consultar disponibilidad de productos',
    '¿Tienen distribuidores en mi zona?',
  ];

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setShowQuickReplies(false);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: ChatMessage = {
        text: 'Gracias por tu mensaje. Un representante de AG KEM se pondrá en contacto contigo pronto. También puedes contactarnos directamente por WhatsApp o teléfono.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleCustomMessage = () => {
    handleSendMessage(message);
  };

  return (
    <>
      {/* Chat Window - 25% smaller */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[67.5vw] max-w-[285px] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#25D366] p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/Agkem_logoNoBG.png"
                  alt="AG KEM"
                  width={36}
                  height={36}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">AG KEM</h3>
                <p className="text-white/90 text-[10px]">Siempre en línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Cerrar chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div
            ref={chatBodyRef}
            className="bg-[#E5DDD5] p-3 h-[300px] overflow-y-auto scroll-smooth"
          >
            {/* Chat Messages */}
            <div className="space-y-2">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-lg p-2 shadow-sm max-w-[85%] ${
                      msg.sender === 'user'
                        ? 'bg-[#DCF8C6] rounded-tr-none'
                        : 'bg-white rounded-tl-none'
                    }`}
                  >
                    <p className="text-gray-800 text-xs leading-relaxed">
                      {msg.text}
                    </p>
                    <p className="text-[9px] text-gray-500 mt-1 text-right">
                      {msg.timestamp.toLocaleTimeString('es-MX', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Reply Buttons */}
            {showQuickReplies && (
              <div className="space-y-1.5 mt-3">
                {predefinedMessages.map((msg, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(msg)}
                    className="w-full bg-white hover:bg-gray-50 rounded-lg p-2 text-left text-[11px] text-gray-700 shadow-sm transition-colors border border-gray-200"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-white p-2 border-t border-gray-200">
            <div className="flex items-center gap-1.5">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleCustomMessage();
                  }
                }}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-1.5 border border-gray-300 rounded-full focus:outline-none focus:border-[#25D366] text-xs"
              />
              <button
                onClick={handleCustomMessage}
                disabled={!message.trim()}
                className="bg-[#25D366] hover:bg-[#20BA5A] disabled:bg-gray-300 text-white rounded-full p-1.5 transition-colors"
                aria-label="Enviar mensaje"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button - 25% smaller */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3 shadow-2xl z-50 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label={isOpen ? 'Cerrar chat de WhatsApp' : 'Abrir chat de WhatsApp'}
      >
        {isOpen ? <X size={21} /> : <MessageCircle size={21} />}

        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        )}
      </button>
    </>
  );
};

export default WhatsAppChat;
