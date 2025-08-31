import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import React, { useState, useEffect } from 'react';
// import QuoteBox from './QuoteBox';

function App() {
  const [quote, setQuote] = useState({ content: '', author: '' });

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote({ content: data.content, author: data.author });
    } catch (error) {
      console.error('Failed to fetch quote:', error);
      setQuote({ content: 'Something went wrong.', author: 'Error' });
    }
  };

  useEffect(() => {
    fetchQuote(); // Fetch quote on load
  }, []);

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <QuoteBox quote={quote} fetchQuote={fetchQuote} />
    </div>
  );
}

export default App;
