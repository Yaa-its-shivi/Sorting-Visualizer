
import {BrowserRouter as Router, Routes,Route, useNavigate} from "react-router-dom"
import BubbleSort from "./Algorithms/BubbleSort";
import InsertionSort from "./Algorithms/InsertionSort";
import SelectionSort from "./Algorithms/SelectionSort";
import Root from "./Algorithms/Root";

const App=()=>{
  
  return (
    
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/bubble" element={<BubbleSort />} />
        <Route path="/selection" element={<SelectionSort />} />
        <Route path="/insertion" element={<InsertionSort />} />

      </Routes>
    
  )
}

export default App;

