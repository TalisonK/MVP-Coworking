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

export const Createmetting = (props) => {
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
          <Link href="/home/editProfile">{getMail()}</Link>
          <span className="p-2"> | </span>
          <Link href="/">Log out</Link>
        </Collapse>
      </Navbar>
	  <div className="bodyform">
        <Form>
            
        </Form>
	  </div>
    </div>
  );
}


