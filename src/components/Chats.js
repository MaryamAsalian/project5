import React from 'react';
import styles from './Chats.module.css';
import Navbar from './Navbar';
import { auth } from "../firebase";
import { useHistory } from 'react-router-dom';
import { ChatEngine } from "react-chat-engine";
import { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import {AuthContext} from '../context/AuthContextProvider';




const Chats = () => {
    const [loading,setloading]=useState(true);
    const user =useContext(AuthContext) ;
    const history = useHistory();
useEffect(() => {
    if(!user){
        history.push("/");
        return;
    }
    axios.get("https://api.chatengine.io/users/me",{
    Headers :{
        "project-id":"0b8c9342-0e9b-49a9-8f96-6d0cb2d3ef8f",
        "user-Name":user.email ,
        "user-Secret": user.uid

    }
})
.then (()=>{
    setloading(false)
})
.catch(()=>{
    let formdata =new FormData();
    formdata.append("email",user.email);
    formdata.append("username",user.email);
    formdata.append("secret",user.uid);
    getFile(user.photoURL)
    .then(avatar=>{
        formdata.append("avatar",avatar,avatar.name)
        axios.post("https://api.chatengine.io/users/" , formdata,{
            headers:{
        "private-key":"60fd6188-34d0-4366-9e46-bfa51b93d19f"
        }})
        .then(()=>setloading(false))
        .catch(error=>console.log(error))
    })
    
})

}, [user,history]);
const getFile = async(url)=>{
    const response = await fetch(url);
    const data =await response.blob();
    return new File([data],"usefoto.jpg", {type :"image/jpg"})
}

    const logoutHandler = async () =>{
await auth.signOut();
history.push("/")
    }
    if (!user || loading) return "loading...."
    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler}/>
            <ChatEngine height="clac(100vh - 50px)" projectID="0b8c9342-0e9b-49a9-8f96-6d0cb2d3ef8f" userName={user.email} userSecret={user.uid}/>
        </div>
    );
};

export default Chats;