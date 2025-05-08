import React from "react";

const SingleChefCard = ({ chef }) => {
  return (
    <div className="card bg-base-100 border-secondary/10 border flex h-full container mx-auto justify-center  w-full mb-10">
      <figure className="w-full">
        <img src={chef.chefImage} alt={chef.chefName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chef.chefName}</h2>
        <div className="badge badge-secondary">{chef.crate}</div>
        <p>{chef.description}</p>
      </div>
    </div>
  );
};

export default SingleChefCard;
