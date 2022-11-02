import React, { useState } from 'react';

const AddUsers = () => {


    const [user, setUser] = useState({});

    const handleUser = e => {
        e.preventDefault();

        fetch('http://localhost:5000/user',{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    const handleInputBlur = e =>{
        const value = e.target.value;
        const field = e.target.name;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
        
    }

    return (
        <div>
            <h2>Please Add A New User</h2>
            <form onSubmit={handleUser}>
                <input onBlur={handleInputBlur} type="text" name="name" placeholder="Name" required />
                <br />
                <input onBlur={handleInputBlur} type="email" name="email" placeholder="Email" required />
                <br />
                <button type='submit'>Add User</button>

            </form>
        </div>
    );
};

export default AddUsers;