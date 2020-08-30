import React from 'react'

import avatar from '../../Assets/avatar.jpg';

import './Avatar.css';

const Avatar = () => {
    return (
        <div>
            <img src={avatar}
                alt="Avatar"
                className="avatar" 
            />
        </div>
    );
}

export default Avatar;
