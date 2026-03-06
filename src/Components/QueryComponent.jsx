import { useSearchParams } from "react-router-dom";
export const QueryComponent = ()=>{
    const [searchParam]=useSearchParams();
    const name = searchParam.get("name");
    const roll = searchParam.get("roll");
    return(
        <>
        <h2>Name: {name}</h2>
        <h2>Roll: {roll}</h2>
        </>
    )
}