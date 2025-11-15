# AG KEM Website - Responsive Testing Checklist

## 🧪 Testing Protocol

Use this checklist to verify responsive design across all devices and browsers.

---

## 📱 Mobile Testing (320px - 767px)

### iPhone SE (375x667)
- [ ] **Home Page**
  - [ ] Hero section displays correctly with readable text
  - [ ] Background image scales properly
  - [ ] Heading and tagline are visible and not cut off
  - [ ] No horizontal scrolling
  
- [ ] **About Page (Nosotros)**
  - [ ] Content box fits within viewport
  - [ ] All 5 bullet points are readable
  - [ ] Background image visible
  - [ ] No content overflow
  
- [ ] **Products Page**
  - [ ] All 3 products display in single column
  - [ ] Product images load and scale correctly
  - [ ] Product descriptions are readable
  - [ ] Background image shows between description and products
  - [ ] Can tap product cards to navigate
  
- [ ] **Contact Page**
  - [ ] All contact cards stack vertically
  - [ ] Phone numbers and emails don't break layout
  - [ ] Map iframe displays correctly
  - [ ] Thank you image scales appropriately
  
- [ ] **Header**
  - [ ] Hamburger menu icon visible
  - [ ] Menu opens smoothly
  - [ ] Menu items are tappable (44x44px)
  - [ ] Can navigate between pages
  - [ ] Menu closes on selection
  
- [ ] **Footer**
  - [ ] Copyright text readable
  - [ ] Social icons properly sized and tappable
  - [ ] All elements stack vertically

### iPhone 12/13/14 (390x844)
- [ ] Repeat all tests from iPhone SE
- [ ] Verify extra space is utilized well

### Small Android (360x640)
- [ ] All content fits within viewport
- [ ] Touch targets are adequate
- [ ] No layout breaks

---

## 📱 Tablet Testing (768px - 1023px)

### iPad Mini (768x1024)
- [ ] **Home Page**
  - [ ] Hero section utilizes wider viewport
  - [ ] Text sizes appropriately
  
- [ ] **About Page**
  - [ ] Content box has good width
  - [ ] Spacing is balanced
  
- [ ] **Products Page**
  - [ ] Products display in 2-column grid or single column
  - [ ] Background image visible on side
  - [ ] Good balance between text and images
  
- [ ] **Contact Page**
  - [ ] Contact cards use grid layout
  - [ ] Map displays at appropriate size
  - [ ] Text is comfortably readable
  
- [ ] **Header**
  - [ ] Shows desktop navigation (if ≥768px uses desktop nav)
  - [ ] OR mobile menu if designed for tablets
  
- [ ] **Footer**
  - [ ] Layout switches to horizontal
  - [ ] Good spacing between elements

### iPad Pro (1024x1366)
- [ ] Full desktop layout starts to show
- [ ] All elements have good spacing
- [ ] Images are crisp and properly sized

---

## 💻 Desktop Testing (1024px+)

### Laptop (1366x768)
- [ ] **Home Page**
  - [ ] Hero section fills viewport nicely
  - [ ] Text is large and impactful
  - [ ] Background image looks good
  
- [ ] **About Page**
  - [ ] Content centered with good whitespace
  - [ ] Background visible around content
  
- [ ] **Products Page**
  - [ ] Products list on left (2/3)
  - [ ] Background image on right (1/3)
  - [ ] Good balance and whitespace
  
- [ ] **Contact Page**
  - [ ] Two-column layout (image left, content right)
  - [ ] Contact cards in grid
  - [ ] Map displays properly
  
- [ ] **Header**
  - [ ] Desktop navigation visible
  - [ ] All menu items in horizontal layout
  - [ ] Active page highlighted
  - [ ] Hover states work
  
- [ ] **Footer**
  - [ ] Horizontal layout with proper spacing
  - [ ] Social icons aligned right

### Desktop (1920x1080)
- [ ] All content scales appropriately
- [ ] Maximum width constraints work
- [ ] No awkward stretching of elements
- [ ] Images remain crisp

### Large Desktop (2560x1440)
- [ ] Content doesn't stretch too wide (max-width works)
- [ ] Centered layout with proper margins
- [ ] Images still look good at this size

---

## 🌐 Browser Testing

### Chrome (Desktop & Mobile)
- [ ] All pages render correctly
- [ ] Animations smooth
- [ ] Images load properly
- [ ] No console errors

### Firefox (Desktop & Mobile)
- [ ] Layout consistent with Chrome
- [ ] CSS grid/flexbox works
- [ ] Fonts render correctly

### Safari (Desktop & Mobile)
- [ ] iOS-specific issues handled
- [ ] Touch events work properly
- [ ] Webkit-specific styles applied
- [ ] Image optimization works

### Edge
- [ ] Compatible with Chromium-based Edge
- [ ] No rendering issues
- [ ] Animations work smoothly

---

## ♿ Accessibility Testing

