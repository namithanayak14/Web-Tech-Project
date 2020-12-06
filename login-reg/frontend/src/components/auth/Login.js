import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";
import UserContext from "../../context/UserContext";
import ErrorNotice from "../misc/ErrorNotice";

export default function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const {setUserData} = useContext(UserContext);
    const history = useHistory();

    const submit = async(e) => {
        try{
            e.preventDefault(); //to prevent from reloading page
            const loginUser = {email, password};
            const loginRes = await Axios.post('http://localhost:5000/user/login', loginUser);
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });
            localStorage.setItem('auth-token', loginRes.data.token);
            history.push('/');
        } catch(err){
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    return (
        <div className = "page">
            <h1>Log In</h1>
            { error && (
                <ErrorNotice message = {error} clearError= {() => setError(undefined)}></ErrorNotice>
            )}
            <form className = "form" onSubmit={submit}>
                <label htmlFor="login-email">Email</label>
                <input 
                    id="login-email" 
                    type="email" 
                    onChange = {(e) => setEmail(e.target.value)}>
                </input>

                <label htmlFor="login-password">Password</label>
                <input 
                    id="login-password" 
                    type="password"
                    onChange = {(e) => setPassword(e.target.value)}>
                </input>      

                <input type = "submit" value="Log In"></input>            
            </form>
        </div>
    );
}