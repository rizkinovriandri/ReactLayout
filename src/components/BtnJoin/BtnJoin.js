import React from 'react';

import { BtnComponent } from "./BtnJoin.style";

// import './BtnJoin.css';

const BtnJoin = (props) => {
    return (
            <BtnComponent primary={props.primary}>{props.text}</BtnComponent>
        
    );
}

export default BtnJoin;