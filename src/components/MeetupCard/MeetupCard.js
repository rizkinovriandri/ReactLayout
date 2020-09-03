import React from 'react';

import EventImage from '../EventImage/EventImage';
import BtnJoin from '../BtnJoin/BtnJoin';

import './MeetupCard.css';

const MeetupCard = () => {
    return (
        <div className="MeetupCard">
            <EventImage url = 'https://disk.mediaindonesia.com/thumbs/600x400/news/2019/02/96f1ff2aa73d163fb9c0a2a854221a23.jpg'/>
            <div className="MeetupDesc">
                <h1>Hacktiv8 Meetup</h1>
                <p>Location : Jakarta , Indonesia</p>
                <p>Members : 1078</p>
                <p>Organizer : Adhy Wiranata</p>
                <BtnJoin text="Join Us!"></BtnJoin>
            </div>
            
        </div>
    );
}

export default MeetupCard;