export const seedState = {
  user: { name: 'Vishal Maurya', email: 'vishal@spendwise.app', currency: 'INR', monthlyIncome: 52000, country: 'India', streak: 18 },
  settings: { theme: 'dark', aiInsights: true, emailReports: true, usageTracking: false, currency: 'INR', workspaceType: 'individual' },
  transactions: [
    { id: 't1', date: '2026-09-21', description: 'Monthly salary', merchant: 'Acme Labs', category: 'Income', type: 'income', payment: 'Bank transfer', amount: 52000, status: 'Completed', icon: 'Landmark' },
    { id: 't2', date: '2026-09-21', description: 'Dinner with friends', merchant: 'Nori House', category: 'Food', type: 'expense', payment: 'UPI', amount: 840, status: 'Completed', icon: 'Utensils' },
    { id: 't3', date: '2026-09-20', description: 'Metro recharge', merchant: 'Delhi Metro', category: 'Transport', type: 'expense', payment: 'UPI', amount: 500, status: 'Completed', icon: 'Train' },
    { id: 't4', date: '2026-09-19', description: 'Cloud storage', merchant: 'Google One', category: 'Subscription', type: 'expense', payment: 'Credit card', amount: 130, status: 'Completed', icon: 'Cloud' },
    { id: 't5', date: '2026-09-18', description: 'Desk lamp', merchant: 'Amazon', category: 'Shopping', type: 'expense', payment: 'Credit card', amount: 1840, status: 'Completed', icon: 'ShoppingBag' },
    { id: 't6', date: '2026-09-17', description: 'Freelance project', merchant: 'Kite Studio', category: 'Income', type: 'income', payment: 'Bank transfer', amount: 7500, status: 'Completed', icon: 'BriefcaseBusiness' },
    { id: 't7', date: '2026-09-16', description: 'September rent', merchant: 'Green Park Homes', category: 'Rent', type: 'expense', payment: 'Bank transfer', amount: 10000, status: 'Completed', icon: 'House' },
    { id: 't8', date: '2026-09-14', description: 'Fuel refill', merchant: 'IndianOil', category: 'Transport', type: 'expense', payment: 'UPI', amount: 2000, status: 'Completed', icon: 'Fuel' },
    { id: 't9', date: '2026-09-12', description: 'Grocery essentials', merchant: 'Nature Basket', category: 'Food', type: 'expense', payment: 'Debit card', amount: 2180, status: 'Completed', icon: 'ShoppingCart' },
    { id: 't10', date: '2026-09-09', description: 'Weekend cinema', merchant: 'PVR Cinemas', category: 'Entertainment', type: 'expense', payment: 'UPI', amount: 680, status: 'Completed', icon: 'Popcorn' },
    { id: 't11', date: '2026-09-07', description: 'Gym membership', merchant: 'Cult.fit', category: 'Health', type: 'expense', payment: 'UPI', amount: 1500, status: 'Completed', icon: 'Dumbbell' },
    { id: 't12', date: '2026-09-05', description: 'Course books', merchant: 'Crossword', category: 'Education', type: 'expense', payment: 'Wallet', amount: 990, status: 'Completed', icon: 'BookOpen' }
  ],
  budgets: [
    { id: 'b1', name: 'Food & dining', category: 'Food', amount: 6000, spent: 3020, period: 'Monthly', days: 8, color: '#8b5cf6' },
    { id: 'b2', name: 'Transport', category: 'Transport', amount: 4000, spent: 2500, period: 'Monthly', days: 8, color: '#14b8a6' },
    { id: 'b3', name: 'Shopping', category: 'Shopping', amount: 5000, spent: 4240, period: 'Monthly', days: 8, color: '#f59e0b' },
    { id: 'b4', name: 'Fun money', category: 'Entertainment', amount: 2500, spent: 680, period: 'Monthly', days: 8, color: '#ec4899' }
  ],
  goals: [
    { id: 'g1', name: 'MacBook Air', saved: 57400, target: 90000, deadline: 'Mar 2027', monthly: 6500, emoji: '💻', color: '#8b5cf6' },
    { id: 'g2', name: 'Goa getaway', saved: 12800, target: 30000, deadline: 'Dec 2026', monthly: 4000, emoji: '🌊', color: '#14b8a6' },
    { id: 'g3', name: 'Emergency fund', saved: 42000, target: 100000, deadline: 'Jun 2027', monthly: 8500, emoji: '🛟', color: '#f59e0b' }
  ],
  subscriptions: [
    { id: 's1', name: 'Netflix', amount: 649, cycle: 'Monthly', date: 'Sep 25', payment: 'Credit card', icon: 'N', color: '#e50914', status: 'Active' },
    { id: 's2', name: 'Spotify', amount: 119, cycle: 'Monthly', date: 'Sep 23', payment: 'UPI', icon: 'S', color: '#1db954', status: 'Active' },
    { id: 's3', name: 'Amazon Prime', amount: 1499, cycle: 'Yearly', date: 'Nov 12', payment: 'Credit card', icon: 'a', color: '#38bdf8', status: 'Active' },
    { id: 's4', name: 'Google One', amount: 130, cycle: 'Monthly', date: 'Oct 19', payment: 'Credit card', icon: 'G', color: '#4285f4', status: 'Active' }
  ],
  notifications: [
    { id: 'n1', type: 'Budget', title: 'Shopping budget is nearly used', text: 'You have used 85% of your Shopping budget.', time: '12m ago', unread: true },
    { id: 'n2', type: 'Subscription', title: 'Spotify renews tomorrow', text: 'Your ₹119 monthly payment is scheduled tomorrow.', time: '2h ago', unread: true },
    { id: 'n3', type: 'Insight', title: 'A smarter weekend is possible', text: 'Your dining spend was 22% higher this weekend.', time: '5h ago', unread: false },
    { id: 'n4', type: 'Goal', title: 'Nice progress on MacBook Air', text: 'You are 64% of the way to your goal.', time: 'Yesterday', unread: false }
  ],
  sharedGroups: [
    { id: 'sh1', name: 'Goa Trip 2026', members: 5, spent: 18400, balance: 450, color: '#f97316' },
    { id: 'sh2', name: 'Flatmates', members: 3, spent: 12650, balance: -300, color: '#8b5cf6' },
    { id: 'sh3', name: 'College Friends', members: 7, spent: 8680, balance: 1200, color: '#14b8a6' }
  ],
  insights: [
    { id: 'i1', kind: 'Spending pattern', title: 'Food delivery is trending up', text: 'You spent 22% more on delivered food than last month.', impact: '₹700 saving opportunity', action: 'View food spending', tone: 'violet' },
    { id: 'i2', kind: 'Forecast', title: 'You may exceed your plan', text: 'At this pace, monthly spending could reach ₹27,200.', impact: '₹2,200 over budget', action: 'Adjust budget', tone: 'orange' },
    { id: 'i3', kind: 'Win', title: 'Transport habits are improving', text: 'Your transport spend is down 14% from last month.', impact: '₹410 saved', action: 'See comparison', tone: 'teal' }
  ]
}

