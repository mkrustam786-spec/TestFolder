import { useState,useEffect} from 'react'
import { Childcomponent } from './Childcomponent';
export const SumComponent = ()=>{
   const [Number1, setNumber1] = useState("");
   const [Number2, setNumber2] = useState("");
   const [result, setResult] = useState("");
   const [Reaciver, setReaciver] = useState("")
  useEffect(()=>{
    setResult(Number(Number1)+Number(Number2));
  },[Number1,Number2])

 useEffect(()=>{
   console.log("Reciever value changed:");
    }
 ,[])

    return (
        <>
        <input type="number" value={Number1} onChange={(e)=>setNumber1(e.target.value)}/>
        <input type="number" value={Number2} onChange={(e)=>setNumber2(e.target.value)}/>
       <p>Result:{(Number1&&Number2)?result:null}</p>
        <Childcomponent setReciever={setReaciver}/>
        <p>Received value: {Reaciver}</p>
        </>
    )
}