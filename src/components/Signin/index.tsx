import React from "react"
import { Container, Form, Logo } from "./styles";
import { FilledInput } from "@mui/material";

export const Signin = () =>{
    return(
        <Container>

           <div className="container">
            <div className="container1">CONTAINER 1</div>
            <div className="container2">
                <Form>
                    <Logo>
                        <h3>Login</h3>

                        <FilledInput
                            id="filled-adornment-weight"
                            className="input"
                            placeholder="Login"
                        />
                    </Logo>
                </Form>
            </div>
           </div>
        </Container>
    );
};