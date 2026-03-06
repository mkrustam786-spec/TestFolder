import {useParams} from "react-router-dom"

export const Users = ()=>{
  const {name,Roll} = useParams()
  return (
    <div>
      <h1>user:{name},{Roll}</h1>
      
    </div>
  )
}