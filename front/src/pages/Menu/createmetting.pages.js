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
import { Link, useHistory } from "react-router-dom";

import axios from 'axios';

import {  } from "../../components/user.compoments";
import { createmetting } from '../../components/metting.components';

import "../../styles/menu.styles.css"

export const Createmetting = (props) => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const[confirm, setConfirm] = useState(false);

    function getMail(){
		const email = localStorage.getItem("user");
		return email.substr(0,email.indexOf("@"));
		
  }
  
  

  const toggle = () => setIsOpen(!isOpen);

  const view = (
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
			<Label for="ownerinput">Criador da reunião:</Label>
			<Input type="input" name="text" id="ownerinput" placeholder="Criador" />
		</FormGroup>
		<FormGroup>
			<Label for="nameinput">Nome:</Label>
			<Input type="input" name="text" id="nameinput" placeholder="Nome" />
		</FormGroup>
		<FormGroup>
			<Label for="roominput">Sala:</Label>
			<Input type="input" name="input" id="roominput" placeholder="Sala" />
		</FormGroup>
		<FormGroup>
			<Label for="descriptioninput">Descrição(opcional):</Label>
			<Input type="textarea" name="text" id="descriptioninput" placeholder="Descrição" />
		</FormGroup>
		<Row form>
			<Col md={6}>
				<FormGroup>
					<Label for="hourinput">Horário:</Label>
					<Input type="input" name="horario" id="hourinput" placeholder="Horário(00:00)" />
				</FormGroup>
			</Col>
			<Col md={6}>
				<FormGroup>
					<Label for="datainput">Data de nascimento:</Label>
					<Input type="date" name="date" id="dateinput" placeholder="with a placeholder" />
				</FormGroup>
			</Col>
		</Row>
		<FormGroup>
		<Label for="membersinput">Membros:</Label>
			<Input type="textarea" name="text" id="membersinput" placeholder={`Exemplo:\njoao\nmaria`} />
		</FormGroup>
		<Button className="editbutton" onClick={createmetting}>Confirmar</Button>
        </Form>
	  </div>
    </div>
  );

  return view;
}


