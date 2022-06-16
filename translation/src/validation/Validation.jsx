import { useState } from "react";
import "./validation.css"

export const Validation = () =>
{
    //const regemail =  /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    const regexpPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const checkEmail = (e) =>
    {
        if(regemail.test(e.target.value) === false){
           setEmail(alert("Not Valid") );           
        }
        else{
            setEmail(alert('Valid'));           
        }
    }
    const checkPassword = (e) =>
    {
        if(regexpPass.test(e.target.value) === false)
        {
            setPassword(alert("Password Must have at least Minimum eight characters, at least one letter, one number and one special character"));            
        }
        else
        {
            setPassword(alert('Valid'));            
        }
    }
    return(
        <>
            <div className="container">
                <form className="form">
                    <label className>Email:</label>
                    <input type={"text"} onBlur={checkEmail} placeholder="Enter Email" />
                    <label>Password:</label>
                    <input type="password" onBlur={checkPassword} />
                </form>
            </div>


        </>
    )
}