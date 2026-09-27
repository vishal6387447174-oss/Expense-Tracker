import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import MobileNav from '../components/MobileNav';
import QuickAddModal from '../components/QuickAddModal';
import Toast from '../components/Toast';
export default function AppShell(){return <div className="app-shell"><Sidebar/><main className="main-shell"><Topbar/><div className="page-content"><Outlet/></div></main><MobileNav/><QuickAddModal/><Toast/></div>}
