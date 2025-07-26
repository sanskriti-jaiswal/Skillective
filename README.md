**An AI-powered career guidance platform that transforms your skills into personalized resumes, tailored cover letters, and actionable insights — all in one place.**
<br>

<h1 align="center">SKILLECTIVE</h1>

<p align="center"><em>Empowering Careers Through Intelligent, Seamless Innovation</em></p>

<p align="center">
<img src="https://img.shields.io/badge/tech-JavaScript-yellow" alt="language" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/languages-JavaScript%20%26%20SQL-informational" />

</p>
<p align="center">
  <a href="https://your-live-app-url.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live%20App-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live App"/>
  </a>
</p>


<p align="center"><strong>Built with the tools and technologies:</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-38b2ac?style=for-the-badge&logo=tailwind-css&logoColor=white" />
 <img src="https://img.shields.io/badge/ShadCN_UI-ffffff?style=for-the-badge&color=gray" />
  <img src="https://img.shields.io/badge/Clerk-white?style=for-the-badge&logo=clerk&logoColor=black" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/Inngest-4A00E0?style=for-the-badge&logo=zapier&logoColor=white" />
  <img src="https://img.shields.io/badge/Recharts-pink?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Zod-8E44AD?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React_Hook_Form-FC466B?style=for-the-badge" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/date--fns-blue?style=for-the-badge" />
</p>

---

## Overview
**Skillective** is a full-stack, AI-integrated platform that helps users:
- Generate ATS-friendly resumes and job-specific cover letters
- Evaluate their skills through mock interviews
- Get personalized insights and industry trends
- Track performance over time with interactive dashboards

---

## Features
- 🔐 **Authentication** with Clerk
- 📊 **User Dashboard** with career insights (powered by Gemini API)
- 📝 **Resume Builder** with markdown editing & PDF export
- 💼 **AI-Powered Cover Letter Generator** based on job title & company
- 🎯 **Mock Interview System** with MCQs, scores & explanations
- 📈 **Performance Visualization** using charts and statistics
- ⏱️ **Automated Weekly Updates** via background jobs using Inngest

---

##  Tech Stack

| Layer            | Tools / Libraries                                         |
|------------------|-----------------------------------------------------------|
| **Frontend**     | Next.js (App Router), Tailwind CSS, ShadCN UI, React Hook Form, Zod, @uiw/react-md-editor |
| **Backend**      | Next.js Server Actions, Prisma ORM, PostgreSQL (Neon)     |
| **Authentication** | Clerk                                                   |
| **AI Services**  | Google Gemini 1.5 Flash API (@google/generative-ai)       |
| **Automation**   | Inngest (Cron background jobs)                            |
| **Visualization**| Recharts, date-fns                                        |
| **Deployment**   | Vercel (Frontend + API Routes)                                                      |

---

## 🔧 System Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/skillective.git
cd skillective
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a .env file in the root directory and add:
env
```bash
CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
DATABASE_URL=your_neon_connection_string
GEMINI_API_KEY=your_gemini_key
NEXT_PUBLIC_CLERK_FRONTEND_API=...
```

### 4. Initialize Database with Prisma
```bash
npx prisma migrate dev --name init
```

### 5. Run Development Server
```bash
npm run dev
```

### ⚙️ Additional Setup Notes
Inngest (for Background Jobs)
```bash
npm install -g inngest-cli
inngest dev
```

### NeonDB
- Provisioned PostgreSQL on Neon.tech
- Add connection string to .env under DATABASE_URL

### ShadCN UI
```bash
npx shadcn@latest init
```
---

## Database Schema (ER Summary)
- User ➝ [1] IndustryInsight, [1] Resume, [M] Assessment, [M] CoverLetter
- Uses Prisma ORM and Neon PostgreSQL
- Migrations managed via prisma migrate dev
<img width="1016" height="545" alt="image" src="https://github.com/user-attachments/assets/f4a454d0-8055-41e1-afd5-970620e297b0" />

---

## 🧪 Modules
| Module             | Description                                                         |
| ------------------ | ------------------------------------------------------------------- |
| 🧭 Onboarding      | Captures user info (skills, goals, industry)                        |
| 📈 Insights        | Weekly updates using Gemini API + Inngest                           |
| 🧠 Mock Interviews | Timed quiz with explanations, scores, and review                    |
| 📊 Dashboard       | Line charts of performance, summary cards                           |
| 📝 Resume          | Markdown resume editor with export as PDF                           |
| ✉️ Cover Letter    | AI-generated letter for job title + company, editable + save/delete |

---

## UI Screenshots

- ### Dashboard & Insights
<img width="790" height="399" alt="Dashboard" src="https://github.com/user-attachments/assets/6793b9f5-1547-4b1d-92b8-a6e1a0df52c3" />


- ### Performance Visualization Dshboard
<img width="808" height="355" alt="Performance" src="https://github.com/user-attachments/assets/65bd057e-01a7-4034-8051-0fe0837822d9" />

<br/>
<br/>

<img width="800" height="363" alt="Performance" src="https://github.com/user-attachments/assets/f35aec12-ff20-485c-9d67-d384f65ebec4" />



- ### AI powered ATS-Friendly Resume builder 
<img width="818" height="382" alt="Resume Builder" src="https://github.com/user-attachments/assets/26f85aaa-8cbc-442f-9a39-bddf76d29cb8" />

<br/>
<br/>

<img width="819" height="371" alt="Resume Builder Preview" src="https://github.com/user-attachments/assets/91a64028-bf6e-4ed0-a93b-f899db8f957c" />



- ### AI powered Cover Letter Builder 
<img width="817" height="357" alt="Cover Letter Form" src="https://github.com/user-attachments/assets/195b721d-9450-45e0-adfc-b8e70600a806" />

<br/>
<br/>

<img width="814" height="331" alt="Cover Letter Preview" src="https://github.com/user-attachments/assets/31963ac6-0436-4adb-9ffe-20b242b424c9" />


- ### Generated Mock Interview based on user skills
<img width="814" height="367" alt="Mock Interview" src="https://github.com/user-attachments/assets/b7721ef4-f902-419c-a825-c20132c1caf5" />

---

## Future Enhancements
- Resume-job description matching using LLMs
- Direct export to LinkedIn or job portals
- Peer feedback, portfolio section
---

## Theoretical Foundations
- AI in Career Guidance: Gemini API to tailor insights
- Data Visualization: Helps users make informed career decisions
- Personalized Learning: Dynamic feedback loop with mock results

---
### Live Demo
<p align="center"> <a href="https://skillective-two.vercel.app/" target="_blank"> <img src="https://img.shields.io/badge/View%20Project%20Live-%20skillective--two.vercel.app-000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo on Vercel" /> </a> </p>

---

##  Author
**Sanskriti Jaiswal**
- 🔗 LinkedIn- https://www.linkedin.com/in/sanskriti-jaiswal-4a8638279/
- ✉️ Email- sanskritijaiswal.lko@gmail.com

---

## License
This project is licensed under the MIT License.
[![License](https://img.shields.io/badge/License-MIT-lightgrey)]()



