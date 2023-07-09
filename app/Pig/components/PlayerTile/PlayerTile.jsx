import React from 'react'
import RollButton from "./RollButton";
import SaveScoreButton from "./SaveScoreButton";
import classes from "./playerTile.module.css"



function PlayerTile({name, score, turn, onRoll, onSave}) {

    let className
    if (turn) {
        className = classes.active
    } else {
        className = classes.inactive
    }


    return (
        <section className={classes.flex_item}>
            <div className={className}>
            <h2>{name}</h2>
            <div>
                <h1>Current Score</h1>
                <div className={classes.score}>{score}</div>
            </div>
            <RollButton turn={turn}
                        onRoll={onRoll}/>
            <SaveScoreButton onSave={onSave}/>
            </div>
        </section>
    );
}

export default PlayerTile;