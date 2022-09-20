import axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import Header from "./header";
import {useEffect} from "react";
import { useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";

export default function  Cart(props)
{
     let [prod,setProd]=useState({});
    let [pname,setPname]=useState()
    let [cname,setCname]=useState("")
    let [price,setPrice]=useState()
    let [arr,setArr]=useState([])
    let [obj2,setObj2]=useState({});
    let [arr2,setArr2]=useState([])
    let [arr3,setArr3]=useState([])

    let obj=useLocation();
    let prodid=useParams();

    console.log("param",obj);
    console.log("prodid",prodid);
    
//     let id=obj.state.pid;
// console.log("id",id);

const f1=(id)=>{
//     windows.location=`/cart/${id}/${}`

}

const {prid}=useParams();

    useEffect(() => {
        // console.log("id",id);
        let str="";
        let count=0;
       let list= sessionStorage.getItem("prodlist");      
        console.log("items",list);
//    for (let i=0; i<list.length; i++) {
//     if(list[i]!==",")
//     {   
//         str=str+list[i];
//         console.log("str",str);
//     }
//     else
//     {
//         arr2.push(str);
//         str='';
//         continue;
//         console.log("arr2",arr2);
//         console.log("str",str);
//     }
// 
    //    console.log("sessionlist",list);
    //    for(let i=0;i<list.length;i++) {
    
    //         // let str=""+list[i];
    //         console.log("string",list[i]);
    //     }
       
    // for(var j=0; j<arr2.length; j++) {
        let uid=sessionStorage.getItem("userid");

        // axios.get(`http://localhost:8080/product/findbycat/${c}`, {}).
        // then((res) => { setProd(res.data); console.log(res.data) ;


console.log("getting cart product of user",uid);
        axios.get(`http://localhost:8080/cart/get/${uid}`,{}).
        then((res)=>{ 
            // setPname(res.data.prodName); setCname(res.data.categoryName);
        //     setPrice(res.data.sellingPrice);
            console.log("db list",res.data) ;
            setArr3(res.data); 
            console.log("prod in arr",arr3);

//             sessionStorage.setItem("prodList",res.data)   ;
// console.log("session list",sessionStorage.getItem("prodList")) ;
        // ;arr.push({pn:pname,cn:cname,pr:price});console.log("array",arr);return arr
       }).
    //    then((obj2)=>{ arr3.push(obj2) ;console.log("obj2",obj2);
    // console.log("arr3",arr3)}).
        catch((err)=>{ console.log(err)});;
    },[])
        
    // }
   
    return (
        <div>
            <Header></Header>
 <button type="button" class="btn btn-outline-primary" onClick={() => {  }} >
                 cart products
                  {/* <Link to="cart"  state={{prodid:ele.prodId}}>Add to cart</ Link>  */}
                </button>
{/* <ol>{arr.map((ele)=>{  
      return ( <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { ele.pname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {ele.cname}
            <h5>Cost:{ele.price}</h5>
        </Typography>
    </CardContent>)
    })}</ol> */}
           
          <h1> <center>  <Card sx={{ maxWidth: 345 }}>
            {
                arr3.map((ele,index)=>{
return ( <span key={index}><div>
   < CardContent>
        <Typography gutterBottom variant="h5" component="div">
      {ele.prodName}
        {
            pname
        }
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      </div>
                  < CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {ele.categoryName}
        {  cname}

        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      < CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {ele.sellingprice}
        {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <button onClick={()=> { f1(ele.productId)}}> + </button>
                          5
                          <button onClick={()=>this.props.descriseQuaToCart(ele,'remove')}> - </button>
                          <button onClick={()=>this.props.deleteFromCart(ele.productId)}> Delete </button>
      <h3>
      {/* <div>Sub Total {this.props.cartItems.reduce((x,item) => x + (item.quantity * item.prices), 0)}</div> */}
      {/* <div>Sub Total {props.cartItems.reduce((x,item) => x + (item.quantity * item.prices), 0)}</div> */}
      </h3>
                  </span>)
                })
            }
            
                

         </Card>
            </center>
            </h1>
           
        </div>
    )
}