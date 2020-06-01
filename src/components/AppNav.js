import React from 'react'
import { Navbar, Container,  Nav, Form, FormControl, Button }  from 'react-bootstrap'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

class AppNav extends React.Component{

	handleLogout = (e) => {
		e.preventDefault()
		this.props.dispatch(setAuthedUser(null))

	}

	render(){
		return(
			
			<Navbar>
			  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
			  <Navbar.Toggle />
			  <Nav className="mr-auto">
			      <Nav.Link href="#home">Home</Nav.Link>
			      <Nav.Link href="#link">New Question</Nav.Link>
			      <Nav.Link href="#link">Leader Board</Nav.Link>
			   </Nav>   
			  <Navbar.Collapse className="justify-content-end">
			    <Navbar.Text>
			      <a href="#login">Hello, {this.props.authedUser}</a>
			    </Navbar.Text>
			    <Nav.Link onClick={this.handleLogout}>
			       Logout
			    </Nav.Link>
			  </Navbar.Collapse>
			</Navbar>	
					
		)
	}
}

export default connect((state) => ({
	authedUser: state.authedUser
}))(AppNav)