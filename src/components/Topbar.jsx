import { Bell, Command, LogOut, Moon, Plus, Search, Sun, UserRound } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useEffect, useState } from 'react';

export default function Topbar(){
  const { state, updateSettings, setQuickAddOpen, markRead } = useApp(); const [searchOpen, setSearchOpen] = useState(false); const [notices, setNotices] = useState(false); const navigate=useNavigate();
  useEffect(() => { const listener = e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setSearchOpen(true); } }; window.addEventListener('keydown', listener); return () => window.removeEventListener('keydown', listener); }, []);
  const unread = state.notifications.filter(n => n.unread).length;
  return <header className="topbar"><button className="command-search" onClick={() => setSearchOpen(true)}><Search size={18}/><span>Search anything</span><kbd><Command size={12}/> K</kbd></button><div className="topbar-actions">
    <button className="icon-button" aria-label="Toggle dark mode" onClick={() => updateSettings({theme: state.settings.theme === 'dark' ? 'light' : 'dark'})}>{state.settings.theme === 'dark' ? <Sun size={19}/> : <Moon size={19}/>}</button>
    <div className="notification-wrap"><button className="icon-button notification-button" aria-label="Notifications" onClick={() => {setNotices(!notices); markRead();}}><Bell size={19}/>{unread > 0 && <i>{unread}</i>}</button>{notices && <div className="notification-popover"><div><b>Notifications</b><button onClick={markRead}>Mark all read</button></div>{state.notifications.slice(0,3).map(n => <Link key={n.id} to="/notifications" onClick={() => setNotices(false)}><span className="notice-icon">✦</span><p><b>{n.title}</b><small>{n.text}</small></p></Link>)}<Link className="view-all" to="/notifications" onClick={() => setNotices(false)}>View notification center</Link></div>}</div>
    <button className="primary-button compact" onClick={() => setQuickAddOpen(true)}><Plus size={17}/> <span>Add transaction</span></button>
    <Link className="avatar avatar-link" aria-label="Profile" to="/profile">VM</Link>
  </div>
  {searchOpen && <div className="command-overlay" onMouseDown={() => setSearchOpen(false)}><div className="command-palette" onMouseDown={e=>e.stopPropagation()}><div className="command-input"><Search size={19}/><input autoFocus placeholder="Search transactions, pages, and actions..." onKeyDown={e => {if(e.key==='Enter'){setSearchOpen(false); navigate('/transactions')}}}/><kbd>ESC</kbd></div><p>Quick actions</p><button onClick={() => {setSearchOpen(false);setQuickAddOpen(true)}}><Plus size={17}/> Add an expense <kbd>↵</kbd></button><button onClick={() => {setSearchOpen(false);navigate('/analytics')}}><BarIcon/> Open analytics</button><button onClick={() => {setSearchOpen(false);navigate('/ai-insights')}}><UserRound size={17}/> Ask SpendWise AI</button></div></div>}
  </header>;
}
function BarIcon(){ return <span className="tiny-bars">▥</span> }
