import React from 'react'
import styled from 'styled-components'

export default function Button({children, ...props}) {
    const Button = styled.button`
        border: 0;
        outline: 0;
        cursor: pointer;
        color: #f9f9f9;
        background: #DB3A3A;
        padding: 15px;
        text-align: center;
        width: 160px;
        border-radius: 50px;
        margin: 40px 0;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 1.2px;
        transition: 0.3s ease-out;

        &:hover {
            background: #DB2A2D;
            transition: 0.3s ease-in;
        }
    `;

    return (
        <Button {...props}>
            {children}
        </Button>
    )
}
