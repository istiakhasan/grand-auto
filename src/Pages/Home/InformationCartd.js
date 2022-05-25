import React from "react";

const InformationCartd = ({children,title,number,mail}) => {
  return (
    <div class="card text-center border border-yellow-600 rounded-none shadow-xl">
      <div class="card-body">
          {children}
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p>{number}</p>
        <p>{mail}</p>
      
      </div>
    </div>
  );
};

export default InformationCartd;
