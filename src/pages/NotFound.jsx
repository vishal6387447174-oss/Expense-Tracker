import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function NotFound(){return <div className="not-found"><p className="eyebrow">404</p><h1>That page slipped away.</h1><p>Let’s get you back to your money workspace.</p><Link className="primary-button" to="/dashboard"><ArrowLeft size={17}/> Back to dashboard</Link></div>}
