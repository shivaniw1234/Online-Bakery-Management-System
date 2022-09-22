import axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import Header from "./header";
import { useEffect } from "react";
import { useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import React from "react";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import RemoveIcon from "@material-ui/icons/Remove";

export default function Cart(props) {
    let [prod, setProd] = useState({});
    let [pname, setPname] = useState()
    let [cname, setCname] = useState("")
    let [price, setPrice] = useState()
    let [arr, setArr] = useState([])
    let [obj2, setObj2] = useState({});
    let [arr2, setArr2] = useState([])
    let [arr3, setArr3] = useState([])
    let [qty, setQty] = useState();
    let [cart, SetCart] = useState([]);
    let[item,setItem] = useState({});
    // const [itemCount, setItemCount] = React.useState(1);
    let obj = useLocation();
    let prodid = useParams();

    console.log("param", obj);
    console.log("prodid", prodid);

    //     let id=obj.state.pid;
    // console.log("id",id);
    const qtymanage = (item, quant) => {
        console.log("item", item);
        let uid = sessionStorage.getItem("userid");
        let pid = item.prodId;
        console.log("uid", uid);
        console.log("pid", pid);
        let cartitem = {};
        cartitem.userId = uid;
        cartitem.productId = pid;
        cartitem.qty = quant;
        console.log("cartitem", cartitem);

        axios.get("http://localhost:8080/cart/update", cartitem).
            then((res) => { console.log("res", res.data); }).catch((err) => { console.log("err", err); })



    }


    const removecart = (it) => {
    
        //     windows.location=`/cart/${id}/${}`
        console.log("item", it);
        let uid = sessionStorage.getItem("userid");
        let pid = it.prodId;
        console.log("uid", uid);
        console.log("pid", pid);

        let cartitem = {};
        cartitem.userId = uid;
        cartitem.productId = pid;
        cartitem.qty = 1;
        console.log("cartitem", cartitem)

        console.log("remove");
        axios.get("http://localhost:8080/cart/remove", cartitem).then(
            (res) => { console.log("removed from cart", res.data) }).
            catch((error) => { console.log("error", error) });

    }
    // const {prid}=useParams();

    useEffect(() => {
        // console.log("id",id);
        let str = "";
        let count = 0;
        let list = sessionStorage.getItem("prodlist");
        console.log("items", list);
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
        let uid = sessionStorage.getItem("userid");

        // axios.get(`http://localhost:8080/product/findbycat/${c}`, {}).
        // then((res) => { setProd(res.data); console.log(res.data) ;


        console.log("getting cart product of user", uid);
        axios.get(`http://localhost:8080/cart/get/${uid}`, {}).
            then((res) => {
                // setPname(res.data.prodName); setCname(res.data.categoryName);
                //     setPrice(res.data.sellingPrice);
                console.log("db list", res.data);
                setArr3(res.data); 
                console.log("prod in arr", arr3);

                //             sessionStorage.setItem("prodList",res.data)   ;
                // console.log("session list",sessionStorage.getItem("prodList")) ;
                // ;arr.push({pn:pname,cn:cname,pr:price});console.log("array",arr);return arr
            }).
            //    then((obj2)=>{ arr3.push(obj2) ;console.log("obj2",obj2);
            // console.log("arr3",arr3)}).
            catch((err) => { console.log(err) });;



    }, [])

    // }

    return (
        <div>
            <Header></Header>
            <center><h1>cart products</h1>

                {/* <Link to="cart"  state={{prodid:ele.prodId}}>Add to cart</ Link>  */}
            </center>
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

            <h1> <center><table border={2} cellSpacing={100}> <thead>
                <th><td>&ensp;product Name&nbsp;&nbsp;</td>
                    <td>&nbsp;CATEGORY&nbsp;&nbsp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>Quantity&ensp;&ensp; &ensp;&nbsp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;&nbsp;&nbsp;&ensp;&nbsp;&nbsp;</td>
                    <td>Price&nbsp;&nbsp;&nbsp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&ensp; &ensp;</td>
                    <td> &nbsp;&nbsp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                </th>
            </thead><tbody> <Card >
                {
                    arr3.map((ele, index) => {
                        return (<span key={index}>
                            <tr><td>
                               item.id={ele.prodId}
                                < CardContent >
                                    <Typography gutterBottom variant="h5"  >
                                        {ele.prodName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" >
                                    </Typography>
                                </CardContent>
                            </td>

                                <td>  < CardContent>
                                    <Typography gutterBottom variant="h5" >
                                        {ele.categoryName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    </Typography>
                                </CardContent>
                                </td>

                                <td>
                                    < CardContent>
                                        <Typography gutterBottom variant="h5" component="div" >
                                            <input type="number" min="1" defaultValue="1" onChange={(e) => {
                                            item.qty=e.target.value ;;cart.push(item);
                                                qtymanage(ele, e.target.value)
                                            }} readonly />&nbsp;
                                        </Typography>
                                    </CardContent>
                                </td>
                                <td>
                                    < CardContent>
                                        <Typography gutterBottom variant="h5" component="div" >
                                            {ele.sellingPrice}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        </Typography>
                                    </CardContent>
                                </td>
                                <td>
                                    < CardContent>
                                        <Typography gutterBottom variant="h5" component="div" >
                                            <button class="btn btn-primary" onClick={() => { removecart(ele) }} > remove from cart </button>

                                        </Typography>
                                    </CardContent>
                                </td>
                            </tr> </span>)
                    })
                }
            </Card>
                    <hr></hr>  <button className="btn btn-primary"><Link to="/order">PLACE ORDER</Link></button>
                </tbody>  </table>
            </center>
            </h1>

        </div>
    )
}

{/* <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i class="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" name="quantity" value="2" type="number"
                  class="form-control form-control-sm" />

                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i class="fas fa-plus"></i>
                </button>
              </div>

      

              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i class="fas fa-minus"></i>
                </button>
                </div> */}






{/* <div style={{ display: "block", padding: 30 }}>
      <h4>How to create ShoppingCart Button in ReactJS?</h4>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div> */}



{/* <button onClick={()=> { cartoperation(ele,1)}}> + </button>&nbsp; */ }

{/* <button  > -&nbsp; </button> */ }


{/* <div>Sub Total {this.props.cartItems.reduce((x,item) => x + (item.quantity * item.prices), 0)}</div> */ }
{/* <div>Sub Total {props.cartItems.reduce((x,item) => x + (item.quantity * item.prices), 0)}</div> */ }

