import styled from 'styled-components';

export const Division = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: lightgray;
`

export const Buttons = styled.div`
    padding: 0;
    height: 4rem;
    background-color: lightgray;
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
    border-width: 1px;
    border-color: gray;
    border-radius: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 1rem;
    padding: 0;
    transition: all 300ms ease-in-out ;
    cursor: pointer;

    :hover{
        color: whitesmoke;
        background-color: gray;
    }
`

export const ResponsesButton = styled.a`
    position: absolute;
    right: 10rem;
    top: 47rem;

    img {
        width: 64px;
        height: 64px;
    }
`