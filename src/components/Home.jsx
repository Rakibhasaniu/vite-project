import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const user = useLoaderData();
    const handleDelete = _id => {
        const agree = window.confirm('Are You Sure');
        console.log(agree)
        if(agree){

            console.log("deleting user with id", _id)
        }
    }
    return (
        <div>
            <h2>Users:{user.length}</h2>
            <div>
                {
                    user.map(user => <p key={user._id}>
                        {user.name} {user.email} <button onClick={() => handleDelete(user._id)}>X</button>
                    
                    </p>)
                }
            </div>
            
        </div>
    );
};

export default Home;