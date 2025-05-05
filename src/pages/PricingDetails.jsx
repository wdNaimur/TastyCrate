import { useLoaderData, useParams } from "react-router";
import ErrorPage from "../layouts/ErrorPage";
import Button from "../UI/Button";
import { TiTick } from "react-icons/ti";

const CrateDetails = () => {
  const crateData = useLoaderData();
  const { slug } = useParams();
  const crate = crateData.find((c) => c.slug === slug);

  if (!crate)
    return (
      <div>
        <ErrorPage />
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6 text-primary">
        <img
          src={crate.image}
          alt={crate.name}
          className="w-full md:w-1/2   object-cover"
        />
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
                  <span className="text-secondary ">
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
        </div>
      </div>

      <div className="mt-10 text-center">
        <Button>Subscribe Now</Button>
      </div>
    </div>
  );
};

export default CrateDetails;
