import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({tool}) => {
    return (
        <div class="card card-side bg-base-100 shadow-xl">
  <figure><img src={tool.image} alt="Movie" /></figure>
  <div class="card-body">
    <h2 class="card-title">{tool.name}</h2>
  
    <p>{tool.description.slice(0,50)}...</p>
    <p>Qty:{tool.quantity}</p>
    <p>Qty:{tool.available_quantity}</p>
    <p>${tool.price}</p>
    <div class="card-actions justify-end">
      <Link to={`/purchase/${tool._id}`} class="btn btn-sm btn-primary uppercase">purchase</Link>
    </div>
  </div>
</div>
    );
};

export default Tool;