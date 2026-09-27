import { BarChart3, Bell, Bot, CalendarDays, ChevronLeft, CircleDollarSign, Crown, FileText, Goal, HandCoins, House, Landmark, LayoutDashboard, Plane, ReceiptText, ScanLine, Settings, SlidersHorizontal, Target, UsersRound, WalletCards } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const primary = [
  ['Dashboard', '/dashboard', LayoutDashboard], ['Transactions', '/transactions', ReceiptText], ['Add expense', '/add-expense', CircleDollarSign], ['Income', '/income', Landmark], ['Budgets', '/budgets', WalletCards], ['Analytics', '/analytics', BarChart3], ['AI Insights', '/ai-insights', Bot], ['Savings goals', '/goals', Target], ['Subscriptions', '/subscriptions', Crown]
];
const secondary = [['Shared expenses', '/shared-expenses', UsersRound], ['Receipt scanner', '/receipt-scanner', ScanLine], ['Travel expenses', '/travel-expenses', Plane], ['Reports', '/reports', FileText], ['Calendar', '/calendar', CalendarDays], ['Rewards', '/rewards', Goal]];
export default function Sidebar(){
  const [collapsed, setCollapsed] = useState(false);
  const renderLink = ([label, to, Icon]) => <NavLink end={to === '/dashboard'} className="nav-link" to={to} key={to} title={collapsed ? label : undefined}><Icon size={19}/><span>{label}</span></NavLink>;
  return <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}><div className="brand-row"><Link className="brand" to="/dashboard"><i><HandCoins size={22}/></i><b>SpendWise<span>AI</span></b></Link><button onClick={() => setCollapsed(!collapsed)} className="collapse-button" aria-label="Collapse navigation"><ChevronLeft size={18}/></button></div>
    <nav><p className="nav-label">Workspace</p>{primary.map(renderLink)}<p className="nav-label space">Explore</p>{secondary.map(renderLink)}</nav>
    <div className="sidebar-bottom"><NavLink className="nav-link" to="/notifications"><Bell size={19}/><span>Notifications</span><i className="unread-dot"/></NavLink><NavLink className="nav-link" to="/settings"><Settings size={19}/><span>Settings</span></NavLink><Link className="user-mini" to="/profile"><div className="avatar">VM</div><span><b>Vishal Maurya</b><small>Free plan</small></span><SlidersHorizontal size={16}/></Link></div>
  </aside>;
}
