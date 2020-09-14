import React from 'react';
import {useHistory} from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Jumbotron, Alert, Row, Col } from 'reactstrap';
import {resetpassword, validating, change} from '../../components/forgotpass.components';

import "../../styles/login.styles.css"



export const Forgot = () => (
    <div className="back">
        <Alert color="danger" className="alertbox" id="db" >
            This is a danger alert — check it out!
        </Alert>
        <Jumbotron className="form_jumbo">
            <Form className="login-form bg-gray">
                <FormGroup>
                    <Label className="p-2 mt-10"><strong>Email para enviar chave:</strong></Label><br/>
                <Row form>
                    <Col md={8}>
                        <Input id= "emailinput" type="email" placeholder="Email" />
                    </Col>
                    <Col md={4}>
                        <Button className="btn-block" onClick={()=>{resetpassword()} }>Enviar</Button>
                    </Col>
                </Row>
                <Label  id= "forgetchaveL" className="chave"><strong>chave:</strong></Label><br/>
                <Row form id= "forgetchaveR" className="chave">
                    <Col md={8}>
                        <Input id= "validateinput" type="email" placeholder="Email" />
                    </Col>
                    <Col md = {4}>
                        <Button className="btn-block" onClick={validating}>Enviar</Button>
                    </Col>
                </Row>
                <Label id= "forgetsenhaL" className="senha"><strong>nova senha:</strong></Label><br/>
                <Row form id= "forgetsenhaR" className="senha">
                    <Col md={8}>
                        <Input id= "passwordinput" type="password" placeholder="Senha" />
                    </Col>
                    <Col md = {4}>
                        <Button className="btn-block" href="/" onClick={change}>Enviar</Button>
                    </Col>
                </Row>
                </FormGroup>
                <div className="login-links">
                    <a href="/register">sign up</a> 
                </div>
            </Form>
            
        </Jumbotron>
    </div>
)