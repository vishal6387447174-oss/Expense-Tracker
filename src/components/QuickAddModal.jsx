import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Modal from './Modal';
import { useApp } from '../context/AppContext';
import { getExpenseProfile } from '../data/mockData';

export default function QuickAddModal() {
  const { quickAddOpen, setQuickAddOpen, addTransaction, workspaceType } = useApp();
  const profile = getExpenseProfile(workspaceType);
  const [form, setForm] = useState({ amount: '', category: profile.categories[0], merchant: '', payment: 'UPI', date: new Date().toISOString().slice(0, 10), type: 'expense' });
  useEffect(() => { setForm(f => ({ ...f, category: profile.categories.includes(f.category) ? f.category : profile.categories[0] })); }, [workspaceType]);
  const change = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const save = (e) => { e.preventDefault(); if (!Number(form.amount)) return; addTransaction(form); setQuickAddOpen(false); setForm(f => ({ ...f, amount: '', merchant: '' })); };
  return <Modal open={quickAddOpen} onClose={() => setQuickAddOpen(false)} title="Quick add">
    <form className="form-grid" onSubmit={save}><label className="wide amount-field"><span>Amount</span><div>₹<input autoFocus name="amount" type="number" min="1" placeholder="0" value={form.amount} onChange={change}/></div></label>
      <label><span>Merchant / note</span><input name="merchant" placeholder="e.g. Morning coffee" value={form.merchant} onChange={change}/></label>
      <label><span>Category</span><select name="category" value={form.category} onChange={change}>{profile.categories.map(c => <option key={c}>{c}</option>)}</select></label>
      <label><span>Payment method</span><select name="payment" value={form.payment} onChange={change}>{['UPI','Cash','Credit card','Debit card','Wallet','Bank transfer'].map(x => <option key={x}>{x}</option>)}</select></label>
      <label><span>Date</span><input name="date" type="date" value={form.date} onChange={change}/></label>
      <p className="form-hint wide"><Sparkles size={15}/> Suggested category: <b>{form.merchant?.toLowerCase().includes('uber') ? 'Transport' : form.category}</b></p>
      <button className="primary-button wide" type="submit">Add expense <ArrowRight size={17}/></button>
    </form>
  </Modal>;
}
