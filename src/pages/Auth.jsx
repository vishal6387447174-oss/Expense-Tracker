import { ArrowRight, Check, ChevronLeft, Eye, EyeOff, LockKeyhole, Mail, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useApp } from '../context/AppContext';

function AuthFrame({ children, caption }) {
  return <div className="auth-page"><div className="auth-aside"><Link to="/" className="brand"><i><Sparkles size={21}/></i><b>SpendWise<span>AI</span></b></Link><div><p className="eyebrow">A calmer money life</p><h1>Spend with intention.<br/><em>Live with ease.</em></h1><p>One personal space for the numbers, plans, and tiny wins that add up.</p></div><div className="auth-quote"><span>“</span><p>It’s the first budgeting tool that has ever made me want to check my finances.</p><b>— Aditi S., early member</b></div></div><main className="auth-form-wrap"><Link className="back-link" to="/"><ChevronLeft size={17}/> Back to home</Link>{children}<p className="auth-caption">{caption}</p></main></div>;
}

export function Login(){
  const navigate=useNavigate(); const [show,setShow]=useState(false); const [email,setEmail]=useState('vishal@spendwise.app'); const {notify}=useApp();
  const submit=e=>{e.preventDefault();localStorage.setItem('spendwise-auth','true');notify('Welcome back, Vishal!');navigate('/dashboard')};
  return <AuthFrame caption={<>New to SpendWise? <Link to="/signup">Create an account</Link></>}><div className="auth-heading"><p className="eyebrow">Welcome back</p><h2>Good to see you again.</h2><p>Enter your details to get back to your money.</p></div><form className="auth-form" onSubmit={submit}><label>Email address<input type="email" required value={email} onChange={e=>setEmail(e.target.value)}/></label><label>Password<div className="password-input"><input type={show?'text':'password'} required defaultValue="spendwise"/><button type="button" onClick={()=>setShow(!show)}>{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></label><div className="form-split"><label className="check-label"><input type="checkbox" defaultChecked/> <span>Remember me</span></label><Link to="/forgot-password">Forgot password?</Link></div><button className="primary-button full" type="submit">Log in <ArrowRight size={17}/></button></form><div className="divider"><span>or continue with</span></div><button className="google-button" onClick={submit}><b>G</b> Continue with Google</button></AuthFrame>;
}

export function Signup(){
  const navigate=useNavigate(); const {notify}=useApp(); const [show,setShow]=useState(false);
  const submit=e=>{e.preventDefault();localStorage.setItem('spendwise-auth','true');notify('Account created — let’s personalise your workspace');navigate('/onboarding')};
  return <AuthFrame caption={<>Already have an account? <Link to="/login">Log in</Link></>}><div className="auth-heading"><p className="eyebrow">Start for free</p><h2>Your money, in focus.</h2><p>Set up your personal finance workspace in moments.</p></div><form className="auth-form" onSubmit={submit}><label>Full name<input required placeholder="Your name" defaultValue="Vishal Maurya"/></label><label>Email address<input type="email" required placeholder="you@example.com"/></label><label>Password<div className="password-input"><input type={show?'text':'password'} required minLength="6" placeholder="At least 6 characters"/><button type="button" onClick={()=>setShow(!show)}>{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div><small className="password-strength"><i/><i/><i/> Strong password</small></label><label className="check-label terms"><input type="checkbox" required/> <span>I agree to the Terms of Service and Privacy Policy.</span></label><button className="primary-button full" type="submit">Create my account <ArrowRight size={17}/></button></form></AuthFrame>;
}

export function ForgotPassword(){
  const [sent,setSent]=useState(false);
  return <AuthFrame caption={<>Remembered it? <Link to="/login">Back to login</Link></>}>{sent?<div className="success-state"><i><Check size={28}/></i><h2>Check your inbox</h2><p>If an account exists for that email, you’ll receive a reset link shortly.</p></div>:<><div className="auth-heading"><p className="eyebrow">Reset password</p><h2>Let’s get you back in.</h2><p>Enter your email and we’ll send a reset link.</p></div><form className="auth-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Email address<div className="input-with-icon"><Mail size={18}/><input type="email" required placeholder="you@example.com"/></div></label><button className="primary-button full">Send reset link <ArrowRight size={17}/></button></form></>}</AuthFrame>;
}

export function Onboarding(){
  const navigate=useNavigate(); const [step,setStep]=useState(1); const {notify}=useApp(); const labels=['Your monthly income','Monthly essentials','Your main goal'];
  const advance=()=>{if(step<3)setStep(step+1);else{notify('Your SpendWise workspace is ready');navigate('/dashboard')}};
  return <AuthFrame caption={<><LockKeyhole size={14}/> Your details stay private</>}><div className="onboarding-progress">{[1,2,3].map(n=><i key={n} className={n<=step?'active':''}/>)}</div><div className="auth-heading"><p className="eyebrow">A quick setup · {step}/3</p><h2>{labels[step-1]}</h2><p>{step===1?'This helps make your insights more useful. You can update it anytime.':step===2?'We’ll use this to suggest a comfortable budget.':'What would feel good to make progress on?'}</p></div><div className="onboarding-options">{step===3?['Build an emergency fund','Save for a dream trip','Control my spending','Buy something special'].map((x,i)=><button key={x} className={i===0?'selected':''}><span>{['🛟','🌊','◌','✦'][i]}</span>{x}<Check size={16}/></button>):<label className="onboarding-amount">₹<input type="number" defaultValue={step===1?52000:25000}/><small>per month</small></label>}</div><button className="primary-button full" onClick={advance}>{step<3?'Continue':'Go to my dashboard'} <ArrowRight size={17}/></button></AuthFrame>;
}
