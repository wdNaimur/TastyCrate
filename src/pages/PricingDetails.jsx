import { useLoaderData, useParams } from "react-router";
import ErrorPage from "../layouts/ErrorPage";
import Button from "../UI/Button";
import { TiTick } from "react-icons/ti";
import StarRating from "../UI/StarRating";
import { useState } from "react";
import { FaComment, FaStar, FaThinkPeaks } from "react-icons/fa";

const PricingDetails = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const crateData = useLoaderData();
  const { slug } = useParams();
  const crate = crateData.find((c) => c.slug === slug);

  if (!crate) return <ErrorPage />;

  const handleRatingSelect = (value) => {
    setSelectedRating(value);
  };

  const handleReview = (e) => {
    e.preventDefault();
    const userReview = e.target.review.value;
    setReviewText(userReview);
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6 text-primary">
        <div className="w-full md:w-1/2">
          <img
            src={crate.image}
            alt={crate.name}
            className="w-full object-cover"
          />
        </div>

        <div className="flex-1">
          <span className="inline-block px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full font-semibold mb-2 uppercase">
            {crate.tag}
          </span>
          <h1 className="text-primary text-3xl font-bold mb-2">{crate.name}</h1>
          <p className="text-primary mb-4">{crate.description}</p>
          <div className="text-2xl font-semibold text-secondary">
            {crate.price}
            <span className="text-sm text-primary">{crate.frequency}</span>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">What’s Included</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {crate.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-secondary">
                    <TiTick size={20} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">More Details</h2>
            <ul className="list-disc list-inside text-primary space-y-1">
              {crate.details.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">
              {submitted ? " What You Said" : "Let us know your thoughts"}
            </h2>

            {submitted ? (
              <div className="p-4 bg-primary/10 rounded-md">
                <p className="mb-2 flex items-center gap-2">
                  <FaStar />
                  <span className="font-semibold">Your Rating :</span>{" "}
                  {selectedRating ? selectedRating : 0} stars
                </p>
                <p className="mb-2 flex items-center gap-2">
                  <FaComment />
                  <span className="font-semibold">Your Review :</span>{" "}
                  {reviewText} stars
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleReview}
                className="p-4 bg-primary/5 rounded-md"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">Rate our service:</h3>
                  <StarRating onRatingSelect={handleRatingSelect} />
                </div>

                <div className="mb-4">
                  <label htmlFor="review">
                    <h3 className="text-lg font-bold mb-2">Your Review</h3>
                  </label>
                  <textarea
                    name="review"
                    placeholder="Your Thoughts"
                    required
                    className="w-full text-primary bg-primary/10 px-5 py-3 rounded-md resize-none"
                  />
                </div>
                <button type="submit">
                  <Button>Submit Review</Button>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Button>Subscribe Now</Button>
      </div>
    </div>
  );
};

export default PricingDetails;
