import React, { useState } from 'react';
import d6  from '../utils/diceRoller';

function WoundChance() {
    const [selectedHit, setSelectedHit] = useState(4);
    const [selectedWound, setSelectedWound] = useState(4);

    const handleHitChange = (event) => {
        setSelectedHit(event.target.value);
    };

    const handleWoundChange = (event) => {
        setSelectedWound(event.target.value);
    };

    const rollDice = () => {
        const hitResult = d6(selectedHit); // Calling the d6 function with selectedHit
        const woundResult = d6(selectedWound); // Calling the d6 function with selectedWound
        // Do something with the dice roll results
        const oddsOfWounding = (hitResult * woundResult * 100) +"%";
        // return console.log((hitResult * woundResult * 100) +"%");
        return oddsOfWounding
    };

    return (
        <>
            <select value={selectedHit} onChange={handleHitChange}>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
            </select>
            <select value={selectedWound} onChange={handleWoundChange}>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
            </select>
            <div id="result">
                {/* <p>{rollDice()}</p> */}
                <p>{rollDice()}</p>
            </div>
        </>
    );
}

export default WoundChance;
