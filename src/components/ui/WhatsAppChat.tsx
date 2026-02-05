'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showContactForm, setShowContactForm] = useState(true);
  const [userName, setUserName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    code: 'MX',
    name: 'México',
    flag: '🇲🇽',
    dialCode: '+52'
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      text: '¡Hola! 👋 Bienvenido a AG KEM. ¿En qué podemos ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [showQuickReplies, setShowQuickReplies] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countries: Country[] = [
    { code: 'AR', name: 'Argentina', flag: '🇦🇷', dialCode: '+54' },
    { code: 'BR', name: 'Brasil', flag: '🇧🇷', dialCode: '+55' },
    { code: 'CL', name: 'Chile', flag: '🇨🇱', dialCode: '+56' },
    { code: 'CO', name: 'Colombia', flag: '🇨🇴', dialCode: '+57' },
    { code: 'CR', name: 'Costa Rica', flag: '🇨🇷', dialCode: '+506' },
    { code: 'EC', name: 'Ecuador', flag: '🇪🇨', dialCode: '+593' },
    { code: 'SV', name: 'El Salvador', flag: '🇸🇻', dialCode: '+503' },
    { code: 'ES', name: 'España', flag: '🇪🇸', dialCode: '+34' },
    { code: 'US', name: 'Estados Unidos', flag: '🇺🇸', dialCode: '+1' },
    { code: 'GT', name: 'Guatemala', flag: '🇬🇹', dialCode: '+502' },
    { code: 'HN', name: 'Honduras', flag: '🇭🇳', dialCode: '+504' },
    { code: 'IN', name: 'India', flag: '🇮🇳', dialCode: '+91' },
    { code: 'MX', name: 'México', flag: '🇲🇽', dialCode: '+52' },
    { code: 'NI', name: 'Nicaragua', flag: '🇳🇮', dialCode: '+505' },
    { code: 'PA', name: 'Panamá', flag: '🇵🇦', dialCode: '+507' },
    { code: 'PY', name: 'Paraguay', flag: '🇵🇾', dialCode: '+595' },
    { code: 'PE', name: 'Perú', flag: '🇵🇪', dialCode: '+51' },
    { code: 'DO', name: 'República Dominicana', flag: '🇩🇴', dialCode: '+1-809' },
    { code: 'UY', name: 'Uruguay', flag: '🇺🇾', dialCode: '+598' },
    { code: 'VE', name: 'Venezuela', flag: '🇻🇪', dialCode: '+58' },
  ];

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !phoneNumber.trim()) return;

    // Hide contact form and show quick replies
    setShowContactForm(false);
    setShowQuickReplies(true);

    // Add a welcome message with user's name
    const welcomeMessage: ChatMessage = {
      text: `¡Hola ${userName}! 👋 Gracias por contactarnos. Por favor, selecciona una de las opciones a continuación o escribe tu consulta.`,
      sender: 'bot',
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, welcomeMessage]);
  };

  const handleQuickReplyClick = (msg: string) => {
    // Format the message with user details
    const fullMessage = `Hola, soy ${userName}.\nMi número es: ${selectedCountry.dialCode} ${phoneNumber}\n\n${msg}`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(fullMessage);

    // Open WhatsApp with the customer service number
    const whatsappUrl = `https://wa.me/523318508512?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCustomMessage = () => {
    if (!message.trim()) return;

    // Format the message with user details
    const fullMessage = `Hola, soy ${userName}.\nMi número es: ${selectedCountry.dialCode} ${phoneNumber}\n\n${message.trim()}`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(fullMessage);

    // Open WhatsApp with the customer service number
    const whatsappUrl = `https://wa.me/523318508512?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    // Clear the message input
    setMessage('');
  };

  const handleOpenChat = () => {
    setIsOpen(!isOpen);
    // Reset to contact form when reopening
    if (!isOpen) {
      setShowContactForm(true);
      setShowQuickReplies(false);
      setUserName('');
      setPhoneNumber('');
      setMessage('');
      setChatMessages([
        {
          text: '¡Hola! 👋 Bienvenido a AG KEM. ¿En qué podemos ayudarte hoy?',
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }
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
            {showContactForm ? (
              /* Contact Form */
              <form onSubmit={handleContactFormSubmit} className="space-y-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-xs text-gray-700 mb-3">
                    Por favor, completa tus datos para continuar:
                  </p>

                  {/* Name Field */}
                  <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Tu nombre completo"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#25D366] text-xs"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Número de teléfono
                    </label>
                    <div className="flex gap-2">
                      {/* Country Code Dropdown */}
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                          className="flex items-center gap-1 px-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:border-[#25D366] text-xs"
                        >
                          <span className="text-base">{selectedCountry.flag}</span>
                          <span className="text-xs">{selectedCountry.dialCode}</span>
                          <ChevronDown size={12} />
                        </button>

                        {/* Dropdown Menu */}
                        {showCountryDropdown && (
                          <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto z-50">
                            {countries.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setShowCountryDropdown(false);
                                }}
                                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 text-left text-xs"
                              >
                                <span className="text-base">{country.flag}</span>
                                <span className="flex-1">{country.name}</span>
                                <span className="text-gray-500">{country.dialCode}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Phone Number Input */}
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                        placeholder="Número de teléfono"
                        required
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#25D366] text-xs"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium py-2 rounded-lg transition-colors text-xs"
                  >
                    Continuar
                  </button>
                </div>
              </form>
            ) : (
              <>
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
                        <p className="text-gray-800 text-xs leading-relaxed whitespace-pre-line">
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
                        onClick={() => handleQuickReplyClick(msg)}
                        className="w-full bg-white hover:bg-gray-50 rounded-lg p-2 text-left text-[11px] text-gray-700 shadow-sm transition-colors border border-gray-200"
                      >
                        {msg}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Input Area - Only show after contact form is submitted */}
          {!showContactForm && (
            <div className="bg-white p-2 border-t border-gray-200">
              <div className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
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
          )}
        </div>
      )}

      {/* Chat Button - 25% smaller */}
      <button
        onClick={handleOpenChat}
        className="fixed bottom-4 right-4 sm:right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3 shadow-2xl z-50 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label={isOpen ? 'Cerrar chat de WhatsApp' : 'Abrir chat de WhatsApp'}
      >
        {isOpen ? (
          <X size={21} />
        ) : (
          <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}

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
