import styled from 'styled-components';

export const Division = styled.div`
    height: 200px;
    width: 200px;

    position: relative;
    bottom: 7rem;

    #background {
        z-index: -1;
        height: 400px;
        width: 400px;

        position: relative;
        right: 7.7rem;
    }

`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 510px;

    position: relative;
    bottom: 25.2rem;
    right: 1.4rem;

    z-index: 1;

    #rotate {
        height: 36px;
        width: 36px;

        position: relative;
        top: 0.15rem;
    }
`

export const Text = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: gray;

    position: relative;
    bottom: 1rem;
`

export const Rotate = styled.div`
    border-radius: 40px;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

    margin-top: 15px;

    cursor: pointer;
`