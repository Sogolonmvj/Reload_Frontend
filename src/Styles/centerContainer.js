import styled from 'styled-components';

export const Division = styled.div`
    height: 200px;
    width: 200px;

   
    position: relative;
    bottom: 7rem;

    #background {
        z-index: -1;
        height: 450px;
        width: 450px;

        position: relative;
        right: 7.7rem;
    }

`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    bottom: 29rem;

    z-index: 1;

    #rotate {
        height: 40px;
        width: 40px;

        position: relative;
        top: 0.2rem;
    }
`

export const Text = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: gray;

    position: relative;
    bottom: 1.1rem;
`

export const Rotate = styled.div`
    border-radius: 40px;
    box-shadow: 1px 1px 1px 1px lightgray;
`