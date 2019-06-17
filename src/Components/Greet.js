import React from 'react'
function Greet(props) {
    const { name,sname}=props
    return (
        <div>
            <h1>Hello {name} {sname} </h1>
        </div>
		);
}

export default Greet;