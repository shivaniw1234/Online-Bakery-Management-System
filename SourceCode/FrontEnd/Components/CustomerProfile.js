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
let[image,setImage]=useState();
let [add1,setAdd1]=useState("");
let [add2,setAdd2]=useState("");
let [city,setCity]=useState("");
let [pincode,setPincode]=useState("");

useEffect(() => {

   let uid= sessionStorage.getItem("userid");
   console.log("userid: ",uid);
    // let address=sessionStorage.getItem("useraddress");
    // console.log("address: ",address);
    // if(address !=null){
    //     setAdd(address);
    // }
    axios.get(`http://localhost:8080/user/get/${uid}`,{}).
    then((res)=>{ setFname(res.data.firstName); 
        setLname(res.data.lastName); 
        setEmail(res.data.emailId);
        setPhone(res.data.phoneNo);
        setImage(res.data.image);
        console.log("received profile",res.data);
}).
    catch((error)=>{console.log(error);});


   let id=sessionStorage.getItem("userid");
    axios.get(`http://localhost:8080/order/getaddress/${id}`,{}).
    then((res)=>{console.log("address",res.data); 
    if(res.data !=null){
      setAdd1(res.data.addressLine1);
        setAdd2(res.data.addressLine2);
         setCity(res.data.city);
        setPincode(res.data.pincode);
        console.log("city",city);

    }

}).catch((error)=>{console.log(error);});   
    // then((res)=>{setUser(users.filter((e)=>{ return e.emailId===sessionStorage.getItem("username")}))
 },[]);
    
 

return (
    
    <div className="profile"><Header></Header>
    <center>
            <h1 style={{'textAlign':'center'}}><b><u>My Profile</u></b></h1>
    <div id='ride' >
      <div className="card">
        <div className="card-body">
        <img src={`data:image/jpg;base64,${image}`} style={{'borderRadius':'50%','height':'400px','width':'350px'}}  alt="user-img" />
        {/* <img src="..\assets\images\yadavrohit0.jpg"  /> */}
          <h1 className="card-title">{fname} {lname}</h1>
        </div>
        <ul className="list-group list-group-flush">
           <li className="list-group-item"><b>Email </b>: {email}</li>
           <li className="list-group-item"><b>Contact</b>: {phone}</li>
           <li className="list-group-item"><b>Address</b>: {add1},
           {add2} <br/> {city}-{pincode}</li>
          
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