import React from 'react';

import EventImage from '../EventImage/EventImage';
import BtnJoin from '../BtnJoin/BtnJoin';

import { MeetupCardBg, MeetupDesc } from "./MeetupCard.style";

// import './MeetupCard.css';

const MeetupCard = ({title, location , members, organizer}) => {
    return (
        <MeetupCardBg>
            <EventImage url = 'https://disk.mediaindonesia.com/thumbs/600x400/news/2019/02/96f1ff2aa73d163fb9c0a2a854221a23.jpg' alt="Event pict"/>
            <MeetupDesc>
                <h1>{title}</h1>
                <p>Location : {location}</p>
                <p>Members : {members}</p>
                <p>Organizer : {organizer}</p>
                <BtnJoin primary="primary" text="Join Us!"></BtnJoin>
                <BtnJoin text="Subscribe"></BtnJoin>
            </MeetupDesc>
            
        </MeetupCardBg>
    );
}

export default MeetupCard;