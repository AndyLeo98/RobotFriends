// The first line of code import allow the script to read JSX
import React from "react";
// Deconstruct the props (properties) so you describe your template easier
const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
