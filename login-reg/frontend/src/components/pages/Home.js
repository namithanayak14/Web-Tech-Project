import React, {useEffect, useContext} from 'react';
import {useHistory, Route} from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home(){
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user){
            history.push("/login");
        }
    }, [userData]);
    return <h1>Home</h1>
}