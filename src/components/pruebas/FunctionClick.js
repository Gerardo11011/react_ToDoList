import React from 'react'

function FunctionClick(){

    function clickHandler(){
        console.log("Buttom Clicked");
        
    }
    return(
        <div>
            <button onClick={() => clickHandler()}>Click</button>
        </div>
    )
}

export default FunctionClick