import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { seedState } from '../data/mockData';

const AppContext = createContext(null);
const KEY = 'spendwise-ai-state';
const clone = (value) => JSON.parse(JSON.stringify(value));

export function AppProvider({ children }) {
  const [state, setState] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) || clone(seedState); } catch { return clone(seedState); }
  });
  const [toast, setToast] = useState(null);
  const [quickAddOpen, setQuickAddOpen] = useState(false);

  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(state)); }, [state]);
  useEffect(() => { document.documentElement.dataset.theme = state.settings.theme; }, [state.settings.theme]);
  useEffect(() => { if (!toast) return; const timer = setTimeout(() => setToast(null), 3200); return () => clearTimeout(timer); }, [toast]);

  const notify = (message, type = 'success') => setToast(message ? { message, type } : null);
  const addTransaction = (form) => {
    const item = { id: crypto.randomUUID(), date: form.date || new Date().toISOString().slice(0, 10), description: form.description || form.merchant || 'New transaction', merchant: form.merchant || 'Personal expense', category: form.category || 'Other', type: form.type || 'expense', payment: form.payment || 'UPI', amount: Number(form.amount), status: 'Completed', icon: 'ReceiptText', ...form };
    setState(s => ({ ...s, transactions: [item, ...s.transactions] }));
    notify(item.type === 'income' ? 'Income added to your balance' : 'Expense added and dashboard updated');
    return item;
  };
  const deleteTransaction = (id) => { setState(s => ({ ...s, transactions: s.transactions.filter(t => t.id !== id) })); notify('Transaction deleted', 'neutral'); };
  const duplicateTransaction = (transaction) => { addTransaction({ ...transaction, id: undefined, description: `${transaction.description} (copy)` }); };
  const updateSettings = (patch) => { setState(s => ({ ...s, settings: { ...s.settings, ...patch } })); notify('Settings saved'); };
  const setWorkspaceType = (workspaceType) => { setState(s => ({ ...s, settings: { ...s.settings, workspaceType } })); notify(`${workspaceType === 'business' ? 'Business' : workspaceType === 'student' ? 'Student' : 'Individual'} tracker selected`); };
  const addBudget = (budget) => { setState(s => ({ ...s, budgets: [{ ...budget, id: crypto.randomUUID(), amount: Number(budget.amount), spent: 0, days: 30, color: '#8b5cf6' }, ...s.budgets] })); notify('Budget created'); };
  const addGoal = (goal) => { setState(s => ({ ...s, goals: [{ ...goal, id: crypto.randomUUID(), target: Number(goal.target), saved: Number(goal.saved || 0), monthly: Number(goal.monthly || 0), emoji: '✦', color: '#8b5cf6' }, ...s.goals] })); notify('Savings goal created'); };
  const contributeGoal = (id, amount) => { setState(s => ({ ...s, goals: s.goals.map(g => g.id === id ? { ...g, saved: Math.min(g.target, g.saved + amount) } : g) })); notify('Goal contribution added'); };
  const addSubscription = (subscription) => { setState(s => ({ ...s, subscriptions: [{ ...subscription, id: crypto.randomUUID(), amount: Number(subscription.amount), icon: subscription.name?.slice(0, 1).toUpperCase(), color: '#8b5cf6', status: 'Active' }, ...s.subscriptions] })); notify('Subscription added'); };
  const markRead = () => setState(s => ({ ...s, notifications: s.notifications.map(n => ({ ...n, unread: false })) }));
  const resetDemo = () => { setState(clone(seedState)); notify('Demo data restored'); };

  const metrics = useMemo(() => {
    const income = state.transactions.filter(t => t.type === 'income').reduce((a, t) => a + Number(t.amount), 0);
    const expense = state.transactions.filter(t => t.type === 'expense').reduce((a, t) => a + Number(t.amount), 0);
    const totalBudget = state.budgets.reduce((a, b) => a + b.amount, 0);
    const budgetUsed = state.budgets.reduce((a, b) => a + b.spent, 0);
    return { income, expense, balance: income - expense + 20890, savings: income - expense, savingsRate: income ? Math.round(((income - expense) / income) * 100) : 0, totalBudget, budgetUsed, budgetRemaining: totalBudget - budgetUsed };
  }, [state.transactions, state.budgets]);

  const workspaceType = state.settings.workspaceType || 'individual';
  const value = { state, metrics, workspaceType, toast, quickAddOpen, setQuickAddOpen, notify, addTransaction, deleteTransaction, duplicateTransaction, updateSettings, setWorkspaceType, addBudget, addGoal, contributeGoal, addSubscription, markRead, resetDemo };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export const useApp = () => useContext(AppContext);
