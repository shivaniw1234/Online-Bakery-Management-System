import { Link, useLocation } from 'react-router-dom';
import Header from './header'

export default function Payment()
{

    


    return (
        <div>
            <Header></Header>
            <center>
                <ol><h1>Payment Mode<br></br></h1>
        <li><input type="radio" name="rad" value="payment" id="cod" />Cash On Delivery</li>
        <li><br></br><input type="radio" name="rad" value="payment" id="upi"/>UPI </li>  <br></br><br></br>
        <h2><button className="btn-primary" ><Link to="/address">proceed further</Link></button></h2>
       
           </ol>
            </center>
        </div>
    )
}