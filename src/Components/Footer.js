import React from 'react'

import { Division, Buttons, Button, ResponsesButton, Number } from '../Styles/footer';

import { responsesIcon } from '../Constants/Files';

import { previous, next } from '../Constants/Text';

const Footer = (props) => {

  if (!props) return null;

  let selectedCounter = 0;

  return (
    <Division>
        <Buttons>
          <Button id="previous">{ previous }</Button>
          <Button id="next">{ next }</Button>
        </Buttons>
        <ResponsesButton id="response-counter">
          <Number id="symptoms-counter">{selectedCounter}</Number>
          <img src={responsesIcon} alt="file-button" />
        </ResponsesButton>
    </Division>
  )
}

export default Footer