import React from "react";

const MySkill = () => {
  return (
    <div>
      <p>React</p>
      <progress className="progress progress-primary lg:w-6/12" value="100" max="100"></progress> <br />
      <p>JavaScript</p>
      <progress className="progress progress-primary lg:w-6/12" value="100" max="100"></progress><br />
      <p>NodeJs</p>
      <progress className="progress progress-primary lg:w-6/12" value="60" max="100"></progress><br />
      <p>MongoDb</p>
      <progress className="progress progress-primary lg:w-6/12" value="70" max="100"></progress><br />
      <p>Html/CSS</p>
      <progress className="progress progress-primary lg:w-6/12" value="100" max="100"></progress>
      <p>Bootstrap</p>
      <progress className="progress progress-primary lg:w-6/12" value="100" max="100"></progress>
      <p>Tailwind</p>
      <progress className="progress progress-primary lg:w-6/12" value="100" max="100"></progress>
      <p>Material ui</p>
      <progress className="progress progress-primary lg:w-6/12" value="100" max="100"></progress>
      <p>Php</p>
      <progress className="progress progress-primary lg:w-6/12" value="60" max="100"></progress>
      <p>MySql</p>
      <progress className="progress progress-primary lg:w-6/12" value="70" max="100"></progress>
    </div>
  );
};

export default MySkill;
