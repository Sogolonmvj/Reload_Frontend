import React from 'react'

import { CardStyle, Division, Image, Name } from '../../Styles/card/leftCard';

const LeftCard = (props) => {

  if (!props) return null;

  const handleCardClick = (e) => {
    props.searchedOrgan(e.target.innerHTML);
  }

  return (
    <>
        <CardStyle className="card">
            <Image src={props.image} alt={props.alt} />
            <Division>
                <Name id="superior-card" onClick={handleCardClick}>{props.name}</Name>
            </Division>
        </CardStyle>
    </>
  )
}

export default LeftCard