import React from 'react';

const Tool = ({tool}) => {
    return (
        <div class="card card-side bg-base-100 shadow-xl">
  <figure><img src={tool.image} alt="Movie" /></figure>
  <div class="card-body">
    <h2 class="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary uppercase">purchase</button>
    </div>
  </div>
</div>
    );
};

export default Tool;