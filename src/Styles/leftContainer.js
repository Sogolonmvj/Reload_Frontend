import styled from 'styled-components';

export const Division = styled.div`
    display: flex;
    flex-direction: column;
`

export const HorizontalList = styled.ul`
    display: flex;
    flex-direction: row;

    list-style: none;

    padding: 0;
    margin-bottom: 5px;
`

export const SearchBoxComponent = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0;

    height: 400px;
    width: 610px;
`

export const IconField = styled.label`
    position: relative;

    ::before {
        content: "";
        position: absolute;
        
        background-image: url('../Images/most_probable_icon.svg');
        background-repeat: no-repeat;
        background-size: 28px;

        left: 10px;
        top: 8px;
        bottom: 0;

        width: 36px;
    }

    ::after {
        content: "";
        position: absolute;

        background-image: url('../Images/search_input_icon.svg');
        background-repeat: no-repeat;
        background-size: 28px;

        left: 592px;
        top: 7px;
        bottom: 0;

        width: 36px;
    }
`

export const TextField = styled.input`
    color: lightgray;

    height: 25px;
    width: 587px;
    font-size: 20px;

    border: 2px solid transparent;

    border-radius: 3rem;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

    padding: 0.5rem 0 0.5rem 2.2em;

    -webkit-transition: 0.5s;
    transition: border 0.5s ease-in-out;

    ::placeholder {
        color: lightgray;
    }

    :focus {
        border: 2px solid rgb(21, 212, 216) !important;
        outline: none;
    }
`

export const Parts = styled.div`
    display: flex;
    flex-direction: column;

    background-color: white;

    overflow-y: auto;
    overflow-x: hidden;

    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
    border-radius: 20px;

    height: 310px;
    width: 600px;

    margin-top: 25px;
    padding: 0 15px 15px 15px;

    transition: opacity 300ms transform 300ms ease-in-out;

    ::before {
        content: "";

        position: absolute;

        transform: translate(15px, -13.6px);

        width: 0;
        height: 0;

        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
        border-bottom: 14px solid white;

        filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
    }
`

export const UnorderedList = styled.ul`

    overflow-y: auto;
    overflow-x: hidden;
    
    padding: 0 15px 0 0;

    list-style: none;

    background-color: white;
`

export const List = styled.li`
    
`