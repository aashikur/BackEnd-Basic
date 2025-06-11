import React from 'react';
import { Link, useLoaderData } from 'react-router'; // Adjust if using react-router

const ViewCoffee = () => {
    const coffee = useLoaderData();
    const { details, name, photo, quantity, price, supplier, taste } = coffee;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                    src={photo} 
                    alt={name} 
                    className="w-60"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-2 text-gray-800">{name}</h1>
                    <p className="text-gray-600 mb-4">{details}</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h2 className="font-semibold text-gray-700">Price</h2>
                            <p className="text-gray-900">${price}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h2 className="font-semibold text-gray-700">Quantity</h2>
                            <p className="text-gray-900">{quantity}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h2 className="font-semibold text-gray-700">Supplier</h2>
                            <p className="text-gray-900">{supplier}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h2 className="font-semibold text-gray-700">Taste</h2>
                            <p className="text-gray-900">{taste}</p>
                        </div>
                    </div>

                    <button 
                        className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full transition duration-300"
                    >
                        {/* Order Now */}
                        <Link to={`/`}>Go Back</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;
