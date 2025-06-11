import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, price, details, photo } = coffee;

    const handleFormUpdate = e => {
        e.preventDefault();
        const formData = new FormData(e.target); 
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee);

        fetch(`http://localhost:3000/coffees/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: "Updated Successfully!",
                    icon: "success",
                    draggable: true,
                    timer: 800,
                })
            }
            console.log("after update date is: ",data);
        })
    }

    return (
        <div className="bg-base-200 min-h-screen py-10">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Update Coffee</h1>
                    <p className="text-gray-500 mb-8">
                        Update the form below to edit the coffee details.
                    </p>
                    <form onSubmit={handleFormUpdate}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input type="text" name='name' defaultValue={name} className="input input-bordered w-full" placeholder="Coffee name" required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Quantity</label>
                                <input type="text" name='quantity' defaultValue={quantity} className="input input-bordered w-full" placeholder="Quantity" required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Supplier</label>
                                <input type="text" name='supplier' defaultValue={supplier} className="input input-bordered w-full" placeholder="Supplier Name" required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Taste</label>
                                <input type="text" name='taste' defaultValue={taste} className="input input-bordered w-full" placeholder="Taste" required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Price</label>
                                <input type="text" name='price' defaultValue={price} className="input input-bordered w-full" placeholder="Price" required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Details</label>
                                <input type="text" name="details" defaultValue={details} className="input input-bordered w-full" placeholder="Details" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">Photo URL</label>
                            <input type="text" name="photo" defaultValue={photo} className="input input-bordered w-full" placeholder="Photo URL" required />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-full bg-amber-600 text-white font-semibold shadow hover:bg-amber-700 transition"
                        >
                            Update Coffee
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;