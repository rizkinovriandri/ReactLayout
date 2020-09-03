import React from 'react'

// import avatar from '../../Assets/avatar.jpg';

import './Avatar.css';

const Avatar = ({url}) => {
    return (
        <div>
            <img src={url}
                alt="Avatar"
                className="avatar" 
            />
        </div>
    );
}

export default Avatar;
