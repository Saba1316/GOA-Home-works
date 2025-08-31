import React, { useState } from 'react';

function MovieCard({ title, image, description, rating, genre, releaseDate }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '15px', textAlign: 'center' }}>
      <h3>{title}</h3>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
      <p>{description}</p>

      {showMore && (
        <div>
          <p><strong>Rating:</strong> {rating}</p>
          <p><strong>Genre:</strong> {genre}</p>
          <p><strong>Release Date:</strong> {releaseDate}</p>
        </div>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Hide Info' : 'More Info'}
      </button>
    </div>
  );
}

export default MovieCard;
