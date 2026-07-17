import React, { useState, useEffect } from 'react';
import { Shield, Coins, X } from 'lucide-react';

interface OnboardingFlowProps {
  onConnectWallet: () => void;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onConnectWallet }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('veilsplit_onboarded');
    if (!hasVisited) {
      setIsOpen(true);
    }
  }, []);

  const handleComplete = () => {
    localStorage.setItem('veilsplit_onboarded', 'true');
    setIsOpen(false);
  };

  const handleConnectAndComplete = () => {
    onConnectWallet();
    handleComplete();
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '1rem'
    }}>
      <div className="card" style={{ maxWidth: '500px', width: '100%', position: 'relative' }}>
        <button 
          onClick={handleComplete}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', animation: 'slideIn 0.3s ease-out' }}>
          <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', color: 'var(--primary)', marginBottom: '1.5rem' }}>
            <Shield size={48} />
          </div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Welcome to VeilSplit</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
            The first privacy-preserving recurring bill settlement protocol on Stellar. Split bills with roommates or freelancers without linking repeated payments on-chain.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem', textAlign: 'left', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', padding: '0.5rem', borderRadius: '8px' }}><Coins size={20} /></div>
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>1. Create a Bill</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Enter amounts & participants. We generate a secure hashed commitment.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)', padding: '0.5rem', borderRadius: '8px' }}><Shield size={20} /></div>
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>2. Stealth Addresses</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Each user gets a one-time address to protect spending habits.</p>
              </div>
            </div>
          </div>

          <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', fontWeight: 600 }} onClick={handleConnectAndComplete}>
            Try VeilSplit - Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};
