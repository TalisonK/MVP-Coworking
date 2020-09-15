import React from 'react';

import { Button, Form, FormGroup, Label, Input, Jumbotron, Alert } from 'reactstrap';
import {register}  from '../../services/user.services';

import "../../styles/login.styles.css"

export const Register= () => {
    return(
        <div className="back">
            <Alert color="danger" className="alertbox" id="db" />
            <Jumbotron className="form_jumbo">
                    <Form className="login-form bg-gray">
                        <h1 className="font-weight-bold">Register</h1>
                        <FormGroup>
                            <Label>Email</Label><br/>
                            <Input id= "emailinput" type="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label><br/>
                            <Input id="passwordinput" type="password" placeholder="Password"/>
                        </FormGroup>
                        <Button className="btn-lg btn-dark btn-block" href="/" onClick={() => {register()}}> Sign up </Button>
                        <div className="login-links">
                            <a href="/">Sign in</a> 
                        </div>
                    </Form>
                </Jumbotron>
            </div>
    )
}