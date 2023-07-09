import React from 'react';
import styles from './characterTitle.module.css'
import CharacterTitleStats from "./CharacterTitleStats";


function CharacterTitle({image, name, status, species, type, gender,}) {
    return (
        <section className={styles.character__Title}>
            <div className={styles.character__portrait}>
                <img className={styles.character__image} src={image} alt={name}></img>
            </div>
            <CharacterTitleStats name={name} species={species} status={status} type={type} gender={gender}/>
        </section>
    );
}

export default CharacterTitle;