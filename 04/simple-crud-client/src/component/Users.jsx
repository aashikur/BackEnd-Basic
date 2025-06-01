import React, { useEffect, useState } from 'react';

const Users = ({ userPromise }) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userPromise.then(data => setUsers(data));
    }, [userPromise])
    console.log(users)

    const handleDelete = (_id) => {
        console.log('delete', _id);
        fetch(`http://localhost:3000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => 
         {
            if(data.deletedCount > 0){
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining);
            }
            console.log(data);
         }
         )
    }

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const NewUser = { name, email };

        console.log(NewUser);

        // Create User in the DB
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(NewUser)

        })
            .then(res => res.json())
            .then(data => {
                console.log("data after user in the db", NewUser);
                if (data.insertedId) {
                    setUsers([...users, NewUser])
                    console.log('user added successfully', [...users, NewUser]);
                    alert('user added successfully', [...users, NewUser]);
                    e.target.reset();
                }
            })
    }
    return (
        <div> 
            <h2>Users Total : {users.length}</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' /> <br />
                <input type="text" name='email' /> <br />
                <input type="submit" value={'Add User'} /> <br />
            </form> 


            {
                users.map((user,i) => <p key={user._id}>{i+1}. { user.name}  <button onClick={()=>handleDelete(user._id)}>X</button> </p>)
            }
        </div>
    );
};

export default Users;