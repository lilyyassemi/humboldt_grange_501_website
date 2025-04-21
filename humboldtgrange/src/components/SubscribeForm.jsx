import { useState } from 'react';
import supabase from '../SupabaseClient';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase
      .from('subscribers')
      .insert([{ email }]);

    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setEmail('');
      setStatus('success');
    }
  };

  return (
    <form onSubmit={handleSubmit} 
          style={{ width: '80%', backgroundColor: '#e6d493', 
                   display: 'flex', justifyContent: 'center', 
                   alignItems: 'center',flexDirection: 'column',
                   borderRadius: '5px', padding: '20px', marginTop: '3rem'}}>
      <h2>Join Our Mailing List</h2>
      <p className="p2">Sign up with your email address to receive news and updates.</p>
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '8px', width: '60%', marginBottom: '15px' }}
      />
      <button type="submit" disabled={status === 'loading'} 
        style={{ backgroundColor: '#2e7ba5', color: '#fff', width: '25%',
                 padding: '20px 20px', borderRadius: '5px', border: 'none', 
                 cursor: 'pointer' }}
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'success' && <p style={{ color: '#333' }}>You're subscribed!</p>}
      {status === 'error' && <p style={{ color: '#333' }}>Something went wrong.</p>}
    </form>
  );
}
