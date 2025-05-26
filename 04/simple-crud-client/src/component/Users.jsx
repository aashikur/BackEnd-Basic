import React from 'react';

const Users = () => {

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const NewUser = { name, email };

        console.log(NewUser);

        // Create User in the DB
        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(NewUser)

        })
        .then(res => res.json())
        .then(data => {
            console.log("data after user in the db", data);
            if(data.insertedId){
                alert('user added successfully');
                e.target.reset();
            }
        })

    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' /> <br />
                <input type="text" name='email' /> <br />
                <input type="submit" value={'Add User'} /> <br />
            </form>
        </div>
    );
};

export default Users;