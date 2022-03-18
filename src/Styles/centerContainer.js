import styled from 'styled-components';

export const Division = styled.div`
    height: 200px;
    width: 200px;

   
    position: relative;
    bottom: 7rem;

    img {
        z-index: -1;
        height: 450px;
        width: 450px;

        position: relative;
        right: 7.7rem;
    }
`

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: relative;
    bottom: 29rem;

    z-index: 1;
`