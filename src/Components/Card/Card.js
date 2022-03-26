import React, { useState } from 'react'

import { CardStyle, Division, Image, CheckBox, Name } from '../../Styles/card/card';

const Card = (props) => {

  let [checked, setChecked] = useState(true);
  let [counter, setCounter] = useState(0);

  if (!props) return null;

  const handleClick = () => {
    setChecked(checked ? false : true);
    setCounter(checked ? counter++ : counter--);
    props.counter(counter);
  }

  return (
    <>
        <CardStyle className="card">
            <Image src={props.image} alt={props.alt} />
            <Division>
                <CheckBox type="checkbox" onClick={handleClick}></CheckBox>
                <Name>{props.name}</Name>
            </Division>
        </CardStyle>
    </>
  )
}

export default Card