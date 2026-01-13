import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosinstance";
import toast from "react-hot-toast";
import ExpenseOverView from "../../components/Expense/ExpenseOverview";
import Modal from "../../components/Modal";
import AddExpenseForm from "../../components/Expense/AddExpenseForm";
import ExpenseList from "../../components/Expense/ExpenseList";
import DeleteAlert from "../../components/DeleteAlert";


export default function Expense(){

    const[expenseData,setExpenseData]=useState([]); 
    const [loading,setLoading]=useState(false); 
    const [openDeleteAlert,setOpenDeleteAlert]=useState({ 
           show:false, data:null,
    }); 
    const [openAddExpenseModal,setOpenAddExpenseModal]=useState(false); 

    const fetchExpenseDetails=async()=>{ 
        if(loading)return; setLoading(true); 
        try{ 
            const response=await axiosInstance.get( `${API_PATHS.EXPENSE.GET_ALL_EXPENSE}` ); 
            if(response.data){ setExpenseData(response.data); } }     
        catch(error){ console.log("Something went wrong. please try again",error); } 
        finally{ setLoading(false); } };
        //Handle add expense 
        const handleAddExpense=async(expense)=>{
            const {category,amount,date,icon}=expense;

            //validation checks
            if(!category.trim()){
                toast.error("Category is required.");
                return;
            }

            if(!amount|| isNaN(amount)||Number(amount)<=0){
                toast.error("Amount should be a valid number greater than 0.")
                return ;
            }

            if(!date){
                toast.error("Date is required.")
                return;
            }

            try{

                await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE,{
                    category,
                    amount,
                    date,
                    icon,
                });

                setOpenAddExpenseModal(false);
                toast.success("Expense added successfully");
                fetchExpenseDetails();
            }catch(error){
                console.error("Error adding income:", error.response?.data?.message|| error.message );
            }
        };

        const deleteExpense=async(id)=>{

            try{
                await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id));

                setOpenDeleteAlert({show:false,data:null});
                toast.success("Expense details deleted successfully");
                fetchExpenseDetails();

            }
            catch(error){
                console.error("Error deleting expense", error.message?.data?.message||error.message)
            }
         }; 

        //handle download income detials 
        const handleDownloadExpenseDetails=async()=>{
            try{
                const response= await axiosInstance.get(API_PATHS.EXPENSE.DOWNLOAD_EXCEL, {
                    responseType:'blob',
                }
            );

            //create URL for the blob
            const url=window.URL.createObjectURL(new Blob([response.data]));
            const link=document.createElement("a");
            link.href=url;
            link.setAttribute("download","expense_details.xlsx");
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);
            }
            catch(error){
                console.error("Error downloading expense details: ", error);
                toast.error("failed to download expense details. Please try again");
            }
        }; 
        
        useEffect(()=>{
            fetchExpenseDetails()
            return ()=>{};
        },[])
    return (
        <DashboardLayout activeMenu={"Expense"}>
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                        <div>
                        <ExpenseOverView 
                        transactions={expenseData} 
                        onAddExpense={()=> setOpenAddExpenseModal(true)} 
                        /> 
                        </div> 

                        <ExpenseList
                            transactions={expenseData}
                            onDelete={(id)=>{
                                setOpenDeleteAlert({show:true,data:id});
                            }}
                            onDownload={handleDownloadExpenseDetails}
                        />
                        <Modal 
                            isOpen={openAddExpenseModal}
                            onClose={()=>setOpenAddExpenseModal(false)}
                            title="Add Expense"
                        >
                            <AddExpenseForm 
                                onAddExpense={handleAddExpense}
                            />
                        </Modal>
                        <Modal 
                            isOpen={openDeleteAlert.show}
                            onClose={()=>setOpenDeleteAlert({ show:false,data:null})}
                            title="Delete Expense"
                        >
                            <DeleteAlert
                                content="Are you sure you want to delete this expense details?"
                                onDelete={()=> deleteExpense(openDeleteAlert.data)}
                            />

                        </Modal>
                        </div>
            </div>
        
        </DashboardLayout>
    )
}