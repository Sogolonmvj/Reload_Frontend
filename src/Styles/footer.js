import styled from 'styled-components';

export const Division = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgb(237, 241, 247);

    height: 4rem;
`

export const Buttons = styled.div`
    padding: 0;
    height: 4rem;
    background-color: rgb(237, 241, 247);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    color: gray;
    background-color: transparent;
    height: 3rem;
    width: 8rem;
    box-shadow: none;
    outline: none;
    border: 1px solid lightgray;
    border-radius: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 1rem;
    padding: 0;
    transition: all 300ms ease-in-out ;
    cursor: pointer;

    :hover{
        color: whitesmoke;
        background-color: lightgray;
    }
`

export const ResponsesButton = styled.div`
    position: relative;
    left: 360px;
    bottom: 30px;

    margin: 0;
    padding: 0;

    img {
        width: 86px;
        height: 86px;
    }
`

export const Number = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 162px;
    background-image: linear-gradient(rgb(6, 249, 255), rgb(87, 121, 229));
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    color: white;
    font-family: "Proxima Nova";
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: center;
    position: absolute;
    right: 0;
    bottom: 40px;
`