import { useId, useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
// import {useHistory} from 'react-router-dom';

import Header from './header'
import Card from '@mui/material/Card';


export default function Product(props) {
  let [imageUrl,setImageUrl] = useState()
  let [id, setId] = useState();
  let [prod, setProd] = useState([])
  let [list, setList] = useState([])
  let[flag, setFlag] = useState(false)
  let [userid,setUserid]=useState(0)
  // const history = useHistory();
  sessionStorage.setItem("prodlist",list);

  let obj = useLocation();
  let c = obj.state.cname;
 
  const getAdmin = (e) => {
  }
  console.log(c);

  function f1(x) {
  
    console.log("inside f1 prod id",x);
    // for (let i = 0; i < list.length; i++) {
    //   if (list[i] !== x) {

    let uid=sessionStorage.getItem("userid");
    let cart={}
    cart.userId=sessionStorage.getItem("userid");
    console.log("cart userid",cart.userId);
    cart.productId=x;
    cart.qty=1;
    console.log("inside f1 before axios");

    axios.post("http://localhost:8080/cart/add", cart).
    then((res) => { console.log("adding to cart",res.data);  }).catch((err) => { console.log("error adding to cart",err) });
   
    console.log("inside f1 after axios");
  }
    //   if(!list.includes(x))
    //   {
    //     // list= sessionStorage.getItem("prodlist");
    //     list.push(x);
    //     sessionStorage.setItem("prodlist",list);


    //   //   axios.get(`http://localhost:8080/product/findbycat/${x}`, {}).
    //   // then((res) => { setProd(res.data); console.log(res.data) ; console.log(res.data.image)}).
    //   // catch((err) => { console.log(err) });;
    //   }
    
    // console.log("session prodllist of id", sessionStorage.getItem("prodlist"));
    // console.log("type of session", typeof (sessionStorage.getItem("prodlist")));
  

  // const additem = (id)=>{

  // }

  useEffect(() => {
    console.log("inside useffect before axios of finding category" );
    axios.get(`http://localhost:8080/product/findbycat/${c}`, {}).
      then((res) => { setProd(res.data); console.log(res.data) ;

        const byteCharacters = atob(res.data[1].img);
         const byteNumbers = new Array(byteCharacters.length);

         for (let i = 0; i < byteCharacters.length; i++) {
           byteNumbers[i] = byteCharacters.charCodeAt(i);
         }
         const byteArray = new Uint8Array(byteNumbers);
 
         let image = new Blob([byteArray], { type: 'image/jpeg' });
         
         let imageUrl1 = URL.createObjectURL(image);
         setImageUrl(imageUrl1);
         console.log(imageUrl1);

      }).
      catch((err) => { console.log(err) });;

      let email=sessionStorage.getItem("username");
      console.log("inside useffect before axios geeting userid --email",email);

      axios.get(`http://localhost:8080/user/getId/${email}`, {}).
      then((res) => {
        setUserid(res.data); console.log("userid",res.data);let x=res.data; return x ;} ).then((x) => { 
        sessionStorage.setItem("userid",x);
         }).catch((err) => { console.log(err);});

  }, []);

console.log("products list",prod);

  return (
    <div><Header></Header>
    <div style={{ "backgroundColor": "lightblue" ,"width":"30%"}}>
      <ol>{prod.map((ele) => {
        return (<CardActionArea  >
          <Card >
            <CardMedia
              component="img"
              height="200"
              //data:image/png;base64," + yourByteArrayAsBase64
              //Buffer.from(array).toString('base64');
              image="F:\cloud\WPT\Javascipt\pro1\public\assets\images\strawberry.jpg"
              alt={ele.prodName}
            />
            <CardContent  >
              <Typography gutterBottom variant="h5" component="div">
                {ele.prodName}
              </Typography>
              
              <Typography variant="body2" color="text.secondary">
                {ele.categoryName}
                <h5>Cost:{ele.sellingPrice}</h5>
                <h5> </h5>
               <button className="btn btn-success" onClick={()=>{f1(ele.prodId)}}> ADD  TO CART  </button>
                {/* <h3> <Link   to="/prod" state={{cname:'pastry'}}> Pastry </Link></h3> */}
                 
                  {/* <Link to="cart"  state={{prodid:ele.prodId}}>Add to cart</ Link>  */}
                
                {/* <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger mt-3" onClick={history.goBack}>Back</button>
            </div> */}
                {/* <button type="button" class="btn btn-outline-primary" onClick={ getProduct} >
                  get Product
                  {/* <Link to="cart"  state={{prodid:ele.prodId}}>Add to cart</ Link>  
                </button> */}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
    
        )
      })}</ol>



    </div>
    </div>
  )

}