import React, { useEffect, useState } from 'react';

const Users = ({ userPromise }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userPromise.then(data => {
      const valid = data.filter(u => u.name && u.email);
      setUsers(valid);
    });
  }, [userPromise]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.user.value.trim();
    const email = form.email.value.trim();

    if (!name || !email) {
      alert("Both name and email are required.");
      return;
    }

    const newUser = { name, email };

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Posted:', data);
        setUsers([...users, data]);
        form.reset();
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user" placeholder="Name" /> <br />
        <input type="text" name="email" placeholder="Email" /> <br />
        <button type="submit">Submit</button>
      </form>

      <h1>Users</h1>
      {users.map((user, index) => (
        <p key={index}> {index + 1}. {user.name} : {user.email}</p>
      ))}
    </div>
  );
};

export default Users;
