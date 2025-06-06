import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user = useLoaderData();
    console.log('Test Update user: ', user)

    const handleUpdateForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email };
        console.log(updatedUser);
        // LLLLLLLLLLL - Update  PUT / Patch
        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        }) 
        .then(res => res.json())
        .then(data => console.log("After Updata", data));

         

    }




    return (
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-4xl font-bold mb-4">Update User</h2>
                <form onSubmit={handleUpdateForm} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block">Name</label>
                        <input defaultValue={user.name} type="text" name="name" id="name" className="block w-full px-4 py-2 border-2 border-gray-300 rounded-md" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block">Email</label>
                        <input defaultValue={user.email} required type="email" name="email" id="email" className="block w-full px-4 py-2 border-2 border-gray-300 rounded-md" />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Update</button>
                </form>

        </div>
    );
};

export default UpdateUser;