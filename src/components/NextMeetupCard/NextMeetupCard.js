import React from 'react';

import { BgCard, Date } from "./NextMeetupCard.style";

// import './NextMeetupCard.css';

const NextMeetupCard = (props) => {
    return (
        <BgCard>
            <b>{props.next_title}</b><br />
            <Date>{props.date}</Date>
            <br></br>
            <p>
               Hello, Javascript & Node.js Ninjas!<br></br>
               Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br></br>
               The meetup format will contain some sort of stories and technical talks.<br></br>
               If you have short announcement you'd like to share with the audience, you may do so during open mice announcements.
               <br></br>
               Remember to bring photo ID to get through building security.
               <br></br>.....<br></br>
               See you there!<br></br>
               Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers.
               
            </p>
        </BgCard>
    );
}

export default NextMeetupCard;