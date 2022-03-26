import styled from 'styled-components';

export const CardStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: white;

    border-bottom: 2px solid lightgray;

    margin-bottom: 3px;
    padding-left: 1rem;
`

export const Division = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;

    margin-left: 0.6rem;
`

export const Image = styled.img`
    width: 32px;
    height: 32px;
`

export const CheckBox = styled.input`
    width: 1.3rem;
    height: 1.3rem;

    background-color: white;

    border-radius: 50%;
    border: 1px solid #ddd;

    vertical-align: middle;
    
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;

    :checked {
        background-color: rgb(21, 212, 216);
    }
`

export const Name = styled.p`
    margin-left: 0.3rem;

    font-weight: bold;
`