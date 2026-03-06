import { useSelector } from "react-redux"
export const GetInputComponent = ()=>{
    const Value = useSelector((state)=>state.user)
    return (<div>
        <h1>Get Input Component</h1>
        <p>hello{Value}</p>
    </div>)
}