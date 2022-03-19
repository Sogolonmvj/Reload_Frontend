import React from 'react'

import { CardStyle, Division, Image, Name } from '../../Styles/card/rightCard';

const RightCard = (props) => {

    if (!props) return null;

  return (
    <>
        <CardStyle className="card">
            <Image src={props.image} alt={props.alt} />
            <Division>
                <Name>{props.name}</Name>
            </Division>
        </CardStyle>
    </>
  )
}

export default RightCard