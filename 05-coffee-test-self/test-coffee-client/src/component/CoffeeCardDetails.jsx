import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { BiArrowBack } from 'react-icons/bi';

const CoffeeCardDetails = () => {
  const coffee = useLoaderData();

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="bg-base-100 shadow-xl rounded-2xl p-6 md:p-10 w-full max-w-xl relative">
        {/* Coffee Image */}
        <div className="flex justify-center mb-6">
          <img
            src={coffee.photo}
            alt={coffee.name}
            className="w-40 h-40 object-cover rounded-xl border border-base-300 shadow-md"
          />
        </div>

        {/* Coffee Details */}
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold text-base-content">{coffee.name}</h2>
          <p className="text-sm text-base-content/70">
            <span className="font-semibold">Coffee ID:</span> #{coffee._id?.slice(0, 8)}
          </p>
          <p className="text-base-content">
            <span className="font-semibold">Chef:</span> {coffee.chef}
          </p>
          <p className="text-base-content">
            <span className="font-semibold">Supplier:</span> {coffee.supplier}
          </p>
          <p className="text-base-content">
            <span className="font-semibold">Taste:</span> {coffee.taste}
          </p>
          <p className="text-base-content">
            <span className="font-semibold">Category:</span> {coffee.category}
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="mt-6 flex justify-center">
          <Link
            to="/"
            className="btn btn-outline btn-primary gap-2 group"
          >
            <BiArrowBack className="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCardDetails;
