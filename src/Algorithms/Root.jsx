import { useNavigate } from "react-router-dom";

const Root = ()=>{
  const navigate=useNavigate();
  return (
    
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
  <div className="text-center mb-8">
    <h1 className="text-3xl font-serif text-white mb-2">Sorting Visualizer</h1>
    <p className="text-gray-400 font-serif">Click an algorithm to visualize</p>
  </div>
  
  <div className="flex flex-col gap-[10px]"> {/* Exactly 10px gap */}
    <button 
      onClick={() => navigate("/selection")}
      className="px-6 py-3 bg-blue-600 text-white font-serif rounded-lg w-48"
    >
      Selection Sort
    </button>
    
    <button 
      onClick={() => navigate("/insertion")}
      className="px-6 py-3 bg-green-600 text-white font-serif rounded-lg w-48"
    >
      Insertion Sort
    </button>
    
    <button 
      onClick={() => navigate("/bubble")}
      className="px-6 py-3 bg-purple-600 text-white font-serif rounded-lg w-48"
    >
      Bubble Sort
    </button>
  </div>
</div>
    
  )
}

export default Root;