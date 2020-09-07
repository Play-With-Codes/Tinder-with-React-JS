import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Amitabh Bachhan',
            url: 'a-b.jpg'
        },
        {
            name: 'Kristina Kristy',
            url: '11.jpg'
        },
        {
            name: 'Joseph Jane',
            url: 'b-1.jpg'
        },
        {
            name: 'Pooja Arya',
            url: 'g-2.jpg'
        },
        {
            name: 'Twister Abhishek',
            url: './12.jpg'
        },
        {
            name: 'Sakshi Rathore',
            url: 'g-1.jpg'
        },
        {
            name: 'Ryan Jessica',
            url: 'c-1.jpg'
        },
        {
            name: 'Jennifer Lawrence',
            url: 'j-l.jpg'
        },
    ]);

    //Piece of code which runs based on a condition
    //userEffect()
    
    //const people = [];
    //people.push('sonny', 'qazi');

    //setPeople([...people, 'sonny', 'qazi'])

    return (
        <div>

            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe" key={person.name} 
                    preventSwipe={['up', 'down']}
                    >
                        <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;