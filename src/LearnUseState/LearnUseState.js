import React,{useState} from 'react';

function letsMeProve(){
    
     console.log('lets me prove')
     return 0 
    
}
// const [coins, setCoins]  =  useState({a:1, b:2})
const LearnUseState = () => {
   const [coins, setCoins]  =  useState({gold:1000, elixir:1000, gem:500, darkElixir:100})
    console.log(coins)
     const gold = coins.gold
     const elixir = coins.elixir
     const gem = coins.gem
     const darkElixir = coins.darkElixir
      // const [coins, setCoins]  =  useState(()=>{
      //   console.log('lets me prove')
      //    return 0
      // })
         // function increment(){
         //    setCoins(previousCoins => previousCoins + 1)
         //    setCoins(previousCoins => previousCoins + 1)
         // }
        //  function decrement(){
        //     setCoins(previousCoins => previousCoins - 1)
        //  }
            function increment(){
               setCoins({...coins, gold: gold+1, elixir: elixir+1, })
            }
            function decrement(){
               setCoins({...coins, gold: gold-1, elixir: elixir-1, darkElixir: darkElixir-1})
            }

      return(
         <div>
            <span>Gold : {gold}</span> <br />
             <span>elixir : {elixir}</span> <br />
             <span>gem : {gem}</span> <br />
            <span>darkElixir : {darkElixir}</span> <br />

             <button onClick={increment}>+</button> 
                 
             <button onClick={decrement}>-</button>
         </div>

     )
}

export default LearnUseState;