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
  title: string;
  organizer: string;
  issued: string;
}

export const PORTFOLIO_DATA = {
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
      title: "Python Programming Track",
      organizer: "DataCamp",
      issued: "March 2022"
    },
    {
      title: "Node JS Dasar",
      organizer: "Codepolitan",
      issued: "January 2022"
    },
    {
      title: "Web Development Path (Ruby on Rails)",
      organizer: "Digitalent, Progate",
      issued: "September 2021"
    },
    {
      title: "Secure Development Lifecycle",
      organizer: "Cyber Army Indonesia",
      issued: "December 2020"
    },
    {
      title: ".NET Technical Consultant",
      organizer: "Xsis Mitra Utama",
      issued: "May 2018"
    }
  ]
};
