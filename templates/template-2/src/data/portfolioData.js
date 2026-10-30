// ============================================================
// portfolioData.js — ALL content for the portfolio lives here.
// Components only read from this file.
// ============================================================

export const personalInfo = {
  name: "Alex Rivera",
  brandName: "Alex Rivera",          // used for the big hero / footer typography
  role: "Software Developer",        // first word = bold, rest = light italic in the hero
  city: "Bengaluru, India",
  phone: "+91 00000 00000",
  email: "alex@example.com",
};

export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  instagram: "https://instagram.com/yourname",
  youtube: "https://youtube.com/@yourname",
  linkedin: "https://linkedin.com/in/yourname",
  github: "https://github.com/yourname",
};

export const heroContent = {
  finalWord: "PORTFOLIO",            // the word the big text scrambles into
  ctaLabel: "Contact",
};

export const aboutContent = {
  heading: "Intro",
  greeting: "Hey, I'm Alex.",
  paragraph:
    "An enthusiastic full-stack developer who loves to build modern web and mobile applications. I love turning concepts into scalable products using tech stack like React, Node.js, and artificial intelligence technologies. I always strive to keep my code clean and design great user experience along with learning new technologies like LLMs and LangChain.",
  highlights: ["React", "Node.js", "LLMs", "LangChain"],
};

export const skillRows = [
  { label: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5"] },
  { label: "Backend", items: ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL"] },
  { label: "AI", items: ["ChatGPT", "Claude", "Cursor AI", "GitHub Copilot", "Google Gemini", "LangChain", "Prompt Engineering"] },
  { label: "Tools", items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "CI/CD"] },
];

export const servicesContent = {
  headingLines: ["WHAT I", "CAN DO"],
  items: [
    {
      title: "FULL STACK DEVELOPMENT",
      description:
        "I build scalable, high-performance web applications by combining modern frontend frameworks, robust backend systems, and AI-powered solutions. From planning and architecture to deployment, I create secure, responsive, and production-ready digital experiences.",
      capabilities: [
        "Develop responsive web applications with React.js",
        "Build secure REST APIs using Node.js",
        "Design scalable backend architecture and databases",
        "Integrate AI-powered features and automation",
        "Deliver clean, maintainable, production-ready code",
      ],
      cta: { label: "VIEW PROJECTS", href: "#projects" },
    },
    {
      title: "FRONTEND DEVELOPMENT",
      description:
        "I create fast, responsive, and visually engaging user interfaces that provide seamless user experiences across desktop, tablet, and mobile devices.",
      capabilities: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "GSAP Animations", "Responsive Design"],
    },
    {
      title: "BACKEND & API DEVELOPMENT",
      description:
        "I develop secure and scalable backend systems with well-structured APIs, efficient databases, and authentication mechanisms to power modern web applications.",
      capabilities: ["FastAPI", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "JWT Authentication"],
    },
    {
      title: "AI & AUTOMATION",
      description:
        "I integrate artificial intelligence into applications to automate workflows, improve productivity, and create intelligent user experiences using modern AI technologies.",
      capabilities: ["OpenAI Integration", "LangChain", "Prompt Engineering", "AI Chatbots", "Workflow Automation"],
    },
  ],
};

// Words wrapped in *asterisks* are shown as light italic serif in gray.
export const projectsContent = {
  headingMain: "Selected",
  headingAccent: "work",
  description:
    "As a developer using modern ideas, simplicity design and universal visual identification tailored to dedicated and current market.",
  readMore: { label: "Read More", href: "#projects" },
  items: [
    {
      id: "project-1",
      number: "01",
      title: ["INSTAGRAM *ai*", "AUTOMATION PLATFORM"],
      description:
        "An AI-powered Instagram chat automation platform that instantly responds to customer messages, qualifies leads, automates conversations, and helps businesses improve engagement while saving time through intelligent workflows.",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourname/project-1",
    },
    {
      id: "project-2",
      number: "02",
      title: ["LIVEMEET", "TRANSLATE"],
      description:
        "A real-time AI-powered meeting translation platform that listens to live conversations, converts speech to text, translates it into the user's preferred language, and generates organized meeting notes with summaries and key action items.",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourname/project-2",
    },
    {
      id: "project-3",
      number: "03",
      title: ["AI SMART", "KEYBOARD APP"],
      description:
        "An AI-powered mobile keyboard application that enhances typing through real-time grammar correction, spelling fixes, intelligent word prediction, and AI-driven sentence rewriting across mobile applications.",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourname/project-3",
    },
    {
      id: "project-4",
      number: "04",
      title: ["JARVIS *ai*", "DESKTOP ASSISTANT"],
      description:
        "An AI-powered desktop assistant that enables hands-free laptop control through natural voice commands. It can open applications, manage files, browse the web, answer questions and automate tasks using speech recognition and large language models.",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourname/project-4",
    },
  ],
};

export const contactContent = {
  heading: "Get in touch",
  followLabel: "Follow us",
};

export const footerContent = {
  connectLabel: "Connect with me",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
  ],
  ctaHeading: "Let's build something",
  ctaText: "Open for freelance opportunities and collaborations.",
  ctaLabel: "Get in touch",
};

// EmailJS — values come from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
