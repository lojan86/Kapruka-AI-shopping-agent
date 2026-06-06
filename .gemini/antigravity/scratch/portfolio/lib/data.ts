// ============================================================
// Portfolio Data — Sivakumar Sivalojan
// ============================================================

export const personalInfo = {
  name: "Sivakumar Sivalojan",
  title: "AI/ML Engineer & Software Developer",
  tagline: "Building Intelligent Solutions with AI",
  intro:
    "AI/ML Engineer Intern candidate with strong hands-on experience in machine learning, deep learning, computer vision, and NLP. Passionate about solving real-world problems through intelligent, scalable AI-driven systems.",
  email: "lojan279@gmail.com",
  phone: "+94 753578348",
  location: "Batticaloa, Sri Lanka",
  linkedin: "https://linkedin.com/in/sivakumar-sivalojan",
  github: "https://github.com/lojan86",
  profileImage: "/profile.jpg",
};

export const aboutStats = [
  { label: "Years Learning", value: "4+" },
  { label: "Projects Built", value: "8+" },
  { label: "Tech Stack", value: "20+" },
  { label: "Events Attended", value: "5+" },
];

export const skills = [
  {
    category: "AI / ML",
    color: "from-blue-500 to-cyan-500",
    icon: "🧠",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks (ANN, CNN)",
      "NLP",
      "Computer Vision",
      "Transfer Learning",
      "Image Processing",
      "LLMs",
      "RAG Pipelines",
      "Prompt Engineering",
    ],
  },
  {
    category: "Programming",
    color: "from-violet-500 to-purple-500",
    icon: "💻",
    items: ["Python","Java", "JavaScript", "C++", "HTML", "CSS", "SQL"],
  },
  {
    category: "ML Frameworks",
    color: "from-orange-500 to-amber-500",
    icon: "⚙️",
    items: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "PyTorch",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "YOLOv8",
      "Streamlit",
    ],
  },
  {
    category: "Web & APIs",
    color: "from-emerald-500 to-teal-500",
    icon: "🌐",
    items: [
      "Flask",
      "Django",
      "React",
      "Node.js",
      "REST APIs",
      "FastAPI",
      "Google Gemini API",
      "LLM API Integration",
    ],
  },
  {
    category: "Cloud & Tools",
    color: "from-pink-500 to-rose-500",
    icon: "☁️",
    items: [
      "AWS (AI/ML Scholar)",
      "Git",
      "GitHub",
      "Google Colab",
      "Jupyter Notebook",
      "VS Code",
      "WordPress",
    ],
  },
   {
    category: "Cybersecurity",
    color: "from-yellow-500 to-rose-500",
    icon: "☁️",
    items: [
      "Vulnerability Assessment",
      "Nmap",
      "Kali Linux",
      "Metasploit",
      "Nessus",
      "Reconnaissance",
      "Penetration Testing",
    ],
  },
  {
    category: "Soft Skills",
    color: "from-sky-500 to-indigo-500",
    icon: "🤝",
    items: [
      "Leadership",
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Project Management",
      "Analytical Thinking",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Intelligent Animal Trap",
    subtitle: "Using Detection Technology",
    description:
      "Developed a custom-trained YOLOv8 (Nano) multi-class object detection model to detect animals and trigger traps intelligently, reducing human-wildlife conflict.",
    problem: "Human-wildlife conflict causing crop damage and safety issues.",
    contribution:
      "Built and trained the full YOLOv8 pipeline from dataset collection to optimized inference.",
    result: "0.767 mAP@50 accuracy with ~2.1 ms/image inference on 640×640 input.",
    tech: ["Python", "YOLOv8", "Ultralytics", "Computer Vision"],
    category: "Computer Vision",
    color: "from-blue-500 to-indigo-600",
    github: "https://github.com/lojan86",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: "Phone Price Predictor",
    subtitle: "ML Web Application",
    description:
      "Full-stack ML web application using TensorFlow/Keras and Streamlit to classify mobile phone price ranges based on hardware specifications.",
    problem: "Consumers and sellers need quick price range estimation for mobile devices.",
    contribution:
      "Designed and trained optimized ANN architecture and built interactive Streamlit UI.",
    result: "84.0% test accuracy for real-time multi-class price classification.",
    tech: ["TensorFlow", "ANN", "Streamlit", "Python"],
    category: "Machine Learning",
    color: "from-blue-500 to-indigo-600",
    github: "https://github.com/lojan86",
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: "Skin Disease Detection",
    subtitle: "& Classification",
    description:
      "CNN-based medical image classification system using MobileNetV2 transfer learning for early skin disease screening.",
    problem: "Early skin disease detection is critical but requires specialist access.",
    contribution:
      "Applied MobileNetV2 transfer learning with fine-tuning for multi-class medical image classification.",
    result: "87% accuracy with weighted F1-score of 0.87 across multiple disease classes.",
    tech: ["Python", "TensorFlow", "MobileNetV2", "CNN", "Transfer Learning"],
    category: "Deep Learning",
    color: "from-blue-500 to-indigo-600",
    github: "https://github.com/lojan86",
    demo: null,
    featured: true,
  },
  {
    id: 4,
    title: "ML Model REST API",
    subtitle: "Banknote Authentication",
    description:
      "End-to-end ML deployment; trained a classification model to detect authentic vs fake banknotes and exposed it via a production-grade FastAPI REST endpoint.",
    problem: "Counterfeit banknote detection requires automated, scalable solutions.",
    contribution:
      "Full pipeline: feature engineering, model training, FastAPI deployment with real-time inference.",
    result: "Production-level REST API with real-time banknote authentication.",
    tech: ["FastAPI", "Scikit-learn", "Python", "REST API"],
    category: "ML Deployment",
    color: "from-blue-500 to-indigo-600",
    github: "https://github.com/lojan86",
    demo: null,
    featured: false,
  },
  {
    id: 5,
    title: "Thirukkural AI Life Advisor",
    subtitle: "Bilingual AI Chatbot",
    description:
      "Bilingual (Tamil/English) AI chatbot leveraging Google Gemini LLM API with prompt engineering to map user emotions to relevant Thirukkural verses.",
    problem: "Making ancient Tamil wisdom accessible through modern AI conversation.",
    contribution:
      "Designed prompt engineering architecture and built full-stack chatbot with Flask backend and React frontend.",
    result: "Contextual life guidance chatbot bridging classical literature and modern AI.",
    tech: ["React.js", "Python Flask", "Google Gemini API", "LLM Integration"],
    category: "LLM / NLP",
    color: "from-blue-500 to-indigo-600",
    github: "https://github.com/lojan86",
    demo: null,
    featured: true,
  },
  {
    id: 6,
    title: "Hybrid RAG System",
    subtitle: "Retrieval-Augmented Generation",
    description:
      "Designed and implemented a hybrid RAG system combining vector similarity search (Chroma) with structure-aware document chunking for precise, context-rich responses.",
    problem: "Standard RAG systems lack structural awareness, reducing answer quality.",
    contribution:
      "Built modular Python pipeline with pluggable LLM support, Chroma vector store, and Flask chat interface.",
    result: "Hybrid retrieval pipeline delivering superior context-aware responses.",
    tech: ["Python", "Groq (LLaMA 3.1)", "BAAI/bge-small", "Chroma", "Flask"],
    category: "LLM / RAG",
    color: "from-blue-500 to-indigo-600",
    github: "https://github.com/lojan86",
    demo: null,
    featured: true,
  },
  {
    id: 7,
    title: "ResumeAI",
    subtitle: "AI-Powered Dynamic Resume Platform",
    description:
      "A modern, full-featured web application where candidates create live, always-updated resumes with shareable links, AI-powered analysis, and recruiter tools.",
    problem: "Static resumes fail to show real-time updates and lack analytical feedback.",
    contribution:
      "Built the full platform with React Context API, localStorage persistence, and a built-in AI analysis engine.",
    result: "Live resume platform with AI analysis and shareable recruiter links.",
    tech: ["React.js", "React Context API", "localStorage", "AI Analysis Engine"],
    category: "Full Stack",
    color: "from-blue-500 to-indigo-600",
    github: "https://github.com/lojan86",
    demo: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Blood Donation Android App",
    subtitle: "Mobile Application",
    description:
      "Enhanced a mobile application connecting blood donors and recipients, built with Java in Android Studio as part of a course assignment.",
    problem: "Difficulty connecting blood donors with recipients quickly in emergencies.",
    contribution: "Enhanced UI/UX and core features using Java in Android Studio.",
    result: "Functional Android app facilitating blood donor-recipient matching.",
    tech: ["Java", "Android Studio"],
    category: "Mobile",
    color: "from-blue-500 to-indigo-600",
    github: "https://github.com/lojan86",
    demo: "#",
    featured: false,
  },
  
  {
    id: 8,
    title: "IS Security Audit & Risk Assessment – Virtusa Pvt Ltd",
    subtitle: "Information Security",
    description:
      "Conducted a structured security audit of Virtusa’s information systems and security through a stakeholder interview, assessing IS security controls, physical security measures, compliance posture, and employee awareness programs across the organization.",
    problem: "Ensuring robust information security controls and risk management in a large IT services company.",
    contribution: "Performed comprehensive IS security audit and risk assessment, identifying vulnerabilities and recommending mitigation strategies.",
    result: "Detailed audit report with actionable recommendations to enhance Virtusa’s information security posture and mitigate identified risks.",
    tech: ["IS security", "Penetration Testing"],
    category: "Information Security",
    color: "from-blue-500 to-indigo-600",
    github: "#https://github.com/lojan86",
    demo: "#",
    featured: false,
  },
  
];

