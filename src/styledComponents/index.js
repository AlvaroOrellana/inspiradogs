import styled from "styled-components";
import Select from 'react-select';
import background from '@Assets/background.jpg';

export const StyledWrapper = styled.div`
    min-height: 100vh;
    background: url(${ background })repeat 0 0 fixed;
    background-size: contain;
`

export const CustomHeader = styled.img`
    border-radius: 25px;
    margin-top: 25px;
    width: ${window.innerWidth * 0.6}px;
    @media (min-width: 1025px) {
        height: ${window.innerHeight / 3}px;
    };
    @media (max-width: 1024px) {
        height: ${window.innerHeight / 4}px;
    };
    @media (max-width: 480px) {
        height: ${window.innerHeight / 5}px;
        width: ${window.innerWidth * 0.75}px;
    };
    border: white solid 5px;
`;

export const SelectorWrapper = styled.div`
    display: flex;
    place-content: center;
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    max-width: ${window.innerWidth / 2}px;
    margin: auto;
`

export const CustomSelect = styled(Select)`
    width: ${window.innerWidth / 4}px;
    @media (max-width: 480px) {
        width: ${window.innerWidth / 2}px;
    };
`;

export const ImageWrapper = styled.div`
    border-radius: 25px;
    height: 150px;
    width: 150px;
    border: white solid 5px;
`;