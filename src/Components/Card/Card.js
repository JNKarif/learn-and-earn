import React from 'react';
import './Card.css'

const Card = (props) => {
    const { img, sub, duration } = props.subject;
    return (
        <div className='activity-cards'>
            <img src={img} alt="" />
            <h3>Activity: {sub}</h3>
            <p>Duration: {duration} Hours</p>
            <button>Add to List</button>
        </div>
    );
};

export default Card;