import React from 'react';

import Avatar from '../Avatar/Avatar';

import './MembersCard.css';

const MembersCard = ({organizer}) => {
    return (
        <div className="MembersCard">
            <Avatar url="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"/>
            <div className="MembersDesc">
                <h2>Organizers</h2>
                <p>{organizer}</p>
            </div>
            
        </div>
    );
}

export default MembersCard;