import React from 'react';

import BtnJoin from '../BtnJoin/BtnJoin';

import './PastMeetupCard.css';

const PastMeetupCard = (props) => {
    return (
        <div className="PastMeetupCard">
            <div className="PastMeetupDesc">
                <b>{props.date}</b>
                <hr></hr>
                <p>{props.event_desc}</p>
                <p>{props.attendees} &nbsp;<text className="went">went</text></p>
                <BtnJoin text="View" ></BtnJoin>
            </div>
            
        </div>
    );
}

export default PastMeetupCard;