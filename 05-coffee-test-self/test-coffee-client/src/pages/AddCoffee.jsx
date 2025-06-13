import React, { use, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';

const AddCoffee = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get the form data
        const formData = new FormData(e.target);
        const Data_of_form = Object.fromEntries(formData.entries())
        console.log(Data_of_form)

        // Send the data to Server
        fetch('http://localhost:3000/addcoffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(Data_of_form)
        })
        .then(res => res.json())
        .then(data => { 
            console.log('After Posting from client: FormData :', data);
            if(data.insertedId) {
                alert('Coffee Added Successfully');
                e.target.reset();

                    navigate('/');
            }
        })
    };


    

    return (
        <div className="max-w-md mx-auto mt-10 p-6  rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Add New Coffee</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Coffee Name"
 
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="chef"
                    placeholder="Chef"
 
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="supplier"
                    placeholder="Supplier"
 
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="taste"
                    placeholder="Taste"
 
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
 
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
 
                    className="w-full border p-2 rounded"
                    required
                />
                <button type="submit" className="btn w-full bg-gray-700 text-white py-2 rounded">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;