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

    button {
        margin: 0;
        background: #F24405;
        border-radius: 4px;
        width: 260px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    a{
        border-radius: 4px;
        margin: 20px auto;
        display: flex;
        justify-content: center;
        color: #333;
    }
`;

export const Modal = styled.div`
    padding: 20px;
    height: 460px;
    width: 360px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 2px 2px 16px rgba(0,0,0,16%);
    transition: 0.3s ease-out;
    cursor: pointer;

    &:hover {
        box-shadow: 2px 2px 16px rgba(0,0,0,24%);
        transition: 0.3s ease-in;
    }


    @media (max-width: 728px){
        width: 260px;
        height: 420px;
    }
`;

export const Wrap = styled.div`
    max-width: 460px;
    margin: 10px auto;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Image = styled.img`
    display: block;
    width: 160px;
    height: 160px;
    padding: 5px 0 20px 0;
    border-radius: 50%;
`;

export const Subtitle = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #c2c2c2;
    align-self: flex-start;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 300;
    color: #222222;
    text-align: center;
    transition: 0.3s ease-out;

    &:hover {
        color: #222;
        transition: 0.3s ease-in;
    }

    &::after{
        content: "";
        display: block;
        width: 110px;
        height: 3px;
        background: #45e2;
        margin: 5px auto 20px auto;
        border: 50px;
    }
`;

export const Label = styled.label`
    width: 260px;
    display: block;
    font-size: 18px;
    font-weight: 300;
    color: #222222;
    transition: 0.3s left;
    &:hover {
        color: #222;
        transition: 0.3s ease-in;
    }
`;

export const Input = styled.input`
    width: 260px;
    font-size: 16px;
    font-weight: 700;
    color: #222e;
    align-self: center;
    transition: 0.3s ease-out;
    background: #f9f9f9;
    border: 2px solid #f2f2f2;
    outline: 0;
    padding: 12px;
    margin: 0 auto;

    &:hover {
        color: #222;
        transition: 0.3s ease-in;
        background: #fff;
        cursor: pointer;
        box-shadow: 3px 3px 3px rgba(0,0,0,3%);
    }

    @media (max-width: 728px){
        width: 220px;
    }
`;
