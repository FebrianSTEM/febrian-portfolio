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
  gpa?: string;
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
      status: "Graduated",
      gpa: "3.60 / 4.00"
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
      id: "datacamp-ai-engineer",
      title: "Associate AI Engineer for Developers",
      organizer: "DataCamp",
      issued: "July 2026",
      expiration: "No Expiration",
      credentialId: "69567df8e464884ae809b4cb47cadeffa7b18027",
      credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/69567df8e464884ae809b4cb47cadeffa7b18027",
      category: "Software Engineering",
      skills: ["Artificial Intelligence (AI)", "Python", "OpenAI API", "Prompt Engineering", "RAG & Vector DBs"],
      description: "Professional career track focused on building production-ready AI applications, integrating LLMs and generative AI APIs, prompt engineering, and RAG architecture.",
      featured: true
    },
    {
      id: "google-advanced-ml-infra",
      title: "Advanced ML: ML Infrastructure",
      organizer: "Google",
      issued: "February 2025",
      credentialId: "14026681",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/ff863845-46fb-4933-a787-7948aa3a9b41/badges/14026681",
      category: "Data & Analytics",
      skills: ["Google Cloud", "Machine Learning", "ML Infrastructure", "MLOps", "Python"],
      description: "Advanced Google Cloud skill badge for deploying, scaling, and managing enterprise machine learning pipelines and infrastructure.",
      featured: true
    },
    {
      id: "google-intermediate-ml-tf",
      title: "Intermediate ML: TensorFlow on Google Cloud",
      organizer: "Google",
      issued: "February 2025",
      credentialId: "14022207",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/ff863845-46fb-4933-a787-7948aa3a9b41/badges/14022207",
      category: "Data & Analytics",
      skills: ["Python", "TensorFlow", "Google Cloud", "Neural Networks", "Model Training"],
      description: "Building, training, and tuning neural network architectures using TensorFlow on Google Cloud Platform.",
      featured: true
    },
    {
      id: "google-gemini-bigquery",
      title: "Boost Productivity with Gemini in BigQuery",
      organizer: "Google",
      issued: "February 2025",
      credentialId: "13995143",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/ff863845-46fb-4933-a787-7948aa3a9b41/badges/13995143",
      category: "Data & Analytics",
      skills: ["Gemini", "BigQuery", "SQL", "AI Analytics", "Google Cloud"],
      description: "Leveraging Gemini AI capabilities directly inside BigQuery for automated SQL query generation, data analysis, and insight extraction.",
      featured: true
    },
    {
      id: "google-cloud-foundations-ai",
      title: "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud",
      organizer: "Google",
      issued: "February 2025",
      credentialId: "13983907",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/ff863845-46fb-4933-a787-7948aa3a9b41/badges/13983907",
      category: "Enterprise Systems",
      skills: ["Google Cloud", "BigQuery", "Machine Learning", "Cloud AI", "Python"],
      description: "Core foundational badge covering data engineering, analytical warehousing, and AI services across GCP.",
      featured: false
    },
    {
      id: "google-ml-apis",
      title: "Use Machine Learning APIs on Google Cloud",
      organizer: "Google",
      issued: "February 2025",
      credentialId: "13981299",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/ff863845-46fb-4933-a787-7948aa3a9b41/badges/13981299",
      category: "Software Engineering",
      skills: ["Python", "Google Cloud Console", "Vision API", "Natural Language API", "Translation API"],
      description: "Integrating Google Cloud pre-trained ML APIs into applications for vision analysis, natural language processing, and translation.",
      featured: false
    },
    {
      id: "google-gemini-data-science",
      title: "Gemini for Data Scientists and Analysts",
      organizer: "Google",
      issued: "February 2025",
      credentialId: "13950719",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/ff863845-46fb-4933-a787-7948aa3a9b41/badges/13950719",
      category: "Data & Analytics",
      skills: ["Gemini", "Python", "Data Science", "Exploratory Data Analysis", "Google Cloud Console"],
      description: "Applying Gemini generative AI models to accelerate data wrangling, statistical modeling, and analytical reporting workflows.",
      featured: true
    },
    {
      id: "google-prep-data-ml",
      title: "Prepare Data for ML APIs on Google Cloud",
      organizer: "Google",
      issued: "February 2025",
      credentialId: "13921638",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/ff863845-46fb-4933-a787-7948aa3a9b41/badges/13921638",
      category: "Data & Analytics",
      skills: ["Python", "Linux", "Data Preprocessing", "ETL", "Google Cloud"],
      description: "Data cleaning, transformation, and feature preparation for feeding machine learning API pipelines.",
      featured: false
    },
    {
      id: "google-speech-api",
      title: "Cloud Speech API: 3 Ways",
      organizer: "Google",
      issued: "February 2025",
      credentialId: "13888797",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/ff863845-46fb-4933-a787-7948aa3a9b41/badges/13888797",
      category: "Software Engineering",
      skills: ["Python", "Speech API", "Audio Processing", "Google Cloud"],
      description: "Speech-to-text transcription and audio analysis using Google Cloud Speech API across multiple integration patterns.",
      featured: false
    },
    {
      id: "google-ai-gemini-imagen",
      title: "Build Real World AI Applications with Gemini and Imagen",
      organizer: "Google",
      issued: "February 2025",
      credentialId: "13830230",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/ff863845-46fb-4933-a787-7948aa3a9b41/badges/13830230",
      category: "Software Engineering",
      skills: ["Gemini", "Imagen", "Multimodal AI", "Python", "Generative AI"],
      description: "Developing full-stack multimodal generative AI applications combining text, image generation (Imagen), and vision understanding with Gemini.",
      featured: true
    },
    {
      id: "google-prompt-design-vertex",
      title: "Prompt Design in Vertex AI",
      organizer: "Google",
      issued: "February 2025",
      credentialId: "13824048",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/ff863845-46fb-4933-a787-7948aa3a9b41/badges/13824048",
      category: "Software Engineering",
      skills: ["Prompt Engineering", "Vertex AI", "LLM", "Python", "Generative AI"],
      description: "Enterprise prompt engineering, zero-shot/few-shot prompting techniques, and parameter tuning in Google Cloud Vertex AI Studio.",
      featured: true
    },
    {
      id: "dgt-ml-tensorflow",
      title: "Digitalent Scholarship - Machine Learning with Tensorflow",
      organizer: "Digital Talent Scholarship",
      issued: "August 2022",
      category: "Data & Analytics",
      skills: ["Python", "TensorFlow", "Deep Learning", "Machine Learning"],
      description: "Government-sponsored scholarship program by Kominfo focused on deep learning model architecture and TensorFlow execution.",
      featured: false
    },
    {
      id: "dgt-data-science",
      title: "Digitalent Scholarship - Data Science",
      organizer: "Digital Talent Scholarship",
      issued: "April 2022",
      category: "Data & Analytics",
      skills: ["R", "Statistical Data Analysis", "Data Visualization", "Hypothesis Testing"],
      description: "Advanced statistical analysis, data modeling, and business insights generation using R programming language.",
      featured: false
    },
    {
      id: "datacamp-python",
      title: "Python Programming Track",
      organizer: "DataCamp",
      issued: "March 2022",
      credentialId: "8f434b1bd0d9706a81df06b90e9b5e614e3ab820",
      credentialUrl: "https://www.datacamp.com/statement-of-accomplishment/track/8f434b1bd0d9706a81df06b90e9b5e614e3ab820",
      category: "Data & Analytics",
      skills: ["Python", "Git", "Pandas", "NumPy", "Data Wrangling"],
      description: "Comprehensive data science track covering advanced data manipulation, automated scripting, and analytical computing with Python.",
      featured: true
    },
    {
      id: "codepolitan-nodejs",
      title: "Node JS Dasar",
      organizer: "Codepolitan",
      issued: "January 2022",
      credentialId: "91GDQJC",
      credentialUrl: "https://www.codepolitan.com/c/91GDQJC",
      category: "Web & Backend",
      skills: ["Node.js", "JavaScript ES6+", "Async Programming", "REST APIs"],
      description: "Fundamentals of non-blocking backend runtime environment, event loop mechanisms, and server-side web application development.",
      featured: false
    },
    {
      id: "progate-rubyonrails",
      title: "Web Development Path (Ruby on Rails)",
      organizer: "Progate",
      issued: "September 2021",
      credentialUrl: "https://progate.com/path_certificate/f7bddbd4qzwbuw",
      category: "Web & Backend",
      skills: ["Ruby on Rails", "MVC Architecture", "SQL Database", "Web Apps"],
      description: "Full-stack web application development track sponsored by Ministry of Communication and IT Indonesia (Kominfo).",
      featured: false
    },
    {
      id: "dgt-ruby",
      title: "Digitalent Scholarship - Ruby",
      organizer: "Digital Talent Scholarship",
      issued: "September 2021",
      category: "Web & Backend",
      skills: ["Ruby", "Object-Oriented Programming", "Algorithms"],
      description: "Fundamental object-oriented programming bootcamp in Ruby sponsored by Digitalent Kominfo.",
      featured: false
    },
    {
      id: "cyberarmy-sdl",
      title: "Secure Development Lifecycle",
      organizer: "Cyber Army Indonesia",
      issued: "December 2020",
      category: "Cybersecurity",
      skills: ["OWASP Top 10", "AppSec", "Code Auditing", "Threat Modeling"],
      description: "Enterprise software security practices, threat modeling, vulnerability scanning, code auditing, and secure coding standards.",
      featured: true
    },
    {
      id: "hackerrank-problem-solving",
      title: "Problem Solving (Basic) Certificate",
      organizer: "HackerRank",
      issued: "June 2020",
      credentialId: "72c0d7e1e49b",
      credentialUrl: "https://www.hackerrank.com/certificates/72c0d7e1e49b",
      category: "Software Engineering",
      skills: ["Algorithms", "Data Structures", "Problem Solving", "C#", "Python"],
      description: "Verified algorithmic problem-solving competency assessing data structures, time complexity, and optimization logic.",
      featured: false
    },
    {
      id: "dicoding-data-vis",
      title: "Belajar Dasar Visualisasi Data",
      organizer: "Dicoding Academy",
      issued: "May 2020",
      category: "Data & Analytics",
      skills: ["Data Visualization", "Python", "Matplotlib", "Seaborn"],
      description: "Fundamentals of graphical data representations, dashboard layout rules, and exploratory plotting libraries.",
      featured: false
    },
    {
      id: "dicoding-ml-beginner",
      title: "Belajar Machine Learning untuk Pemula",
      organizer: "Dicoding Academy",
      issued: "May 2020",
      category: "Data & Analytics",
      skills: ["Machine Learning", "Scikit-Learn", "Python", "Supervised Learning"],
      description: "Applied supervised learning algorithms, classification pipelines, decision trees, and model evaluation metrics.",
      featured: false
    },
    {
      id: "dicoding-python-basic",
      title: "Memulai Pemrograman Dengan Python",
      organizer: "Dicoding Academy",
      issued: "May 2020",
      category: "Software Engineering",
      skills: ["Python", "Control Flow", "Functions", "Data Types"],
      description: "Basic programming fundamentals, syntax structures, object orientation, and scripting in Python.",
      featured: false
    }
  ]
};
