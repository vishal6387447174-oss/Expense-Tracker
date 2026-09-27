import { CheckCircle2, Info, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
export default function Toast(){ const {toast, notify}=useApp(); if(!toast) return null; return <div className={`toast ${toast.type}`}><span>{toast.type === 'success' ? <CheckCircle2 size={19}/> : <Info size={19}/>}</span>{toast.message}<button onClick={() => notify(null)} aria-label="Dismiss"><X size={16}/></button></div> }
