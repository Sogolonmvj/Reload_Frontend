import React from 'react'

import { Card, CardStyle, Division, Image, Name } from '../../Styles/card/rightCard';

const RightCard = (props) => {

    if (!props) return null;

  return (
    <Card>
        <CardStyle className="card">
            <Image src={props.image} alt={props.alt} />
        </CardStyle>
        <Division>
            <Name>{props.name}</Name>
        </Division>
    </Card>
  )
}

export default RightCard