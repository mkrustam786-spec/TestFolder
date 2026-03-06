const initialState = {
user:[]
}
export const getUser =(state=initialState,action)=>{
    switch(action.type)
    {
        case "hello":
            return {...state,user:action.payload}
        default:
            return state
    }
}