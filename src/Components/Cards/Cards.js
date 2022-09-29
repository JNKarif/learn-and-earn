import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Aside from '../Side-nav/Aside';
import './Cards.css'


const Cards = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])
    return (
        <div className='display-container'>
            {
                subjects.map(subject => <Card
                    key={subject.id}
                    subject={subject}

                ></Card>)
            }
            <Aside></Aside>
        </div>
    );
};

export default Cards;