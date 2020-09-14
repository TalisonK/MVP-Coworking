import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col, 
  Row, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input
} from 'reactstrap';
import { Link } from "react-router-dom";

import {  } from "../../components/user.compoments";
import { editProfile } from '../../components/user.compoments';

import "../../styles/menu.styles.css"

export const EditProfile = (props) => {
  const [isOpen, setIsOpen] = useState(false);

	function getMail(){
		const email = localStorage.getItem("user");
		return email.substr(0,email.indexOf("@"));
		
	}

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="back">
      <Navbar color="light" light expand="md" className="barra">
        <NavbarBrand href="/home">Coworking</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Mettings
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/home/createmetting">
                  create Metting
                </DropdownItem>
                <DropdownItem>
                  subscribe in Metting
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  List Mettings
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
			<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Workstations
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  create Workstations
                </DropdownItem>
                <DropdownItem>
                  subscribe in Workstations
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  List Workstations
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Link to="/home/editProfile">{getMail()}</Link>
          <span className="p-2"> | </span>
          <Link to="/">Log out</Link>
        </Collapse>
      </Navbar>
	  <div className="bodyform">
      <Form>
            <FormGroup>
                <Label for="nameinput">Nome:</Label>
                <Input type="input" name="text" id="nameinput" placeholder="Nome" />
            </FormGroup>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="datainput">Data de nascimento:</Label>
                        <Input type="date" name="date" id="dateinput" placeholder="with a placeholder" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="cpfinput">CPF:</Label>
                        <Input type="input" name="cpf" id="cpfinput" placeholder="CPF" />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="adressinput">Endereço:</Label>
                <Input type="input" name="adress" id="adressinput" placeholder="Endereço" />
            </FormGroup>
            <FormGroup>
                <Label for="emailinput">Email:</Label>
                <Input type="email" name="email" id="emailinput" placeholder="Email" />
            </FormGroup>
            <FormGroup>
                <Label for="biografyinput">Biografia(opcional):</Label>
                <Input type="textarea" name="text" id="biografyinput" placeholder="Biografia" />
            </FormGroup>
                
            <Button className="editbutton" onClick={editProfile}>Confirmar</Button>
            </Form>
	  </div>
    </div>
  );
}