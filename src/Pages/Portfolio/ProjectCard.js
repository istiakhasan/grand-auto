import React from 'react';

const ProjectCard = ({img,site}) => {
    return (
        <div class="card w-96 glass">
        <figure>
          <img
            src={img}
            alt="car!"
          />
        </figure>
        <div class="card-body">
         
          <div class="card-actions justify-end">
            <a target="_blank"  href={site} class="btn btn-primary font-normal">Live site Link</a>
          </div>
        </div>
      </div>
    );
};

export default ProjectCard;