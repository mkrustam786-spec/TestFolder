
// import { SumComponent } from './Components/SumComponent';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Users} from "./Components/Users";
// import { QueryComponent } from "./Components/QueryComponent";
import { Testcomponent } from "./Components/test"

function App() {
//    
// useEffect(()=>{
//     setResult(Number(Number1)+Number(Number2));
// },[Number1,Number2])
  return (
    <>
    <Testcomponent/>
    {/* <SumComponent/> */}
  <BrowserRouter>
      <Routes>
             {/* <Route path ="/" element={<h1></h1>}/> */}
              {/* <Route path ="/profile/:name/:Roll" element={<Users/>}/> */}
              {/* <Route path ="/profile" element={<QueryComponent/>}/> */}
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
