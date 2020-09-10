import React from 'react'
import { AvatarRound } from "./Avatar.style";

// import avatar from '../../Assets/avatar.jpg';

//import './Avatar.css';

const Avatar = ({url}) => {
    return (
        <div> 
            <AvatarRound src={url} alt="Avatar"/>
        </div>
    );
}

export default Avatar;
