export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ArchitectureLayer {
  layer: string;
  details: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Full Stack' | 'Frontend' | 'AI / Machine Learning' | 'System Architecture';
  technologies: string[];
  keyFeatures: string[];
  status: 'Completed' | 'In Progress' | 'Architecture / Concept';
  githubUrl?: string; // Optional/configurable
  liveUrl?: string;   // Optional/configurable
  imagePlaceholderGradient: string;
  featured?: boolean;
  bentoSpan: string; // e.g., 'col-span-12 lg:col-span-8'
  metrics?: ProjectMetric[];
  accentGlow?: string;
  architectureLayers?: ArchitectureLayer[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend & DB' | 'Languages' | 'Tools & Workflow';
  icon: string; // Lucide icon name or descriptor
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  verificationUrl?: string;
  category: 'Web Development' | 'Programming' | 'Emerging Tech';
  highlights: string[];
  bentoSpan?: string;
  badge?: string;
  accentGlow?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  affiliate?: string;
  period: string;
  status: string;
  location?: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Divakar Singaravelu",
    shortName: "Divakar.S",
    title: "Full Stack Developer",
    statusBadge: "Final-year CSE Student",
    bioHeading: "A little about me.",
    bio: "I'm Divakar Singaravelu, a final-year Computer Science and Engineering student at Adhi College of Engineering and Technology (Anna University). I build full-stack web applications with React, Node.js, and SQL. I also work with Java, Python, and C. Right now I'm building MenuBase, a SaaS tool for restaurant menu management, and a speech emotion recognition system for my final-year project.",
    heroDescription: "Final-year CSE student at Anna University. I build web applications with React, TypeScript, Node.js, and SQL. Currently working on a restaurant menu SaaS platform and a speech emotion recognition project.",
    typewriterPhrases: [
      "Full Stack Web Development",
      "React + TypeScript + Node.js",
      "Speech Emotion Recognition",
      "Java, Python, and C"
    ],
    contactEmail: "divakar.dev.work@gmail.com", // Configurable email
    linkedInUrl: "https://www.linkedin.com/in/divakarsingaravelu/",
    githubUrl: "https://github.com/divakarsingaravelu", // Configurable GitHub profile
    resumeFileName: "Divakar_Singaravelu_Resume.pdf",
    location: "Chennai, India",
    interests: [
      "Full Stack Development",
      "AI & Machine Learning",
      "System Architecture",
      "Problem Solving"
    ]
  },

  aboutPillars: [
    {
      title: "Development",
      description: "Building web applications with React, TypeScript, Tailwind CSS on the frontend and Node.js, Express, SQL on the backend.",
      icon: "Code2",
      gradient: "from-cyan-500/20 to-blue-600/20",
      accent: "#00F0FF"
    },
    {
      title: "Problem Solving",
      description: "Writing code in Java, Python, and C. Studying data structures, algorithms, and object-oriented programming.",
      icon: "Cpu",
      gradient: "from-blue-500/20 to-cyan-600/20",
      accent: "#3B82F6"
    },
    {
      title: "Continuous Learning",
      description: "Completed NxtWave CCBP full-stack training. Currently studying speech emotion recognition with Python and neural networks.",
      icon: "Sparkles",
      gradient: "from-cyan-500/20 to-blue-500/20",
      accent: "#00B8D4"
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Adhi College of Engineering and Technology",
      affiliate: "Affiliated with Anna University",
      period: "2023 - 2027",
      status: "Final-year CSE Undergraduate",
      location: "Kanchipuram / Chennai, Tamil Nadu",
      description: "Coursework covers data structures, algorithms, database management, computer networks, software engineering, and operating systems.",
      highlights: [
        "Focus on software engineering, object-oriented programming, and databases",
        "Project work, workshops, and technical events",
        "Building full-stack web apps and studying machine learning"
      ]
    },
    {
      degree: "Full Stack Software Development Program",
      institution: "NxtWave CCBP 4.0 Academy",
      period: "Intensive Tech Track",
      status: "Professional Skill Program",
      description: "Hands-on training in frontend and backend development with JavaScript, React, Node.js, and SQL databases.",
      highlights: [
        "Web application architecture and asynchronous programming",
        "React.js, responsive design, and CSS frameworks",
        "Backend REST APIs with Node.js, Express.js, and SQL/SQLite"
      ]
    }
  ] as EducationItem[],

  skills: [
    // Languages
    { name: "Java", category: "Languages", icon: "Coffee", featured: true },
    { name: "Python", category: "Languages", icon: "Terminal", featured: true },
    { name: "C", category: "Languages", icon: "Cpu", featured: true },

    // Frontend
    { name: "React.js", category: "Frontend", icon: "Atom", featured: true },
    { name: "TypeScript", category: "Frontend", icon: "FileCode", featured: true },
    { name: "JavaScript (ES6+)", category: "Frontend", icon: "Code", featured: true },
    { name: "Tailwind CSS", category: "Frontend", icon: "Palette", featured: true },
    { name: "HTML5", category: "Frontend", icon: "Layout", featured: true },
    { name: "CSS3", category: "Frontend", icon: "Layers", featured: true },
    { name: "Bootstrap", category: "Frontend", icon: "Box", featured: false },
    { name: "Vite", category: "Frontend", icon: "Zap", featured: true },
    { name: "Responsive Web Design", category: "Frontend", icon: "Smartphone", featured: true },

    // Backend & DB
    { name: "Node.js", category: "Backend & DB", icon: "Server", featured: true },
    { name: "Express.js", category: "Backend & DB", icon: "Boxes", featured: true },
    { name: "REST APIs", category: "Backend & DB", icon: "Network", featured: true },
    { name: "SQL", category: "Backend & DB", icon: "Database", featured: true },
    { name: "SQLite", category: "Backend & DB", icon: "HardDrive", featured: true },

    // Tools & Workflow
    { name: "Git", category: "Tools & Workflow", icon: "GitBranch", featured: true },
    { name: "GitHub", category: "Tools & Workflow", icon: "Github", featured: true },
    { name: "Visual Studio Code", category: "Tools & Workflow", icon: "Laptop", featured: true },
    { name: "Git Bash", category: "Tools & Workflow", icon: "TerminalSquare", featured: false },
    { name: "NetBeans", category: "Tools & Workflow", icon: "AppWindow", featured: false },
    { name: "Command Prompt & PowerShell", category: "Tools & Workflow", icon: "Terminal", featured: false },
    { name: "npm", category: "Tools & Workflow", icon: "Package", featured: true }
  ] as SkillItem[],

  projects: [
    {
      id: "menubase-saas",
      title: "MenuBase: Restaurant Menu SaaS",
      shortDescription: "A full-stack SaaS platform that lets restaurants manage and sync their digital menus across multiple food delivery platforms from one dashboard.",
      fullDescription: "MenuBase solves the problem of updating items, prices, and availability across multiple delivery portals separately. Built with React, TypeScript, and Tailwind CSS, it provides a dashboard for menu cataloging, real-time status toggling, and structured API endpoints for syncing with delivery platforms.",
      category: "Full Stack",
      technologies: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "REST APIs", "Node.js"],
      keyFeatures: [
        "Centralized catalog for menu items and categories across delivery channels",
        "Instant price and stock updates synced across connected platforms",
        "Responsive glassmorphic dashboard for desktop and tablet",
        "Modular state management for real-time synchronization"
      ],
      status: "In Progress",
      githubUrl: "https://github.com/divakarsingaravelu",
      liveUrl: undefined,
      imagePlaceholderGradient: "from-cyan-600/30 via-blue-600/20 to-blue-800/30",
      featured: true,
      bentoSpan: "col-span-12 lg:col-span-8",
      accentGlow: "rgba(0, 240, 255, 0.25)",
      metrics: [
        { label: "Sync Engine", value: "Multi-Platform" },
        { label: "Architecture", value: "SaaS Multi-Tenant" },
        { label: "Target Outlets", value: "F&B Portals" }
      ],
      architectureLayers: [
        { layer: "Presentation", details: "React 18 + TypeScript with Tailwind CSS" },
        { layer: "State Engine", details: "Centralized catalog state with optimistic UI updates" },
        { layer: "Integration", details: "RESTful endpoints for delivery platform webhook syndication" }
      ]
    },
    {
      id: "dynamic-web-apps-suite",
      title: "Dynamic Web Applications Suite",
      shortDescription: "A collection of interactive web apps built during NxtWave CCBP training, covering async APIs, DOM manipulation, and responsive layouts.",
      fullDescription: "Built during the NxtWave CCBP 4.0 program. These projects demonstrate async fetch requests, local storage, client-side filtering, and mobile-first responsive layouts using HTML, CSS, JavaScript, and Bootstrap.",
      category: "Frontend",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST APIs", "Bootstrap"],
      keyFeatures: [
        "Async REST API calls with loaders and error handling",
        "Search, filtering, and client-side pagination",
        "Persistent user preferences via LocalStorage",
        "Responsive layouts tested across viewports"
      ],
      status: "Completed",
      githubUrl: "https://github.com/divakarsingaravelu",
      liveUrl: undefined,
      imagePlaceholderGradient: "from-amber-600/30 via-orange-600/20 to-cyan-600/20",
      featured: false,
      bentoSpan: "col-span-12 lg:col-span-4",
      accentGlow: "rgba(245, 158, 11, 0.25)",
      metrics: [
        { label: "App Count", value: "Multiple Modules" },
        { label: "Protocols", value: "REST / Fetch" },
        { label: "DOM State", value: "Event-driven" }
      ]
    },
    {
      id: "hotel-management-system",
      title: "Hotel Management System Architecture",
      shortDescription: "Object-oriented design model for hospitality workflows: booking states, database schemas, and UML diagrams built with Argo-UML.",
      fullDescription: "A software engineering design project using UML methodologies (Argo-UML). Covers class diagrams, sequence diagrams for reservation check-in/check-out, entity-relationship structures, and component interactions for hotel software.",
      category: "System Architecture",
      technologies: ["Object-Oriented Analysis", "UML Modeling", "Argo-UML", "Database Design"],
      keyFeatures: [
        "Class diagrams, use case diagrams, and sequence flows",
        "State transition modeling for room allocation and billing",
        "Normalized relational database schema",
        "Modular architecture following SOLID principles"
      ],
      status: "Architecture / Concept",
      githubUrl: "https://github.com/divakarsingaravelu",
      liveUrl: undefined,
      imagePlaceholderGradient: "from-emerald-600/30 via-teal-600/20 to-blue-700/20",
      featured: false,
      bentoSpan: "col-span-12 lg:col-span-5",
      accentGlow: "rgba(16, 185, 129, 0.25)",
      metrics: [
        { label: "Design Pattern", value: "SOLID / OOP" },
        { label: "Tooling", value: "Argo-UML" },
        { label: "Schema", value: "Normalized 3NF" }
      ]
    },
    {
      id: "speech-emotion-recognition",
      title: "Speech Emotion Recognition (SER)",
      shortDescription: "Final-year project: a machine learning system that classifies emotions from speech audio using MFCCs and neural networks.",
      fullDescription: "This project extracts acoustic features (Mel-Frequency Cepstral Coefficients, chroma, spectral contrast) from speech audio datasets like RAVDESS and trains neural network models to predict emotional states such as happy, sad, neutral, and angry.",
      category: "AI / Machine Learning",
      technologies: ["Python", "Librosa", "Audio Processing", "Machine Learning", "Neural Networks"],
      keyFeatures: [
        "MFCC and spectral feature extraction from audio",
        "Neural network classifier for multiple emotion categories",
        "Confusion matrix and accuracy evaluation",
        "Final-year capstone research project"
      ],
      status: "In Progress",
      githubUrl: "https://github.com/divakarsingaravelu",
      liveUrl: undefined,
      imagePlaceholderGradient: "from-blue-600/30 via-cyan-600/20 to-blue-800/30",
      featured: false,
      bentoSpan: "col-span-12 lg:col-span-7",
      accentGlow: "rgba(59, 130, 246, 0.25)",
      metrics: [
        { label: "Domain", value: "Audio Signal Processing" },
        { label: "Feature Extraction", value: "MFCC / Chroma" },
        { label: "Capstone", value: "Final-year CSE" }
      ]
    },
    {
      id: "hostel-outpass-management",
      title: "Hostel Outpass Management System",
      shortDescription: "A web app concept for digitizing hostel outpass requests with role-based dashboards for students, wardens, and gate security.",
      fullDescription: "Replaces paper-based outpass slips in educational institutions. Students submit digital leave requests, wardens review and approve them, and gate security verifies clearance via status codes. Built with React, Node.js, Express, SQLite, and Tailwind CSS.",
      category: "Full Stack",
      technologies: ["React.js", "Node.js", "Express.js", "SQLite", "Tailwind CSS"],
      keyFeatures: [
        "Role-based dashboards: Student, Warden, Gate Security",
        "Request lifecycle: Pending, Approved, Rejected, Out-of-Campus",
        "Automated departure and entry timestamps",
        "Exportable audit logs"
      ],
      status: "Architecture / Concept",
      githubUrl: "https://github.com/Divakarsingaravelu/hostel-outpass-system",
      liveUrl: undefined,
      imagePlaceholderGradient: "from-blue-600/30 via-cyan-600/20 to-blue-700/20",
      featured: false,
      bentoSpan: "col-span-12 lg:col-span-6",
      accentGlow: "rgba(59, 130, 246, 0.25)",
      metrics: [
        { label: "User Roles", value: "Student, Warden, Gate" },
        { label: "Database", value: "SQLite" },
        { label: "Clearance", value: "Instant Verification" }
      ]
    },
    {
      id: "personal-portfolio-zerog",
      title: "Zero-Gravity Portfolio",
      shortDescription: "This portfolio site, built with React, TypeScript, Tailwind CSS, and Framer Motion. Includes a physics toggle and interactive starfield.",
      fullDescription: "This website. It uses an interactive starfield canvas, physics toggling (zero-G float vs gravity drag), 3D tilt card interactions, certificate modals, and responsive design. All data is loaded from a central config file.",
      category: "Frontend",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      keyFeatures: [
        "Zero-G / Gravity physics toggle with floating cards",
        "Interactive starfield that reacts to cursor position",
        "Single config file for all projects, skills, and certifications",
        "Verified data only, no simulated stats"
      ],
      status: "Completed",
      githubUrl: "https://github.com/Divakarsingaravelu/portfolio-zerog",
      liveUrl: "#",
      imagePlaceholderGradient: "from-cyan-500/30 via-blue-600/20 to-blue-800/30",
      featured: false,
      bentoSpan: "col-span-12 lg:col-span-6",
      accentGlow: "rgba(0, 240, 255, 0.25)",
      metrics: [
        { label: "Framerate", value: "60 FPS" },
        { label: "Physics", value: "Interactive Zero-G" },
        { label: "Type Safety", value: "100% TypeScript" }
      ]
    }
  ] as Project[],

  certifications: [
    {
      id: "nxtwave-dynamic-web",
      title: "Build Your Own Dynamic Web Application",
      issuer: "NxtWave CCBP 4.0 Academy",
      date: "Verified Completion",
      category: "Web Development",
      badge: "Flagship Credential",
      bentoSpan: "col-span-12 lg:col-span-7",
      accentGlow: "rgba(0, 240, 255, 0.25)",
      highlights: [
        "Async JavaScript, event loop, Fetch APIs, and JSON data",
        "DOM manipulation and state synchronization",
        "Form validation and UI state handling"
      ]
    },
    {
      id: "java-programming-cert",
      title: "Java Programming Certification",
      issuer: "Recognized Technical Academy",
      date: "Verified Coursework",
      category: "Programming",
      badge: "Core Engineering",
      bentoSpan: "col-span-12 lg:col-span-5",
      accentGlow: "rgba(59, 130, 246, 0.25)",
      highlights: [
        "OOP principles: encapsulation, inheritance, polymorphism",
        "Exception handling, collections, and multithreading",
        "Data structure implementation and problem solving"
      ]
    },
    {
      id: "iot-workshop-cert",
      title: "Internet of Things (IoT) Two-Day Workshop",
      issuer: "Technical Institution Workshop",
      date: "Hands-on Workshop",
      category: "Emerging Tech",
      badge: "Hardware & Cloud",
      bentoSpan: "col-span-12 lg:col-span-4",
      accentGlow: "rgba(0, 184, 212, 0.25)",
      highlights: [
        "Sensor data acquisition, microcontroller programming, and actuators",
        "IoT communication protocols (MQTT, HTTP) and cloud dashboards",
        "Hardware-to-software integration and prototyping"
      ]
    },
    {
      id: "python-foundations",
      title: "Programming Foundations with Python",
      issuer: "Verified Learning Program",
      date: "Certified",
      category: "Programming",
      badge: "ML Baseline",
      bentoSpan: "col-span-12 lg:col-span-4",
      accentGlow: "rgba(16, 185, 129, 0.25)",
      highlights: [
        "Core syntax, data types, list comprehensions, and functional constructs",
        "Modular programming, file I/O, and standard libraries",
        "Foundation for machine learning and scripting"
      ]
    },
    {
      id: "javascript-essentials",
      title: "JavaScript Essentials & Flexbox",
      issuer: "Web Engineering Certification",
      date: "Certified",
      category: "Web Development",
      badge: "Frontend",
      bentoSpan: "col-span-12 lg:col-span-4",
      accentGlow: "rgba(59, 130, 246, 0.25)",
      highlights: [
        "ES6+ features: Promises, async/await, destructuring, scope chains",
        "Browser APIs, LocalStorage, and event delegation",
        "CSS Flexbox, CSS Grid, and fluid typography"
      ]
    }
  ] as Certification[]
};
