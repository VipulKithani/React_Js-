import React from 'react';
function Hello(props) {

    return (
        <h1>Inside Hello ,Hello {props.name} ur age is {props.age}
            {props.children}
        </h1>
    );
}
export default Hello;