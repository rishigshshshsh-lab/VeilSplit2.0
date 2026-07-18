import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 9000 }}>
      {isOpen ? (
        <div className="card" style={{ width: '320px', padding: '1.5rem', animation: 'slideIn 0.2s ease-out' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', margin: 0 }}>Feedback</h3>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>
          
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              We'd love to hear your thoughts on VeilSplit! Help us improve the product by filling out a quick 2-minute survey.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfePIYeNIKui0rGM7Mll3ms2cxkG6PSKh0W4Bp9z7i-99azLQ/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
              onClick={() => setIsOpen(false)}
            >
              <Send size={16} /> Open Feedback Form
            </a>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="btn btn-primary"
          style={{ borderRadius: '50px', padding: '0.75rem 1.25rem', boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)' }}
        >
          <MessageSquare size={18} />
          <span>Feedback</span>
        </button>
      )}
    </div>
  );
};
