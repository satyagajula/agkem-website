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
    flag: 'mx',
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

  const getFlagUrl = (code: string) =>
    `https://flagcdn.com/w40/${code.toLowerCase()}.png`;

  const countries: Country[] = [
    { code: 'AF', name: 'Afganistán', flag: 'af', dialCode: '+93' },
    { code: 'AL', name: 'Albania', flag: 'al', dialCode: '+355' },
    { code: 'DE', name: 'Alemania', flag: 'de', dialCode: '+49' },
    { code: 'DZ', name: 'Argelia', flag: 'dz', dialCode: '+213' },
    { code: 'AD', name: 'Andorra', flag: 'ad', dialCode: '+376' },
    { code: 'AO', name: 'Angola', flag: 'ao', dialCode: '+244' },
    { code: 'AG', name: 'Antigua y Barbuda', flag: 'ag', dialCode: '+1-268' },
    { code: 'SA', name: 'Arabia Saudita', flag: 'sa', dialCode: '+966' },
    { code: 'AR', name: 'Argentina', flag: 'ar', dialCode: '+54' },
    { code: 'AM', name: 'Armenia', flag: 'am', dialCode: '+374' },
    { code: 'AU', name: 'Australia', flag: 'au', dialCode: '+61' },
    { code: 'AT', name: 'Austria', flag: 'at', dialCode: '+43' },
    { code: 'AZ', name: 'Azerbaiyán', flag: 'az', dialCode: '+994' },
    { code: 'BS', name: 'Bahamas', flag: 'bs', dialCode: '+1-242' },
    { code: 'BD', name: 'Bangladés', flag: 'bd', dialCode: '+880' },
    { code: 'BB', name: 'Barbados', flag: 'bb', dialCode: '+1-246' },
    { code: 'BH', name: 'Baréin', flag: 'bh', dialCode: '+973' },
    { code: 'BE', name: 'Bélgica', flag: 'be', dialCode: '+32' },
    { code: 'BZ', name: 'Belice', flag: 'bz', dialCode: '+501' },
    { code: 'BJ', name: 'Benín', flag: 'bj', dialCode: '+229' },
    { code: 'BY', name: 'Bielorrusia', flag: 'by', dialCode: '+375' },
    { code: 'BO', name: 'Bolivia', flag: 'bo', dialCode: '+591' },
    { code: 'BA', name: 'Bosnia y Herzegovina', flag: 'ba', dialCode: '+387' },
    { code: 'BW', name: 'Botsuana', flag: 'bw', dialCode: '+267' },
    { code: 'BR', name: 'Brasil', flag: 'br', dialCode: '+55' },
    { code: 'BN', name: 'Brunéi', flag: 'bn', dialCode: '+673' },
    { code: 'BG', name: 'Bulgaria', flag: 'bg', dialCode: '+359' },
    { code: 'BF', name: 'Burkina Faso', flag: 'bf', dialCode: '+226' },
    { code: 'BI', name: 'Burundi', flag: 'bi', dialCode: '+257' },
    { code: 'BT', name: 'Bután', flag: 'bt', dialCode: '+975' },
    { code: 'CV', name: 'Cabo Verde', flag: 'cv', dialCode: '+238' },
    { code: 'KH', name: 'Camboya', flag: 'kh', dialCode: '+855' },
    { code: 'CM', name: 'Camerún', flag: 'cm', dialCode: '+237' },
    { code: 'CA', name: 'Canadá', flag: 'ca', dialCode: '+1' },
    { code: 'TD', name: 'Chad', flag: 'td', dialCode: '+235' },
    { code: 'CL', name: 'Chile', flag: 'cl', dialCode: '+56' },
    { code: 'CN', name: 'China', flag: 'cn', dialCode: '+86' },
    { code: 'CY', name: 'Chipre', flag: 'cy', dialCode: '+357' },
    { code: 'CO', name: 'Colombia', flag: 'co', dialCode: '+57' },
    { code: 'KM', name: 'Comoras', flag: 'km', dialCode: '+269' },
    { code: 'CG', name: 'Congo', flag: 'cg', dialCode: '+242' },
    { code: 'CD', name: 'Congo (RDC)', flag: 'cd', dialCode: '+243' },
    { code: 'KR', name: 'Corea del Sur', flag: 'kr', dialCode: '+82' },
    { code: 'KP', name: 'Corea del Norte', flag: 'kp', dialCode: '+850' },
    { code: 'CR', name: 'Costa Rica', flag: 'cr', dialCode: '+506' },
    { code: 'CI', name: "Costa de Marfil", flag: 'ci', dialCode: '+225' },
    { code: 'HR', name: 'Croacia', flag: 'hr', dialCode: '+385' },
    { code: 'CU', name: 'Cuba', flag: 'cu', dialCode: '+53' },
    { code: 'DK', name: 'Dinamarca', flag: 'dk', dialCode: '+45' },
    { code: 'DJ', name: 'Yibuti', flag: 'dj', dialCode: '+253' },
    { code: 'DM', name: 'Dominica', flag: 'dm', dialCode: '+1-767' },
    { code: 'EC', name: 'Ecuador', flag: 'ec', dialCode: '+593' },
    { code: 'EG', name: 'Egipto', flag: 'eg', dialCode: '+20' },
    { code: 'SV', name: 'El Salvador', flag: 'sv', dialCode: '+503' },
    { code: 'AE', name: 'Emiratos Árabes Unidos', flag: 'ae', dialCode: '+971' },
    { code: 'ER', name: 'Eritrea', flag: 'er', dialCode: '+291' },
    { code: 'SK', name: 'Eslovaquia', flag: 'sk', dialCode: '+421' },
    { code: 'SI', name: 'Eslovenia', flag: 'si', dialCode: '+386' },
    { code: 'ES', name: 'España', flag: 'es', dialCode: '+34' },
    { code: 'US', name: 'Estados Unidos', flag: 'us', dialCode: '+1' },
    { code: 'EE', name: 'Estonia', flag: 'ee', dialCode: '+372' },
    { code: 'ET', name: 'Etiopía', flag: 'et', dialCode: '+251' },
    { code: 'PH', name: 'Filipinas', flag: 'ph', dialCode: '+63' },
    { code: 'FI', name: 'Finlandia', flag: 'fi', dialCode: '+358' },
    { code: 'FJ', name: 'Fiyi', flag: 'fj', dialCode: '+679' },
    { code: 'FR', name: 'Francia', flag: 'fr', dialCode: '+33' },
    { code: 'GA', name: 'Gabón', flag: 'ga', dialCode: '+241' },
    { code: 'GM', name: 'Gambia', flag: 'gm', dialCode: '+220' },
    { code: 'GE', name: 'Georgia', flag: 'ge', dialCode: '+995' },
    { code: 'GH', name: 'Ghana', flag: 'gh', dialCode: '+233' },
    { code: 'GD', name: 'Granada', flag: 'gd', dialCode: '+1-473' },
    { code: 'GR', name: 'Grecia', flag: 'gr', dialCode: '+30' },
    { code: 'GT', name: 'Guatemala', flag: 'gt', dialCode: '+502' },
    { code: 'GN', name: 'Guinea', flag: 'gn', dialCode: '+224' },
    { code: 'GQ', name: 'Guinea Ecuatorial', flag: 'gq', dialCode: '+240' },
    { code: 'GW', name: 'Guinea-Bisáu', flag: 'gw', dialCode: '+245' },
    { code: 'GY', name: 'Guyana', flag: 'gy', dialCode: '+592' },
    { code: 'HT', name: 'Haití', flag: 'ht', dialCode: '+509' },
    { code: 'HN', name: 'Honduras', flag: 'hn', dialCode: '+504' },
    { code: 'HU', name: 'Hungría', flag: 'hu', dialCode: '+36' },
    { code: 'IN', name: 'India', flag: 'in', dialCode: '+91' },
    { code: 'ID', name: 'Indonesia', flag: 'id', dialCode: '+62' },
    { code: 'IQ', name: 'Irak', flag: 'iq', dialCode: '+964' },
    { code: 'IR', name: 'Irán', flag: 'ir', dialCode: '+98' },
    { code: 'IE', name: 'Irlanda', flag: 'ie', dialCode: '+353' },
    { code: 'IS', name: 'Islandia', flag: 'is', dialCode: '+354' },
    { code: 'IL', name: 'Israel', flag: 'il', dialCode: '+972' },
    { code: 'IT', name: 'Italia', flag: 'it', dialCode: '+39' },
    { code: 'JM', name: 'Jamaica', flag: 'jm', dialCode: '+1-876' },
    { code: 'JP', name: 'Japón', flag: 'jp', dialCode: '+81' },
    { code: 'JO', name: 'Jordania', flag: 'jo', dialCode: '+962' },
    { code: 'KZ', name: 'Kazajistán', flag: 'kz', dialCode: '+7' },
    { code: 'KE', name: 'Kenia', flag: 'ke', dialCode: '+254' },
    { code: 'KG', name: 'Kirguistán', flag: 'kg', dialCode: '+996' },
    { code: 'KI', name: 'Kiribati', flag: 'ki', dialCode: '+686' },
    { code: 'KW', name: 'Kuwait', flag: 'kw', dialCode: '+965' },
    { code: 'LA', name: 'Laos', flag: 'la', dialCode: '+856' },
    { code: 'LS', name: 'Lesoto', flag: 'ls', dialCode: '+266' },
    { code: 'LV', name: 'Letonia', flag: 'lv', dialCode: '+371' },
    { code: 'LB', name: 'Líbano', flag: 'lb', dialCode: '+961' },
    { code: 'LR', name: 'Liberia', flag: 'lr', dialCode: '+231' },
    { code: 'LY', name: 'Libia', flag: 'ly', dialCode: '+218' },
    { code: 'LI', name: 'Liechtenstein', flag: 'li', dialCode: '+423' },
    { code: 'LT', name: 'Lituania', flag: 'lt', dialCode: '+370' },
    { code: 'LU', name: 'Luxemburgo', flag: 'lu', dialCode: '+352' },
    { code: 'MK', name: 'Macedonia del Norte', flag: 'mk', dialCode: '+389' },
    { code: 'MG', name: 'Madagascar', flag: 'mg', dialCode: '+261' },
    { code: 'MY', name: 'Malasia', flag: 'my', dialCode: '+60' },
    { code: 'MW', name: 'Malaui', flag: 'mw', dialCode: '+265' },
    { code: 'MV', name: 'Maldivas', flag: 'mv', dialCode: '+960' },
    { code: 'ML', name: 'Malí', flag: 'ml', dialCode: '+223' },
    { code: 'MT', name: 'Malta', flag: 'mt', dialCode: '+356' },
    { code: 'MA', name: 'Marruecos', flag: 'ma', dialCode: '+212' },
    { code: 'MU', name: 'Mauricio', flag: 'mu', dialCode: '+230' },
    { code: 'MR', name: 'Mauritania', flag: 'mr', dialCode: '+222' },
    { code: 'MX', name: 'México', flag: 'mx', dialCode: '+52' },
    { code: 'FM', name: 'Micronesia', flag: 'fm', dialCode: '+691' },
    { code: 'MD', name: 'Moldavia', flag: 'md', dialCode: '+373' },
    { code: 'MC', name: 'Mónaco', flag: 'mc', dialCode: '+377' },
    { code: 'MN', name: 'Mongolia', flag: 'mn', dialCode: '+976' },
    { code: 'ME', name: 'Montenegro', flag: 'me', dialCode: '+382' },
    { code: 'MZ', name: 'Mozambique', flag: 'mz', dialCode: '+258' },
    { code: 'MM', name: 'Myanmar', flag: 'mm', dialCode: '+95' },
    { code: 'NA', name: 'Namibia', flag: 'na', dialCode: '+264' },
    { code: 'NR', name: 'Nauru', flag: 'nr', dialCode: '+674' },
    { code: 'NP', name: 'Nepal', flag: 'np', dialCode: '+977' },
    { code: 'NI', name: 'Nicaragua', flag: 'ni', dialCode: '+505' },
    { code: 'NE', name: 'Níger', flag: 'ne', dialCode: '+227' },
    { code: 'NG', name: 'Nigeria', flag: 'ng', dialCode: '+234' },
    { code: 'NO', name: 'Noruega', flag: 'no', dialCode: '+47' },
    { code: 'NZ', name: 'Nueva Zelanda', flag: 'nz', dialCode: '+64' },
    { code: 'OM', name: 'Omán', flag: 'om', dialCode: '+968' },
    { code: 'NL', name: 'Países Bajos', flag: 'nl', dialCode: '+31' },
    { code: 'PK', name: 'Pakistán', flag: 'pk', dialCode: '+92' },
    { code: 'PW', name: 'Palaos', flag: 'pw', dialCode: '+680' },
    { code: 'PA', name: 'Panamá', flag: 'pa', dialCode: '+507' },
    { code: 'PG', name: 'Papúa Nueva Guinea', flag: 'pg', dialCode: '+675' },
    { code: 'PY', name: 'Paraguay', flag: 'py', dialCode: '+595' },
    { code: 'PE', name: 'Perú', flag: 'pe', dialCode: '+51' },
    { code: 'PL', name: 'Polonia', flag: 'pl', dialCode: '+48' },
    { code: 'PT', name: 'Portugal', flag: 'pt', dialCode: '+351' },
    { code: 'QA', name: 'Catar', flag: 'qa', dialCode: '+974' },
    { code: 'GB', name: 'Reino Unido', flag: 'gb', dialCode: '+44' },
    { code: 'CF', name: 'República Centroafricana', flag: 'cf', dialCode: '+236' },
    { code: 'CZ', name: 'República Checa', flag: 'cz', dialCode: '+420' },
    { code: 'DO', name: 'República Dominicana', flag: 'do', dialCode: '+1-809' },
    { code: 'RO', name: 'Rumanía', flag: 'ro', dialCode: '+40' },
    { code: 'RU', name: 'Rusia', flag: 'ru', dialCode: '+7' },
    { code: 'RW', name: 'Ruanda', flag: 'rw', dialCode: '+250' },
    { code: 'KN', name: 'San Cristóbal y Nieves', flag: 'kn', dialCode: '+1-869' },
    { code: 'VC', name: 'San Vicente y las Granadinas', flag: 'vc', dialCode: '+1-784' },
    { code: 'LC', name: 'Santa Lucía', flag: 'lc', dialCode: '+1-758' },
    { code: 'WS', name: 'Samoa', flag: 'ws', dialCode: '+685' },
    { code: 'SM', name: 'San Marino', flag: 'sm', dialCode: '+378' },
    { code: 'ST', name: 'Santo Tomé y Príncipe', flag: 'st', dialCode: '+239' },
    { code: 'SN', name: 'Senegal', flag: 'sn', dialCode: '+221' },
    { code: 'RS', name: 'Serbia', flag: 'rs', dialCode: '+381' },
    { code: 'SC', name: 'Seychelles', flag: 'sc', dialCode: '+248' },
    { code: 'SL', name: 'Sierra Leona', flag: 'sl', dialCode: '+232' },
    { code: 'SG', name: 'Singapur', flag: 'sg', dialCode: '+65' },
    { code: 'SY', name: 'Siria', flag: 'sy', dialCode: '+963' },
    { code: 'SO', name: 'Somalia', flag: 'so', dialCode: '+252' },
    { code: 'LK', name: 'Sri Lanka', flag: 'lk', dialCode: '+94' },
    { code: 'SZ', name: 'Suazilandia', flag: 'sz', dialCode: '+268' },
    { code: 'ZA', name: 'Sudáfrica', flag: 'za', dialCode: '+27' },
    { code: 'SD', name: 'Sudán', flag: 'sd', dialCode: '+249' },
    { code: 'SS', name: 'Sudán del Sur', flag: 'ss', dialCode: '+211' },
    { code: 'SE', name: 'Suecia', flag: 'se', dialCode: '+46' },
    { code: 'CH', name: 'Suiza', flag: 'ch', dialCode: '+41' },
    { code: 'SR', name: 'Surinam', flag: 'sr', dialCode: '+597' },
    { code: 'TH', name: 'Tailandia', flag: 'th', dialCode: '+66' },
    { code: 'TW', name: 'Taiwán', flag: 'tw', dialCode: '+886' },
    { code: 'TZ', name: 'Tanzania', flag: 'tz', dialCode: '+255' },
    { code: 'TJ', name: 'Tayikistán', flag: 'tj', dialCode: '+992' },
    { code: 'TL', name: 'Timor Oriental', flag: 'tl', dialCode: '+670' },
    { code: 'TG', name: 'Togo', flag: 'tg', dialCode: '+228' },
    { code: 'TO', name: 'Tonga', flag: 'to', dialCode: '+676' },
    { code: 'TT', name: 'Trinidad y Tobago', flag: 'tt', dialCode: '+1-868' },
    { code: 'TN', name: 'Túnez', flag: 'tn', dialCode: '+216' },
    { code: 'TM', name: 'Turkmenistán', flag: 'tm', dialCode: '+993' },
    { code: 'TR', name: 'Turquía', flag: 'tr', dialCode: '+90' },
    { code: 'TV', name: 'Tuvalu', flag: 'tv', dialCode: '+688' },
    { code: 'UA', name: 'Ucrania', flag: 'ua', dialCode: '+380' },
    { code: 'UG', name: 'Uganda', flag: 'ug', dialCode: '+256' },
    { code: 'UY', name: 'Uruguay', flag: 'uy', dialCode: '+598' },
    { code: 'UZ', name: 'Uzbekistán', flag: 'uz', dialCode: '+998' },
    { code: 'VU', name: 'Vanuatu', flag: 'vu', dialCode: '+678' },
    { code: 'VA', name: 'Vaticano', flag: 'va', dialCode: '+379' },
    { code: 'VE', name: 'Venezuela', flag: 've', dialCode: '+58' },
    { code: 'VN', name: 'Vietnam', flag: 'vn', dialCode: '+84' },
    { code: 'YE', name: 'Yemen', flag: 'ye', dialCode: '+967' },
    { code: 'ZM', name: 'Zambia', flag: 'zm', dialCode: '+260' },
    { code: 'ZW', name: 'Zimbabue', flag: 'zw', dialCode: '+263' },
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
                          <img src={getFlagUrl(selectedCountry.flag)} alt={selectedCountry.name} className="w-5 h-3.5 object-cover rounded-sm" />
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
                                <img src={getFlagUrl(country.flag)} alt={country.name} className="w-5 h-3.5 object-cover rounded-sm" />
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
