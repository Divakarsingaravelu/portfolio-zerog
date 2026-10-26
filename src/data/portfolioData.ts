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
    bioHeading: "A little about my journey.",
    bio: "I'm Divakar Singaravelu, a Computer Science and Engineering student with a strong interest in full-stack development. I enjoy learning programming languages, creating web applications, and exploring technologies that solve practical problems. My goal is to become a skilled software developer and contribute to meaningful projects.",
    heroDescription: "I'm a Computer Science Engineering student passionate about software development, modern web technologies, and solving real-world problems. I enjoy building useful digital experiences and continuously improving my technical skills.",
    typewriterPhrases: [
      "Building Modern Web Experiences",
      "Turning Ideas into Applications",
      "Exploring AI and Emerging Technologies",
      "Writing Clean, Scalable Code"
    ],
    contactEmail: "divakar.dev.work@gmail.com", // Configurable email
    linkedInUrl: "https://www.linkedin.com/in/divakarsingaravelu/",
    githubUrl: "https://github.com/divakarsingaravelu", // Configurable GitHub profile
    resumeFileName: "Divakar_Singaravelu_Resume.pdf",
    location: "Chennai, India",
    interests: [
      "Full Stack Development",
      "Artificial Intelligence & ML",
      "System Architecture",
      "Algorithmic Problem-Solving"
    ]
  },

  aboutPillars: [
    {
      title: "Development",
      description: "Learning and building modern, responsive web applications with clean architecture and robust state management.",
      icon: "Code2",
      gradient: "from-cyan-500/20 to-blue-600/20",
      accent: "#00F0FF"
    },
    {
      title: "Problem Solving",
      description: "Strengthening programming and logical-thinking skills through core languages like Java, Python, and C.",
      icon: "Cpu",
      gradient: "from-violet-500/20 to-purple-600/20",
      accent: "#8B5CF6"
    },
    {
      title: "Continuous Learning",
      description: "Exploring emerging technologies, AI/ML concepts, and modern engineering practices to build impactful software.",
      icon: "Sparkles",
      gradient: "from-pink-500/20 to-rose-600/20",
      accent: "#EC4899"
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Adhi College of Engineering and Technology",
      affiliate: "Affiliated with Anna University",
      period: "2023 – 2027",
      status: "Final-year CSE Undergraduate",
      location: "Kanchipuram / Chennai, Tamil Nadu",
      description: "Comprehensive curriculum covering data structures, algorithms, database management, computer networks, software engineering, and operating systems.",
      highlights: [
        "Core focus on Software Engineering, Object-Oriented Programming, and Database Systems",
        "Engaged in project development, workshops, and technical events",
        "Exploring machine learning and full-stack web applications"
      ]
    },
    {
      degree: "Full Stack Software Development Program",
      institution: "NxtWave CCBP 4.0 Academy",
      period: "Intensive Tech Track",
      status: "Professional Skill Program",
      description: "Hands-on, industry-aligned training covering modern frontend and backend development with JavaScript, React, Node.js, and databases.",
      highlights: [
        "Dynamic Web Application Architecture & Asynchronous programming",
        "Frontend mastery with React.js, responsive design, and modern CSS frameworks",
        "Backend REST APIs with Node.js, Express.js, and SQL/SQLite databases"
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
      title: "MenuBase — Multi-Platform Restaurant Menu SaaS",
      shortDescription: "A flagship full-stack SaaS platform designed to centralize, manage, and synchronize digital restaurant menus across multiple food delivery platforms.",
      fullDescription: "MenuBase addresses the operational bottleneck restaurants face when updating items, pricing, and availability across disparate delivery portals. Built with React, TypeScript, and modern modular architecture, it provides an intuitive dashboard for menu cataloging, automated real-time status toggling, and structured API endpoints.",
      category: "Full Stack",
      technologies: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "REST APIs", "Node.js"],
      keyFeatures: [
        "Centralized catalog manager for multi-channel menu items and categories",
        "Instant price and stock availability updates across synced delivery channels",
        "Responsive, modern glassmorphic dashboard optimized for desktop and tablet displays",
        "Modular state management designed for real-time synchronization"
      ],
      status: "In Progress",
      githubUrl: "https://github.com/divakarsingaravelu",
      liveUrl: undefined,
      imagePlaceholderGradient: "from-cyan-600/30 via-blue-600/20 to-purple-700/30",
      featured: true,
      bentoSpan: "col-span-12 lg:col-span-8",
      accentGlow: "rgba(0, 240, 255, 0.25)",
      metrics: [
        { label: "Sync Engine", value: "Multi-Platform" },
        { label: "Architecture", value: "SaaS Multi-Tenant" },
        { label: "Target Outlets", value: "F&B Portals" }
      ],
      architectureLayers: [
        { layer: "Presentation", details: "React 18 + TypeScript with Tailwind CSS & Glassmorphism" },
        { layer: "State Engine", details: "Centralized catalog state with optimistic UI updates" },
        { layer: "Integration", details: "RESTful endpoints prepared for Swiggy/Zomato webhook syndication" }
      ]
    },
    {
      id: "dynamic-web-apps-suite",
      title: "Dynamic Web Applications Suite",
      shortDescription: "A collection of interactive, responsive web applications highlighting asynchronous API consumption, dynamic DOM manipulation, and UX workflows.",
      fullDescription: "Developed through intensive practical training at NxtWave CCBP 4.0 Academy. Highlights practical mastery of core web fundamentals including asynchronous fetch requests, local storage caching, client-side filtering, and responsive mobile-first layouts.",
      category: "Frontend",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST APIs", "Bootstrap"],
      keyFeatures: [
        "Asynchronous external REST API data integration with custom loaders and error boundaries",
        "Dynamic search, multi-criteria filtering, and client-side pagination",
        "Persistent user preferences and state retention with LocalStorage",
        "Fluid responsive design tested across multiple viewport dimensions"
      ],
      status: "Completed",
      githubUrl: "https://github.com/divakarsingaravelu",
      liveUrl: undefined,
      imagePlaceholderGradient: "from-amber-600/30 via-orange-600/20 to-pink-600/20",
      featured: false,
      bentoSpan: "col-span-12 lg:col-span-4",
      accentGlow: "rgba(245, 158, 11, 0.25)",
      metrics: [
        { label: "App Count", value: "Multiple Modules" },
        { label: "Protocols", value: "REST / Fetch" },
        { label: "DOM State", value: "Dynamic Event Loop" }
      ]
    },
    {
      id: "hotel-management-system",
      title: "Hotel Management System Architecture",
      shortDescription: "Comprehensive system architecture and object-oriented design modeling core hospitality workflows, booking states, and database schemas.",
      fullDescription: "An in-depth software engineering design model developed using UML methodologies (Argo-UML). Covers class diagrams, sequence diagrams for reservation check-in/check-out lifecycles, entity-relationship structures, and component interactions for hospitality software.",
      category: "System Architecture",
      technologies: ["Object-Oriented Analysis", "UML Modeling", "Argo-UML", "Database Design"],
      keyFeatures: [
        "Complete UML suite: Class Diagrams, Use Case Diagrams, and Sequence Flows",
        "Detailed state transition modeling for room allocation and billing cycles",
        "Normalized relational database schema mapping",
        "Scalable modular architectural design following SOLID principles"
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
      shortDescription: "A final-year CSE machine learning project exploring deep learning techniques to classify and recognize human emotions from speech audio signals.",
      fullDescription: "This project focuses on extracting acoustic features such as Mel-Frequency Cepstral Coefficients (MFCCs), chroma, and spectral contrast from speech audio datasets (such as RAVDESS) to train neural network architectures capable of predicting emotional states (happy, sad, neutral, angry, etc.).",
      category: "AI / Machine Learning",
      technologies: ["Python", "Librosa", "Audio Processing", "Machine Learning", "Neural Networks"],
      keyFeatures: [
        "Acoustic audio feature extraction utilizing MFCCs and spectral analysis",
        "Deep learning classifier pipeline predicting multiple primary emotion categories",
        "Comprehensive confusion matrix and accuracy evaluation benchmarks",
        "Final-year capstone engineering research initiative"
      ],
      status: "In Progress",
      githubUrl: "https://github.com/divakarsingaravelu",
      liveUrl: undefined,
      imagePlaceholderGradient: "from-purple-600/30 via-violet-600/20 to-pink-600/30",
      featured: false,
      bentoSpan: "col-span-12 lg:col-span-7",
      accentGlow: "rgba(139, 92, 246, 0.25)",
      metrics: [
        { label: "Domain", value: "Audio Signal Processing" },
        { label: "Feature Extraction", value: "MFCC / Chroma" },
        { label: "Capstone", value: "Final-year CSE" }
      ]
    },
    {
      id: "hostel-outpass-management",
      title: "Digital Hostel Outpass Management System",
      shortDescription: "A modern web application concept for automating hostel student outpass requests, multi-tier approvals, and gatekeeper record management.",
      fullDescription: "Designed to eliminate paper-based outpass slips in educational institutions. Students can submit digital leave/outpass requests, wardens and mentors receive instant notification for review, and security personnel at campus gates can verify clearance via QR or status codes.",
      category: "Full Stack",
      technologies: ["React.js", "Node.js", "Express.js", "SQLite", "Tailwind CSS"],
      keyFeatures: [
        "Role-based authentication & dashboards: Student, Warden, and Gate Security",
        "Digital request lifecycle tracking: Pending, Approved, Rejected, and Out-of-Campus",
        "Automated timestamping for departure and entry log tracking",
        "Exportable audit logs for administrative accountability"
      ],
      status: "Architecture / Concept",
      githubUrl: "https://github.com/Divakarsingaravelu/hostel-outpass-system",
      liveUrl: undefined,
      imagePlaceholderGradient: "from-blue-600/30 via-indigo-600/20 to-cyan-700/20",
      featured: false,
      bentoSpan: "col-span-12 lg:col-span-6",
      accentGlow: "rgba(59, 130, 246, 0.25)",
      metrics: [
        { label: "User Roles", value: "Student, Warden, Gate" },
        { label: "Database", value: "SQLite Relational" },
        { label: "Clearance", value: "Instant Verification" }
      ]
    },
    {
      id: "personal-portfolio-zerog",
      title: "Zero-Gravity Developer Portfolio",
      shortDescription: "A futuristic, interactive personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion with Zero-G physics simulation.",
      fullDescription: "This very website! Showcases modern frontend engineering with interactive starfields, physics toggling (Zero-G vs Gravity drag momentum), 3D tilt interactions, certificate inspection modals, and accessible responsive design.",
      category: "Frontend",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      keyFeatures: [
        "Interactive Zero-G / Gravity physics toggle with floating weightless cards",
        "Interactive Starfield canvas reacting to cursor position and drag forces",
        "Centralized configuration for frictionless updates to projects, skills, and certs",
        "Strictly genuine data presentation with verified links and no simulated claims"
      ],
      status: "Completed",
      githubUrl: "https://github.com/Divakarsingaravelu/portfolio-zerog",
      liveUrl: "#",
      imagePlaceholderGradient: "from-cyan-500/30 via-violet-600/20 to-purple-800/30",
      featured: false,
      bentoSpan: "col-span-12 lg:col-span-6",
      accentGlow: "rgba(0, 240, 255, 0.25)",
      metrics: [
        { label: "Framerate", value: "Smooth 60 FPS" },
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
        "Asynchronous JavaScript, Event Loop, Fetch APIs, and JSON data structures",
        "Dynamic DOM manipulation and state synchronization",
        "Form validation and dynamic UI state handling"
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
      accentGlow: "rgba(139, 92, 246, 0.25)",
      highlights: [
        "Object-Oriented Programming (OOP) principles: Encapsulation, Inheritance, Polymorphism",
        "Exception handling, Collections Framework, and Multithreading fundamentals",
        "Algorithmic problem solving and data structure implementation"
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
      accentGlow: "rgba(236, 72, 153, 0.25)",
      highlights: [
        "Sensor data acquisition, microcontroller programming, and actuator interfacing",
        "IoT communication protocols (MQTT, HTTP) and cloud dashboard telemetry",
        "Hardware-to-software integration and prototype building"
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
        "Core syntax, data types, list comprehensions, and functional programming constructs",
        "Modular programming, file I/O operations, and standard libraries",
        "Foundation for machine learning feature engineering and scripts"
      ]
    },
    {
      id: "javascript-essentials",
      title: "JavaScript Essentials & Flexbox Architecture",
      issuer: "Web Engineering Certification",
      date: "Certified",
      category: "Web Development",
      badge: "Modern Frontend",
      bentoSpan: "col-span-12 lg:col-span-4",
      accentGlow: "rgba(59, 130, 246, 0.25)",
      highlights: [
        "ES6+ features: Promises, Async/Await, Destructuring, and Scope Chains",
        "Browser APIs, LocalStorage, and Event delegation models",
        "Advanced CSS layout engines: Flexbox, CSS Grid, and fluid typography"
      ]
    }
  ] as Certification[]
};
