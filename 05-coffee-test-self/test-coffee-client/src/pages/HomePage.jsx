import React from 'react';
import CoffeeCard from '../component/CoffeeCard';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    const AddedCoffee = useLoaderData();
    console.log(AddedCoffee)
    return (
        <div>
           <div className="text-center py-10 text-3xl">
                HOME PAGE : {AddedCoffee.length}
           </div>
           <div className=' w-2xl sm:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
            {AddedCoffee.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}/>) }
           </div>
        </div>
    );
};

export default HomePage;