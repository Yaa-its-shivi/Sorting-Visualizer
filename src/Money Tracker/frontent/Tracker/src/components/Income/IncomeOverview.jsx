import { LuPlus} from "react-icons/lu" 
import CustomBar from "../Charts/CustomBar"; 
import { useEffect, useState } from "react"; 
import { prepareIncomeBarChartData } from "../../utils/Helper"; 
import CustomBarChart from "../Charts/CustomBarChart";


const IncomeOverView=({transactions,onAddIncome})=>{ 
    const [chartData,setChartData]=useState([]); 
    useEffect(()=>{ 
        const result=prepareIncomeBarChartData(transactions); 
        setChartData(result); 
        return ()=>{} 
    },[transactions]) 

    return ( 
    <div className="card"> 
        <div className="flex items-center justify-between"> 
            <div className=""> 
                <h5 className="text-lg">Income Overview</h5> 
                <p className="text-xs text-gray-400 mt-0.5"> 
                    Track Your Earning over time and analyse your income trends 
                </p> 
            </div> 
            <button className="add_btn" onClick={onAddIncome}> 
                <LuPlus className="text-lg" /> 
                Add Income 
            </button> 
            </div> 
            <div className="mt-10">
                <CustomBarChart 
                    data={chartData}
                />
            </div> 
        </div>
        )
    }
    export default IncomeOverView;