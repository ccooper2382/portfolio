import React from 'react';
import CharacterTitle from "@/app/RickAndMorty/components/CharacterTitle/CharacterTitle";
import Episodes from "@/app/RickAndMorty/components/Episodes/Episodes";
import Location from "@/app/RickAndMorty/components/Location/Location";
import styles from './tile.module.css';

function CharacterTile({name, status, species, type, gender, image, location, origin, episodes}) {

    return (
        <article className={styles.flexContainer}>
            <CharacterTitle name={name} species={species} status={status} image={image} type={type} gender={gender}
                            origin={origin} location={location}/>
            <Location location={location} origin={origin}/>
            <Episodes episodes={episodes}/>

        </article>

    );
}

export default CharacterTile;