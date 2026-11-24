import { ArrowRight, BriefcaseBusiness, Check, GraduationCap, Lightbulb, UserRound, WalletCards } from 'lucide-react';
import { Link } from 'react-router-dom';
import { expenseProfiles } from '../data/mockData';
import { useApp } from '../context/AppContext';

const icons = { student: GraduationCap, individual: UserRound, business: BriefcaseBusiness };

export default function ExpenseTrackers() {
  const { workspaceType, setWorkspaceType, metrics } = useApp();
  const active = expenseProfiles[workspaceType] || expenseProfiles.individual;
  const ActiveIcon = icons[active.key];

  return <div className="trackers-page">
    <div className="page-title">
      <div><p className="eyebrow">One app, your way</p><h1>Choose your expense tracker</h1><p>Pick the workspace that matches your life. You can switch modes any time.</p></div>
      <Link className="secondary-button" to="/add-expense"><WalletCards size={17}/> Add an expense</Link>
    </div>

    <section className="tracker-hero panel" style={{ '--tracker-accent': active.accent }}>
      <div className="tracker-hero-icon"><ActiveIcon size={25}/></div>
      <div><p className="eyebrow">Active workspace</p><h2>{active.label}</h2><span>{active.focus} · {metrics.expense.toLocaleString('en-IN')} spent in your workspace</span></div>
      <Link className="primary-button" to="/dashboard">Open dashboard <ArrowRight size={16}/></Link>
    </section>

    <section className="tracker-grid">
      {Object.values(expenseProfiles).map(profile => {
        const Icon = icons[profile.key];
        const selected = profile.key === workspaceType;
        return <article className={`tracker-card panel ${selected ? 'selected' : ''}`} key={profile.key} style={{ '--tracker-accent': profile.accent }}>
          <div className="tracker-card-top"><div className="tracker-icon"><Icon size={22}/></div>{selected && <span className="tracker-active"><Check size={13}/> Active</span>}</div>
          <h3>{profile.label}</h3><p>{profile.description}</p>
          <ul>{profile.highlights.map(item => <li key={item}><Check size={14}/>{item}</li>)}</ul>
          <div className="tracker-card-footer"><span>{profile.categories.length} suggested categories</span><button className={selected ? 'selected-button' : 'text-link'} onClick={() => !selected && setWorkspaceType(profile.key)}>{selected ? 'Currently selected' : 'Use this tracker'} {!selected && <ArrowRight size={15}/>}</button></div>
        </article>;
      })}
    </section>

    <section className="tracker-tip panel"><div className="tracker-tip-icon"><Lightbulb size={19}/></div><div><p className="eyebrow">A useful starting point</p><h3>{active.tip}</h3><span>Your transactions, budgets, and reports stay available when you switch between modes.</span></div><Link className="text-link" to="/budgets">Review budgets <ArrowRight size={15}/></Link></section>
  </div>;
}
