import React from 'react'

import { Division, Body, Text, Rotate } from '../Styles/centerContainer';

import Manbody from './ManBody';

import { rotateIcon, avatarAurea } from '../Constants/Files';

import { turn } from '../Constants/Text';

const CenterContainer = (props) => {

  const pullData = (data) => {
    props.mainFunc(data);
  }

  return (
    <>
      <Division>
          <img id='background' src={avatarAurea} alt="background" />
          <Body>
            <Manbody func={pullData} />
            <Rotate><img id='rotate' src={rotateIcon} alt="rotate" /></Rotate>
            <Text>{ turn }</Text>
          </Body> 
      </Division>
    </>
  )
}

export default CenterContainer