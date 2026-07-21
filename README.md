# 🎓 Accredian Corporate Learning Platform & Admin Portal

A modern, high-performance, fullstack web application clone for **Accredian** — empowering enterprise organizations to cultivate top-tier talent through specialized corporate upskilling programs in Gen-AI, Executive Leadership, Product Strategy, and Data Engineering.

Developed by **Tejas Kumbharkar** as an Internship Project Task.

---

## 🌟 Key Features

- **🚀 Premium Hero Section**: Modern geometric typography, responsive layout, dynamic checkmarks, and high-impact CTA.
- **📊 Interactive Track Record & Counter**: Dynamic counting animations counting up to key achievements (10K+ Professionals Trained, 200+ Sessions, 5K+ Learners).
- **💼 Verified Client Collaborations**: High-resolution brand logo showcase (Reliance, HCL, IBM, CRIF, ADP, Bayer).
- **💡 Accredian Edge & Framework**: Interactive domain breakdown and animated infographics detailing the CAT (Concept, Application, Tools) learning framework.
- **🎯 How We Deliver Results**: 3-step structured approach with dual blue vertical accent bars and hover effects.
- **📩 Interactive Enquire Now Portal**: Multi-step modal form with complete input validation and instant submission feedback.
- **🔒 Admin Portal & Management Dashboard**:
  - Environment-secured admin login (`.env` credentials).
  - Live search and filter for received corporate lead enquiries.
  - Interactive table view with candidate, company, domain, and location breakdown.
  - Pre-populated realistic fallback dummy data for instant UI testing.
- **☁️ Vercel Deployment Ready**: Built-in Vercel SPA routing (`vercel.json`), dynamic API URL resolution, and robust CORS configuration for separate frontend/backend hosting.

---

## 🛠️ Technology Stack

### **Frontend**
- **Framework**: React 19 (TypeScript) + Vite
- **Styling**: Vanilla CSS & Custom Design System (Inter font, smooth gradients, HSL color tokens)
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom Inline SVGs
- **HTTP Client**: Axios

### **Backend**
- **Runtime**: Node.js + Express.js
- **Database**: MongoDB (Mongoose ORM) with in-memory fallback
- **Authentication**: JWT (JSON Web Tokens)
- **Configuration**: dotenv, CORS

---

## 🚀 Setup & Installation Instructions

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (Optional: App includes automatic fallback if local MongoDB is offline)

---

### **1. Local Setup**

#### **Step 1: Clone the Repository**
```bash
git clone https://github.com/Tejas-k23/Accrediane-clone.git
cd Accrediane-clone
```

#### **Step 2: Backend Setup**
```bash
cd backend
npm install
```

Create a `.env` file in `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/accredian
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
JWT_SECRET=accredian_admin_secret_key_2026

# Separate Hosting URLs
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:5000
```

Start the backend server:
```bash
npm start
# or for development mode:
npm run dev
```

#### **Step 3: Frontend Setup**
Open a new terminal tab and navigate to the frontend directory:
```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/.env` (Optional):
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Start the frontend development server:
```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

---

### **2. Vercel Deployment Guide**

#### **Hosting Frontend & Backend Separately on Vercel**

1. **Deploy Backend**:
   - Push repository to GitHub.
   - Import the `backend` directory in Vercel as a Node.js project.
   - Set Environment Variables on Vercel:
     - `ADMIN_USERNAME`: `admin`
     - `ADMIN_PASSWORD`: `admin123`
     - `JWT_SECRET`: `your_secret`
     - `MONGO_URI`: `mongodb+srv://<user>:<password>@cluster.mongodb.net/accredian`
     - `FRONTEND_URL`: `https://<your-frontend-app>.vercel.app`
   - Copy the deployed backend Vercel URL (e.g. `https://your-backend-api.vercel.app`).

2. **Deploy Frontend**:
   - Import the `frontend` directory in Vercel as a Vite project.
   - Set Environment Variables on Vercel:
     - `VITE_API_BASE_URL`: `https://your-backend-api.vercel.app/api`
   - Vercel will automatically use `frontend/vercel.json` for SPA route rewrites to ensure direct page refreshes work without 404 errors.

---

## 🎯 Approach Taken

1. **Pixel-Perfect UI & Aesthetics**:
   - Adopted a clean geometric design system centered around Google Fonts `Inter` typeface.
   - Tailored custom color palettes with rich blue accents (`#1d6bf3`), polished gradients, and micro-animations to create a premium impression.

2. **Modular Component Architecture**:
   - Divided the single-page application into self-contained, reusable components (`Hero`, `StatsSection`, `ClientsSection`, `EdgeSection`, `CatSection`, `HowItWorks`, `FaqSection`, `TestimonialsSection`, `Footer`, `EnquireModal`, `AdminModal`).

3. **Resilient Data & Fallback Strategy**:
   - Implemented a hybrid architecture in Express & React where the application functions smoothly connected to MongoDB, but gracefully falls back to structured in-memory datasets and mock records when offline.

4. **Security & Access Control**:
   - Protected the admin endpoints using JWT token validation. Admin login credentials are saved securely in `.env` variables.

---

## 🤖 AI Usage Explanation

This project was built pair-programming with **Antigravity AI** (Google DeepMind's Advanced Agentic Coding assistant).

### **How AI Assisted in the Development Workflow**:
- **Rapid Prototyping & Layout Synthesis**: AI analyzed user requests and screenshots to generate matching React components, custom SVG graphics, and responsive flexbox/grid layouts.
- **Dynamic State & Animation Logic**: Implemented the animated `Counter` hook for real-time statistical count-ups and framer-motion transitions.
- **Robust Fullstack Architecture**: Built Express routes, Mongoose schemas, JWT authentication, and graceful fallback mechanisms for MongoDB.
- **Production-Ready Hosting Configuration**: Configured dynamic API URL handling, cross-origin resource sharing (CORS) rules, and Vercel SPA rewrites (`vercel.json`) to prevent hosting issues.

---

## 🚀 Future Business Improvements & Scaling Potential

If given more time to expand this fullstack application into an enterprise-ready SaaS platform, the following strategic improvements would significantly boost business value and operational efficiency:

### **1. Automated CRM & Lead Distribution System**
- **HubSpot / Salesforce Integration**: Automatically sync received lead enquiries into enterprise CRMs.
- **Instant Email & WhatsApp Notifications**: Send real-time alerts to corporate sales advisors when high-intent enterprise clients submit an enquiry.

### **2. Advanced Admin Analytics & Lead Scoring**
- **Lead Qualification Score**: Automatically assign lead scores based on company size, candidate count, and domain priority.
- **Conversion Pipeline Dashboard**: Track lead statuses (`New`, `Contacted`, `Proposal Sent`, `Converted`, `Closed`) with visual chart analytics.

### **3. Enterprise LMS & Self-Service Portal**
- **Client Manager Portal**: Allow corporate HR leads to track employee course progress, view attendance, and download batch performance reports.
- **Automated Certificate Verification**: Public verification portal for co-branded university credentials via unique QR codes.

### **4. AI-Powered Course Recommendation Engine**
- **Smart Skill Gap Questionnaire**: Interactive AI diagnostic quiz for HR managers to receive customized training roadmap recommendations tailored to their team's tech stack.

---

## 📄 License & Credits

- **Developer**: Tejas Kumbharkar
- **Project**: Accredian Clone Internship Task
- **Year**: 2026
