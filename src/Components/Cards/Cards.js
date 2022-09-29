import React from 'react';
import Card from '../Card/Card';


const Cards = () => {
    const subjects = [
        { id: 1, sub: 'Programming', img: 'https://unsplash.com/photos/DuHKoV44prg', duration: 2 },
        { id: 2, sub: 'Academic', img: 'https://unsplash.com/photos/DuHKoV44prg', duration: 3 },
        { id: 3, sub: 'Prayer', img: 'https://unsplash.com/photos/DuHKoV44prg', duration: 1.5 },
        { id: 4, sub: 'Exercise', img: 'https://unsplash.com/photos/DuHKoV44prg', duration: 2 },
        { id: 5, sub: 'IELTS', img: 'https://unsplash.com/photos/DuHKoV44prg', duration: 1.50 },
        { id: 6, sub: 'New-language', img: 'https://unsplash.com/photos/DuHKoV44prg', duration: 2 }


    ]
    return (
        <div>
            {
                subjects.map(subject => <Card
                    key={subject.id}
                    subject={subject}

                ></Card>)
            }
        </div>
    );
};

export default Cards;