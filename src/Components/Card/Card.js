import React from 'react';
import './Card.css'

const Card = (props) => {
    const { handleAddToList, subject } = props;
    const { img, sub, duration } = subject;

    return (
        <div className='activity-cards'>
            <img src={img} alt="" />
            <h3>{sub}</h3>
            <p>Duration: {duration} ms</p>
            <button onClick={() => handleAddToList(subject)}>Add to List</button>

        </div>
    );
};

export default Card;