export default function ChartCard({ title, subtitle, action, children, className = '' }) {
  return <section className={`panel chart-card ${className}`}><div className="panel-header"><div><h3>{title}</h3>{subtitle && <p>{subtitle}</p>}</div>{action}</div>{children}</section>;
}
