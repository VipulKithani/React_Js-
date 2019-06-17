import React from 'react'
function Beta(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('Beta')}>Click Karo</button>
        </div>
    );
}
export default Beta 
