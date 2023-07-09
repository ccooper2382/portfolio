import React from 'react';
import classes from "./centerTile.module.css"
import Die from "@/app/Pig/components/Dice/Die";

function CurrentRoll({value}) {


    return (
        <div>
            <h1>Current Roll</h1>
            <div className={classes.roll}>
                <Die value={value} />
            </div>

        </div>
    );
}

export default CurrentRoll;