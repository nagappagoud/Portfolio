# Nagappagoud Ashok Patil — Personal Developer Portfolio

A dark-themed, responsive developer portfolio built with semantic HTML5, Tailwind CSS, and modular Vanilla JavaScript.

## Folder Structure
```
portfolio/
├── index.html          # Complete single-page portfolio structure & printable resume modal
├── styles.css          # Custom glassmorphism, gradient animations, 3D tilt, and print styles
├── script.js           # Interactive particle background, modals, filters, and form validation
├── assets/
│   └── Nagappagoud.jpg # Profile photograph
└── README.md           # Setup & deployment guide
```

## Quick Start
1. Extract this ZIP archive into a folder.
2. Open `index.html` directly in any modern browser, or run a local server (`npx serve .` or VS Code Live Server).
3. To deploy on **Vercel** or **GitHub Pages**, push the folder contents to a GitHub repository and import it into Vercel with zero build configuration required.

## Customization Notes
- **Project Links:** Update `githubUrl` and `liveUrl` inside `PROJECTS` in `script.js` once you publish individual project repositories or Vercel live demos.
- **Contact Form:** Currently validates inputs and launches the visitor's email client (`mailto:nagappagouda1925@gmail.com`). Connect a Formspree endpoint or Vercel Serverless Function in `initContactForm()` inside `script.js` if you want direct background submissions.
