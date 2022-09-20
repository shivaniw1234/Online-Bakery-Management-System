import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminDash() {

    let [product_name, setProduct_name] = useState("")
    let [category_name, setcategory_name] = useState("")
    let [stock, setstock] = useState("")
    let [selling_price, setSelling_price] = useState("")
    let [image, setImage] = useState()
    let navigate = useNavigate();


    function addDataHandler() {

        // console.log(item)
        axios.post('http://localhost:8080/product/add/', {
            prodName: product_name,
            categoryName: category_name,
            stock: stock,
            sellingPrice: selling_price,
            img: image
        }).then(Response => {
            if (Response.status === 200) {
                alert(" Operation Succefully  ")
                navigate("/login")
            } else {
                alert("Invalid Data format")
            }
        }).catch((error) => { alert(error.message) });

    }

    return (
        <div>
            <header className="full_bg">

                <div className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div >
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo">
                                            {/* <a href="index.html"><img src="assets/images/logo.png" alt="#" /></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarsExample04">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/about">About Us</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/ourProduct">our product</Link>
                                            </li>
                                            {/*<li className="nav-item">
                     <Link className="nav-link"  to="/gallery"></Link>
</li>*/}
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/contact">Contact Us</Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link className="nav-link" to="/product">Login</Link>
                                            </li>
                                            {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Login
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                           <a className="dropdown-item" href="https://www.facebook.com/">Admin</a>
                           <a className="dropdown-item" href="#">Farmer</a>
                           <a className="dropdown-item" href="#">Customer</a>
                        </div>
                     </li> */}



                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>


            </header>

            <body >
                <section className="vh-100" style={{ "background-color": "#b6c6d8;" }}>
                    <div className="container py-5 h-100" >
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card" style={{ "border-radius": "1rem;" }}>
                                    <div className="row g-0">
                                        <div className="col-md-8 col-lg-6 d-none d-md-block">
                                            <img src="../assets/images/bakery-login.jpg"
                                                alt="login form" style={{ "border-radius": "1rem 0 0 1rem;" }} />
                                        </div>
                                        <div className="col-md-4 col-lg-6 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">

                                                <form>

                                                    <div className="d-flex align-items-center mb-3 pb-1">
                                                        {/* <i className="fas fa-cubes fa-2x me-3" style={{"color": "#ff6219;"}}></i> */}
                                                        <span className="h1 fw-bold mb-0" style={{ "text-align": "center" }}>ADD PRODUCT</span>
                                                    </div>




                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="form2Example17">Product Name </label>
                                                        <input type="text" id="form2Example17" maxLength={"25"} name="Pname" placeholder="Enter Product Name " className="form-control form-control-lg" required onChange={(e) => { setProduct_name(e.target.value) }} />

                                                    </div>



                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="form2Example17">Category Name </label>
                                                        <input type="text" id="form2Example17" maxLength={"25"} name="Pname" placeholder="Enter Category Name " className="form-control form-control-lg" required onChange={(e) => { setcategory_name(e.target.value) }} />

                                                    </div>



                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="form2Example17">Selling Price </label>
                                                        <input type="number" id="form2Example17" maxLength={"25"} name="cost" placeholder="Enter Selling Price " className="form-control form-control-lg" required onChange={(e) => { setSelling_price(e.target.value) }} />

                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="form2Example17">Stock </label>
                                                        <input type="number" id="form2Example17" maxLength={"25"} name="cost" placeholder="Enter Stock " className="form-control form-control-lg" required onChange={(e) => { setstock(e.target.value) }} />

                                                    </div>


                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="form2Example17">Image </label>
                                                        <input type="file" id="form2Example17" maxLength={"25"} name="cost" placeholder="Add Image " className="form-control form-control-lg" required onChange={(event) => { setImage(event.target.files[0]) }} />

                                                    </div>

                                                    <div className="pt-1 mb-4">
                                                        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={addDataHandler}>Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </body>
        </div>
 )
}
