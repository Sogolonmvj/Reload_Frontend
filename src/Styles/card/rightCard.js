import styled from 'styled-components';

export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    align-items: center;

    background-color: white;

    border-radius: 100px;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

    margin-right: 20px;
    margin-bottom: 20px;

    padding: 0;
`

export const Division = styled.div`
    display: flex;
    flex-direction: row;

    margin: 0;
    padding: 5px;
`

export const Image = styled.img`
    width: 25px;
    height: 25px;

    padding: 0;
    margin-top: 10px;
`

export const Name = styled.p`
    padding: 2px 2px;
`