import React from 'react'

import { EventImg } from "./EventImage.style";

// import './EventImage.css';

const Avatar = ({url, alt}) => {
    return (
        <div>
            <EventImg src={url}
                alt={alt}
            />
        </div>
    );
}

export default Avatar;