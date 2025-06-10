import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleFormSubmit = e => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const NewCoffeeData = Object.fromEntries(formdata.entries());

        // Send Data to Server 
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewCoffeeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Added Successfully!",
                        icon: "success",
                        draggable: true
                    });
                    e.target.reset();
                }
            })
    }

    return (
        <div className="bg-base-200 min-h-screen py-10">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Add Coffee</h1>
                    <p className="text-gray-500 mb-8">
                        Fill out the form below to add a new coffee to the store.
                    </p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input type="text" name='name' className="input input-bordered w-full" placeholder="Coffee name" required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Quantity</label>
                                <input type="text" name='quantity' className="input input-bordered w-full" placeholder="Quantity" required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Supplier</label>
                                <input type="text" name='supplier' className="input input-bordered w-full" placeholder="Supplier Name" required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Taste</label>
                                <input type="text" name='taste' className="input input-bordered w-full" placeholder="Taste" required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Price</label>
                                <input type="text" name='price' className="input input-bordered w-full" placeholder="Price" required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Details</label>
                                <input type="text" name="details" className="input input-bordered w-full" placeholder="Details" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">Photo URL</label>
                            <input type="text" name="photo" className="input input-bordered w-full" placeholder="Photo URL" required />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-full bg-amber-600 text-white font-semibold shadow hover:bg-amber-700 transition"
                        >
                            Add Coffee
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;