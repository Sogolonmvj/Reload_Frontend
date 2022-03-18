import React, { useState } from 'react';
import QuestionTitle from './QuestionTitle';
import RightContainer from './RightContainer';
import CenterContainer from './CenterContainer';
import LeftContainer from './LeftContainer';

import { Division } from '../Styles/main';

const Main = () => {

  const [bodyPart, setBodyPart] = useState('');

  const getPain = (data) => {
    setBodyPart(data);
  }

  return (
    <div>
        <QuestionTitle />
        <Division>
            <RightContainer />
            <CenterContainer mainFunc={getPain} />
            <LeftContainer clickedPart={bodyPart} />
        </Division>
    </div>
  )
}

export default Main