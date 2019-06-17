import React from 'react'
function FunctionClick() {
    function clickHandler(){
        console.log('Clicked me')
    }
    return (
        <div>
            <button onClick={()=>clickHandler()}>Click Me</button>
        </div>);
}
export default FunctionClick