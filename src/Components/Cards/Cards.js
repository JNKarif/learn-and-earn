import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Aside from '../Side-nav/Aside';

import './Cards.css'


const Cards = () => {
    const [subjects, setSubjects] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    const handleAddToList = (subject) => {
        console.log(subject)
        const newList = [...list, subject];
        setList(newList)

    }

    return (
        <div className='display-container'>
            <div className='grid-cards'>
                {
                    subjects.map(subject => <Card
                        key={subject.id}
                        subject={subject}
                        handleAddToList={handleAddToList}
                    ></Card>)
                }
            </div>
            <div>
                <Aside list={list}></Aside>
            </div>

        </div>
    );
};

export default Cards;