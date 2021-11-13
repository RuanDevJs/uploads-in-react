import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import axios from "../services/axios";

export default function useUser(){
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const id = localStorage.getItem("id");
        if(id){
            setAuthenticated(true);
        }
        setLoading(false);
    }, []);

    async function Login({email, senha}){
        try{
            const rows = await (await axios.post('/login',{
                email: email,
                senha: senha
            })).data;
            return {status: 200, rows};
        }catch(e){
            return e;
        }
    }

    async function GetUserById(id){
        try{
            const rows = await (await axios.get(`user/${id}`)).data;
            return {status: 200, rows};
        }catch(e){
            return e;
        }
    }

    async function ChangeImageProfile(id, path){
        try{
            const rows = await (await axios.put(`user/${id}`, {
                image_path: path
            })).data
            return {status: 200, rows};
        }catch(e){
            return e;
        }
    }

    async function CreateUser({name, email, senha}){
        try{
            const rows = await (await axios.post('/user',{
                name: name,
                email: email,
                senha: senha
            })).data;
            setLoading(false);
            localStorage.setItem("id", rows._id);
            setAuthenticated(true);
            history.push("/home");
        }catch(e){
            return e;
        }
    }

    async function LogOut(){
        localStorage.removeItem("id");
        setAuthenticated(false);
    }

    return {Login, GetUserById, ChangeImageProfile, CreateUser, LogOut, loading, authenticated}
}
