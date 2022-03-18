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
`

export const Parts = styled.div`
    display: flex;
    flex-direction: column;

    overflow-y: scroll;
    overflow-x: hidden;

    transition: opacity 300ms transform 300ms ease-in-out;
`

export const UnorderedList = styled.ul`
    list-style: none;
`

export const List = styled.li`

`