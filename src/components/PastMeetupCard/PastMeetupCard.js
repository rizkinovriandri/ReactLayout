import React from 'react';
import PropTypes from 'prop-types';

import BtnJoin from '../BtnJoin/BtnJoin';

import './PastMeetupCard.css';

const PastMeetupCard = ({date, event_desc, attendees}) => {
    return (
        <div className="PastMeetupCard">
            <div className="PastMeetupDesc">
                <b>{date}</b>
                <hr></hr>
                <p>{event_desc}</p>
                <p>{attendees} &nbsp;<text className="went">went</text></p>
                <BtnJoin text="View" ></BtnJoin>
            </div>
            
        </div>
    );
}

PastMeetupCard.propTypes = {
    date: PropTypes.string.isRequired, // validasi props tanggal
    event_desc : PropTypes.string.isRequired, // validasi props description
    attendees : PropTypes.number.isRequired, // validasi props peserta
  };

export default PastMeetupCard;