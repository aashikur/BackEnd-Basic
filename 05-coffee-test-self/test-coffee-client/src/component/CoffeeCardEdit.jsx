import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeCardEdit = () => {
    const coffee = useLoaderData();
    const { name, chef, supplier, taste, category, photo } = coffee;
    const handleEdit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        console.log(data);

        //Sending full data to the server
        fetch(`http://localhost:3000/addcoffee/${coffee._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log('After sending put data from client: ',data);
        })
    }
    return (
        <div className="max-w-md mx-auto mt-10 p-6  rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Edit Coffee</h2>
            <form onSubmit={handleEdit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Coffee Name"
                    defaultValue={name}

                    className=" w-full border p-2 rounded input"
                    required
                />
                <input
                    type="text"
                    name="chef"
                    placeholder="Chef"
                    defaultValue={chef}

                    className=" w-full border p-2 rounded input"
                    required
                />
                <input
                    type="text"
                    name="supplier"
                    placeholder="Supplier"
                    defaultValue={supplier}

                    className=" w-full border p-2 rounded input"
                    required
                />
                <input
                    type="text"
                    name="taste"
                    placeholder="Taste"
                    defaultValue={taste}

                    className=" w-full border p-2 rounded input "
                    required
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    defaultValue={category}

                    className=" w-full border p-2 rounded input"
                    required
                />
                <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    defaultValue={photo}

                    className=" w-full border p-2 rounded input"
                    required
                />
                <div className='input w-full cursor-not-allowed' title="can't be changed this filed">
                    <p>Price: 199 TK</p>
                </div>
                <button type="submit" className="btn w-full bg-gray-700 text-white py-2 rounded">Update Coffee</button>
            </form>
        </div>
    );
};

export default CoffeeCardEdit;