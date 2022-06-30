import React, {useEffect, useState} from "react";

const LearnUseEffect = () => {
    let [gold, setGold] = useState(10);
    let [elixir, setElixir] = useState(10);

    useEffect(
        ()=>{
            console.log("useEffect");
            document.title = `Gold: ${gold} Elixir: ${elixir}`;
        },[gold])

    function updateGold(){
        let n = parseInt(Math.random()*100)
        setGold(gold + n);
    }
    function updateElixir(){
        let n = parseInt(Math.random()*100)
        setElixir(gold + n);
    }

    return(
        <div>
            <span>Gold : {gold}</span> <br />
            
            <span>elixir : {elixir}</span> <br />
            <button onClick={updateGold}>update Gold</button> <br></br>
            <button onClick={updateElixir}>update Elixir</button>
        </div>
    )
}

export default LearnUseEffect;