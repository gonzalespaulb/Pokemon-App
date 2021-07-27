import React from 'react';
import Navigation from './Navigation';
import SlotIcon from '../assets/slots.svg'

const GamePage = () => {
    return (
        <div>
            <Navigation />
            <div className='slots'>
                 <img src= {SlotIcon} alt="slot machine" />
            </div>
        </div>
    )
}

export default GamePage;
