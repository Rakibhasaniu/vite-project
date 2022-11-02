import React, { useState } from 'react';

const AddUsers = () => {


    const [user, setUser] = useState({});

    const handleUser = e => {
        e.preventDefault();
    }

    const handleInputBlur = e =>{
        const value = e.target.value;
        const field = e.target.name;
        
    }

    return (
        <div>
            <h2>Please Add A New User</h2>
            <form onSubmit={handleUser}>
                <input onBlur={handleInputBlur} type="text" name="name" placeholder="Name" />
                <br />
                <input onBlur={handleInputBlur} type="email" name="email" placeholder="Email" />
                <br />
                <button type='submit'>Add User</button>

            </form>
        </div>
    );
};

export default AddUsers;