
import {BrowserRouter as Router, Routes,Route,Navigate} from "react-router-dom"
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/login";
import Expense from "./pages/Dashboard/Expense";
import Income from "./pages/Dashboard/Income";
import Home from "./pages/Dashboard/Home";
import UserProvider from "./context/useContext";
import {Toaster} from "react-hot-toast"



function App(){

    return (
        <UserProvider>
            <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Root/>}/>
                    <Route path="/login" exact element={<Login/>}/>
                    <Route path="/signUp" exact element={<Signup/>}/>
                    <Route path="/dashboard" exact element={<Home/>}/>
                    <Route path="/income" exact element={<Income/>}/>
                    <Route path="/expense" exact element={<Expense/>}/>
                    <Route/>
                </Routes>
            </Router>
            </div>

            <Toaster 
            toastOptions={{
                className:"",
                style:{
                    fontSize:'13px'

                }
            }}
            />
        </UserProvider>
    )

}

export default App;


const Root=()=>{
    //check is the token exist in the LocalStorage or not
    const isAuthenticated =!!localStorage.getItem('token');

    //redirect to dashboard if authenticated, otherwise to login
    return isAuthenticated?(
        <Navigate to="/dashboard"/>
    ):(
        <Navigate to='/login'/>
    );
};