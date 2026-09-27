import { BarChart3, CirclePlus, LayoutDashboard, ReceiptText, UserRound } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';
export default function MobileNav(){ const {setQuickAddOpen}=useApp(); return <nav className="mobile-nav"><NavLink to="/dashboard"><LayoutDashboard size={20}/><span>Home</span></NavLink><NavLink to="/transactions"><ReceiptText size={20}/><span>Activity</span></NavLink><button onClick={()=>setQuickAddOpen(true)}><i><CirclePlus size={28}/></i><span>Add</span></button><NavLink to="/analytics"><BarChart3 size={20}/><span>Insights</span></NavLink><NavLink to="/profile"><UserRound size={20}/><span>Profile</span></NavLink></nav> }
