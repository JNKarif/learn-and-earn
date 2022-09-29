import React from 'react';
import './Card.css'

const Card = (props) => {
    const { img, sub, duration } = props.subject;
    // const { handleAddToList } = props;
    return (
        <div className='activity-cards'>
            <img src={img} alt="" />
            <h3>{sub}</h3>
            <p>Duration: {duration} ms</p>
            {/* <button onClick={() => handleAddToList(props.subject)}>Add to List</button> */}
            <button >Add to List</button>
        </div>
    );
};

export default Card;