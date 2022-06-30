import React,{useState} from "react";

const LearnUseState2 = () => {
    let [coins, setCoins]  =  useState(0)
    function increment() {
        setCoins((previousCoins) => (previousCoins + 1))
        setCoins(previousCoins=>previousCoins+1)
        
    }

    

    return(
        <div>
            <button onClick={increment}>+</button>
            <span>{coins}</span>
            <button>-</button>
        </div>
    )

}
export default LearnUseState2;




