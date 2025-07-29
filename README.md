💊 Swasth ID — Empowering Better Health, One ID at a Time
A modern full-stack healthcare platform designed for fast, secure, and intuitive access to health records, appointments, and professional consultations. Built using Next.js, Material UI, and a flair for responsive design that blends aesthetics with accessibility.

🧬 Tech Stack
🔧 Frontend: React + Next.js

🎨 Styling: Material UI (MUI), Responsive Theming

⚙️ Routing: Dynamic and declarative with useRouter()

✍️ Animations: Custom typing effect with backspace/forward transitions

📁 Structure: Modular components with reusable layout strategies

🚀 Features Implemented
🌈 Welcome Page
🧠 Rotating headline with synonyms for "Empowering" in a typing + backspace animation

🎯 Styled using theme.palette.primary.themeColor_X for vibrant transitions

📱 Fully responsive hero section, info cards, and footer

🧩 Fixed Transparent Header
Logo (Image component) + Login Button

Glassy blur on scroll using backdropFilter: blur(6px)

Integrated directly inside WelcomePage.jsx (no external layout dependency)

🛣️ Routing Strategy
Uses useRouter() from Next.js for programmatic navigation

/auth/signin route navigates to src/pages/auth/signin/index.jsx correctly

Roles can be dynamically passed via query strings like /auth/signin?role=doctor

🗂 Directory Structure (Simplified)
bash
src/
├── components/
│   ├── Welcome/WelcomePage.jsx
│   ├── Authentication/Signin.jsx
├── pages/
│   ├── index.jsx
│   ├── auth/
│   │   └── signin/
│   │       └── index.jsx
public/
└── assets/
    └── SwasthId_logo.png
🧪 Developer Notes
🐛 Common Gotchas
router.push("/auth/signin") must be absolute

Avoid recursive imports like Signin calling itself

Use component="span" in nested Typography to avoid hydration errors (<p><p> is invalid in HTML)

🧹 Code Refinement Tips
Theme colors are reused via theme.palette.primary.themeColor_X

All buttons use variant="contained" or variant="outlined" consistently

Keep JSX semantic: avoid nesting Typography unless components are overridden properly

👁️ Future Enhancements
🌐 Role-based authentication (/signin?role=doctor)

📆 Appointment calendar with dynamic month views

📄 Modal-based registration or animated page transitions

🦠 SVG or Lottie animations for medical illustrations

🧑‍💻 How to Run
bash
# Install dependencies
npm install

# Run locally
npm run dev

# Access on localhost
http://localhost:3000
🧠 Built With Heart
Crafted by developers who care about better health, better code, and a better user experience.

Better Health, One ID at a Time.