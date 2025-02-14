// import { ChangeEvent, FormEvent, useState } from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";   
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import {  Controller } from 'react-hook-form';
// import { publicRequest } from './../redux/requestMethod';
// import * as Yup from 'yup';
// import Popup from "../components/Popup";
// import { DialogContent } from "@mui/material";


//     const validationSchema = Yup.object().shape({
   
//       username: Yup.string()
//         .required('username is required')
//         .min(6, 'username must be at least 6 characters')
//         .max(20, 'username must not exceed 20 characters'),
//       email: Yup.string()
//         .required('email is required')
//         .email('email is invalid'),
//       password: Yup.string()
//         .required('password is required')
//         .min(6, 'password must be at least 6 characters')
//         .max(40, 'password must not exceed 10 characters'),
//       city: Yup.string()
//         .required('city is required')
//         .min(2, 'city must be atleast 2 characters')
//         .max(15, 'city must not exceed 15 characters')  
//     });

  



// function Registration() {
//     const [buttonPopup, setButtonPopup] = useState(false)

//     const { register, handleSubmit, formState: { errors } } = useForm({
//         resolver: yupResolver(validationSchema),
//       });

      

//       const submitForm = async (data:any) => {
//         //console.log("data : ",data);
//         const user = {
//           username: data.username,
//           email: data.email,
//           password: data.password,
//           city: data.city
//         }
//         try {
//             const res = await publicRequest.post("/auth/register", user);
//             //console.log("line no : 62 response status : " + res.data)
//             if(res.statusText === 'Created'){
//                 setButtonPopup(true)
//             }else {
//                 console.log("something went wrong")
//             };
//         } catch {

//         }
//     };
   
//     return (
//         <Container component="main" maxWidth="xs">
//             <Box
//                 sx={{
//                     marginTop: 8,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center"
//                 }}
//             >
//                 <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                     Register
//                 </Typography>

//                 <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>

//                 <Box component="form"  noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(submitForm)}>
//                     <TextField
//                         margin="normal" 
//                         required
//                         fullWidth
//                         id="User Name"
//                         label="User Name"
//                         {...register('username')} 
//                         name="username"
//                         autoFocus
//                     />
//                       <p> {errors.username?.message} </p>
//                     <TextField
//                         margin="normal"
//                         required
//                         fullWidth
//                         id="email"
//                         label="email Address"
//                         {...register('email')} 
//                         name="email"
//                         type="email"
//                         autoComplete="email"
//                         autoFocus
//                     />
//                       <p> {errors.email?.message} </p>
//                     <TextField
//                         margin="normal"
//                         required
//                         fullWidth
//                         {...register('password')} 
//                         name="password"
//                         label="password"
//                         type="password"
//                         id="password"
//                         autoComplete="current-password"
//                     />
//                       <p> {errors.password?.message} </p>
//                     <TextField
//                         margin="normal" 
//                         required
//                         fullWidth
//                         id="city"
//                         label="city"
//                         {...register('city')} 
//                         name="city"
//                         autoFocus
//                     />
//                       <p> {errors.city?.message} </p>
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         sx={{ mt: 3, mb: 2 }}
                        
//                     >
//                         Sign Up
//                     </Button>
                    
//                     <Grid container>
//                         <Grid item xs>
                           
//                             <Button  
//                                 sx={{ my:1, color: 'red', display: 'block' }}
//                                 component={Link} to='/login'
//                             >
//                                Already a Reporter? Sign In
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Box>
                               
//         </Container>
//     );
// }
// export default Registration;

// import { useState } from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";   
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from 'yup';
// import Popup from "../components/Popup";
// import { publicRequest } from './../redux/requestMethod';

// const validationSchema = Yup.object().shape({
//     username: Yup.string()
//         .required('Username is required')
//         .min(6, 'Username must be at least 6 characters')
//         .max(20, 'Username must not exceed 20 characters'),
//     email: Yup.string()
//         .required('Email is required')
//         .email('Email is invalid'),
//     password: Yup.string()
//         .required('Password is required')
//         .min(6, 'Password must be at least 6 characters')
//         .max(40, 'Password must not exceed 10 characters'),
//     city: Yup.string()
//         .required('City is required')
//         .min(2, 'City must be at least 2 characters')
//         .max(15, 'City must not exceed 15 characters')
// });

