import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({tool}) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src={tool.image} alt="Movie" /></figure>
          <div className="card-body tools-card">
            <div className='h-50'>
              <h2 className="card-title">{tool.name}</h2>
              <p className='text-ellipsis'>{tool.description.slice(0,50)}...</p>
            </div>
            <p className='mt-3'><span className='font-semibold'>Quantity:</span>{tool.available_quantity}</p>
            <p className='text-2xl mb-2 h-auto'>${tool.price}</p>
            <div className="card-actions justify-end">
              <Link to={`/purchase/${tool._id}`} className="btn btn-sm btn-primary uppercase">purchase</Link>
            </div>
          </div>
        </div>
    );
};

export default Tool;