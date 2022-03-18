import React from 'react'

import { Division, Body } from '../Styles/centerContainer';

import Manbody from './ManBody';

import { mostProbableIcon } from '../Constants/Files';

const CenterContainer = (props) => {

  const pullData = (data) => {
    props.mainFunc(data);
  }

  return (
    <Division>
        <img src={mostProbableIcon} alt="background" />
        <Body>
          <Manbody func={pullData} />
        </Body> 
    </Division>
  )
}

export default CenterContainer