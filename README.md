# 💊 Swasth ID — Empowering Better Health, One ID at a Time

A modern full-stack healthcare platform designed for fast, secure, and intuitive access to health records, appointments, and professional consultations. Built using **Next.js**, **Material UI**, and a flair for responsive design that blends aesthetics with accessibility.

---

## 🧬 Tech Stack

- 🔧 **Frontend**: React + Next.js  
- 🎨 **Styling**: Material UI (MUI), Responsive Theming  
- ⚙️ **Routing**: Dynamic and declarative with `useRouter()`  
- ✍️ **Animations**: Custom typing effect with backspace/forward transitions  
- 📁 **Structure**: Modular components with reusable layout strategies  

---

## 🚀 Features Implemented

### 🌈 Welcome Page
- 🧠 Typing animation for rotating synonyms of “Empowering”
- 🎯 Vibrant transitions with `theme.palette.primary.themeColor_X`
- 📱 Fully responsive layout: hero section, cards, and footer  

### 🧩 Fixed Transparent Header
- 🖼️ Logo (`Image` component) and Login button
- ✨ Scroll blur with `backdropFilter: blur(6px)`
- 🔄 Embedded directly in `WelcomePage.jsx`

### 🛣️ Routing Strategy
- 📍 `useRouter()` for navigation
- ✅ `/auth/signin` mapped to `src/pages/auth/signin/index.jsx`
- 🩺 Dynamic roles via query string (e.g., `/auth/signin?role=doctor`)

---

## 🗂 Directory Structure

```bash
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
```

---

## 🧪 Developer Notes

### 🐛 Common Gotchas
- `router.push("/auth/signin")` must be an absolute path  
- 🔁 Avoid recursive imports  
- 🧼 Use `component="span"` in nested Typography to prevent `<p><p>` hydration errors  

### 🧹 Refinement Tips
- 🎨 Reuse theme colors: `theme.palette.primary.themeColor_X`
- 🖱️ Button consistency via `variant="contained"` / `outlined`
- ✅ Maintain semantic HTML in JSX

---

## 👁️ Future Enhancements

- 🌐 Role-based authentication flows  
- 📆 Appointment calendar with interactive month view  
- 📄 Registration via modals or animated transitions  
- 🦠 SVG/Lottie illustrations for medical storytelling  

---

## 🧑‍💻 How to Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Open in browser
http://localhost:3000
```

---

## 🧠 Built With Heart

Crafted by developers who care about better health, better code, and a better user experience.

> _Better Health, One ID at a Time._
