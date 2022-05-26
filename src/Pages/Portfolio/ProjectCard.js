import React from 'react';

const ProjectCard = ({img,site}) => {
    return (
        <div className="card  glass">
          <figure>
            <img src={img} alt="car!" />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <a target="_blank" href={site} className="btn btn-primary font-normal">Live site Link</a>
            </div>
          </div>
        </div>
    );
};

export default ProjectCard;