# 🌌 Senior Software Engineer Portfolio - Muhammad Febrian Maulana

Welcome to the official portfolio website of **Muhammad Febrian Maulana**, Senior Software Engineer specializing in enterprise full-stack development, .NET 8 microservices, payment gateways, and database optimization.

This application features an interactive **Big Bang Theory Cosmic Universe Background Engine** and a **LinkedIn-Style Certifications & Course Showcase**.

---

## 🌟 Key Features

### 🌌 1. Big Bang Theory Cosmic Universe Engine
- **Twinkling Starfield & Shooting Comets**: Dynamic canvas particle system featuring 250 twinkling stars (scaling responsively on mobile) and periodic meteor shooting stars.
- **Atomic Orbit & Orbiting Electron Particles**: Bohr/Rutherford atomic nucleus surrounded by 3 tilted orbital rings with glowing electrons moving along trigonometric paths.
- **Floating Physics & Math Formulas**: Glassmorphic badges drifting across space featuring iconic equations:
  - $E = mc^2$ (Mass-energy equivalence)
  - $i\hbar \frac{\partial\Psi}{\partial t} = \hat{H}\Psi$ (Schrödinger wave equation)
  - $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$ (Maxwell's equation)
  - $\hbar = 6.626 \times 10^{-34} \text{ J}\cdot\text{s}$ (Planck constant)
  - $\mathbf{F} = G \frac{m_1 m_2}{r^2} \hat{\mathbf{r}}$ (Gravitational law)
  - $e^{i\pi} + 1 = 0$ (Euler's identity)
- **Interactive Constellation Grid**: Mouse & touch interactive node grid drawing glowing constellation lines between stars within cursor proximity.

### 📜 2. LinkedIn-Style Course & Certification Gallery
- **12 Enriched Professional Certifications**: Spanning Software Engineering, .NET 8 Architecture, AWS Cloud Solutions, SQL Server Tuning, Java Spring Microservices, Docker & Kubernetes, Modern React/TS, and Cybersecurity.
- **Real-Time Search & Category Filters**: Filter by categories (*Software Engineering*, *Web & Backend*, *Data & Analytics*, *Cybersecurity*, *Enterprise Systems*) or search instantly by title, organizer, or skill tag.
- **Credential Detail Popover Modal**: Click any certification card to view full course syllabus highlights, verified badge credentials, direct verification links, and one-click Credential ID copying.

---

## 🛠️ Tech Stack & Prerequisites

### **Tech Stack**
- **Frontend Core**: React 18, TypeScript, Vite
- **Styling & Motion**: Tailwind CSS, Framer Motion, Lucide Icons
- **Graphics Engine**: HTML5 2D Canvas API
- **Code Quality**: Oxlint

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

---

## 🚀 How to Run the Application Locally

Follow these quick steps to set up and run the application on your local machine:

### 1. **Clone the Repository**
```bash
git clone https://github.com/FebrianSTEM/febrian-portofolio.git
cd febrian-portofolio
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Run the Development Server**
```bash
npm run dev
```

Once started, open your browser and navigate to:
```text
http://localhost:5173
```

---

## 📦 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with HMR at `http://localhost:5173` |
| `npm run build` | Compiles TypeScript and builds the production bundle into `/dist` |
| `npm run preview` | Runs a local web server to preview the production build in `/dist` |
| `npx oxlint` | Runs fast JavaScript/TypeScript linter checks |

---

## 📂 Project Structure

```text
febrian-portfolio/
├── public/                     # Static assets & downloadable CV PDF
├── src/
│   ├── components/             # React UI components
│   │   ├── CosmicUniverseCanvas.tsx  # Canvas starfield, orbit & math engine
│   │   ├── CredentialModal.tsx       # Certification detail popover view
│   │   ├── ProjectsAndCerts.tsx      # Projects & Courses gallery
│   │   ├── Education.tsx             # Academic background section
│   │   ├── Experience.tsx            # Work history timeline
│   │   ├── Header.tsx                # Navigation header
│   │   ├── Hero.tsx                  # Landing hero banner
│   │   ├── JokeTicker.tsx            # Marquee joke ticker
│   │   └── Skills.tsx                # Tech stack skill categories
│   ├── data/
│   │   └── portfolioData.ts          # Personal data, experience & courses
│   ├── App.tsx                 # Root application component
│   ├── main.tsx                # Application entrypoint
│   └── index.css               # Global styles & cosmic design tokens
├── QA_TEST_REPORT.md           # Automated & manual QA testing report
├── package.json                # Project dependencies & scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## 📄 License

Created by **Muhammad Febrian Maulana**. All rights reserved.
