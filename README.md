💰 Finance Dashboard Frontend

  A modern SaaS-style finance dashboard built with Next.js, connected to a Django REST backend.

🚀 Live Website

  🔗 https://financefrontendzor.netlify.app

🔗 Backend API

  👉 https://finance-backend-ovlz.onrender.com/

🧠 Features
  🔐 JWT Authentication (Login)
  📊 Dashboard analytics
  💸 Add / view transactions
  📈 Charts & insights
  🌙 SaaS-style UI

⚙️ Tech Stack
  Next.js (App Router)
  React
  Tailwind CSS
  Axios
  Netlify (deployment)

🔗 Backend Repository

  👉 https://github.com/kashish1217/FINANCE_BACKEND

🛠️ Local Setup
  git clone <your-frontend-repo>
  cd finance_frontend
  npm install
  npm run dev

🌍 Environment Variables
  Create .env.local
  NEXT_PUBLIC_API_URL=https://finance-backend-ovlz.onrender.com

🔐 Authentication Flow
  User logs in → /api/token/
  Token stored in localStorage
  Token sent in headers:
  Authorization: Bearer <token>

⚠️ Important Notes
  Backend must be running (or deployed)
  CORS must be enabled in backend
  Always include /api in requests
