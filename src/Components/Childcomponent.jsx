
export const Childcomponent = ({setReciever})=>{

   
    return (<div>
       {/* <input type="string" onChange={(e)=>setReciever(e.target.value)}/> */}
        {setReciever("Hello from child component")}
            </div>
        )
}