import { Container, Row, Col, Form, Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Address()
{ 
let [addressl1,setAddressl1]=useState("");
let [addressl2,setAddressl2]=useState("");
let [city,setCity]=useState("");
let [pincode,setPincode]=useState("");
let [addtype,setAddtype]=useState("");
let [flag,setFlag]=useState(false);
let [useraddress,setUseraddress]=useState({});

let navigate = useNavigate()

const placeOrder=()=>{  
let add={};
add.userId=parseInt(sessionStorage.getItem("userid"));
add.addressLine1=addressl1;
add.addressLine2=addressl2;
add.city=city;
add.pincode=pincode;
add.addressType=addtype;
console.log("address",add);
axios.post("http://localhost:8080/order/address",add).then((res)=>{
    console.log("res",res.data);  alert("address registered successfully");
        alert("order is placed congrats ! ");
        navigate("/orderdetails");
    }).catch((err)=>{ console.log(err) });
}

useEffect(() => {  

    let uid=sessionStorage.getItem("userid");
    axios.get(`http://localhost:8080/order/getaddress/${uid}`,{}).
    then((res)=>{console.log("res",res.data);    
if(res.data == null)
{
    setFlag(true);
}
else
{
    // let add={};
    // add.addressLine1=res.data.addressLine1;
    // add.addressLine2=res.data.addressLine2;
    // add.city=res.data.city;
    // add.pincode=res.data.pincode;
    // add.addressType=res.data.addressType;
    // console.log("Useraddress",add);
    // sessionStorage.setItem("useraddress",add);
    navigate('/order');
}

})
    .catch((err)=>{console.log(err)});
 },[]);

    return (
        <div>
            <center><h1> Address Details :</h1>
        { {flag} &&  <Container>
                    <div class="vertical-center">
                        <Form>
                            <Form.Group className="mb-6" controlId="formGroupEmail">
                                <Form.Label>Address Line 1</Form.Label>
                                <Form.Control type="text" name="add1" onChange={(e)=>{ setAddressl1(e.target.value)   } }placeholder="Enter address line1 " />
                            </Form.Group>
                            <Form.Group className="mb-6" controlId="formGroupPassword">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control type="text" name="add2" onChange={(e)=>{ setAddressl2(e.target.value)   } } placeholder="Enter address line1" />
                            </Form.Group>
                            <Form.Group className="mb-6" controlId="formGroupPassword">
                                <Form.Label>city</Form.Label>
                                <Form.Control type="text" name="city" onChange={(e)=>{ setCity(e.target.value)   } } placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-6" controlId="formGroupPassword">
                                <Form.Label>pincode</Form.Label>
                                <Form.Control type="number" name="pincode" onChange={(e)=>{ setPincode(e.target.value) ;  } } placeholder="Enter pincode" />
                            </Form.Group>
                            <Form.Group className="mb-6" controlId="formGroupPassword">
                                <Form.Label>Address type</Form.Label>
                                <Form.Control type="text" value="shipping" name="addtype" onChange={(e)=>{ setAddtype(e.target.value)   } } placeholder="shipping" />
                            </Form.Group>
                            <br/> <br/> <br/>
                            <Link to="/">    <button onClick={()=>{placeOrder()}}  >
                             Submit and place order
                            </button > </Link> 
                        </Form>
                        
                    </div>
                </Container>}




            </center>
        </div>
    )
}