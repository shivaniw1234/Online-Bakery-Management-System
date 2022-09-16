import { useState } from "react"
import useEffect from "react";
export default function f1()
{
  let [prod,setProd]  =useState({prod_id:0,prod_name:"",category_name:"",selling_price:0,stock:0})


//   const FetchData = async (e) => {
//     e.preventDefault();
//    const data= await axios.get("http://localhost:8080/product/getAll",{}).
//     then((response) => {
//         console.log(response.data);
//         setProd({ prod_id:response.data.prodId,
//             prod_name:response.data.prodName,
//             category_name:response.data.categoryName,
//         selling_price:response.data.sellingPrice,
//         stock:response.data.stock
//     })
//     }).catch((e) => {
//         console.log(e);
//         alert("user not fetched")
//     }}}
    useEffect(() => {
        const FetchData = async (e) => {
            e.preventDefault();
           axios.get("http://localhost:8080/product/getAll",{}).
            then((response) => {
                console.log(response.data);
                setProd({ prod_id:response.data.prodId,
                    prod_name:response.data.prodName,
                    category_name:response.data.categoryName,
                selling_price:response.data.sellingPrice,
                stock:response.data.stock
            })
            }).catch((e) => {
                console.log(e);
                alert("user not fetched")
            }}
        
    },[]);
    render()
    {
        <div>
            {JSON.stringify}
        </div>
    }
}