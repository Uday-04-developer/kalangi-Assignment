# Kilangi - eCommerce Frontend Assignment

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Design System](https://img.shields.io/badge/Design-Pixel%20Perfect-purple)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-blue)

A pixel-perfect, responsive eCommerce homepage built using a **Mobile-First** approach. This project replicates the provided design PDF with a focus on semantic HTML, clean SCSS, and performant Vanilla JavaScript.

🔗 **[View Live Demo](INSERT_YOUR_NETLIFY_OR_VERCEL_LINK_HERE)**

---

## 📱 Project Overview

This assignment was completed within a strict timeline with a focus on **efficiency** and **maintainability**. The goal was to translate a static PDF design into a functional, interactive web experience that works seamlessly across devices.

### 🛠 Tech Stack
* **Core:** HTML5, CSS3 (SCSS/Sass), Vanilla JavaScript (ES6+).
* **Assets:** Custom SVG Icons (Hand-coded for performance).
* **Fonts:** Bodoni Moda (Serif) & Jost (Sans-Serif) via Google Fonts.
* **Tools:** VS Code, Git.

---

## ✨ Key Features implemented

### 1. 🎨 "Luxury" UI & Typography
* **Custom Logo:** Implemented the "Lambda" (`Λ`) stylistic alternative for the 'A' in KILANGI using CSS and web fonts, avoiding heavy image assets for text.
* **High-Fidelity Colors:** Extracted exact hex codes (e.g., Deep Green `#2C4641`, Beige `#FAF7F2`) to match the brand identity.

### 2. ⚡ Interactions & Animations
* **Infinite Marquee:** Custom CSS-only keyframe animation for the double-row feature list (scrolling left and right).
* **Product Slider:** A horizontal scroll-snap slider for Bestsellers, complete with working **Category Filters** and **Color Swatches**.
* **Sticky Header:** Stays accessible while scrolling.

### 3. 📐 Architecture & Performance
* **Mobile-First Strategy:** Styles are written for mobile screens first and expanded for desktop using `@media (min-width: 768px)`, ensuring faster load times on mobile devices.
* **Semantic HTML:** Used proper tags (`<header>`, `<main>`, `<section>`, `<footer>`) for better SEO and accessibility.
* **Zero External Dependencies:** No Bootstrap or Tailwind. All CSS is custom-written to demonstrate core styling proficiency.

---

## 📂 Project Structure

```bash
/
├── index.html          # Main semantic HTML structure
├── style.css           # Compiled CSS (with variables and media queries)
├── script.js           # DOM manipulation, sliders, and interactions
├── assets/             # Images (optimized)
└── README.md           # Documentation
