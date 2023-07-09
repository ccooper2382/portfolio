import React from 'react';

function Victory({victor, onClick}) {

    return (
        <section>
            <h1>{`${victor} wins!`}</h1>
            <button onClick={onClick}>New Game</button>
        </section>
    );
}

export default Victory;