import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { name, photo, quantity, price, _id } = coffee;

    const handledelete = id => {
        Swal.fire({
            title: "Are you sure?",
            showDenyButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: "No",
            confirmButtonColor: 'red',
            denyButtonColor: 'gray'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted", "", "success");
                
                // Local State Mange


                // Server Delete Manage
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                      console.log(data)
                      // Delete From Local state if DeleteCount is 1
                      if(data.deletedCount > 0){
                          const remaining = coffees.filter(cof => cof._id !== id);
                          setCoffees(remaining);
                      }
                    }).catch(err => {
                        console.error('Error deleting coffee:', err);
                    });
            }
        });
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col">
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                <img
                    src={photo}
                    alt={name}
                    className="object-contain w-full h-full"
                />
            </div>
            <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
                <div className="flex justify-between text-base text-gray-700 mb-6">
                    <div>
                        <span className="font-semibold">Price:</span> ৳{price}
                    </div>
                    <div>
                        <span className="font-semibold">Quantity:</span> {quantity}
                    </div>
                </div>
                <div className="flex gap-2 mt-auto">
                    <Link to={`/viewcoffee/${_id}`} className="flex-1 py-2 rounded-full bg-blue-500 text-white font-semibold text-sm text-center hover:bg-blue-600 transition">View</Link>
                    <Link to={`/updatecoffee/${_id}`} className="flex-1 py-2 rounded-full bg-amber-500 text-white font-semibold text-sm text-center hover:bg-amber-600 transition">Edit</Link>
                    <button
                        onClick={() => handledelete(_id)}
                        className="flex-1 cursor-pointer py-2 rounded-full bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;