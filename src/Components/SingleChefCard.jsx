import React from "react";

const SingleChefCard = ({ chef }) => {
  const { chefName, crate, description, chefImage } = chef;
  return (
    <div className="card bg-base-100 border-secondary/10 border flex h-full container mx-auto justify-center  w-full mb-10">
      <figure className="w-full">
        <img src={chefImage} alt={chefName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <div className="badge badge-secondary">{crate}</div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleChefCard;
