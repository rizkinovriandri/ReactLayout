import React from 'react'

import './EventImage.css';

const Avatar = ({url}) => {
    return (
        <div>
            <img src={url}
                alt="Event pict"
                className="eventImg" 
            />
        </div>
    );
}

export default Avatar;