import React, { useState } from "react";

export default function MovieCard(props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.shortDescription}</p>
    </div>
  );
}
