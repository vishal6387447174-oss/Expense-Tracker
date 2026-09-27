import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ open, onClose, title, children, wide = false }) {
  useEffect(() => { const close = (e) => e.key === 'Escape' && onClose?.(); window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [onClose]);
  if (!open) return null;
  return <div className="modal-backdrop" onMouseDown={onClose}><section className={`modal ${wide ? 'modal-wide' : ''}`} onMouseDown={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={title}>
    <div className="modal-header"><h2>{title}</h2><button className="icon-button" onClick={onClose} aria-label="Close dialog"><X size={20} /></button></div>{children}
  </section></div>;
}
