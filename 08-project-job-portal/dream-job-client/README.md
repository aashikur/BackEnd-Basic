job-portal-client/
├── public/
│   └── index.html
├── src/
│   ├── assets/               # Images, logos, icons
│   ├── components/           # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── JobCard.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── context/              # Auth / App context providers
│   │   └── AuthProvider.jsx
│   ├── hooks/                # Custom React hooks
│   │   └── useAuth.js
│   ├── layout/               # Layout components (e.g., Main layout, Dashboard layout)
│   │   └── MainLayout.jsx
│   ├── pages/                # Pages for routes
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── PostJob.jsx
│   │   ├── AllJobs.jsx
│   │   ├── JobDetails.jsx
│   │   ├── MyJobs.jsx
│   │   ├── AppliedJobs.jsx
│   │   ├── UpdateJob.jsx
│   │   └── NotFound.jsx
│   ├── routes/               # React Router DOM setup
│   │   └── Routes.jsx
│   ├── services/             # API calls or Firebase setup
│   │   └── api.js
│   ├── utils/                # Helper functions and constants
│   │   └── formatDate.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css             # Tailwind base styles
│   └── tailwind.config.js
├── .env                      # Environment variables
├── .gitignore
├── package.json
└── vite.config.js            # If using Vite (recommended)