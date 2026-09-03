export const coachingConfig = {
  id: "coaching",
  name: "Nexora Academy",
  shortName: "Nexora",
  businessType: "Coaching Institute",
  tagline: "Learn Better. Prepare Smarter. Achieve More.",
  badge: "Trusted Learning & Career Academy",

  theme: {
    id: "theme-coaching",
    colors: {
      primary: { DEFAULT: '#1e3a8a', light: '#3b82f6', dark: '#172554', foreground: '#ffffff' },
      secondary: { DEFAULT: '#0f172a', light: '#1e293b', foreground: '#f8fafc' },
      accent: { DEFAULT: '#4f46e5', light: '#818cf8', foreground: '#ffffff' },
      surface: { DEFAULT: '#fafaf9', muted: '#f5f5f4', card: '#ffffff', glass: 'rgba(255, 255, 255, 0.95)' },
      text: { primary: '#0f172a', secondary: '#334155' },
      border: 'rgba(30, 58, 138, 0.10)'
    },
    typography: { heading: "'Montserrat', sans-serif", body: "'Inter', sans-serif" },
    radius: { brand: '0.25rem', card: '0.5rem', btn: '0.25rem' },
    glass: { blur: '10px', border: 'rgba(30, 58, 138, 0.10)' }
  },

  logo: { icon: "BookOpen", text: "NEXORA", subtext: "LEARN • PREPARE • ACHIEVE" },

  contact: {
    phone: "+91 98765 43210",
    email: "hello@nexora-demo.in",
    whatsapp: "919876543210",
    whatsappMessage: "Hello Nexora Academy, I would like to book a free counselling session.",
    address: "3rd Floor, Orion Business Plaza, FC Road, Pune, Maharashtra",
    operatingHours: [
      { days: "Monday – Saturday", hours: "8:00 AM – 8:00 PM" },
      { days: "Sunday", hours: "10:00 AM – 2:00 PM" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.242940866946!2d73.84073041503463!3d18.51785508741162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0709f197d19%3A0x6b8bc134a6e0e0a5!2sFC%20Road%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  
  mobileActions: {
    call: true,
    whatsapp: true,
    primaryAction: { label: "Enquire Now", target: "#contact" }
  },
  
  socialLinks: { instagram: "https://instagram.com", facebook: "https://facebook.com", twitter: "https://twitter.com" },

  hero: {
    badge: "Trusted Learning & Career Academy",
    title: "Learn Better. Prepare Smarter. Achieve More.",
    subtitle: "Structured courses, experienced faculty, regular assessments and personalised guidance designed to help students build strong concepts and prepare with confidence.",
    ctaPrimary: { text: "Explore Courses", href: "#services", icon: "Book" },
    ctaSecondary: { text: "Book a Free Counselling Session", href: "#contact", icon: "Calendar" },
    image: "https://loremflickr.com/800/600/classroom,students?lock=65",
    highlights: ["Experienced Faculty", "Structured Learning", "Regular Assessments"]
  },

  trustStats: {
    badge: "SAMPLE ACADEMY DATA",
    title: "Empowering Student Progress",
    subtitle: "These are fictional demo statistics representing our growing student community.",
    items: [
      { id: 1, value: "10,000+", label: "Learners Guided", icon: "Users" },
      { id: 2, value: "50+", label: "Expert Faculty", icon: "UserCheck" },
      { id: 3, value: "25+", label: "Courses & Programs", icon: "BookOpen" },
      { id: 4, value: "4.8/5", label: "Learner Rating", icon: "Star" }
    ]
  },

  about: {
    badge: "ABOUT NEXORA ACADEMY",
    title: "A Learning Environment Built Around Student Progress.",
    subtitle: "Learn • Prepare • Achieve",
    description: "At Nexora Academy, we believe effective learning goes beyond completing a syllabus. Our approach combines strong conceptual teaching, structured practice, regular assessments and personalised academic guidance.\n\nFrom foundation learning to exam preparation and career-focused programs, students receive a structured learning experience designed around consistency, understanding and measurable progress.",
    experienceYears: "10+",
    doctorsCount: "50+", 
    proceduresDone: "10k+",
    imageMain: "https://loremflickr.com/800/600/education,teacher?lock=66",
    imageSecondary: "https://loremflickr.com/800/600/students,study?lock=67",
    featuresList: ["Experienced Faculty", "Structured Curriculum", "Regular Assessments", "Doubt Support", "Personalised Guidance", "Digital Learning Resources"]
  },

  coursesConfig: {
    badge: "LEARNING PROGRAMS",
    title: "Programs Designed Around Your Goals.",
    subtitle: "Comprehensive preparation for school, boards, and competitive exams.",
    items: [
      { id: "c1", category: "Foundation", title: "Foundation Program", shortDescription: "For Classes 8–10. Focuses on strong fundamentals and consistent academic practice.", fullDescription: "For Classes 8–10. Focuses on strong fundamentals and consistent academic practice. Subjects include Mathematics, Science, English, and Logical Reasoning.", duration: "1 Year", price: "Starting from ₹15,000", popular: false, icon: "BookOpen", image: "https://loremflickr.com/800/600/students,classroom?lock=68", features: ["Math & Science", "Logical Reasoning", "Regular Tests"] },
      { id: "c2", category: "Senior Secondary", title: "Senior Secondary Program", shortDescription: "For Classes 11–12 (Science & Commerce). Concept building, board preparation and structured revision.", fullDescription: "For Classes 11–12 (Science & Commerce). Concept building, board preparation and structured revision.", duration: "1-2 Years", price: "Starting from ₹35,000", popular: true, icon: "Award", image: "https://loremflickr.com/800/600/exam,preparation?lock=69", features: ["Board Focus", "Concept Building", "Revision"] },
      { id: "c3", category: "Engineering", title: "JEE Preparation", shortDescription: "Comprehensive preparation for engineering entrance exams.", fullDescription: "Comprehensive preparation for JEE with focus on Physics, Chemistry, and Mathematics.", duration: "1-2 Years", price: "Starting from ₹50,000", popular: true, icon: "Target", image: "https://loremflickr.com/800/600/mathematics?lock=70", features: ["Test Series", "Doubt Support", "Structured Material"] },
      { id: "c4", category: "Medical", title: "NEET Preparation", shortDescription: "Structured preparation for medical entrance exams.", fullDescription: "Structured preparation for NEET with focus on Physics, Chemistry, and Biology.", duration: "1-2 Years", price: "Starting from ₹50,000", popular: true, icon: "Activity", image: "https://loremflickr.com/800/600/biology,study?lock=71", features: ["Biology Focus", "Regular Tests", "Doubt Support"] },
      { id: "c5", category: "Entrance", title: "CUET Preparation", shortDescription: "Domain Subjects, General Test, and Language Preparation.", fullDescription: "Domain Subjects, General Test, and Language Preparation.", duration: "6 Months", price: "Starting from ₹12,000", popular: false, icon: "Globe", image: "https://loremflickr.com/800/600/education,teacher?lock=72", features: ["Domain Subjects", "General Test", "Mock Tests"] },
      { id: "c6", category: "Competitive", title: "Competitive Exam Preparation", shortDescription: "Preparation for SSC, Banking, and other government exams.", fullDescription: "Preparation for SSC, Banking, and other government exams.", duration: "1 Year", price: "Starting from ₹10,000", popular: false, icon: "Briefcase", image: "https://loremflickr.com/800/600/writing,exam?lock=73", features: ["Reasoning", "Quantitative", "General Awareness"] },
      { id: "c7", category: "Technology", title: "Coding & Technology Programs", shortDescription: "Full Stack Development, Python, Data Analytics, AI.", fullDescription: "Full Stack Development, Python, Data Analytics, AI.", duration: "6 Months", price: "Starting from ₹20,000", popular: false, icon: "Code", image: "https://loremflickr.com/800/600/coding,laptop?lock=74", features: ["Full Stack", "Python", "AI & ML"] }
    ]
  },

  learningModesConfig: {
    badge: "LEARNING MODES",
    title: "Flexible Ways to Learn",
    subtitle: "Choose the learning mode that fits your schedule and goals.",
    items: [
      { id: 1, icon: "Users", title: "Classroom Learning", description: "Interactive in-person classes with direct faculty engagement." },
      { id: 2, icon: "Laptop", title: "Online Learning", description: "Live and recorded learning options accessible from anywhere." },
      { id: 3, icon: "RefreshCw", title: "Hybrid Learning", description: "Flexible combination of classroom and online support." }
    ]
  },

  whyChooseUsConfig: {
    badge: "WHY NEXORA",
    title: "Why Students Choose Nexora",
    subtitle: "We focus on structured learning and consistent progress.",
    items: [
      { id: 1, icon: "Award", title: "Experienced Faculty", description: "Learn from subject-focused educators with structured teaching methods." },
      { id: 2, icon: "BookOpen", title: "Concept-First Learning", description: "Build strong fundamentals before moving to advanced topics." },
      { id: 3, icon: "CheckCircle", title: "Regular Assessments", description: "Practice through tests, assignments and revision." },
      { id: 4, icon: "MessageCircle", title: "Doubt Support", description: "Get help when concepts or questions need additional explanation." },
      { id: 5, icon: "UserCheck", title: "Personalised Guidance", description: "Academic guidance based on student goals and learning needs." },
      { id: 6, icon: "BarChart", title: "Progress Tracking", description: "Track learning progress through regular assessments and feedback." }
    ]
  },

  facultyConfig: {
    badge: "OUR FACULTY",
    title: "Meet Our Faculty",
    subtitle: "Experienced educators focused on clear concepts and effective learning.",
    items: [
      { name: "Aarav Mehta", role: "M.Sc. Mathematics", specialty: "Mathematics & Competitive Exam Preparation", bio: "10+ Years Experience. Focuses on building strong mathematical fundamentals and exam-oriented problem solving.", image: "https://loremflickr.com/800/600/indian,man,teacher?lock=75" },
      { name: "Dr. Kavya Sharma", role: "M.Sc. Physics", specialty: "Physics & Conceptual Learning", bio: "8+ Years Experience. Known for simplifying complex physics concepts through practical examples and structured problem solving.", image: "https://loremflickr.com/800/600/indian,portrait?lock=76" },
      { name: "Rohan Verma", role: "M.Sc. Chemistry", specialty: "Chemistry & Entrance Preparation", bio: "9+ Years Experience. Focuses on conceptual clarity, problem solving and systematic exam preparation.", image: "https://loremflickr.com/800/600/indian,man,face?lock=77" }
    ]
  },

  resultsConfig: {
    badge: "STUDENT ACHIEVEMENTS",
    title: "Student Progress & Achievements",
    subtitle: "Our students' hard work yields measurable progress (Sample Data).",
    items: [
      { id: 1, value: "92%", label: "Average Mock-Test Completion", icon: "CheckCircle" },
      { id: 2, value: "85%", label: "Students Completing Revision Plans", icon: "Book" },
      { id: 3, value: "4.8/5", label: "Student Experience Rating", icon: "Star" }
    ]
  },

  studyMaterialConfig: {
    badge: "RESOURCES",
    title: "Everything You Need to Prepare Better.",
    subtitle: "Comprehensive resources included with our programs.",
    items: [
      { id: 1, icon: "Book", title: "Structured Notes", description: "Detailed topic-wise study material." },
      { id: 2, icon: "FileText", title: "Practice Worksheets", description: "Daily assignments for consistent practice." },
      { id: 3, icon: "Edit3", title: "Mock Tests", description: "Simulated tests for exam readiness." },
      { id: 4, icon: "Archive", title: "Revision Material", description: "Concise notes for quick review." },
      { id: 5, icon: "Clock", title: "Previous-Year Question Practice", description: "Extensive practice of past exam papers." },
      { id: 6, icon: "Monitor", title: "Digital Learning Resources", description: "Access to online videos and material." }
    ]
  },

  testSeriesConfig: {
    badge: "TEST SERIES",
    title: "Practice. Analyse. Improve.",
    subtitle: "Regular mock tests and practice sessions help students identify weak areas and build exam confidence.",
    items: [
      { id: 1, icon: "File", title: "Topic Tests", description: "Assess understanding of individual chapters." },
      { id: 2, icon: "Clipboard", title: "Full-Length Mock Tests", description: "Experience the real exam format." },
      { id: 3, icon: "BarChart2", title: "Performance Analysis", description: "Detailed feedback on test performance." },
      { id: 4, icon: "Repeat", title: "Revision Tests", description: "Periodic tests to ensure long-term retention." }
    ]
  },

  studentJourneyConfig: {
    badge: "PROCESS",
    title: "Your Learning Journey",
    subtitle: "A structured path to academic success.",
    steps: [
      { number: "01", icon: "Target", title: "Choose Your Program", description: "Select a course based on your academic or exam goal." },
      { number: "02", icon: "MessageSquare", title: "Understand Your Starting Point", description: "Discuss current preparation and learning needs." },
      { number: "03", icon: "BookOpen", title: "Learn & Practice", description: "Attend classes, study material and regular practice sessions." },
      { number: "04", icon: "Edit3", title: "Test & Improve", description: "Use assessments and feedback to identify improvement areas." },
      { number: "05", icon: "TrendingUp", title: "Track Your Progress", description: "Review performance and adjust your preparation strategy." }
    ]
  },

  counsellingCtaConfig: {
    badge: "EXPERT GUIDANCE",
    title: "Not Sure Which Program Is Right for You?",
    description: "Speak with our academic counsellor to understand available programs, learning modes and preparation options.",
    buttonText: "Talk to an Academic Counsellor",
    buttonHref: "#contact",
    phoneCallText: "WhatsApp Us: +91 98765 43210"
  },

  galleryConfig: {
    badge: "CAMPUS TOUR",
    title: "Inside the Academy",
    subtitle: "A conducive environment for learning.",
    items: [
      { id: 1, title: "Classrooms", category: "Classroom", image: "https://loremflickr.com/800/600/mathematics?lock=78" },
      { id: 2, title: "Faculty", category: "Interaction", image: "https://loremflickr.com/800/600/education,teacher?lock=79" },
      { id: 3, title: "Students Learning", category: "Study", image: "https://loremflickr.com/800/600/students,study?lock=80" },
      { id: 4, title: "Library / Study Area", category: "Facility", image: "https://loremflickr.com/800/600/library,books?lock=81" },
      { id: 5, title: "Workshops", category: "Event", image: "https://loremflickr.com/800/600/workshop,seminar?lock=82" },
      { id: 6, title: "Technology Labs", category: "Lab", image: "https://loremflickr.com/800/600/coding,laptop?lock=83" }
    ]
  },

  testimonialsConfig: {
    badge: "SAMPLE REVIEWS",
    title: "What Students & Parents Say",
    subtitle: "Demo testimonials showcasing the Nexora experience.",
    items: [
      { id: 1, name: "Aarav Kumar", role: "Sample Student Experience", rating: 5, quote: "Classes are well structured and the faculty explains difficult concepts in a way that is easy to understand.", avatar: "https://loremflickr.com/800/600/indian,girl,face?lock=84", verified: true, treatment: "JEE Preparation" },
      { id: 2, name: "Priya Sharma", role: "Demo Testimonial", rating: 5, quote: "The regular tests and feedback helped us understand where improvement was needed.", avatar: "https://loremflickr.com/800/600/indian,woman,face?lock=85", verified: true, treatment: "Parent" }
    ]
  },

  faqConfig: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Information about admissions and courses.",
    items: [
      { id: 1, category: "Admissions", question: "Which courses do you offer?", answer: "We offer academic, competitive-exam and skill-focused programs depending on the academy's selected offerings." },
      { id: 2, category: "Classes", question: "Are classes online or offline?", answer: "Programs can be configured as classroom, online or hybrid depending on availability." },
      { id: 3, category: "Admissions", question: "Is there a demo class?", answer: "Demo classes can be offered for selected programs. Contact the academy to check availability." },
      { id: 4, category: "Support", question: "How do I choose the right course?", answer: "You can speak with an academic counsellor to understand the program structure and choose an option based on your goals." },
      { id: 5, category: "Classes", question: "What are the batch timings?", answer: "Batch timings vary by program and learning mode. Contact the academy for current schedules." },
      { id: 6, category: "Support", question: "Do you provide study material?", answer: "Selected programs can include notes, practice material, assessments and revision resources." },
      { id: 7, category: "Support", question: "Do you provide doubt support?", answer: "Doubt-support options can vary by program and should be confirmed during enrolment." },
      { id: 8, category: "Support", question: "Do you offer test series?", answer: "Test series and assessments can be included in selected programs." },
      { id: 9, category: "Admissions", question: "What is the fee?", answer: "Fees vary depending on the program, duration and learning mode. Contact the academy for current fee details." },
      { id: 10, category: "Admissions", question: "Is placement or selection guaranteed?", answer: "No. Academic outcomes depend on many factors including preparation, consistency and individual performance." }
    ]
  },

  ctaConfig: {
    badge: "Ready to Take the Next Step?",
    title: "Ready to Take the Next Step?",
    description: "Tell us your learning goal and our team will help you explore the right program.",
    buttonText: "Enquire Now",
    buttonHref: "#contact",
    phoneCallText: "WhatsApp Us: +91 98765 43210"
  },

  sections: [
    { id: "hero", type: "hero", enabled: true, order: 1 },
    { id: "trustStats", type: "trustBar", enabled: true, order: 2 },
    { id: "about", type: "about", enabled: true, order: 3 },
    { id: "courses", type: "services", dataKey: "coursesConfig", enabled: true, order: 4 },
    { id: "learningModes", type: "features", dataKey: "learningModesConfig", enabled: true, order: 5 },
    { id: "whyChooseUs", type: "features", dataKey: "whyChooseUsConfig", enabled: true, order: 6 },
    { id: "faculty", type: "doctors", dataKey: "facultyConfig", enabled: true, order: 7 },
    { id: "results", type: "trustBar", dataKey: "resultsConfig", enabled: true, order: 8 },
    { id: "studyMaterial", type: "features", dataKey: "studyMaterialConfig", enabled: true, order: 9 },
    { id: "testSeries", type: "features", dataKey: "testSeriesConfig", enabled: true, order: 10 },
    { id: "studentJourney", type: "steps", dataKey: "studentJourneyConfig", enabled: true, order: 11 },
    { id: "counsellingCta", type: "cta", dataKey: "counsellingCtaConfig", enabled: true, order: 12 },
    { id: "gallery", type: "gallery", enabled: true, order: 13 },
    { id: "testimonials", type: "testimonials", enabled: true, order: 14 },
    { id: "faq", type: "faq", enabled: true, order: 15 },
    { id: "enquiryCta", type: "cta", dataKey: "ctaConfig", enabled: true, order: 16 },
    { id: "contact", type: "contact", enabled: true, order: 17 }
  ]
};

export default coachingConfig;
