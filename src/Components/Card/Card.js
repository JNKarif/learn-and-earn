import React from 'react';

const Card = (props) => {
    const { img, sub, duration } = props.subject;
    return (
        <div>
            <img src={img} alt="" />
            <h3>Activity: {sub}</h3>
            <p>Duration: {duration} Hours</p>
            <button>Add to List</button>
        </div>
    );
};

export default Card;