import React from 'react';

import './BtnJoin.css';

const BtnJoin = (props) => {
    return (
        <button className="btnComponent">{props.text}</button>
    );
}

export default BtnJoin;