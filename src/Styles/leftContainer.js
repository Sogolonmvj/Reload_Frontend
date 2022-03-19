import styled from 'styled-components';

export const SearchBoxComponent = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0;

    height: 270px;
    width: 350px;
`

export const TextField = styled.input`
    color: gray;

    height: 30px;
    font-size: 28px;

    border-radius: 3rem;
    box-shadow: 2px 2px 2px 2px lightgray;

    padding: 0.4rem;
`

export const Parts = styled.div`
    display: flex;
    flex-direction: column;

    overflow-y: auto;
    overflow-x: hidden;

    box-shadow: 2px 2px 2px 2px lightgray;
    border-radius: 10px;

    transition: opacity 300ms transform 300ms ease-in-out;
`

export const UnorderedList = styled.ul`
    padding: 0;

    list-style: none;

    background-color: lightgray;
`

export const List = styled.li`
    
`