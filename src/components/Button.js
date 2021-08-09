import React from 'react';

const Button = ({text}) => {
    return (
        <button
            onClick={() => {alert("I've been clicked!")}}
            style={{
                background: 'white',
                margin: '5rem',
                padding: '1rem 3rem',
                cursor: 'pointer'
            }}
        >
            {text}
        </button>
    )
};

export default Button;