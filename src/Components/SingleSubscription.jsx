import React from "react";

const SingleSubscription = ({ singleSubscription, onDelete }) => {
  const handleDelete = () => {
    onDelete(singleSubscription.slug);
  };

  return (
    <div className="container mx-auto px-4">
      <table className="table rounded-2xl">
        {/* head */}
        <thead className="text-center">
          <tr>
            <th className="text-left">Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="text-center">
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={singleSubscription.titleImage}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{singleSubscription.name}</div>
                </div>
              </div>
            </td>

            <td>{singleSubscription.price}</td>
            <th>
              <button onClick={handleDelete} className="btn btn-primary btn-xs">
                Delete
              </button>
            </th>
          </tr>
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default SingleSubscription;
