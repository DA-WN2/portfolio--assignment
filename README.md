# Adil's Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and a light/dark theme toggle.

Live URL: https://portfolio-assignment-h1gii476y-adil-shan-c-ps-projects.vercel.app

## 🌟 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Light/Dark Theme** - Toggle between light and dark modes with persistent preferences
- **Smooth Animations** - Fade-up and pop animations on scroll using intersection observer
- **Modern UI** - Built with React and styled with Tailwind CSS
- **Fast Performance** - Optimized with Vite for rapid development and production builds

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library for building interactive components
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **CSS Variables** - For dynamic theme switching

### Styling & Animations

- **Tailwind CSS** - Responsive design and utility classes
- **Custom CSS** - Keyframe animations (fade-up, pop effects)
- **CSS Variables** - Dynamic theming system

### Features & Libraries

- **React Hooks** - `useState`, `useContext`, `useEffect` for state management
- **Intersection Observer API** - For scroll-based animations
- **Local Storage** - For persisting theme preferences

### Development Tools

- **ESLint** - Code linting and quality checks
- **Babel/SWC** - Fast JavaScript transformation

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with theme toggle
│   ├── Hero.jsx            # Hero section with profile image
│   ├── About.jsx           # About me and education
│   ├── Skills.jsx          # Technical skills
│   ├── Projects.jsx        # Featured projects
│   └── Contact.jsx         # Contact information
├── context/
│   └── ThemeContext.jsx    # Theme management with React Context
├── hooks/
│   └── useInView.js        # Intersection observer hook for animations
├── App.jsx                 # Main app component
├── index.css               # Global styles and CSS variables
└── main.jsx                # Entry point
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Opens at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

## 🎨 Theme System

The portfolio features a robust light/dark theme system:

- **CSS Variables** - Define colors for light and dark modes
- **Theme Context** - React Context manages theme state globally
- **Persistent Preferences** - Theme choice saved to localStorage
- **Smooth Transitions** - CSS transitions for seamless theme switching

### CSS Variables (light/dark)

```css
--bg-primary         /* Main background */
--bg-secondary       /* Card backgrounds */
--bg-tertiary        /* Accent backgrounds */
--text-primary       /* Main text color */
--text-secondary     /* Secondary text */
--text-tertiary      /* Tertiary text */
--border-color       /* Border colors */
```

## ✨ Animations

- **Fade-Up** - Sections fade in and slide up when scrolling into view
- **Pop** - Cards scale in with a spring effect
- **Hover Effects** - Smooth transitions on interactive elements

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration with dark mode
- `postcss.config.js` - PostCSS plugins
- `eslint.config.js` - ESLint rules

## 💡 Key Components

### ThemeContext.jsx

Manages global theme state with localStorage persistence and provides theme toggle functionality.

### useInView Hook

Custom React hook using Intersection Observer API to detect when elements enter the viewport and trigger animations.

### Responsive Grid Layouts

Uses Tailwind's responsive grid system for flexible component layouts.

## 📚 Dependencies

- react@^18
- react-dom@^18
- vite@^7
- tailwindcss@^4
- postcss@^8

## 🎯 Future Enhancements

- Add more projects
- Portfolio filtering by technology
- Blog section
- Contact form integration
- Performance optimizations

## 📄 License

This project is open source and available for personal use.

---

**Built by Adil** | Portfolio Website 2026