export const certifications = [
  {
    id: 1,
    title: "AWS AI Practitioner Challenge",
    subtitle: "Phase 1 Complete",
    issuer: "AWS AI/ML Scholars Program",
    year: "2026",
    image: "/certs/aws-cert.png",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 2,
    title: "Python for Beginners",
    subtitle: "Fundamentals Certification",
    issuer: "University of Moratuwa",
    year: "2023",
    image: "/certs/python-cert.jpeg",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "AI/ML Engineer Stage 1",
    subtitle: "Professional Track",
    issuer: "SLIIT",
    year: "2024",
    image: "/certs/aiml-cert1.jpeg",
    color: "from-violet-500 to-purple-500",
  },
    {
    id: 4,
    title: "AI/ML Engineer Stage 2",
    subtitle: "Professional Track",
    issuer: "SLIIT",
    year: "2024",
    image: "/certs/aiml-cert2.jpeg",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    title: "Mastering WordPress Development",
    subtitle: "Full Course",
    issuer: "Udemy",
    year: "2024",
    image: "/certs/wordpress-cert.jpeg",
    color: "from-sky-500 to-cyan-500",
  },
  {
    id: 5,
    title: "Google AI Essentials",
    subtitle: "AI Fundamentals",
    issuer: "Google",
    year: "2024",
    image: "/certs/google-cert.jpeg",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 2,
    title: "Web Design for Beginners",
    subtitle: "Fundamentals Certification",
    issuer: "University of Moratuwa",
    year: "2023",
    image: "/certs/web-design-cert.jpeg",
    color: "from-blue-500 to-indigo-500",
  },
];

