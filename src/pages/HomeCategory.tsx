// import { useEffect, useState } from "react";
// import {Link} from 'react-router-dom'

// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Typography from "@mui/material/Typography/Typography";
// import ScrollCard from "../components/ScrollCard";
// import ScrollCardCategory from "../components/ScrollCardCategory";




// export type ProductType = {
//     id: number
//     name: string;
//     image_link: string;
//     price: string;
//     price_sign: string;
//     category: string;
//     description: string;
//     created_at: string;
// }


// type propType={
//     showNavbar:boolean,
//     setShowNavbar:( showNavbar:boolean)=>void
  
// }



// const HomeCategory = ({showNavbar,setShowNavbar}:propType) => {

//     useEffect(()=>{
//         setShowNavbar(true);
//     },[]);




//     const [products, setProducts] = useState<ProductType[]>([])//its an array of product type.

//     useEffect(() => {
//         try {
//             fetch('/Products.json')
//                 .then(res => res.json())
//                 .then(data => setProducts(data.slice(0, 40)))
//         }
//         catch (err) {
//             console.log("error :", err)
//         }


//     }, []);



//     return (
//         <Container maxWidth="xl" sx={{mt:0 , background:"linear-gradient(45deg, #eccccc, transparent)"}} >
//             <Container maxWidth="lg" sx={{ pt: 6 }}>

//                 {products.map(product => {
//                     return <ScrollCardCategory product={product} key={product.id} />
//                 })}

//             </Container>
//         </Container>


//     )
// }

// export default HomeCategory;



import React from 'react'

export default function HomeCategory() {
  return (
    <div>HomeCategory</div>
  )
}

