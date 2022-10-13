import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>My Redux Todo App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todos: 3</li>
            </ul>
        </div>
    )
}

export default Navbar;