import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
function OurProduct() {
    return (

      <div>
      <section id="p1">
       <form>
      <div className="products">
         <div className="container">
            <div className="row">
               <div className="col-md-7">
                  <div className="titlepage">
                     <h2>Our Products</h2>
                     <span> gfgfgfgfgfgfgf Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptu
                     </span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-3 col-md-6 col-sm-6">
                  <div id="ho_bo" class="our_products">
                     <div className="product">
                        <figure><img src="../assets/images/pro1.png" alt="#" /></figure>
                     </div>
                     <h3><Link  className="nav-link"  to="/cakec"> Cake   </Link></h3>
                     <span></span>
                     <p></p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-6">
                  <div id="ho_bo" className="our_products">
                     <div className="product">
                        <figure><img src="../assets/images/pro2.png" alt="#" /></figure>
                     </div>
                     {/* <h3> <Link  className="nav-link"  to="/icec"> Ice Cream  </Link></h3> */}
                     <Link to="/card" >ice cream</Link>
                     <span></span>
                     <p> </p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-6">
                  <div id="ho_bo" className="our_products">
                     <div className="product">
                        <figure><img src="../assets/images/pro3.png" alt="#" /></figure>
                     </div>
                     <h3> <Link  className="nav-link"  to="/pastryc"> Pastry </Link></h3>

                     <span></span>
                     <p> </p>
                  </div>
               </div>

            </div>
         </div>
      </div>

      </form>
   </section>

   </div>
    )
  }
  
  export default OurProduct;