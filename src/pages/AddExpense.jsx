import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, getExpenseProfile } from '../data/mockData';
import { useApp } from '../context/AppContext';

export default function AddExpense({ income = false }) {
  const { addTransaction, workspaceType } = useApp();
  const profile = getExpenseProfile(workspaceType);
  const expenseCategories = profile.categories || categories;
  const navigate = useNavigate();
  const [form, setForm] = useState({ amount: '', merchant: '', category: income ? 'Income' : expenseCategories[0], payment: 'UPI', date: new Date().toISOString().slice(0, 10), notes: '', type: income ? 'income' : 'expense' });
  const change = e => setForm(x => ({ ...x, [e.target.name]: e.target.value }));
  const submit = e => { e.preventDefault(); addTransaction(form); navigate('/transactions'); };

  return <div className="form-page"><div className="page-title"><div><p className="eyebrow">{income ? 'Income journal' : `${profile.shortLabel} expense journal`}</p><h1>{income ? 'Add income' : 'Add an expense'}</h1><p>{income ? 'Capture a new deposit and keep your cash flow up to date.' : `Capture a ${profile.focus.toLowerCase()} expense and keep your tracker useful.`}</p></div></div>
    <form className="panel full-form" onSubmit={submit}><div className="form-section"><h3>The essentials</h3><div className="form-grid three"><label className="wide amount-field"><span>Amount</span><div>₹<input name="amount" type="number" min="1" required autoFocus placeholder="0" value={form.amount} onChange={change}/></div></label><label><span>{income ? 'Source' : 'Merchant / payee'}</span><input name="merchant" required placeholder={income ? 'e.g. Salary, freelance work' : 'e.g. Café, vendor, or store'} value={form.merchant} onChange={change}/></label><label><span>{income ? 'Income type' : 'Category'}</span><select name="category" value={form.category} onChange={change}>{(income ? ['Salary', 'Freelance', 'Business', 'Investment', 'Gift', 'Other'] : expenseCategories).map(x => <option key={x}>{x}</option>)}</select></label><label><span>Date</span><input type="date" name="date" value={form.date} onChange={change}/></label><label><span>Payment method</span><select name="payment" value={form.payment} onChange={change}>{['UPI', 'Cash', 'Credit card', 'Debit card', 'Bank transfer', 'Wallet'].map(x => <option key={x}>{x}</option>)}</select></label><label><span>Notes <small>Optional</small></span><input name="notes" placeholder="Add a note" value={form.notes} onChange={change}/></label></div></div>{!income && <div className="ai-suggestion"><i><Sparkles size={19}/></i><div><b>{profile.shortLabel} smart categorisation</b><p>Suggested categories are tuned for your active {profile.shortLabel.toLowerCase()} tracker.</p></div><span>On</span></div>}<div className="form-footer"><button type="button" className="secondary-button" onClick={() => navigate(-1)}>Cancel</button><button className="primary-button">Save {income ? 'income' : 'expense'}</button></div></form>
  </div>;
}
