import React, { useState } from 'react';
import { hero } from "../../../dummyData";
import Card from './Card';  // Assuming you have a Card component
import "./hero.css"
const Hero = () => {
    const [items, setitems] = useState(hero);

    return (
        <>
            <section className='hero'>
                <div className='container'>
                    {items.map((item) => {
                        return <Card key={item.id} item={item} />
                    })}
                </div>
            </section>
        </>
    );
}

export default Hero;