export const hackathons = [
  {
    id: 1,
    title: "IEEE Xtreme 18.0 Programming Competition",
    event: "IEEE Xtreme",
    date: "2024",
    description:
      "Participated in the global 24-hour coding competition organized by IEEE, competing against thousands of university teams worldwide.",
    achievement: "Competitor",
    image: "/hackathons/ieee-xtreme.png",
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: 2,
    title: "CodeSprint 8 Competition",
    event: "CodeSprint IIT",
    date: "2024",
    description:
      "The Largest Inter-University Startup Battle Organized by the IEEE SB of IIT",
    achievement: "Participant",
    image: "/hackathons/codesprint.jpeg",
    color: "from-violet-600 to-purple-700",
  },
  {
    id: 3,
    title: "RUSL XTREME 1.0 MiniHackathon",
    event: "Rajarata University",
    date: "2024",
    description:
      "Competed in the university-level coding hackathon.",
    achievement: "Competitor",
    image: "/hackathons/uni-hackathon.jpeg",
    color: "from-teal-600 to-emerald-700",
  },
  {
    id: 4,
    title: "Salesforce Beginners' Bootcamp Hackathon 2023",
    event: "Yarl Ohana",
    date: "2023",
    description:
      "Participated in a hackathon focused on building solutions using Salesforce technologies as part of a beginner's bootcamp.",
    achievement: "Participant",
    image: "/hackathons/salesforce.jpeg",
    color: "from-orange-600 to-red-700",
  },
  
    {
    id: 5,
    title: "Bio Fusion Hackathon 2025",
    event: "Bio Fusion by IEEE EMBS",
    date: "2025",
    description:
      "Participated in a hackathon focused on building solutions for the healthcare domain using AI and data science technologies.",
    achievement: "Participant",
    image: "/hackathons/bio-fusion.png",
    color: "from-orange-600 to-red-700",
  },

     {
    id: 6,
    title: "HACKFORCE' 23",
    event: "A Salesforce Hackathon",
    date: "2023",
    description:
      "Participated in a hackathon focused on building solutions using Salesforce technologies as part of the HACKFORCE' 23 event.",
    achievement: "Top 10% Finalist",
    image: "/hackathons/hackforce.jpeg",
    color: "from-orange-600 to-red-700",
  },
];

