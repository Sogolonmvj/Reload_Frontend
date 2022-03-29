import styled from 'styled-components';

export const CardStyle = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;

    background-color: white;

    border-radius: 14px;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

    padding: 0 0 0 20px;
    
    width: 180px;

    margin: 5px;

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
    flex-direction: center;

    align-items: center;

    margin: 0;
    padding: 5px;
`

export const Image = styled.img`
    width: 40px;
    height: 40px;

    padding: 0;
    margin: 0;
`

export const Name = styled.p`
    font-weight: bold;
    font-size: 20px;

    margin-left: 5px;
    padding: 2px;
`