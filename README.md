# 🧱 Drupal Starter Site

Welcome to the **Drupal Starter Site** — a modern foundation for building Drupal projects with a streamlined front‑end workflow and local development setup.

**Repository:** [Wouter‑78/drupal‑site](https://github.com/Wouter-78/drupal-site)

---

## 🚀 Overview

This project leverages the power of Drupal combined with a clean theming and build process to help you get started quickly:

- Use Layout Paragraphs for flexible page layouts.
- Use the Single Directory Components (SDC) pattern for your front‑end components (Twig + CSS/JS in one folder).
- Build your styles using Tailwind CSS v4 — utility‑first, fast, responsive.
- Add smooth scroll effects with AOS (Animate On Scroll) for modern animations.
- Local development is powered by DDEV — easy setup, consistent environments.

---

## 🧰 Tech Stack

| Layer           | Tool / Library                  | Purpose                                      |
|------------------|--------------------------------|----------------------------------------------|
| CMS              | Drupal                         | Core content management system               |
| Local Dev        | DDEV                           | Containerized dev environment                |
| Layouts          | Layout Paragraphs              | Drag‑and‑drop flexible layouts               |
| Components       | Single Directory Components    | Organized component architecture             |
| Styles           | Tailwind CSS v4                | Utility‑first CSS framework                  |
| Animations       | AOS                            | Scroll triggered animations                  |
| Build Tools      | Node.js & NPM                  | Front‑end build tooling                      |

---

## 🛠 Features
- Layout Paragraphs for flexible content layouts
- Single Directory Components (SDC) for modular development
- Tailwind CSS v4 for utility‑first styling
- Animate On Scroll (AOS) for smooth scroll animations
- Composer‑based dependency management
- Ready for DDEV local development

---

🤝 Contributing
Feel free to open issues or submit pull requests to improve this starter site.

---

## 🧑‍💻 Local Development

### Requirements
- DDEV  
- Composer  
- Node.js & NPM (inside DDEV container)  

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Wouter-78/drupal-site.git
   cd drupal-site

2. **Start the DDEV environment**
   ```bash
    ddev start
    ddev composer install

3. **Enter the DDEV container**
   ```bash
    ddev ssh

4. **Install front-end dependencies**
   ```bash
    cd web/themes/custom/starter
    npm install

5. **Build or watch your CSS**
   ```bash
    # Build production CSS
    npm run build
    
    # Watch for changes during development
    npm run watch