// function Registration() {
//     const [buttonPopup, setButtonPopup] = useState(false);
//     const [selectedFile, setSelectedFile] = useState<File | null>(null);

//     const { register, handleSubmit, formState: { errors } } = useForm({
//         resolver: yupResolver(validationSchema),
//     });

//     // Handle file selection
//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files.length > 0) {
//             setSelectedFile(e.target.files[0]);
//         }
//     };

//     const submitForm = async (data: any) => {
//         if (!selectedFile) {
//             alert("Please select a PDF file.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("username", data.username);
//         formData.append("email", data.email);
//         formData.append("password", data.password);
//         formData.append("city", data.city);
//         formData.append("file", selectedFile); // Attach PDF file

//         try {
//             const res = await publicRequest.post("/auth/register", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });

//             if (res.statusText === "Created") {
//                 setButtonPopup(true);
//             } else {
//                 console.log("Something went wrong");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     };

//     return (
//         <Container component="main" maxWidth="xs">
//             <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
//                 <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                     Details
//                 </Typography>

//                 <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />

//                 <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(submitForm)}>
//                     <TextField fullWidth label="User Name" {...register("username")} />
//                     <p>{errors.username?.message}</p>

//                     <TextField fullWidth label="Email Address" {...register("email")} type="email" />
//                     <p>{errors.email?.message}</p>

//                     <TextField fullWidth label="Password" {...register("password")} type="password" />
//                     <p>{errors.password?.message}</p>

//                     <TextField fullWidth label="City" {...register("city")} />
//                     <p>{errors.city?.message}</p>

//                     {/* File Input for PDF */}
//                     <input type="file" accept="application/pdf" onChange={handleFileChange} required />
                    
//                     <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
//                         Apply
//                     </Button>

//                     <Grid container>
//                         <Grid item xs>
//                             <Button sx={{ my:1, color: 'red', display: 'block' }} component={Link} to='/login'>
//                                 Already a Reporter? Sign In
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Box>
//         </Container>
//     );
// }

// export default Registration;

import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Popup from "../components/Popup";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { publicRequest } from "./../redux/requestMethod";

const GOOGLE_CLIENT_ID = "595337100847-c6eir6a6knseqkucgnd9l4depjm0j7o6.apps.googleusercontent.com";

interface FormData {
    username: string;
    email: string;
    password: string;
    city: string;
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required").min(6).max(20),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required").min(6).max(10),
    city: Yup.string().required("City is required").min(2).max(15),
});

function Registration() {
    const [buttonPopup, setButtonPopup] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const submitForm = async (data: FormData) => {
        if (!selectedFile) {
            alert("Please select a PDF file.");
            return;
        }

        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("city", data.city);
        formData.append("file", selectedFile);

        try {
            const res = await publicRequest.post("/auth/register", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            if (res.status === 201) setButtonPopup(true);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleGoogleSuccess = async (response: CredentialResponse) => {
        try {
            if (response.credential) {
                const res = await publicRequest.post("/auth/google/callback", {
                    token: response.credential,
                });
                console.log("Google OAuth Success:", res.data);
            }
        } catch (error) {
            console.error("Google OAuth Error:", error);
        }
    };

    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <Container component="main" maxWidth="xs">
                <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">Details</Typography>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
                    <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(submitForm)}>
                        <TextField fullWidth label="User Name" {...register("username")} />
                        <p>{errors.username?.message}</p>
                        <TextField fullWidth label="Email Address" {...register("email")} type="email" />
                        <p>{errors.email?.message}</p>
                        <TextField fullWidth label="Password" {...register("password")} type="password" />
                        <p>{errors.password?.message}</p>
                        <TextField fullWidth label="City" {...register("city")} />
                        <p>{errors.city?.message}</p>
                        <input type="file" accept="application/pdf" onChange={handleFileChange} required />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Apply</Button>
                        <Grid container>
                            <Grid item xs>
                                <Button sx={{ my: 1, color: "red", display: "block" }} component={Link} to="/login">Already a Reporter? Sign In</Button>
                            </Grid>
                        </Grid>
                        <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => console.log("Google Login Failed")} />
                    </Box>
                </Box>
            </Container>
        </GoogleOAuthProvider>
    );
}

export default Registration;
