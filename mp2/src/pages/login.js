import Logo from '../assets/logo.png'
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newLogin = {
          "email": email,
          "password": password
        }
    
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newLogin)
          });
    
          const data = await response.json();
    
          console.log(data);
    
          if (data.Code === "200") {
            setSuccessMsg(data.Msg);
            navigate('/home');
          } else {
            setSuccessMsg("Login failed!")
        }

    };

    return(

        <div className="Login">

            <div className='login__main'>
                <img src={Logo} alt="logo" className="logo"/>
                <p className="logoName">ABC Tech Inc.</p>
                <br/>
                <div className='successMsg'>{successMsg}</div>
                <Form className='fields' onSubmit = {handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        className='ui' 
                        value = {email} 
                        onChange = { (e) => setEmail(e.target.value) }
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        className='ui' 
                        value = {password} 
                        onChange = { (e) => setPassword(e.target.value) }
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupSubmit">
                        <Form.Control 
                        type="submit" 
                        className='ui' 
                        value = "Login"
                    />
                    </Form.Group>
                </Form>
            </div>

        </div>

    )

}

export default Login