export const categories = ['Food', 'Shopping', 'Transport', 'Entertainment', 'Rent', 'Bills', 'Health', 'Education', 'Travel', 'Subscription', 'Investment', 'Other'];
export const chartColors = ['#8b5cf6', '#14b8a6', '#f59e0b', '#ec4899', '#38bdf8', '#f97316'];

export const expenseProfiles = {
  student: {
    key: 'student', label: 'Student tracker', shortLabel: 'Student', icon: 'GraduationCap',
    accent: '#14b8a6', description: 'Make your allowance, stipend, and shared college spending last longer.',
    focus: 'Allowance & campus life', categories: ['Food', 'Transport', 'Education', 'Entertainment', 'Shopping', 'Other'],
    highlights: ['Track allowance, stipend, and part-time income', 'Split hostel, flatmate, and trip expenses', 'Stay ahead of books, fees, and daily spending'],
    tip: 'Set a weekly limit for food and fun so your allowance lasts through the month.'
  },
  individual: {
    key: 'individual', label: 'Individual tracker', shortLabel: 'Individual', icon: 'UserRound',
    accent: '#8b5cf6', description: 'See your personal cash flow clearly and build healthier everyday money habits.',
    focus: 'Personal money', categories,
    highlights: ['Manage bills, subscriptions, and daily expenses', 'Create budgets for the categories that matter', 'Build savings goals and an emergency fund'],
    tip: 'Your biggest win comes from giving every recurring bill a clear place in your monthly plan.'
  },
  business: {
    key: 'business', label: 'Business tracker', shortLabel: 'Business', icon: 'BriefcaseBusiness',
    accent: '#f59e0b', description: 'Separate business money, monitor operating costs, and understand your real profit.',
    focus: 'Revenue & operations', categories: ['Sales', 'Payroll', 'Office', 'Marketing', 'Travel', 'Software', 'Taxes', 'Other'],
    highlights: ['Record sales, invoices, and business income', 'Track payroll, tools, travel, and operating costs', 'Keep tax-ready records with clean categories'],
    tip: 'Keep business and personal purchases separate to get a more reliable view of your profit.'
  }
};

export const getExpenseProfile = (type) => expenseProfiles[type] || expenseProfiles.individual;
