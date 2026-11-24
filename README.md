# SpendWise AI

SpendWise AI is a responsive, frontend-only expense and personal finance workspace built with React and Vite. It provides a polished dashboard for recording income and expenses, planning budgets, reviewing analytics, and getting lightweight AI-style spending suggestions from local demo data.

The app includes separate workspace modes for students, individuals, and business users. Each mode changes the dashboard language, guidance, and suggested expense categories so the same application can support different money-tracking needs.

## Highlights

- Student, Individual, and Business expense tracker modes
- Responsive desktop sidebar and mobile bottom navigation
- Dashboard with balance, income, spending, savings, budget pulse, charts, and recent activity
- Quick Add modal and full Add Expense / Add Income forms
- Transactions search, filtering, duplication, deletion, and status display
- Budgets with progress tracking and budget creation
- Savings goals with contributions and progress
- Analytics with spending mix, daily rhythm, merchants, and income-versus-expense views
- AI Insights page with spending patterns, forecasts, wins, and an assistant-style interaction
- Subscriptions, shared expenses, travel expenses, receipt scanner UI, reports, calendar, rewards, notifications, profile, and settings
- Light and dark themes
- Ctrl/Cmd + K command palette
- Browser localStorage persistence with demo-data restore

## Tracker modes

Open **Expense modes** from the authenticated sidebar to select the workspace that fits the user.

| Mode | Best for | Suggested categories | Focus |
| --- | --- | --- | --- |
| Student tracker | Allowance, stipend, campus life, hostel, and shared college spending | Food, Transport, Education, Entertainment, Shopping, Other | Allowance and campus life |
| Individual tracker | Personal cash flow, bills, subscriptions, and savings | Food, Shopping, Transport, Entertainment, Rent, Bills, Health, Education, Travel, Subscription, Investment, Other | Personal money |
| Business tracker | Sales, payroll, operating costs, tools, travel, and taxes | Sales, Payroll, Office, Marketing, Travel, Software, Taxes, Other | Revenue and operations |

The selected mode is stored in the app state and persists between browser sessions. Expense forms and Quick Add automatically use the selected mode's categories.

## Product flow

1. Visit the landing page.
2. Log in or create a demo account.
3. Complete the optional onboarding flow.
4. Open **Expense modes** and select Student, Individual, or Business.
5. Use **Add expense**, **Income**, or **Quick add** to record money movement.
6. Review Transactions, Budgets, Analytics, AI Insights, and Reports.

The authentication flow is a frontend demo. It does not connect to a real identity provider or backend service.

## Tech stack

- React 19
- React DOM
- React Router
- Vite
- Recharts
- Lucide React icons
- CSS custom properties, responsive CSS, and theme overrides
- Browser localStorage for persistence

## Requirements

- Node.js 18 or newer
- npm 9 or newer
- A modern browser such as Chrome, Edge, Firefox, or Safari

## Run locally

Clone the repository and install dependencies:

~~~bash
git clone https://github.com/vishal6387447174-oss/Expense-Tracker.git
cd Expense-Tracker
npm install
~~~

Start the Vite development server:

~~~bash
npm run dev
~~~

Open the local URL printed by Vite, normally http://localhost:5173.

### Demo login

The login page is pre-filled for a quick demo:

- Email: vishal@spendwise.app
- Password: spendwise

The demo login only sets a browser flag named spendwise-auth; it is not secure authentication.

## Available scripts

| Command | Description |
| --- | --- |
| npm run dev | Starts the Vite development server |
| npm run build | Creates the optimized production build in dist/ |
| npm run preview | Serves the production build locally for verification |

## Production build

Create and preview the production bundle:

~~~bash
npm run build
npm run preview
~~~

The generated files are written to dist/.

## Vercel deployment

Because the app uses React Router with client-side routes, configure a single-page-app fallback on Netlify before deploying. Add a file at public/_redirects containing:

~~~text
/* /index.html 200
~~~

Then commit and push the file, or add the equivalent redirect in a netlify.toml file. This keeps routes such as /dashboard, /trackers, and /analytics working after a page refresh.

## Data and persistence

This version is intentionally frontend-only. There is no API, database, server-side session, or payment integration.

- Seed data is defined in src/data/mockData.js.
- Application state is managed in src/context/AppContext.jsx.
- State is persisted in localStorage under spendwise-ai-state.
- Authentication state is stored under spendwise-auth.
- Settings, theme, transactions, budgets, goals, subscriptions, notifications, and the selected tracker mode persist locally.
- **Settings > Your data > Restore demo data** resets the application to the seeded state.

Do not use this demo's localStorage authentication or mock financial data as a production security model.

## Project structure

~~~
.
├── index.html                 Vite HTML entry point
├── package.json               Dependencies and npm scripts
├── src/
│   ├── App.jsx                Application routes and protected shell
│   ├── main.jsx               React bootstrap and providers
│   ├── components/            Shared UI components
│   │   ├── ChartCard.jsx
│   │   ├── QuickAddModal.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   ├── TransactionTable.jsx
│   │   └── ...
│   ├── context/
│   │   └── AppContext.jsx     State, actions, persistence, and metrics
│   ├── data/
│   │   └── mockData.js        Seed data, categories, and tracker profiles
│   ├── layouts/
│   │   └── AppShell.jsx       Authenticated desktop/mobile layout
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── ExpenseTrackers.jsx
│   │   ├── Transactions.jsx
│   │   ├── AddExpense.jsx
│   │   ├── Budgets.jsx
│   │   ├── Analytics.jsx
│   │   ├── AIInsights.jsx
│   │   └── ...
│   └── styles/                Base, feature, responsive, and theme CSS
└── dist/                      Generated by npm run build
~~~

## Main routes

### Public routes

- / - Landing page
- /login - Demo login
- /signup - Demo signup
- /forgot-password - Password reset presentation flow
- /onboarding - Initial setup flow

### Authenticated routes

- /dashboard - Financial overview
- /trackers - Student, Individual, and Business mode selection
- /transactions - Transaction history and management
- /add-expense - Full expense form
- /income - Income form
- /budgets - Budget planning
- /analytics - Spending analytics
- /ai-insights - AI-style insights and assistant
- /goals - Savings goals
- /subscriptions - Recurring subscriptions
- /shared-expenses - Shared group expenses
- /receipt-scanner - Receipt scanner presentation UI
- /travel-expenses - Travel expense planning
- /reports - Reports and export presentation UI
- /calendar - Calendar view
- /rewards - Rewards and challenges
- /notifications - Notification center
- /profile - Profile page
- /settings - Preferences and demo data controls

## Extending the project

### Add a tracker mode

Tracker definitions live in src/data/mockData.js under expenseProfiles. Add a profile with:

- key
- label and shortLabel
- description and focus
- accent
- categories
- highlights
- tip

Then add the corresponding icon to the icons map in src/pages/ExpenseTrackers.jsx. The dashboard and expense forms read the active profile through getExpenseProfile().

### Add state or persistence

Add new state fields to seedState, then expose read/write actions from AppContext.jsx. The provider automatically serializes the state to localStorage after updates.

### Add a route

Import the page in src/App.jsx and add it to privateRoutes to make it available inside the authenticated AppShell.

## Current limitations

- Data is local to the browser and is not synchronized across devices.
- Authentication, password reset, Google sign-in, receipt scanning, exports, and AI responses are UI/demo flows.
- The seeded dashboard contains sample Indian Rupee data and dates for demonstration.
- A production release should add a backend, real authentication, server-side validation, database persistence, and secure financial-data handling.

## Repository

GitHub: https://github.com/vishal6387447174-oss/Expense-Tracker
