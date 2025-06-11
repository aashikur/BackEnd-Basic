import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const UsersTable = () => {
    const InitUserData = useLoaderData();
    const [UserData, setUserData] = useState(InitUserData);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');


        if(proceed){
            fetch(`http://localhost:3000/users/${id}`,{
                method: 'DELETE',
            }) 
            .then(res => res.json())
            .then(data => {
                console.log("After Delete Data is : ", data);
                if(data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remaining = UserData.filter(user => user._id !== id);
                    setUserData(remaining);
                }
                 
            })
        }



        // if (proceed) {
        //     fetch(`http://localhost:3000/users/${id}`, {
        //         method: 'DELETE'
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.deletedCount > 0) {
        //             alert('Deleted successfully');
        //             const remaining = UserData.filter(user => user._id !== id);
        //             setUserData(remaining);
        //         }
        //     })
        // }
    }
    

    return (
        <div className="max-w-4xl mx-auto py-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Total Users: {UserData.length}</h2>
            <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
                <table className="table w-full min-w-[600px]">
                    <thead>
                        <tr>
                            <th className="text-left">Name</th>
                            <th className="text-left">Email</th>
                            <th className="text-left">Age</th>
                            <th className="text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {UserData.map(user => (
                            <tr key={user._id} className="hover:bg-base-100 transition">
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photoURL || "https://cdn-icons-png.flaticon.com/128/1999/1999625.png"}
                                                    alt={user.name}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-gray-700">{user.email}</td>
                                <td className="text-gray-700">{user.age}</td>
                                <td className="space-x-1 flex items-center">
                                    {/* View */}
                                    <button className="btn btn-ghost btn-xs text-blue-500 hover:bg-blue-50" title="View">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                    {/* Edit */}
                                    <button className="btn btn-ghost btn-xs text-amber-500 hover:bg-amber-50" title="Edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.862 3.487a2.25 2.25 0 013.182 3.182l-10.5 10.5a2 2 0 01-.878.513l-4 1a1 1 0 01-1.213-1.213l1-4a2 2 0 01.513-.878l10.5-10.5z" />
                                        </svg>
                                    </button>
                                    {/* Delete */}
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs text-red-500 hover:bg-red-50" title="Delete">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTable;