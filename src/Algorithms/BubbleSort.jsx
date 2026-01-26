import { useRef, useState } from "react";
import CustomAreaChart from "../CustomAreaChart";
import { bubbleSort } from "../utils/help";

import SortingDetailsCard from "./SortingDetailCard"
const BubbleSort = () => {
  const [num, setNum] = useState("");
  const [array, setArray] = useState([]);
  const [steps, setSteps] = useState([]);
  const [currentSteps, setCurrentSteps] = useState(0);

  const timer = useRef();

  function handleChange() {
    const parsed = num.split(",").map((n) => Number(n.trim()));
    setArray(parsed);
    clearInterval(timer.current);
    const sorted = bubbleSort([...parsed]);
    setSteps(sorted);
    setCurrentSteps(0);
  }

  function play() {
    let index = 0;
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      setCurrentSteps(index);
      index++;
      if (index >= steps.length) {
        setCurrentSteps(steps.length - 1);
        clearInterval(timer.current);
      }
    }, 1000);
  }

  function pause() {
    clearInterval(timer.current);
  }

  function reset() {
    clearInterval(timer.current);
    setCurrentSteps(0);
  }

  const chartData = steps.length > 0 ? steps[currentSteps].array : [];

  return (
    <div className="min-h-screen bg-gray-100 p-4 ">
      <h1 className="text-2xl flex justify-center items-center font-bold text-gray-800 mb-4">
        Bubble Sort
      </h1>

      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="mb-3">
          <label className="block flex justify-center items-center text-gray-700 mb-2">
            Enter numbers (comma separated):
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              className="flex-1  border border-gray-300 rounded px-3 py-2"
              placeholder="5, 2, 8, 1, 9"
            />
            <button
              onClick={handleChange}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Generate
            </button>
          </div>
        </div>

        {array.length > 0 && (
          <p className="text-gray-700">
            Array:{" "}
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">
              {JSON.stringify(array)}
            </span>
          </p>
        )}
      </div>

      <div className="bg-white flex items-center gap-3 rounded-lg shadow p-4 mb-4 relative">
        <button
          onClick={play}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Play
        </button>
        <button
          onClick={pause}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Pause
        </button>
        <button
          onClick={reset}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reset
        </button>

        <p className="text-gray-700 font-bold absolute right-10">
          Step: {currentSteps + 1} of {steps.length}
        </p>
      </div>

      {/* HORIZONTAL LAYOUT */}
      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[70vh]">
        {/* 70% Chart */}
        <div className="md:w-[70%] w-full bg-white rounded-lg shadow p-4 flex items-center justify-center">
          <CustomAreaChart array={chartData} />
        </div>

        {/* 30% Details Card */}
        <div className="md:w-[30%] w-full bg-white rounded-lg shadow p-4 overflow-auto">
          <SortingDetailsCard
            name="Bubble Sort"
            description="Bubble Sort scans the array repeatedly and swaps adjacent elements that are in the wrong order, causing larger elements to bubble up to the end."
            category="Comparison-Based Sorting"
            best="O(n)"
            average="O(n²)"
            worst="O(n²)"
            space="O(1)"
            stable={true}
            inPlace={true}
            useCases={[
              "Teaching sorting concepts",
              "Visualizing comparisons & swaps",
              "Sorting small datasets",
              "Understanding stability properties",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default BubbleSort;
