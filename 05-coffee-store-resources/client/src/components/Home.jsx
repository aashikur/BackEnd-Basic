import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../ui/CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        <div className="bg-base-200 min-h-screen py-10">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Coffee Collection</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coffees.map(coffee =>
                            <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;