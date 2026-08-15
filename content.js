/* ============================================================
   এই ফাইলটাতেই তোমার পোর্টফোলিওর সব লেখা/তথ্য আছে।
   এখানে যা বদলাবে, সাইটে সাথে সাথে সেটাই দেখাবে।
   HTML বা CSS ফাইল টাচ করার দরকার নেই — শুধু এই ফাইলে
   "" এর ভেতরের লেখা বদলাও। কমা ( , ) মুছে ফেলো না।

   *** যেসব জায়গায় তুমি নিজে বসাবে বলেছিলে, সেগুলো
   "TODO:" কমেন্ট দিয়ে চিহ্নিত করা আছে — খুঁজে বের করে
   বদলে নাও। ***

   ছবি বদলাতে চাইলে: profile.jpg ফাইলটা মুছে তোমার নতুন
   ছবি ওই একই নামে (profile.jpg) রেখে দাও।

   CV বদলাতে চাইলে: RHTcv.pdf ফাইলটা তোমার নতুন CV দিয়ে
   রিপ্লেস করো (নাম একই রাখতে হবে)।
   ============================================================ */

window.PORTFOLIO_DATA = {

  // ---------- ব্র্যান্ড / নেভিগেশন বার ----------
  brand: {
    shortName: "unnafeurohit",
    suffix: ".com"
  },

  // ---------- হিরো সেকশন (সবার উপরে) ----------
  hero: {
    designator: "U1 — TOP LEVEL",
    name: "Un-Nafeu Rohit",
    roleLine: ["EMBEDDED SYSTEMS", "IoT", "PCB DESIGN"],
    lede: "Electrical & Electronic Engineering graduate building intelligent hardware — from PCB schematic to deployed IoT system. IEEE-published, industrially trained, and hunting for an entry-level Hardware, Embedded Systems, IoT, or R&D Engineering role.",
    cvFile: "RHTcv.pdf",
    photoFile: "profile.jpg",
    photoTag: "DIU-EEE JU-APE"
  },

  // ---------- ফোকাস এরিয়া কার্ড (হিরোর নিচে) ----------
  focusAreas: {
    designator: "U2 — FOCUS AREAS",
    heading: "Research & Work Focus",
    items: [
      { title: "Embedded Systems", desc: "Microcontroller-based firmware and real-time control on Arduino & ESP32 platforms." },
      { title: "IoT & Wireless Systems", desc: "End-to-end sensor-to-cloud pipelines using LoRa and Wi-Fi communication." },
      { title: "PCB Design & Fabrication", desc: "Schematic capture, layout, and Gerber generation for production-ready boards." },
      { title: "Machine Learning for Hardware", desc: "Applying supervised ML to real-time fault detection and performance prediction." }
    ]
  },

  // ---------- সম্পর্কে / ক্যারিয়ার অবজেক্টিভ ----------
  about: {
    designator: "U3 — OBJECTIVE",
    heading: "Career Objective",
    text: "EEE graduate with hands-on expertise in embedded systems, IoT architecture, PCB design, and machine learning integration. Proven track record in developing intelligent hardware solutions backed by IEEE-published research. Seeking an entry-level Hardware, Embedded Systems, or R&D Engineering role to build reliable, high-performance technology.",
    specs: [
      { k: "Field", v: "Electrical & Electronic Engineering" },
      { k: "Focus", v: "Embedded · IoT · PCB · ML" },
      { k: "Status", v: "Graduate, seeking R&D / Hardware role" },
      { k: "Publications", v: "1 IEEE Conference Paper" },
      { k: "Base", v: "Mirpur-10, Dhaka, Bangladesh" }
    ]
  },

  // ---------- স্কিলস (ট্যাগ আকারে) ----------
  // নতুন স্কিল যোগ করতে চাইলে "" এর ভেতর নাম লিখে কমা দিয়ে যোগ করো
  skills: {
    designator: "U4 — CAPABILITIES",
    heading: "Technical Skills",
    subheading: "Tools and platforms spanning simulation, PCB fabrication, firmware, and the lab bench.",
    groups: [
      { title: "Simulation & Design", items: ["Proteus", "MATLAB / Simulink", "Fritzing", "CST Studio", "AutoCAD 2D"] },
      { title: "PCB Design", items: ["Schematic Capture", "PCB Layout", "Gerber Generation", "EasyEDA"] },
      { title: "Programming", items: ["C", "C++", "Python"] },
      { title: "Hardware & IoT Platforms", items: ["Arduino IDE", "ESP32", "Raspberry Pi", "Pixhawk"] },
      { title: "Lab & Instrumentation", items: ["Oscilloscopes", "Function Generators", "Electrical Measurement"] },
      { title: "Prototyping & Fabrication", items: ["SMD / THT Soldering", "Hardware Debugging", "System Integration", "3D Prototyping"] }
    ]
  },

  // ---------- অভিজ্ঞতা ----------
  experience: {
    designator: "U5 — TIMELINE",
    heading: "Experience",
    items: [
      {
        date: "JAN 12 – FEB 10, 2025",
        title: "Industrial Trainee",
        org: "Tools and Technology Institute (TTI), BITAC",
        desc: "Completed hands-on industrial training on Mechatronics & PLC."
      }
      // নতুন অভিজ্ঞতা যোগ করতে চাইলে উপরের { } ব্লকের মতো কমা দিয়ে আরেকটা যোগ করো
    ]
  },

  // ---------- প্রজেক্টস ----------
  // TODO: github / demo লিংক এখন "#" বসানো আছে — তোমার আসল লিংক বসিয়ে নাও
  projects: {
    designator: "U6 — BUILDS",
    heading: "Academic & Technical Projects",
    subheading: "Ten builds spanning IoT, machine learning, RF, power systems, and control.",
    items: [
      { id: "P01", year: "Final Year", title: "ML-Based Intelligent Environmental Quality Prediction System", desc: "A solar-powered IoT system using LoRa communication and machine learning to predict and classify environmental quality in real time for remote and disaster-prone areas.", github: "#", demo: "#" },
      { id: "P02", year: "2025", title: "Solar-Powered IoT Water Quality Monitoring System", desc: "Energy-autonomous IoT platform integrating water quality sensors, long-range LoRa communication, and ML-based real-time classification.", github: "#", demo: "#" },
      { id: "P03", year: "2025", title: "Real-Time Fault Classifier for Three-Phase Induction Motors", desc: "ML model for real-time fault detection and classification of three-phase induction motors using electrical parameters.", github: "#", demo: "#" },
      { id: "P04", year: "2025", title: "Performance Analysis of Photovoltaic Panel Using ML", desc: "Analyzed photovoltaic performance and efficiency trends under varying environmental conditions using supervised machine learning.", github: "#", demo: "#" },
      { id: "P05", year: "2025", title: "Metamaterial-Based Multiband Antenna (5 / 7.5 / 10.5 GHz)", desc: "Designed and simulated a metamaterial-based multiband antenna in CST Microwave Studio with improved bandwidth and radiation characteristics.", github: "#", demo: "#" },
      { id: "P06", year: "2025", title: "Secure PIN-Based Smart Relay Control System", desc: "ESP32-based load control with PIN authentication, local keypad + remote web dashboard, and real-time monitoring.", github: "#", demo: "#" },
      { id: "P07", year: "2024", title: "Smart Energy Meter Using ESP32 and Blynk", desc: "Smart energy monitoring system with real-time visualization and remote access via a cloud-based dashboard.", github: "#", demo: "#" },
      { id: "P08", year: "2024", title: "PLC-Based Temperature Control System", desc: "Industrial temperature control system designed and implemented using PLC logic and sensor feedback.", github: "#", demo: "#" },
      { id: "P09", year: "2024", title: "Overheat Protection System for Electric Motor", desc: "Safety system that automatically disconnects motors during overheating conditions to prevent damage.", github: "#", demo: "#" },
      { id: "P10", year: "2022", title: "Full Flat Layout Electrical Design (AutoCAD)", desc: "Complete residential electrical layout including lighting, power outlets, and protection devices.", github: "#", demo: "#" }
      // নতুন প্রজেক্ট: { id, year, title, desc, github, demo } ফরম্যাটে কমা দিয়ে যোগ করো
    ]
  },

  // ---------- পাবলিকেশন ----------
  publications: {
    designator: "U7 — RESEARCH",
    heading: "Publications",
    items: [
      {
        tag: "IEEE COMPAS 2025 · KUSHTIA, BANGLADESH",
        citationHtml: "J. Shariar, R. Rayhan, <strong>U. N. Rohit</strong>, H. M. R. Ahammed, and T. Fouzder, \"A solar-powered IoT system for real-time water quality monitoring using LoRa and machine learning,\" in Proc. 2025 IEEE 2nd Int. Conf. Computing, Applications and Systems (COMPAS), Kushtia, Bangladesh, Oct. 2025, pp. 1–6.",
        doiText: "doi.org/10.1109/COMPAS67506.2025.11381845",
        doiUrl: "https://doi.org/10.1109/COMPAS67506.2025.11381845"
      }
    ]
  },

  // ---------- শিক্ষাগত যোগ্যতা ----------
  education: {
    designator: "U8 — EDUCATION",
    heading: "Academic Qualification",
    items: [
      { year: "2027*", name: "MSc in Applied Physics & Electronics", school: "Jahangirnagar University · expected completion" },
      { year: "2022–25", name: "BSc in Electrical & Electronic Engineering", school: "Daffodil International University" },
      { year: "2020", name: "Higher Secondary Certificate (HSC)", school: "Police Lines School & College, Rangpur" },
      { year: "2018", name: "Secondary School Certificate (SSC)", school: "Police Lines School & College, Rangpur" }
    ]
  },

  // ---------- অর্জন ও আগ্রহ ----------
  achievements: {
    designator: "U9 — RECORD",
    heading: "Achievements & Interests",
    items: [
      { year: "2014", text: "1st Position, National Science Olympiad (Division Level)" },
      { year: "2017", text: "2nd Position, Salim Al Deen National Art Competition" }
    ],
    interests: ["Consumer Electronics", "AI & Machine Learning", "IoT & Robotics", "Esports"]
  },

  // ---------- যোগাযোগ ----------
  // TODO: social লিংকগুলো "#" বসানো আছে — নিজের আসল প্রোফাইল লিংক বসিয়ে নাও।
  //       যেটা নেই সেই লাইনটা মুছে দিলে ওই আইকনটা সাইটে দেখাবে না।
  contact: {
    designator: "U10 — CONTACT",
    heading: "Let's build something.",
    text: "Open to entry-level Hardware, Embedded Systems, IoT, and R&D Engineering roles. Reach out directly or download the full CV.",
    email: "unnafeurohit@gmail.com",
    phone: "+880 1600-200008",
    phoneHref: "+8801600200008",
    website: "unnafeurohit.com",
    websiteUrl: "https://unnafeurohit.vercel.app/",
    location: "Kazipara, Dhaka",
    socials: [
      { label: "WhatsApp", url: "https://wa.me/8801600200008" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/un-nafeu-rohit-b8b598248?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
       { label: "GitHub", url: "https://github.com/unnafeurohit" }
      // ব্যবহার না করলে পুরো লাইনটা মুছে দাও
    ]
  },

  // ---------- ফুটার ----------
  footer: {
    text: "© 2026 Un-Nafeu Rohit — All Rights Reserved"
  }
};
