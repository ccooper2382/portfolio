import React from 'react';
import CurrentRoll from "./currentRoll";
import TotalScore from "./totalScore";
import styles from "./centerTile.module.css"


function RollTile({currentRoll, currentTotal, store, message}) {
    return (
        <section className={styles.center__flexItem}>
            <CurrentRoll value={currentRoll}/>
            <TotalScore value={currentTotal}/>
            <div>
                <button onClick={store}>Save Game</button>
            </div>
            <div>
                <span className='message'>{message}</span>
            </div>
        </section>
    );
}

export default RollTile;