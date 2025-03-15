// app/page.tsx
'use client';
import { useState } from 'react';

export default function Confessions() {
  const [confession, setConfession] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/confess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ confession }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        alert(data.message); // Show success message
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
        alert(errorData.message); // Show error message
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
      alert('Error: Something went wrong.'); // Show network error message
    }
  };

  return (
    <div>
      <h1>Confession Page</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={confession}
          onChange={(e) => setConfession(e.target.value)}
          placeholder="Enter your confession: "
          rows={4}
          cols={50}
        ></textarea>
        <br />
        <button type="submit">Submit Confession</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
