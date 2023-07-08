import React from 'react';
import CurrentRoll from "./currentRoll";
import TotalScore from "./totalScore";
import classes from "../Layout.module.css";


function RollTile({currentRoll, currentTotal, store, message}) {
    return (
        <section className={classes.flex_item}>
            <CurrentRoll value={currentRoll}/>
            <TotalScore value={currentTotal}/>
            <button onClick={store}>Save Game</button>
            <span className='message'>{message}</span>
        </section>
    );
}

export default RollTile;