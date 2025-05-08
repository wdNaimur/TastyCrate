import { FaStar } from "react-icons/fa";

const CustomerReview = ({ rating = 4.7, reviewsCount = 40 }) => {
  const fullStars = Math.floor(rating);
  const stars = Array(5)
    .fill(null)
    .map((_, i) => (
      <FaStar
        key={i}
        className={`w-5 h-5 ${
          i < fullStars
            ? "text-yellow-500 shadow-2xl"
            : "text-gray-300 shadow-2xl"
        }`}
      />
    ));

  return (
    <div className="bg-base-100/50 rounded-box   w-fit ">
      <div className="flex items-center justify-center gap-1 mb-1">
        {stars}
        <span className="text-primary font-medium text-sm ml-2">{rating} </span>
      </div>
      <p className="text-base-primay font-medium  text-sm">
        {reviewsCount} customer ratings
      </p>
    </div>
  );
};

export default CustomerReview;
