import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    return (

            <div className="flex flex-col items-center justify-center w-full h-full">
                {/* <img src={user?.picture} alt={user.name} className="w-24 h-24 rounded-full mb-4" /> */}
                <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
                <p className="text-xl">{user.email}</p>
            </div>
    );
};

export default UserDetails;