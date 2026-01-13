import { useRef, useState } from "react";

import CustomAreaChart from "../CustomAreaChart";
import { bubbleSort } from "../utils/help";




const BubbleSort = () => {
  const [num, setNum] = useState("");
  const [array, setArray] = useState([]);
  const [steps,setSteps]=useState([]);
  const [currentSteps,setCurrentSteps]= useState(0);
  
  const timer=useRef();

  function handleChange() {
    const parsed = num.split(",").map((n) => Number(n.trim()));
    setArray(parsed);
    clearInterval(timer.current);
    const sorted = bubbleSort([...parsed]);
    setSteps(sorted);
    console.log(sorted)
  }

  function play(){
    let index=0;
    clearInterval(timer.current);
    timer.current=setInterval(() => {
      setCurrentSteps(index);
      index++;
      
      console.log(index)
      if(index>=steps.length){
        setCurrentSteps(steps.length-1);
        clearInterval(timer.current);

      }
    }, 1000);
  }

  function pause(){
    clearInterval(timer.current);
  }
  
  function reset(){
    clearInterval(timer.current);
    setCurrentSteps(0);
  }
  const chartData= steps.length>0 ? steps[currentSteps].array :[]; 
 
  return (
    <div className="min-h-screen bg-gray-100 p-4">
  <h1 className="text-2xl font-bold text-gray-800 mb-4">Bubble Sort</h1>
  
  <div className="bg-white rounded-lg shadow p-4 mb-4">
    <div className="mb-3">
      <label className="block text-gray-700 mb-2">Enter numbers (comma separated):</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          placeholder="5, 2, 8, 1, 9"
        />
        <button 
          onClick={handleChange}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Generate
        </button>
      </div>
    </div>

    {array.length > 0 && (
      <p className="text-gray-700">
        Array: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{JSON.stringify(array)}</span>
      </p>
    )}
  </div>

  <div className="bg-white relative flex rounded-lg shadow p-4 mb-4 relative">
    <div className="flex gap-2 mb-3">
      <button 
        onClick={play}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
      >
        Play
      </button>
      <button 
        onClick={pause}
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 cursor-pointer"
      >
        Pause
      </button>
      <button 
        onClick={reset}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
      >
        Reset
      </button>
    </div>

    <p className="text-gray-700 absolute right-10 font-bold ">Step: {currentSteps + 1} of {steps.length}</p>
  </div>

  <div className="bg-white rounded-lg shadow p-4">
    <CustomAreaChart array={chartData} />
  </div>
</div>
  );
};

export default BubbleSort;
