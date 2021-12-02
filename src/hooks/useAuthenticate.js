import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";

import axios from "../services/axios";

export default function useAuthenticate(){
    const [id, setId] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const getId = window.localStorage.getItem("id");
        if(getId){
            setId(getId);
            setAuthenticated(true);
            setLoading(false);
        }else{
            setAuthenticated(false);
            setLoading(false);
        }
    }, []);

    async function SignIn({email, password}){
        try{
            const rows = await (await axios.post('/login', {
                email: email,
                password: password
            })).data;
            console.log(rows)
            if(rows){
                setId(rows._id);
                localStorage.setItem("id", rows._id);
                setAuthenticated(true);
                setLoading(false);
                history.push("/home");
            }
        }catch(e){
            return e;
        }
    }

    async function SignOut({name, email, password}){
        try{
            const rows = await (await axios.post('/user',{
                name: name,
                email: email,
                password: password
            })).data;
            setId(rows._id);
            localStorage.setItem("id", rows._id);
            setAuthenticated(true);
            setLoading(false);
            history.push("/home");
        }catch(e){
            return e;
        }
    }

    async function LogOut(){
        setId(null);
        localStorage.removeItem("id");
        setAuthenticated(false);
    }

    return {SignIn, SignOut, id, authenticated, loading, LogOut}
}
