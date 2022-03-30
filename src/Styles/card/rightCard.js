import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;

    margin: 4px 20px;
`

export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    align-items: center;

    background-color: white;

    border-radius: 200px;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

    height: 80px;
    width: 80px;

    padding: 0;

    cursor: pointer;

    :active {
        background-color: rgb(21, 212, 216);
        color: white;

        img {
            -webkit-filter: grayscale(1) invert(1);
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(275deg) brightness(103%) contrast(104%);
        }
    }

`

export const Division = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;
`

export const Image = styled.img`
    width: 25px;
    height: 25px;

    padding: 0;
`

export const Name = styled.p`
    font-weight: bold;
    font-size: 14px;

    width: 70px;
`