import styled from 'styled-components';

export const Group = styled.div`
    background-image: linear-gradient(to right, rgb(82, 128, 230), rgb(18, 230, 251));
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 8vh;
    margin: 0;
    padding: 0;
    width: 100%;
`

export const Division = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const HomeButton = styled.a`
    display: flex;
    align-items: center;
    position: relative;
    left: 2rem;
    text-decoration: none;
    cursor: pointer;

    img {
        width: 32px;
        height: 32px;
    }
`

export const Label = styled.label`
    color: whitesmoke;

    margin: 6px;
`

export const Logo = styled.a`

    img {
        width: 100px;
    }
`

export const FlagOption = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    right: 1rem;

    .flag-icon {
        height: 32px;
    }

    .arrow-down {
        margin-left: 5px;

        width: 8px;
        height: 8px;
        cursor: pointer;
        filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
        
        position: relative;
        right: 1rem;
        bottom: 0.3rem;
    }
`

export const Flag = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: 32px;

    position: relative;
    right: 1rem;
`

export const SearchButton = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    cursor: pointer;
`