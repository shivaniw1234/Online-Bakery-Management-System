import { useState } from "react"
import {useEffect} from "react";
import axios from "axios";
import React from "react";
import Header from "./header";

export default function CustomerProfile() {

let[fname,setFname]=useState("");
let[lname,setLname]=useState("");
let[email,setEmail]=useState("");
let[phone,setPhone]=useState("");

useEffect(() => {

   let uid= sessionStorage.getItem("userid");
   console.log("userid: ",uid);
    axios.get(`http://localhost:8080/user/get/${uid}`,{}).
    then((res)=>{ setFname(res.data.firstName); 
        setLname(res.data.lastName); 
        setEmail(res.data.emailId);
        setPhone(res.data.phoneNo);
        console.log("received profile",res.data);
}).
    catch((error)=>{console.log(error);});
    // then((res)=>{setUser(users.filter((e)=>{ return e.emailId===sessionStorage.getItem("username")}))
 },[]);
    
 

return (
    
    <div className="profile"><Header></Header>
    <center>
            <h1 style={{'textAlign':'center'}}><b><u>My Profile</u></b></h1>
    <div id='ride' >
      <div className="card">
        <div className="card-body">
        <img src="..\assets\images\yadavrohit0.jpg" style={{'borderRadius':'50%','height':'400px','width':'350px'}} />
          <h1 className="card-title">{fname} {lname}</h1>
        </div>
        <ul className="list-group list-group-flush">
           <li className="list-group-item"><b>Email </b>: {email}</li>
           <li className="list-group-item"><b>Contact</b>: {phone}</li>
        </ul>
       
      </div>
    </div>
    </center>
   {/* <center> <h1>USER PROFILE</h1></center>
         <img class="bg-img" color="blue"></img>
        <center>
            <ul bgcolor="yellow" style={{"width":"100%"}}>
            <thead>
                <th>firstname</th>
                <th>lastName</th>
                <th>emailId</th>
            </thead>
            <tbody>
            
        <tr>
        <td> {fname}</td>
          <td> {lname}</td>
          <td>{email}</td>

          </tr> 
       </tbody>
        </ul></center> */}
    </div>



)



}