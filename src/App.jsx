
// import { SumComponent } from './Components/SumComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Users} from "./Components/Users";
// import { QueryComponent } from "./Components/QueryComponent";
import {GetInputComponent} from "./Components/GetInputComponeent";
// import { InputComponent } from "./Components/InputComponent";
import { UserComponent } from "./Components/UserComponent";

function App() {
//    
// useEffect(()=>{
//     setResult(Number(Number1)+Number(Number2));
// },[Number1,Number2])
  return (
    <>
    
    {/* <SumComponent/> */}
  <BrowserRouter>
      <Routes>
             {/* <Route path ="*" element={<InputComponent/>}/> */}
              {/* <Route path ="/profile/:name/:Roll" element={<Users/>}/> */}
              {/* <Route path ="/profile" element={<QueryComponent/>}/> */}
              <Route path ="/getinput" element={<GetInputComponent/>}/> 
              <Route path ="*" element={<UserComponent/>}/> 
               
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
