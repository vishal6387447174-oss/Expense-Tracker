import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './layouts/AppShell';
import Landing from './pages/Landing';
import { ForgotPassword, Login, Onboarding, Signup } from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import AddExpense from './pages/AddExpense';
import Budgets from './pages/Budgets';
import Analytics from './pages/Analytics';
import AIInsights from './pages/AIInsights';
import Goals from './pages/Goals';
import Subscriptions from './pages/Subscriptions';
import SharedExpenses from './pages/SharedExpenses';
import { CalendarPage, ReceiptScanner, Reports, Rewards, TravelExpenses } from './pages/MorePages';
import { Notifications, Profile, Settings } from './pages/AccountPages';
import NotFound from './pages/NotFound';

const privateRoutes = [
  ['dashboard', Dashboard], ['transactions', Transactions], ['add-expense', AddExpense], ['income', ()=><AddExpense income/>], ['budgets', Budgets], ['analytics', Analytics], ['ai-insights', AIInsights], ['goals', Goals], ['subscriptions', Subscriptions], ['shared-expenses', SharedExpenses], ['receipt-scanner', ReceiptScanner], ['travel-expenses', TravelExpenses], ['reports', Reports], ['calendar', CalendarPage], ['rewards', Rewards], ['notifications', Notifications], ['profile', Profile], ['settings', Settings]
];
function Protected(){return localStorage.getItem('spendwise-auth')==='true'?<AppShell/>:<Navigate to="/login" replace/>}
export default function App(){return <Routes><Route path="/" element={<Landing/>}/><Route path="/login" element={<Login/>}/><Route path="/signup" element={<Signup/>}/><Route path="/forgot-password" element={<ForgotPassword/>}/><Route path="/onboarding" element={<Onboarding/>}/><Route element={<Protected/>}>{privateRoutes.map(([path,Page])=><Route path={path} element={<Page/>} key={path}/>)}</Route><Route path="*" element={<NotFound/>}/></Routes>}
