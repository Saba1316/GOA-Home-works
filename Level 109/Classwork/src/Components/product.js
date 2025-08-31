import React from 'react';

const Product = ({ title, price, description, image, rating }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Price:</strong> ₾{price}</p>
      <p><strong>Rating:</strong> {rating.rate} ({rating.count} Mark)</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    width: '300px'
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '12px'
  }
};

export default Product;
