import styled from 'styled-components';

export const Division = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;

    position: relative;
    top: 3rem;
`

export const SubDivision = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;

    img {
        height: 32px;
        margin-right: 1rem;
    }
`
export const Sentence = styled.h1`
    font-size: 40px;
`

export const SubTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20px;

    position: relative;
    top: 0.5rem;
`

export const SubSentence = styled.h3`
    color: gray;
`