import React from 'react';
import styles from './characterTitle.module.css'
import CharacterTitleStats from "./CharacterTitleStats";
import Image from "next/image";


function CharacterTitle({image, name, status, species, type, gender,}) {
    return (
        <section className={styles.character__Title}>
            <div className={styles.character__portrait}>
                <Image className={styles.character__image} src={image} alt={name} width={500} height={500}></Image>
            </div>
            <CharacterTitleStats name={name} species={species} status={status} type={type} gender={gender}/>
        </section>
    );
}

export default CharacterTitle;