import React, { useState } from "react";
import SingleSubscription from "./SingleSubscription";
import Button from "../UI/Button";
import { Link } from "react-router";

const Subscription = () => {
  const [storedSubscriptions, setStoredSubscriptions] = useState(
    JSON.parse(localStorage.getItem("userSubscriptions")) || []
  );

  const handleDelete = (slug) => {
    const updatedSubscriptions = storedSubscriptions.filter(
      (sub) => sub.slug !== slug
    );

    localStorage.setItem(
      "userSubscriptions",
      JSON.stringify(updatedSubscriptions)
    );

    setStoredSubscriptions(updatedSubscriptions);
  };

  if (storedSubscriptions.length > 0) {
    return (
      <div>
        {storedSubscriptions.map((singleSubscription) => (
          <SingleSubscription
            key={singleSubscription.slug}
            singleSubscription={singleSubscription}
            onDelete={handleDelete}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="card w-full shadow-sm container  px-4 mx-auto bg-primary/10 relative">
        <div className="card-body items-center text-center">
          <h2 className="text-4xl font-bold lg:text-5xl text-primary mb-4">
            No Subscription found
          </h2>
          <Link to="/">
            <Button>View All Crate</Button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Subscription;
