import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100vh;
`;

export const Modal = styled.div`
    padding: 20px;
    height: 420px;
    width: 420px;
    background: #ffffff;
    border-radius: 50px;
    box-shadow: 2px 2px 16px rgba(0,0,0,16%);
    transition: 0.3s ease-out;
    cursor: pointer;

    &:hover {
        box-shadow: 2px 2px 16px rgba(0,0,0,24%);
        transition: 0.3s ease-in;
    }

    @media (max-width: 728px){
        width: 260px;
        border-radius: 50px;
    }
`;

export const Wrap = styled.div`
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-flow: wrap column;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    display: block;
    width: 160px;
    height: 160px;
    border-radius: 50px;
    margin: 5px 0 20px 0;
    box-shadow: 3px 3px 16px rgba(0,0,0,16%);
`;

export const Subtitle = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #c2c2c2;
    text-align: center;
    align-self: center;
    margin: 0 auto;


    @media (max-width: 728px){
        font-size: 14px;
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 400;
    color: #333;
    align-self: flex-start;
    transition: 0.3s ease-out;
    text-align: center;
    align-self: center;
    margin: 0 auto;

    &:hover {
        color: #222;
        transition: 0.3s ease-in;
    }

    @media (max-width: 728px){
        font-size: 22px;
    }
`;
