import { Copy, MoreHorizontal, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import CategoryIcon from './CategoryIcon';

const money = (n) => `₹${Number(n).toLocaleString('en-IN')}`;
export default function TransactionTable({ limit, showControls = false }) {
  const { state, deleteTransaction, duplicateTransaction } = useApp();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const filtered = state.transactions.filter(t => (category === 'All' || t.category === category) && `${t.merchant} ${t.description}`.toLowerCase().includes(query.toLowerCase())).slice(0, limit || undefined);
  const categories = ['All', ...new Set(state.transactions.map(t => t.category))];
  return <>
    {showControls && <div className="table-tools"><label className="search-field"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search transactions" /></label><select value={category} onChange={e => setCategory(e.target.value)}>{categories.map(c => <option key={c}>{c}</option>)}</select></div>}
    <div className="transaction-table"><div className="transaction-heading"><span>Transaction</span><span>Category</span><span>Date</span><span>Payment</span><span>Amount</span><span /></div>{filtered.map(t => <div className="transaction-row" key={t.id}>
      <div className="merchant"><CategoryIcon category={t.category} icon={t.icon}/><div><b>{t.merchant}</b><small>{t.description}</small></div></div><span className="category-label">{t.category}</span><span>{new Date(`${t.date}T12:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span><span className="muted">{t.payment}</span><strong className={t.type === 'income' ? 'income' : 'expense'}>{t.type === 'income' ? '+' : '-'}{money(t.amount)}</strong><div className="row-actions"><button onClick={() => duplicateTransaction(t)} title="Duplicate transaction"><Copy size={15}/></button><button onClick={() => deleteTransaction(t.id)} title="Delete transaction"><Trash2 size={15}/></button></div>
    </div>)}</div>
  </>;
}
