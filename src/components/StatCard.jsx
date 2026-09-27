import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export default function StatCard({ label, value, change, icon: Icon, tone = 'violet', inverse = false }) {
  const positive = !String(change).startsWith('-');
  return <article className={`stat-card ${tone}`}>
    <div className="stat-top"><span>{label}</span><span className="stat-icon"><Icon size={19} /></span></div>
    <strong>{value}</strong>
    <small className={inverse ? (positive ? 'negative' : 'positive') : (positive ? 'positive' : 'negative')}>{positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}{change} <em>vs last month</em></small>
  </article>;
}
