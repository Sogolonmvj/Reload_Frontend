import React from 'react'

import { Division, Body, Text, Rotate } from '../Styles/centerContainer';

import Manbody from './ManBody';

import { mostProbableIcon, rotateIcon } from '../Constants/Files';

const CenterContainer = (props) => {

  const pullData = (data) => {
    props.mainFunc(data);
  }

  return (
    <>
      <Division>
          <img id='background' src={mostProbableIcon} alt="background" />
          <Body>
            <Manbody func={pullData} />
            <Rotate><img id='rotate' src={rotateIcon} alt="rotate" /></Rotate>
            <Text>Girar 180°</Text>
          </Body> 
      </Division>
    </>
  )
}

export default CenterContainer