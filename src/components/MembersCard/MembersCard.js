import React from 'react';

import Avatar from '../Avatar/Avatar';

import { MembersCardBg, MembersDesc } from "./MembersCard.style";

import './MembersCard.css';

const MembersCard = ({organizer}) => {
    return (
        <MembersCardBg>
            <Avatar url="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"/>
            <MembersDesc>
                <h2>Organizers</h2>
                <p>{organizer}</p>
            </MembersDesc>
            
        </MembersCardBg>
    );
}

export default MembersCard;