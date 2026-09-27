# SpendWise AI

A frontend-only personal finance workspace built with React and Vite. It uses realistic mock data and localStorage to deliver a polished dashboard experience without a backend.

## Included

- Premium landing, login, signup, password-reset, and onboarding flows
- Responsive dashboard with live financial summaries, charts, transaction activity, budget pulse, and AI snapshot
- Persistent transactions, quick-add modal, income entry, search, filter, duplicate, and delete actions
- Budgets, savings goals, subscriptions, shared expenses, travel planning, receipt scanner UI, reports, calendar, rewards, notifications, profile, and settings
- Light/dark modes, notification center, Ctrl/Cmd + K command palette, export simulation, and mobile bottom navigation
- Mock AI insights and assistant responses based on local transaction state

## Run locally

```bash
npm install
npm run dev
```

Then open the address Vite prints in the terminal. The login screen is pre-filled for a quick demo; submit it to open the dashboard.

## Production build

```bash
npm run build
npm run preview
```

## Data persistence

App data is saved under `spendwise-ai-state` in browser localStorage. Use **Settings → Your data → Restore demo data** to reset the demo state.

## Project structure

```text
src/
  components/    Shared navigation, modals, cards, table, toast UI
  context/       LocalStorage-backed app state and actions
  data/          Realistic seeded finance data
  layouts/       Desktop shell and mobile navigation
  pages/         Landing, dashboard, finance features, account flows
  styles/        Theme, responsive, and feature-specific styling
```
