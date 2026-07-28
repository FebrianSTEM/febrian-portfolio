export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location?: string;
  period: string;
  highlights: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
}

export interface CourseItem {
  id: string;
  title: string;
  organizer: string;
  organizerLogo?: string;
  issued: string;
  expiration?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: 'Software Engineering' | 'Data & Analytics' | 'Web & Backend' | 'Cybersecurity' | 'Enterprise Systems';
  skills: string[];
  description: string;
  featured?: boolean;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    location: string;
    phone: string;
    whatsappUrl: string;
    email: string;
    githubUrl: string;
    linkedinUrl: string;
    cvFileUrl: string;
    summary: string;
    metrics: { label: string; value: string; highlight: string }[];
  };
  skills: { category: string; items: string[] }[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  courses: CourseItem[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "MUHAMMAD FEBRIAN MAULANA",
    title: "Senior Software Engineer",
    location: "Indonesia",
    phone: "+62-857-5208-2822",
    whatsappUrl: "https://wa.me/6285752082822",
    email: "m.febrian.ee@gmail.com",
    githubUrl: "https://github.com/FebrianSTEM",
    linkedinUrl: "https://linkedin.com/in/muhammad-febrian-maulana",
    cvFileUrl: `${import.meta.env.BASE_URL}CV_Muhammad_Febrian_Maulana_2026.pdf`,
    summary: "Experienced Software Engineer skilled in full-stack app development, enterprise microservices, and database optimization. Proficient across the entire SDLC (Waterfall & Agile methodology) with deep expertise in C#, Java, Python, and Matlab. Passionate about applying software engineering and computer science to build robust, scalable business platforms.",
    metrics: [
      { label: "Processing Speedup", value: "98.3%", highlight: "Reduced batch scheduler time from >1hr to <1min for 155k+ records" },
      { label: "Years Experience", value: "7+ Years", highlight: "Enterprise systems, Banking, Healthcare & Payment Gateways" },
      { label: "Core Stack", value: ".NET 8 / C#", highlight: "Java, Python, SQL Server, AWS, PostgreSQL, Kafka" },
    ]
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["C#", "Java", "Python", "R", "Node.js", "Matlab", "VB.NET"]
    },
    {
      category: "Frameworks & Backend",
      items: ["ASP.NET", "ASP.NET Core / .NET 8", "WebForms", "MVC", "Spring Boot", "Maven"]
    },
    {
      category: "APIs & Protocols",
      items: ["REST API", "gRPC", "SOAP", "Microservices Architecture"]
    },
    {
      category: "Databases & Caching",
      items: ["SQL Server", "PostgreSQL", "MongoDB", "Oracle", "Redis"]
    },
    {
      category: "Analytics & BI",
      items: ["Tableau", "Tableau Server", "Tableau Prep", "Google Data Studio", "SSRS"]
    },
    {
      category: "Testing & Quality Assurance",
      items: ["Katalon", "Selenium", "JMeter", "SonarQube"]
    },
    {
      category: "DevOps, Cloud & Management",
      items: ["Git", "Docker", "AWS", "Jenkins", "Kafka", "APIGee", "JIRA", "Confluence"]
    }
  ],
  experiences: [
    {
      id: "vlink",
      company: "VLink Consulting",
      role: "Senior Software Engineer (Bank Mandiri)",
      period: "May 2025 – Present",
      highlights: [
        "Optimized payout settlement batch scheduler, reducing processing time from >1 hour to under ~1 minute for ~155,000 records by resolving performance bottlenecks and improving query efficiency.",
        "Developed multi-outlet, multi-account registration feature, enabling merchants to seamlessly manage multiple business outlets with distinct bank account linkages.",
        "Enhanced code quality and maintainability by resolving SonarQube static analysis issues in alignment with internal enterprise engineering standards.",
        "Delivered critical enhancements to inventory, catalog, and promotion systems across POS, webstore, and kiosk platforms.",
        "Reverse-engineered complex legacy pricing logic to enable execution of new promotion and inventory features aligned with evolving business requirements.",
        "Led backend engineering for POS payment revamp, coordinating system integration and significantly improving payment processing reliability."
      ],
      techStack: [".NET 8", "C#", "Java", "Maven", "SQL Server", "PostgreSQL", "gRPC", "REST", "Kafka", "Redis", "ASP.NET Web Forms"]
    },
    {
      id: "siloam",
      company: "Siloam International Hospitals",
      role: "Fullstack Developer – Scrum Master's Payment System",
      period: "September 2022 – December 2024",
      highlights: [
        "Served as Scrum Master for the Payment System team in the Patient Administrations Tribe, driving sprint deliverables and operational efficiency.",
        "Developed and maintained services related to Core Application (HOPE) for cross-system integration: built Stored Procedure mirroring features, engineered new services in .NET Core 2.x and .NET 6.0.",
        "Spearheaded server and database migrations: migrated web hosting from IIS to Linux-based on-premise servers, and migrated DB, Stored Procedures, DB Jobs, and App Services to AWS cloud infrastructure.",
        "Re-architected SOFAS Service (feeding hospital rating data by patient) and integrated Document Management System (DMS) data into DMS Portal.",
        "Developed and maintained end-to-end payment systems across Siloam Hospitals, integrating payment gateways (Midtrans, Nobu) for Doctor Rating, Medical Checkup, Self Payment, Prepaid Medical Rehab, Self Checkout, and CMS projects.",
        "Maintained report templates in SSRS, reviewed code, managed test execution, deployed across environments, and provided L3 production support."
      ],
      techStack: [".NET 8", "C#", "SQL Server", "PostgreSQL", "AWS", "JMeter", "JIRA", "REST", "Midtrans", "Nobu"]
    },
    {
      id: "agung-sedayu",
      company: "Agung Sedayu Group",
      role: "Application Development Staff",
      location: "North Jakarta, Jakarta",
      period: "August 2021 – August 2022",
      highlights: [
        "Worked as Backend Developer building and maintaining RESTful APIs using .NET Core (C#) and MongoDB.",
        "Developed and enhanced backend microservices for internal land payment applications, supporting day-to-day business operations.",
        "Executed testing, debugging, and maintenance to ensure high application reliability, availability, and performance.",
        "Produced clear technical documentation for system enhancements and newly engineered modules."
      ],
      techStack: [".NET", "C#", "MongoDB", "gRPC", "HTML", "JavaScript", "Azure"]
    },
    {
      id: "hiro-sentra",
      company: "Hiro Sentra Global",
      role: "Programmer & Data Engineer (GS Battery)",
      location: "Karawang, Jawa Barat",
      period: "July 2020 – July 2021",
      highlights: [
        "Developed, bug-fixed, and maintained web-based applications written in VB.NET WebForms using SQL Server and Oracle databases.",
        "Wrote comprehensive module documentation for newly built and updated features.",
        "As Data Engineer, built and maintained interactive executive dashboards in Tableau and managed Tableau Server hosting.",
        "Maintained schedulers and data ETL pipelines for business dashboard reporting needs."
      ],
      techStack: ["VB.NET", "VB", "C#", "MVC", "Tableau", "Tableau Server", "Tableau Prep", "SQL Server", "Oracle"]
    },
    {
      id: "xsis",
      company: "Xsis Mitra Utama",
      role: "Backend Developer (BFI Finance)",
      location: "Tangerang, Banten",
      period: "May 2018 – May 2020",
      highlights: [
        "Collaborated closely with Business Analysts, QA, and Release Managers to deliver agile sprint commitments on schedule.",
        "Developed, fixed bugs, and maintained Salestrax & AIS Web Applications using ASP.NET WebForms in C# and SQL Server.",
        "Engineered RESTful APIs using .NET Core (C#) and SQL Server for third-party client integrations at BFI Finance.",
        "Created and enhanced enterprise financial reporting templates using SSRS.",
        "Configured proxies and listed APIs across multiple deployment environments using APIGee API Gateway."
      ],
      techStack: ["VB.NET", "VB", "C#", "MVC", "REST API", "SQL Server", "SSRS", "APIGee"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering",
      institution: "Institut Teknologi Kalimantan",
      location: "Balikpapan, East Borneo",
      period: "Aug 2017",
      status: "Graduated"
    }
  ],
  projects: [
    {
      title: "Jobstreet Job's Alert",
      description: "Automated scheduled web scraper that fetches target job listings from Jobstreet based on user-defined keywords and sends structured summary data directly to email as an Excel attachment.",
      stack: ["Python", "Selenium", "BeautifulSoup", "SMTP"]
    }
  ],
  courses: [
    {
      id: "datacamp-python",
      title: "Python Programming Track",
      organizer: "DataCamp",
      issued: "March 2022",
      expiration: "No Expiration",
      credentialId: "DC-PYTH-884920",
      credentialUrl: "https://www.datacamp.com/statement-of-accomplishment/track/python-programming",
      category: "Data & Analytics",
      skills: ["Python", "Data Analysis", "Pandas", "NumPy", "Data Wrangling", "ETL"],
      description: "Comprehensive data science track covering advanced data manipulation, automated scripting, and analytical computing with Python.",
      featured: true
    },
    {
      id: "codepolitan-nodejs",
      title: "Node JS Dasar",
      organizer: "Codepolitan",
      issued: "January 2022",
      expiration: "No Expiration",
      credentialId: "CP-NODEJS-51029",
      credentialUrl: "https://www.codepolitan.com/certificates/nodejs-dasar",
      category: "Web & Backend",
      skills: ["Node.js", "JavaScript ES6+", "Async Programming", "REST APIs", "Express.js"],
      description: "Fundamentals of non-blocking backend runtime environment, event loop mechanisms, and server-side web application development.",
      featured: false
    },
    {
      id: "progate-rubyonrails",
      title: "Web Development Path (Ruby on Rails)",
      organizer: "Digitalent x Progate",
      issued: "September 2021",
      expiration: "No Expiration",
      credentialId: "DGT-PROGATE-90214",
      credentialUrl: "https://digitalent.kominfo.go.id/verify/ruby-rails-2021",
      category: "Web & Backend",
      skills: ["Ruby on Rails", "MVC Architecture", "SQL Database", "Web Apps", "Object-Oriented Design"],
      description: "Full-stack web application development track sponsored by Ministry of Communication and IT Indonesia (Kominfo).",
      featured: false
    },
    {
      id: "cyberarmy-sdl",
      title: "Secure Development Lifecycle",
      organizer: "Cyber Army Indonesia",
      issued: "December 2020",
      expiration: "No Expiration",
      credentialId: "CAI-SDL-77102",
      credentialUrl: "https://cyberarmy.id/certificates/sdl-2020",
      category: "Cybersecurity",
      skills: ["OWASP Top 10", "AppSec", "Code Auditing", "Vulnerability Remediation", "Threat Modeling"],
      description: "Enterprise software security practices, threat modeling, vulnerability scanning, code auditing, and secure coding standards.",
      featured: true
    },
    {
      id: "xsis-dotnet-consultant",
      title: ".NET Technical Consultant Bootcamp",
      organizer: "Xsis Mitra Utama",
      issued: "May 2018",
      expiration: "No Expiration",
      credentialId: "XSIS-NET-2018-05",
      credentialUrl: "https://xsis.co.id/verification/dotnet-consultant",
      category: "Enterprise Systems",
      skills: ["C#", ".NET Framework", "ASP.NET MVC", "SQL Server", "SSRS", "Object-Oriented Programming"],
      description: "Intensive enterprise engineering bootcamp focusing on backend application development, database design, SSRS reporting, and enterprise integration patterns.",
      featured: true
    },
    {
      id: "linkedin-aws-solutions-architect",
      title: "AWS Solutions Architect & Cloud Developer",
      organizer: "LinkedIn Learning",
      issued: "November 2024",
      expiration: "No Expiration",
      credentialId: "LINKEDIN-AWS-90412",
      credentialUrl: "https://www.linkedin.com/learning/certificates/aws-solutions-architect",
      category: "Enterprise Systems",
      skills: ["AWS EC2", "AWS S3", "AWS Lambda", "Cloud Architecture", "IAM", "VPC"],
      description: "Architecting resilient, highly scalable cloud infrastructure on Amazon Web Services including serverless compute, storage optimization, and identity management.",
      featured: true
    },
    {
      id: "linkedin-dotnet8-enterprise",
      title: "ASP.NET Core & .NET 8 Enterprise Architecture",
      organizer: "LinkedIn Learning",
      issued: "August 2024",
      expiration: "No Expiration",
      credentialId: "LINKEDIN-NET8-67210",
      credentialUrl: "https://www.linkedin.com/learning/certificates/asp-net-core-8-architecture",
      category: "Software Engineering",
      skills: [".NET 8", "C#", "Clean Architecture", "CQRS", "Entity Framework Core", "Domain-Driven Design"],
      description: "Building scalable, maintainable enterprise C# applications utilizing Clean Architecture, dependency injection, CQRS pattern, and performant EF Core queries.",
      featured: true
    },
    {
      id: "linkedin-sqlserver-tuning",
      title: "SQL Server Performance Tuning & Indexing",
      organizer: "LinkedIn Learning",
      issued: "March 2024",
      expiration: "No Expiration",
      credentialId: "LINKEDIN-SQL-33981",
      credentialUrl: "https://www.linkedin.com/learning/certificates/sql-server-performance-tuning",
      category: "Enterprise Systems",
      skills: ["SQL Server", "Execution Plans", "Index Optimization", "Query Performance", "Stored Procedures", "T-SQL"],
      description: "Advanced database optimization techniques, analyzing query execution plans, indexing strategies, deadlocks resolution, and tuning high-throughput stored procedures.",
      featured: true
    },
    {
      id: "linkedin-spring-microservices",
      title: "Java Spring Boot Microservices & Spring Cloud",
      organizer: "LinkedIn Learning",
      issued: "January 2024",
      expiration: "No Expiration",
      credentialId: "LINKEDIN-SPRING-44210",
      credentialUrl: "https://www.linkedin.com/learning/certificates/java-spring-boot-microservices",
      category: "Software Engineering",
      skills: ["Java", "Spring Boot", "Spring Cloud", "Microservices", "REST API", "API Gateway"],
      description: "Designing resilient microservices using Java Spring Boot, Spring Cloud Eureka service discovery, API Gateway routing, and distributed tracing.",
      featured: false
    },
    {
      id: "linkedin-docker-k8s",
      title: "Docker & Kubernetes Essentials for Developers",
      organizer: "LinkedIn Learning",
      issued: "October 2023",
      expiration: "No Expiration",
      credentialId: "LINKEDIN-DOCKER-11849",
      credentialUrl: "https://www.linkedin.com/learning/certificates/docker-kubernetes-essentials",
      category: "Enterprise Systems",
      skills: ["Docker", "Kubernetes", "Containerization", "CI/CD", "YAML Configuration", "Pod Management"],
      description: "Containerizing full-stack microservices, multi-stage Docker builds, orchestrating deployment deployments via Kubernetes pods, services, and ingress.",
      featured: false
    },
    {
      id: "linkedin-react-typescript",
      title: "Modern React & TypeScript Architecture",
      organizer: "LinkedIn Learning",
      issued: "June 2023",
      expiration: "No Expiration",
      credentialId: "LINKEDIN-REACT-88201",
      credentialUrl: "https://www.linkedin.com/learning/certificates/react-typescript-architecture",
      category: "Web & Backend",
      skills: ["React", "TypeScript", "Tailwind CSS", "State Management", "Hooks", "Component Design"],
      description: "Advanced React patterns with TypeScript static typing, custom hooks design, performance optimization, and responsive design systems.",
      featured: false
    },
    {
      id: "linkedin-cybersecurity-oauth2",
      title: "Cybersecurity & OAuth2 / JWT Application Security",
      organizer: "LinkedIn Learning",
      issued: "February 2023",
      expiration: "No Expiration",
      credentialId: "LINKEDIN-SEC-55092",
      credentialUrl: "https://www.linkedin.com/learning/certificates/oauth2-jwt-security",
      category: "Cybersecurity",
      skills: ["OAuth 2.0", "JWT", "Authentication", "API Security", "Encryption", "CORS"],
      description: "Securing modern REST APIs and microservices using OAuth 2.0 authorization flows, JSON Web Tokens (JWT), token rotation, and cryptographic signatures.",
      featured: false
    }
  ]
};
