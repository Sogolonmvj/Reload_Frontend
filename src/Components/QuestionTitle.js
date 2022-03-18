import React from 'react'
import { Division, SubDivision, Title, Sentence, SubTitle, SubSentence } from '../Styles/questionTitle'

import { title, subTitle } from '../Constants/Text';
import { otherIssues } from '../Constants/Files';

const QuestionTitle = () => {
  return (
    <>
        <Division>
            <SubDivision>
                <Title>
                    <img src={otherIssues} alt="title-icon" />
                    <Sentence>{title}</Sentence>
                </Title>
                <SubTitle>
                    <SubSentence>{subTitle}</SubSentence>
                </SubTitle>
            </SubDivision>
        </Division>
    </>
  )
}

export default QuestionTitle