- [ ] **Keyboard Navigation**
  - [ ] Can tab through all interactive elements
  - [ ] Focus indicators visible
  - [ ] Can activate menu with Enter/Space
  - [ ] Can navigate with arrow keys where appropriate

- [ ] **Screen Reader**
  - [ ] All images have alt text
  - [ ] ARIA labels present on buttons
  - [ ] Heading hierarchy is correct
  - [ ] Page structure makes sense

- [ ] **Color Contrast**
  - [ ] Text meets WCAG AA standards
  - [ ] Links are distinguishable
  - [ ] Buttons have sufficient contrast

- [ ] **Touch Targets**
  - [ ] All buttons ≥44x44px
  - [ ] Adequate spacing between tappable elements
  - [ ] No accidental taps

- [ ] **Zoom**
  - [ ] Can zoom up to 200%
  - [ ] Layout doesn't break when zoomed
  - [ ] Text remains readable

---

## 🔄 Interaction Testing

### Navigation
- [ ] Click logo → goes to home
- [ ] Click menu items → navigates correctly
- [ ] Mobile menu opens/closes smoothly
- [ ] Active page highlighted in menu
- [ ] Smooth page transitions

### Products
- [ ] Click product card → navigates to detail page
- [ ] Product detail page loads correctly
- [ ] Back button works
- [ ] Can navigate to contact from detail page

### Contact
- [ ] Map iframe loads and is interactive
- [ ] WhatsApp link works (opens WhatsApp)
- [ ] LinkedIn link works
- [ ] Maps link opens Google Maps

### Footer
- [ ] Social icons clickable
- [ ] Links open in new tab where appropriate
- [ ] Copyright information visible

---

## 🎨 Visual Testing

### Typography
- [ ] All text readable at all sizes
- [ ] No text overflow or cut-off
- [ ] Line heights comfortable
- [ ] Font sizes scale appropriately

### Images
- [ ] All images load correctly
- [ ] No broken image links
- [ ] Images scale without distortion
- [ ] Proper aspect ratios maintained
- [ ] Lazy loading works

### Spacing
- [ ] Consistent padding across breakpoints
- [ ] Good whitespace between sections
- [ ] No cramped layouts
- [ ] No excessive whitespace

### Colors
- [ ] Brand colors consistent
- [ ] Good contrast throughout
- [ ] Hover states visible
- [ ] Active states distinguishable

---

## ⚡ Performance Testing

- [ ] **Load Times**
  - [ ] Initial page load <3 seconds
  - [ ] Images load progressively
  - [ ] No render-blocking resources

- [ ] **Lighthouse Audit**
  - [ ] Performance score >90
  - [ ] Accessibility score >90
  - [ ] Best Practices score >90
  - [ ] SEO score >90

- [ ] **Network**
  - [ ] Works on slow 3G
  - [ ] Images optimized
  - [ ] Minimal JavaScript

---

## 📊 Orientation Testing

### Portrait Mode
- [ ] All pages work in portrait
- [ ] Content stacks appropriately
- [ ] No layout issues

### Landscape Mode
- [ ] Mobile landscape works well
- [ ] Tablet landscape optimized
- [ ] Good use of horizontal space

---

## 🐛 Edge Cases

- [ ] **Very Small Screens (320px)**
  - [ ] All content accessible
  - [ ] No horizontal scroll
  - [ ] Touch targets adequate

- [ ] **Very Large Screens (2560px+)**
  - [ ] Content doesn't stretch awkwardly
  - [ ] Max-width constraints work
  - [ ] Good use of whitespace

- [ ] **Slow Connection**
  - [ ] Progressive loading
  - [ ] Loading states visible
  - [ ] Graceful degradation

- [ ] **No JavaScript**
  - [ ] Basic navigation works
  - [ ] Content accessible
  - [ ] No critical features broken

---

## ✅ Quick Test Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Check for TypeScript errors
npx tsc --noEmit
```

---

## 🎯 Priority Issues

If you find issues, prioritize fixes in this order:

1. **Critical**: Blocking navigation or core functionality
2. **High**: Major layout breaks or accessibility issues
3. **Medium**: Minor visual issues or optimization opportunities
4. **Low**: Nice-to-have improvements

---

## 📝 Testing Tools

### Browser DevTools
- Responsive design mode
- Device emulation
- Network throttling
- Lighthouse audits

### Online Tools
- [BrowserStack](https://www.browserstack.com/) - Real device testing
- [Responsinator](http://www.responsinator.com/) - Quick responsive preview
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Extensions
- WAVE (Web Accessibility Evaluation Tool)
- axe DevTools (Accessibility testing)
- Lighthouse (Performance & Best Practices)

---

## 🎉 Sign-off

- [ ] All critical tests passed
- [ ] Documentation complete
- [ ] Ready for production deployment

**Tested by**: _________________
**Date**: _________________
**Browser/Device**: _________________
**Issues Found**: _________________

---

**Version**: 1.0.0
**Last Updated**: November 2024
