
import React from 'react';

const SummaryCard = ({children,title,count,bgColor}) => {
    return (
        <div className={`card ${bgColor} text-primary-content`}>
            <div className="card-body">
                {children}
                <p className="text-center text-4xl">{count}{!(title.includes('Countries'))&& "+"}</p>
                <p className="text-center text-xl text-primary font-bold">{title}</p>
            </div>
        </div>
    );
};

export default SummaryCard;