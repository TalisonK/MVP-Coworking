import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link, useHistory } from "react-router-dom"

import "../../styles/menu.styles.css";

import axios from "axios";

const  {confirmedmail, sendemail} = require("../../components/menu.components");

export const Menu = (props) => {
	const history = useHistory();

	const [confirm, setConfirm] = useState(false)

	const [isOpen, setIsOpen] = useState(false);

	function getMail(){
		const email = localStorage.getItem("user");
		return email.substr(0,email.indexOf("@"));
	}

	useEffect(() => {
		let data = {
			email:localStorage.getItem("user")
		}
		axios.post(localStorage.getItem("url") + "/email/confirmed", data, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((cond) => {
			console.log(cond.data.status)
			setConfirm(cond.data.status);
		})
	})

	function confirma(path){
		if(confirm) { history.push(path) }
		let data = { email:"email" };
		axios.post(localStorage.getItem("url") + "/email/confirmed", data, {
		  headers: {'Content-Type': 'application/json'}
	  	})
	  	.then((res) => { 
		if(res) {setConfirm(true); history.push(path)}
		});
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
				<DropdownItem onClick={() => {confirma("/home/createmetting")}}>
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
		  { confirm?<div/>:<Link to="/home/confirm" className="confirm" onClick={sendemail}>Confirmation</Link>}
		  <Link to="/home/editProfile">{getMail()}</Link>
		  <span className="p-2"> | </span>
		  <Link to="/">Log out</Link>
		</Collapse>
	  </Navbar>
	  <div>

	  </div>
	</div>
  );
}