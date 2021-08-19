
import React from "react";

function Buttons(){

        const positivo = () => {
        
               console.log("1");

        }

        const negativo = () => {
        
                console.log("0");
        }


return(
<div>
        <input type="text" id="resut" />
        <button onClick={negativo}> 0 </button>
        <button onClick={positivo}> 1 </button>
        
</div>



)
}


export default Buttons;