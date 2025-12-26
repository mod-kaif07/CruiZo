# CruiZo — Monorepo (Frontend + Backend)

This repository contains two projects:

- Backend API: [backend](backend)
- Frontend app (Vite + React): [frontend](frontend)

---

## Quick start

Prerequisites: Node.js (18+ recommended), MongoDB running locally.

Backend
1. Open a terminal:
   cd backend
   npm install
2. Ensure [backend/.env](backend/.env) is configured (PORT, DB_CONNECT, JWT_SECRET)
3. Start the server:
   node server.js or npx nodemon
   - Entry: [backend/server.js](backend/server.js)
   - App: [backend/app.js](backend/app.js)

Frontend
1. Open a terminal:
   cd frontend
   npm install
2. Ensure [frontend/.env](frontend/.env) has VITE_BASE_URL pointing to backend (default: http://localhost:4000)
3. Start dev server:
   npm run dev
   - Config: [frontend/vite.config.js](frontend/vite.config.js)
   - Entry: [frontend/src/main.jsx](frontend/src/main.jsx)

---

## Important files (backend)

- Configuration: [backend/.env](backend/.env)  
- Server bootstrap: [backend/server.js](backend/server.js)  
- Express app: [backend/app.js](backend/app.js)  
- DB connector: [`connectToDb`](backend/db/db.js) — [backend/db/db.js](backend/db/db.js)  
- Routes:
  - Users: [backend/routes/user.routes.js](backend/routes/user.routes.js)
  - Captains: [backend/routes/captain.routes.js](backend/routes/captain.routes.js)
- Controllers:
  - [`registerUser`, `loginUser`, `logoutUser`](backend/controllers/user.controller.js) — [backend/controllers/user.controller.js](backend/controllers/user.controller.js)
  - [`register`, `login`, `logoutCaptain`](backend/controllers/captain.controller.js) — [backend/controllers/captain.controller.js](backend/controllers/captain.controller.js)
- Middlewares:
  - [`authUser`](backend/middlewares/auth.middleware.js), [`authCaptain`](backend/middlewares/auth.middleware.js) — [backend/middlewares/auth.middleware.js](backend/middlewares/auth.middleware.js)
- Models:
  - [backend/models/user.model.js](backend/models/user.model.js)
  - [backend/models/captain.model.js](backend/models/captain.model.js)
  - [backend/models/blacklistToken.model.js](backend/models/blacklistToken.model.js)
- Services:
  - [backend/services/user.service.js](backend/services/user.service.js)
  - [backend/services/captain.service.js](backend/services/captain.service.js)

See backend README for API details: [backend/README.md](backend/README.md)

---

## Important files (frontend)

- Env: [frontend/.env](frontend/.env) (VITE_BASE_URL)
- Package: [frontend/package.json](frontend/package.json)
- Entrypoints:
  - [frontend/index.html](frontend/index.html)
  - [frontend/src/main.jsx](frontend/src/main.jsx)
  - [frontend/src/App.jsx](frontend/src/App.jsx)
- Context providers:
  - [`UserDataContext`](frontend/src/context/UserContext.jsx) — [frontend/src/context/UserContext.jsx](frontend/src/context/UserContext.jsx)
  - [`CaptainDataContext`](frontend/src/context/CaptainContext.jsx) — [frontend/src/context/CaptainContext.jsx](frontend/src/context/CaptainContext.jsx)
- Auth wrappers:
  - [frontend/src/pages/UserProtectedWrapper.jsx](frontend/src/pages/UserProtectedWrapper.jsx)
  - [frontend/src/pages/CaptainProtectWrapper.jsx](frontend/src/pages/CaptainProtectWrapper.jsx)
- Main pages/components:
  - [frontend/src/pages/Home.jsx](frontend/src/pages/Home.jsx)
  - [frontend/src/pages/UserLogin.jsx](frontend/src/pages/UserLogin.jsx)
  - [frontend/src/pages/UserSign.jsx](frontend/src/pages/UserSign.jsx)
  - [frontend/src/pages/CaptainLogin.jsx](frontend/src/pages/Captainlogin.jsx)
  - [frontend/src/pages/CaptainSign.jsx](frontend/src/pages/CaptainSign.jsx)
  - Components: [frontend/src/Components](frontend/src/Components)

---

## Running both locally

- Start MongoDB.
- Start backend (port from [backend/.env](backend/.env), default 4000).
- Start frontend (Vite) — it will use VITE_BASE_URL to call the API.

---

## Notes

- Do not modify existing backend README: [backend/README.md](backend/README.md)  
- Backend auth uses JWT and token blacklisting: see [backend/models/blacklistToken.model.js](backend/models/blacklistToken.model.js) and [backend/middlewares/auth.middleware.js](backend/middlewares/auth.middleware.js)

// ...existing code...
{
  "scripts": {
    ...existing code...
    "start": "node server.js",
    "dev": "npx nodemon server.js"
  }
}
// ...existing code...


{
  "name": "uber-project",
  "private": true,
  "scripts": {
    "start": "concurrently \"npm:backend-dev\" \"npm:frontend-dev\"",
    "backend-dev": "cd backend && npx nodemon server.js",
    "frontend-dev": "cd frontend && npm run dev"
  },
  "devDependencies": {
    "concurrently": "^8.0.0"
  }
}