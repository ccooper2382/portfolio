import React from 'react';
import One from "../../../../public/dice/dice-1.svg"
import Two from "../../../../public/dice/dice-2.svg"
import Three from "../../../../public/dice/dice-3.svg"
import Four from "../../../../public/dice/dice-4.svg"
import Five from "../../../../public/dice/dice-5.svg"
import Six from "../../../../public/dice/dice-6.svg"
import Image from "next/image";


function Die({value}) {

    switch (value) {
        case 2:
            return <Image src={Two} alt="Two"/>;
        case 3:
            return <Image src={Three} alt="Three"/>;
        case 4:
            return <Image src={Four} alt="Four"/>;
        case 5:
            return <Image src={Five} alt="Five"/>;
        case 6:
            return <Image src={Six} alt="Six"/>;
        default:
            return <Image src={One} alt="One"/>;

    }


}

export default Die;