export const volunteerWork = [
  {
    id: 1,
    title: "Web Designer",
    organization: "IEEE Sri Lanka Section",
    period: "07/2025 – 01/2026",
    description:
      "Designed and developed the IEEE Sri Lanka Section website using modern web technologies, improving the online presence of the organization.",
    image: "/volunteer/ieee.jpeg",
    color: "from-blue-500 to-indigo-600",
    icon: "🔷",
  },
  {
    id: 2,
    title: "Web Designer",
    organization: "Innovation Nation Sri Lanka",
    period: "12/2023 – 02/2024",
    description:
      "Designed and developed the Innovation Nation Sri Lanka website using WordPress, creating a professional digital platform for the national innovation initiative.",
    image: "/volunteer/insl.png",
    color: "from-violet-500 to-purple-600",
    icon: "🌐",
  },
  {
    id: 3,
    title: "Organizing Committee Member",
    organization: "INSL & IEEE Xtreme",
    period: "2024",
    description:
      "Contributed to event organization and coordination as a committee member for two major national tech events; Innovation Nation Sri Lanka and IEEE Xtreme.",
    image: "/volunteer/committee.jpeg",
    color: "from-emerald-500 to-teal-600",
    icon: "🎯",
  },
  
  {
    id: 4,
    title: "Website Management Volunteer",
    organization: "Infocus Media",
    period: "2024 - 2025",
    description:
      "Provided volunteer support for website management and updates for Infocus Media, a local media company, ensuring the site remains current and functional.",
    image: "/volunteer/infocus.png",
    color: "from-orange-500 to-amber-600",
    icon: "🖥️",
  },
];

export const education = [
  {
    degree: "B.Sc. in Information Technology",
    institution: "Rajarata University of Sri Lanka",
    period: "2022 – Present",
    location: "Mihintale",
    courses: [
      "Introduction to Intelligent Systems",
      "Mathematics & Statistics for Computing",
      "Graphics & Image Processing",
    ],
  },
  {
    degree: "NVQ Level 4 - ICT Technician",
    institution: "Miani Technical Institute",
    period: "01/2021 – 12/2021",
    location: "Batticaloa",
    courses: [],
  },
  {
    degree: "Advance Level - Physical Science",
    institution: "BT/Shivananda National School",
    period: "2018 – 2020",
    location: "Batticaloa",
    courses: [],
  },
];

export const futureGoals = [
  {
    year: "2026",
    title: "Land AI/ML Internship",
    description: "Secure a meaningful internship at a top AI-first company to gain real industry experience.",
    icon: "🎯",
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2027",
    title: "Full-Stack AI Engineer",
    description: "Transition to a full AI/ML Engineer role, building scalable production systems for healthcare and safety.",
    icon: "🚀",
    color: "from-violet-500 to-purple-500",
  },
  {
    year: "2028",
    title: "International Exposure",
    description: "Pursue opportunities in Canada, UK, or other tech hubs to work on globally impactful AI solutions.",
    icon: "🌍",
    color: "from-emerald-500 to-teal-500",
  },
  {
    year: "2029",
    title: "Startup / High-Impact Company",
    description: "Contribute to an innovative startup or high-impact tech company, building AI products that matter.",
    icon: "💡",
    color: "from-orange-500 to-amber-500",
  },
  {
    year: "2030",
    title: "Scalable AI Product Builder",
    description: "Lead the development of scalable AI-driven products that solve real-world problems at scale.",
    icon: "⭐",
    color: "from-pink-500 to-rose-500",
  },
];
