import React from 'react';

function QuoteBox({ quote, fetchQuote }) {
  return (
    <div id="quote-box" style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '2px solid #333', borderRadius: '10px' }}>
      <p id="text" style={{ fontSize: '1.5rem' }}>"{quote.content}"</p>
      <p id="author" style={{ fontStyle: 'italic', marginBottom: '20px' }}>— {quote.author}</p>
      <button id="new-quote" onClick={fetchQuote} style={{ padding: '10px 20px', fontSize: '1rem' }}>
        New Quote
      </button>
    </div>
  );
}

export default QuoteBox;