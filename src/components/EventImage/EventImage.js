import React from 'react'

import './EventImage.css';

const Avatar = ({url, alt}) => {
    return (
        <div>
            <img src={url}
                alt={alt}
                className="eventImg" 
            />
        </div>
    );
}

export default Avatar;