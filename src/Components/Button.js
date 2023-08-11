import React from 'react';
const button = ({text, Onclick})=>{
    return (
        <button onClick = {Onclick}>
           {text}
        </button>
    )
}

export default button;

