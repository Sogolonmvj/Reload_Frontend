import React from 'react'

import { Division, Buttons, Button, ResponsesButton } from '../Styles/footer';

import { responsesIcon } from '../Constants/Files';

const Footer = () => {
  return (
    <Division>
        <Buttons>
          <Button>Anterior</Button>
          <Button>Próximo</Button>
        </Buttons>
        <ResponsesButton><img src={responsesIcon} alt="file-button" /></ResponsesButton>
    </Division>
  )
}

export default Footer