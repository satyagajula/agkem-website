# AG KEM Website - Complete Project

## 🌱 About AG KEM
AG KEM is a Mexican agrochemical company offering innovative solutions for pest and disease control in crops. This website showcases their products and services.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
agkem-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx     ✅ COMPLETED
│   │   │   └── Footer.tsx     ✅ COMPLETED
│   │   ├── sections/          # Page sections
│   │   │   ├── HeroSection.tsx      🚧 TO BUILD
│   │   │   ├── AboutSection.tsx     🚧 TO BUILD
│   │   │   ├── ProductsSection.tsx  🚧 TO BUILD
│   │   │   └── ContactSection.tsx   🚧 TO BUILD
│   │   └── ui/                # Reusable UI components
│   │       └── Logo.tsx       ✅ COMPLETED
│   ├── lib/                   # Utility libraries
│   ├── utils/                 # Helper functions
│   ├── types/                 # TypeScript types
│   └── hooks/                 # Custom React hooks
├── public/
│   └── images/               # Static images
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🎯 Development Status

### ✅ Completed Components
- **Header Navigation** - Dark green header with logo and menu
- **Footer** - Complete with contact info and links
- **Logo** - Custom SVG AG KEM logo
- **Basic Layout Structure** - All sections connected

### 🚧 Components To Build (In Order)
1. **Hero Section** - Main banner with agricultural background
2. **About Section** - Company information and values
3. **Products Section** - Three product categories with images
4. **Contact Section** - Contact cards and location info

## 🎨 Design System

### Colors
- `agkem-dark`: #2C3E2C (Dark green)
- `agkem-primary`: #8BC34A (Primary green)
- `agkem-accent`: #A4C639 (Accent green)
- `agkem-light`: #9CCC65 (Light green)
- `agkem-bg`: #F5F5F5 (Background)

### Typography
- Headings: Bold, dark green
- Body: Regular, gray
- Links: White/green on hover

### Components
- `.btn-primary` - Primary green button
- `.btn-secondary` - White button with border
- `.container-custom` - Responsive container
- `.section-padding` - Consistent section spacing

## 📋 Next Steps

### Current Task: Build Hero Section
The Hero Section needs:
- [ ] Agricultural background image (corn field)
- [ ] Main headline: "Innovación para el campo"
- [ ] Subheadline: "Siempre cercanos a nuestros clientes"
- [ ] Two CTA buttons
- [ ] Responsive design

### Then Build Remaining Sections:
2. About Section with company values
3. Products Section with 3 categories
4. Contact Section with contact cards

## 🛠️ Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## 📦 Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations (ready to use)
- **Lucide React** - Icons

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🚀 Deployment

Ready for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting

## 📄 License

© 2025 AG KEM. All rights reserved.

---

**Note:** This is a complete project structure. Components marked with 🚧 are placeholders ready to be built with the actual design from the PDF specifications.
