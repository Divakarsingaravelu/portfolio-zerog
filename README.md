# Divakar Singaravelu — Professional Full Stack Developer Portfolio

A futuristic, high-performance, and responsive personal portfolio website built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, engineered with a **Zero-Gravity (Zero-G) UI** aesthetic.

![Zero-G Theme](https://img.shields.io/badge/Theme-Zero--G%20Obsidian%20Dark-00F0FF?style=flat-square)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite)

---

## 🚀 Live Local URL
- **Local Dev Server:** `http://localhost:5173/`

---

## 🌟 Key Features

1. **Zero-Gravity (Zero-G) Aesthetic & Physics Toggle:**
   - **Obsidian Dark Canvas (`#06070B`)**: Subtle particle starfield with interactive cursor repulsion, soft nebula gradients, and constellation lines.
   - **Physics Mode Switcher**:
     - **Zero-G Mode (Default)**: Cards float smoothly with continuous sinusoidal Y-axis drift and 3D parallax tilt on mouse move.
     - **Gravity / Sandbox Mode**: Skill capsules and elements obey gravity; cards can be dragged and tossed around with spring momentum and collision boundaries.
2. **Sticky Glass Navbar:**
   - Orbital brand logo `DIVAKAR.S`, smooth section scrolling, scroll spy active indicators, mobile drawer, and quick "Let's Talk" CTA.
3. **Hero Centerpiece:**
   - Typewriter subtitle animation cycling through key aspirations.
   - 3D interactive holographic developer core featuring tabbed code preview, technology radar, and simulated CLI terminal.
   - Verified LinkedIn profile integration and resume preview/download modal.
4. **Authentic Profile & Foundation:**
   - **Education**: B.E. in Computer Science and Engineering at Adhi College of Engineering and Technology (Anna University, 2023–2027) & Full Stack Software Development Program at NxtWave CCBP 4.0 Academy.
   - **About Pillars**: Development, Problem Solving, and Continuous Learning.
5. **Interactive Skills Arena:**
   - Filterable skills capsules by category (Frontend, Backend & DB, Languages, Tools & Workflow).
   - Zero arbitrary proficiency percentage bars — strictly genuine learned skills.
6. **Featured Projects Showcase:**
   - Levitating cards with 3D tilt, status badges (`Completed`, `In Progress`, `Architecture / Concept`), technology pills, and an in-depth **Architecture Deep-Dive Modal**.
   - Includes: *MenuBase Restaurant SaaS*, *Speech Emotion Recognition (SER)*, *Digital Hostel Outpass Management System*, *Dynamic Web Applications Suite*, *Hotel Management System Architecture*, and the *Zero-Gravity Portfolio*.
7. **Certifications Bento Grid:**
   - Credentials for NxtWave Web Applications, Java Programming, IoT Workshop, Python, and JavaScript Essentials with an interactive **High-Tech Certificate Previewer**.
8. **Contact & Transmission:**
   - Interactive contact form with client-side validation, clipboard copy for email with toast notification, and a direct `mailto:` launcher.

---

## 🛠️ How to Customize Your Details

All profile information is centralized in a single file for easy maintenance:

### 1. Update Profile Information, Projects, or Skills
Open `src/data/portfolioData.ts`:
- **Personal Details**: Update `fullName`, `title`, `bio`, `contactEmail`, `githubUrl`, or `linkedInUrl`.
- **Projects**: Add, remove, or modify items in `PORTFOLIO_DATA.projects`. Change `status` to `'Completed'`, `'In Progress'`, or `'Architecture / Concept'`.
- **Skills**: Add or categorize items in `PORTFOLIO_DATA.skills`.
- **Certificates**: Add or update certificate credentials in `PORTFOLIO_DATA.certifications`.

### 2. Replace Resume PDF
Place your updated resume file inside the `public/` directory named:
```
public/Divakar_Singaravelu_Resume.pdf
```
The website will automatically link to and download this file when visitors click **Download Resume**.

### 3. Replace Profile Photo or Project Thumbnails
- To add your photo, save it into `public/profile.jpg` or `src/assets/`.
- In `src/components/Hero.tsx`, you can easily embed your photo directly inside the right-column card.

---

## 💻 Commands

```bash
# Install dependencies
npm install

# Start local development server (runs on port 5173)
npm run dev

# Compile TypeScript and create production bundle
npm run build

# Preview production build locally
npm run preview
```
