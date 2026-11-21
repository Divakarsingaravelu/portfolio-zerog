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
  category: 'Full Stack' | 'Frontend';
  technologies: string[];
  keyFeatures: string[];
  status: 'Completed' | 'In Progress' | 'Architecture / Concept';
  githubUrl?: string;
  liveUrl?: string;
  imagePlaceholderGradient: string;
  featured?: boolean;
  bentoSpan: string;
  metrics?: ProjectMetric[];
  accentGlow?: string;
  architectureLayers?: ArchitectureLayer[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend & DB' | 'Languages' | 'Tools & Workflow' | 'Soft Skills';
  icon: string;
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

export interface InternshipItem {
  role: string;
  company: string;
  period: string;
  dates: string;
  certificateId: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Divakar S",
    shortName: "Divakar S",
    title: "Full Stack Developer",
    subtitles: ["Full Stack Developer", "Web Developer", "Software Developer"],
    statusBadge: "B.E. CSE (2023 - 2027) | CGPA: 7.5",
    bioHeading: "About me.",
    bio: "Detail-oriented Software Developer pursuing a B.E. in Computer Science Engineering at Adhi College of Engineering and Technology, Anna University, Kanchipuram (CGPA: 7.5). Proficient in JavaScript, React 18, TypeScript, Python, Java, Node.js, REST API integration, and SQL/SQLite databases. Proven ability to deliver software solutions through two industry internships, technical projects, and NxtWave CCBP 4.0 training.",
    heroDescription: "Computer Science Engineering student at Adhi College of Engineering and Technology, Anna University (CGPA: 7.5). Proficient in JavaScript, React 18, TypeScript, Python, Java, Node.js, and SQL. Completed two industry internships at Happieloop Technologies and Thiranex.",
    typewriterPhrases: [
      "Full Stack Developer",
      "Web Developer",
      "Software Developer",
      "React 18 + TypeScript + Tailwind CSS",
      "Node.js + REST APIs + SQLite / SQL"
    ],
    contactEmail: "divakarsingaravelu@gmail.com",
    phone: "9786388241",
    linkedInUrl: "https://www.linkedin.com/in/divakarsingaravelu/",
    githubUrl: "https://github.com/Divakarsingaravelu",
    resumeFileName: "Divakar_Singaravelu_Resume.pdf",
    location: "Tiruvannamalai, Tamil Nadu, 604601",
    summary: "Detail-oriented Software Developer pursuing a B.E. in Computer Science Engineering with a strong foundation in building responsive, full-stack web applications. Proficient in JavaScript, React, TypeScript, Python, Java, Node.js, REST API integration, and SQL/SQLite databases. Proven ability to deliver optimized, user-centric software solutions through two industry internships, hands-on technical projects, NxtWave CCBP 4.0 academy training, and competitive hackathon participation.",
    interests: [
      "Full Stack Web Development",
      "REST API Integration",
      "Relational Database Schema Design",
      "Rapid Problem-Solving"
    ]
  },

  internships: [
    {
      role: "Web Development Intern",
      company: "Happieloop Technologies",
      period: "Oct 2026 - Nov 2026",
      dates: "9 Oct 2026 - 8 Nov 2026",
      certificateId: "HP2610500",
      description: "Completed a Web Development internship. Applied web development fundamentals to build and refine responsive interfaces and web application components.",
      highlights: [
        "Completed a Web Development internship (9 Oct 2026 - 8 Nov 2026)",
        "Certificate ID: HP2610500",
        "Applied web development fundamentals to build and refine responsive interfaces and web application components"
      ]
    },
    {
      role: "Full Stack Development Intern",
      company: "Thiranex",
      period: "Sep 2026 - Oct 2026",
      dates: "6 Sep 2026 - 5 Oct 2026",
      certificateId: "THX-SEP0626-293",
      description: "Successfully completed a Full Stack Development internship. Gained hands-on experience across frontend, backend, and database integration in full-stack web development.",
      highlights: [
        "Successfully completed a Full Stack Development internship (6 Sep 2026 - 5 Oct 2026)",
        "Certificate ID: THX-SEP0626-293",
        "Gained hands-on experience across frontend, backend, and database integration in full-stack web development"
      ]
    }
  ] as InternshipItem[],

  aboutPillars: [
    {
      title: "Full Stack Development",
      description: "Building responsive web applications using React 18, TypeScript, Tailwind CSS, TanStack Query, and Node.js with REST APIs.",
      icon: "Code2",
      gradient: "from-cyan-500/20 to-blue-600/20",
      accent: "#00F0FF"
    },
    {
      title: "Industry Internships",
      description: "Two internships: Web Development at Happieloop Technologies and Full Stack Development at Thiranex, working on live components and databases.",
      icon: "Cpu",
      gradient: "from-blue-500/20 to-cyan-600/20",
      accent: "#3B82F6"
    },
    {
      title: "Data & Systems",
      description: "Relational database schema design, Row-Level Security, SQL/SQLite queries, and competitive hackathon problem-solving.",
      icon: "Sparkles",
      gradient: "from-cyan-500/20 to-blue-500/20",
      accent: "#00B8D4"
    }
  ],

  education: [
    {
      degree: "B.E. – Computer Science Engineering",
      institution: "Adhi College of Engineering and Technology, Anna University, Kanchipuram",
      affiliate: "Anna University",
      period: "2023 - 2027",
      status: "CGPA: 7.5",
      location: "Kanchipuram, Tamil Nadu",
      description: "Coursework covers data structures, algorithms, database management, computer networks, software engineering, and operating systems.",
      highlights: [
        "CGPA: 7.5",
        "Adhi College of Engineering and Technology, Anna University",
        "Competitive hackathon participation and technical projects"
      ]
    },
    {
      degree: "Intermediate (MBIPC)",
      institution: "Government Boys Higher Secondary School, Tiruvannamalai",
      affiliate: "State Board",
      period: "2020 - 2023",
      status: "72%",
      location: "Tiruvannamalai, Tamil Nadu",
      description: "Completed higher secondary education in Mathematics, Biology, Physics, and Chemistry (MBIPC) with 72% aggregate.",
      highlights: [
        "72% aggregate score",
        "Government Boys Higher Secondary School, Tiruvannamalai"
      ]
    },
    {
      degree: "CCBP 4.0 Academy Training",
      institution: "NxtWave CCBP 4.0 Academy",
      affiliate: "Professional Skill Program",
      period: "2025 - 2026",
      status: "Certified",
      location: "Online",
      description: "Hands-on software development training covering responsive web design, dynamic web applications, and programming foundations.",
      highlights: [
        "Responsive Web Design Using Flexbox (Jun 2026)",
        "Build Your Own Dynamic Web Application (Mar 2026)",
        "Programming Foundations with Python (Nov 2025)"
      ]
    }
  ] as EducationItem[],

  skills: [
    // Languages
    { name: "JavaScript", category: "Languages", icon: "Code", featured: true },
    { name: "TypeScript", category: "Languages", icon: "FileCode", featured: true },
    { name: "Python", category: "Languages", icon: "Terminal", featured: true },
    { name: "Java", category: "Languages", icon: "Coffee", featured: true },
    { name: "C", category: "Languages", icon: "Cpu", featured: true },
    { name: "SQL", category: "Languages", icon: "Database", featured: true },

    // Frontend
    { name: "React 18", category: "Frontend", icon: "Atom", featured: true },
    { name: "HTML", category: "Frontend", icon: "Layout", featured: true },
    { name: "CSS", category: "Frontend", icon: "Layers", featured: true },
    { name: "Bootstrap", category: "Frontend", icon: "Box", featured: true },
    { name: "Tailwind CSS", category: "Frontend", icon: "Palette", featured: true },
    { name: "TanStack Query", category: "Frontend", icon: "Zap", featured: true },
    { name: "Responsive Web Design (Flexbox)", category: "Frontend", icon: "Smartphone", featured: true },

    // Backend & DB
    { name: "Node.js", category: "Backend & DB", icon: "Server", featured: true },
    { name: "REST API Integration", category: "Backend & DB", icon: "Network", featured: true },
    { name: "Fetch API", category: "Backend & DB", icon: "Network", featured: true },
    { name: "SQLite", category: "Backend & DB", icon: "HardDrive", featured: true },
    { name: "Relational Database Schema Design", category: "Backend & DB", icon: "Database", featured: true },
    { name: "Row-Level Security", category: "Backend & DB", icon: "Boxes", featured: true },

    // Tools & Workflow
    { name: "Git", category: "Tools & Workflow", icon: "GitBranch", featured: true },
    { name: "GitHub", category: "Tools & Workflow", icon: "Github", featured: true },
    { name: "Visual Studio Code", category: "Tools & Workflow", icon: "Laptop", featured: true },
    { name: "npm", category: "Tools & Workflow", icon: "Package", featured: true },

    // Soft Skills
    { name: "Rapid Problem-Solving", category: "Soft Skills", icon: "Zap", featured: true },
    { name: "Cross-functional Collaboration", category: "Soft Skills", icon: "Boxes", featured: true },
    { name: "Time Management", category: "Soft Skills", icon: "Boxes", featured: true },
    { name: "Adaptability", category: "Soft Skills", icon: "Boxes", featured: true }
  ] as SkillItem[],

  projects: [
    {
      id: "menubase-saas",
      title: "MenuBase – Multi-Platform Menu Management SaaS",
      shortDescription: "Full-stack SaaS platform centralizing menu, pricing, and stock management for cloud kitchens.",
      fullDescription: "Built a full-stack SaaS platform centralizing menu, pricing, and stock management for cloud kitchens, eliminating manual re-entry and reducing sync errors. Developed the frontend with React 18, TypeScript, and Tailwind CSS, using TanStack Query for server-state management with instant user feedback. Designed a relational database schema with Row-Level Security on every table and integrated an AI-powered description generator to speed up menu creation.",
      category: "Full Stack",
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "TanStack Query", "Row-Level Security", "Relational Database"],
      keyFeatures: [
        "Built a full-stack SaaS platform centralizing menu, pricing, and stock management for cloud kitchens, eliminating manual re-entry and reducing sync errors.",
        "Developed the frontend with React 18, TypeScript, and Tailwind CSS, using TanStack Query for server-state management with instant user feedback.",
        "Designed a relational database schema with Row-Level Security on every table and integrated an AI-powered description generator to speed up menu creation."
      ],
      status: "Completed",
      githubUrl: "https://github.com/Divakarsingaravelu",
      liveUrl: undefined,
      imagePlaceholderGradient: "from-cyan-600/30 via-blue-600/20 to-blue-800/30",
      featured: true,
      bentoSpan: "col-span-12 lg:col-span-8",
      accentGlow: "rgba(0, 240, 255, 0.25)",
      metrics: [
        { label: "Type", value: "Personal Project" },
        { label: "Frontend", value: "React 18 + TS" },
        { label: "Security", value: "Row-Level (RLS)" }
      ],
      architectureLayers: [
        { layer: "Presentation", details: "React 18, TypeScript, and Tailwind CSS with instant user feedback" },
        { layer: "State Engine", details: "TanStack Query for server-state caching and synchronization" },
        { layer: "Data & Security", details: "Relational database schema with Row-Level Security on every table" }
      ]
    },
    {
      id: "wikipedia-search-app",
      title: "Wikipedia Search Application",
      shortDescription: "Dynamic Wikipedia search application using asynchronous JavaScript (Fetch API) to execute real-time REST API GET requests.",
      fullDescription: "Engineered a dynamic Wikipedia search application using asynchronous JavaScript (Fetch API) to execute real-time REST API GET requests. Designed an intuitive, mobile-first responsive UI with HTML, CSS, and Bootstrap, optimizing layout and load performance for fast data retrieval.",
      category: "Frontend",
      technologies: ["JavaScript (ES6+)", "Fetch API", "REST APIs", "HTML", "CSS", "Bootstrap"],
      keyFeatures: [
        "Engineered a dynamic Wikipedia search application using asynchronous JavaScript (Fetch API) to execute real-time REST API GET requests.",
        "Designed an intuitive, mobile-first responsive UI with HTML, CSS, and Bootstrap, optimizing layout and load performance for fast data retrieval."
      ],
      status: "Completed",
      githubUrl: "https://github.com/Divakarsingaravelu",
      liveUrl: undefined,
      imagePlaceholderGradient: "from-blue-600/30 via-cyan-600/20 to-blue-800/30",
      featured: true,
      bentoSpan: "col-span-12 lg:col-span-4",
      accentGlow: "rgba(59, 130, 246, 0.25)",
      metrics: [
        { label: "Type", value: "Academic Project" },
        { label: "Protocol", value: "REST / Fetch API" },
        { label: "Design", value: "Mobile-First" }
      ]
    },
    {
      id: "personal-portfolio-zerog",
      title: "Zero-Gravity Developer Portfolio",
      shortDescription: "Personal portfolio built with React 18, TypeScript, and Tailwind CSS featuring interactive physics and 8-point spacing.",
      fullDescription: "Built with React 18, TypeScript, and Tailwind CSS. Features an interactive starfield canvas, zero-G / gravity physics toggle, 8-point spacing system, certificate modal viewers, and verified factual resume data.",
      category: "Frontend",
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      keyFeatures: [
        "Zero-G / gravity physics toggle with floating cards",
        "Interactive starfield reacting to cursor movement",
        "Strict 8-point spacing system and solid navy/blue color scheme",
        "Verified resume facts and downloadable PDF"
      ],
      status: "Completed",
      githubUrl: "https://github.com/Divakarsingaravelu/portfolio-zerog",
      liveUrl: "#",
      imagePlaceholderGradient: "from-cyan-500/30 via-blue-600/20 to-blue-800/30",
      featured: false,
      bentoSpan: "col-span-12 lg:col-span-12",
      accentGlow: "rgba(0, 240, 255, 0.25)",
      metrics: [
        { label: "Framerate", value: "60 FPS" },
        { label: "Spacing", value: "8-point System" },
        { label: "Type Safety", value: "100% TypeScript" }
      ]
    }
  ] as Project[],

  certifications: [
    {
      id: "make-ai-workflows",
      title: "AI-Powered Workflows",
      issuer: "Make.com",
      date: "Feb 2026",
      category: "Emerging Tech",
      badge: "AI Automation",
      bentoSpan: "col-span-12 lg:col-span-6",
      accentGlow: "rgba(0, 240, 255, 0.25)",
      highlights: [
        "AI-powered workflow design and automated API integration",
        "Connecting web services with automated triggers and data mapping"
      ]
    },
    {
      id: "iot-workshop-cert",
      title: "Internet of Things (IoT) Two-Day Workshop",
      issuer: "Technical Institution Workshop",
      date: "Two-Day Workshop",
      category: "Emerging Tech",
      badge: "Hardware & IoT",
      bentoSpan: "col-span-12 lg:col-span-6",
      accentGlow: "rgba(59, 130, 246, 0.25)",
      highlights: [
        "Sensor data acquisition and microcontroller programming",
        "IoT communication protocols and hardware integration"
      ]
    },
    {
      id: "nxtwave-flexbox",
      title: "Responsive Web Design Using Flexbox",
      issuer: "NxtWave CCBP 4.0 Academy",
      date: "Jun 2026",
      category: "Web Development",
      badge: "Responsive Design",
      bentoSpan: "col-span-12 lg:col-span-4",
      accentGlow: "rgba(0, 184, 212, 0.25)",
      highlights: [
        "CSS Flexbox layout architecture and fluid responsive design",
        "Mobile-first responsive web design principles"
      ]
    },
    {
      id: "nxtwave-dynamic-web",
      title: "Build Your Own Dynamic Web Application",
      issuer: "NxtWave CCBP 4.0 Academy",
      date: "Mar 2026",
      category: "Web Development",
      badge: "Dynamic Web Apps",
      bentoSpan: "col-span-12 lg:col-span-4",
      accentGlow: "rgba(0, 240, 255, 0.25)",
      highlights: [
        "Asynchronous JavaScript, event loop, Fetch APIs, and JSON data",
        "DOM manipulation, form validation, and client-side UI states"
      ]
    },
    {
      id: "nxtwave-python-foundations",
      title: "Programming Foundations with Python",
      issuer: "NxtWave CCBP 4.0 Academy",
      date: "Nov 2025",
      category: "Programming",
      badge: "Python Foundations",
      bentoSpan: "col-span-12 lg:col-span-4",
      accentGlow: "rgba(16, 185, 129, 0.25)",
      highlights: [
        "Python syntax, data types, and algorithmic problem solving",
        "Modular programming, functions, and standard libraries"
      ]
    }
  ] as Certification[]
};
