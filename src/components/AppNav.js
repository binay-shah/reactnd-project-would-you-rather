import React from 'react'
import { Navbar,  Nav,  }  from 'react-bootstrap'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import { NavLink }  from 'react-router-dom'

class AppNav extends React.Component{

	handleLogout = (e) => {
		e.preventDefault()
		this.props.dispatch(setAuthedUser(null))

	}

	render(){
		return(
			
			<Navbar>
			  <Navbar.Brand href="#home"></Navbar.Brand>
			  <Navbar.Toggle />
			  <Nav className="mr-auto">
			      
			      	<NavLink to='/' className='nav' activeClassName='active'>Home</NavLink>
			      
			      
			      	<NavLink to='/add'  className='nav' activeClassName='active'>New Question</NavLink>
			      
			      
			      	<NavLink to='/leaderboard' className='nav' activeClassName='active'>Leader Board</NavLink>
			      
			   </Nav>   
			  <Navbar.Collapse className="justify-content-end">
			    <Nav.Item className='nav'>
			      <Navbar.Text>Hello, {this.props.user.name}</Navbar.Text>			      
			    </Nav.Item >
			    <Nav.Item>
			    	<img className='avatar-small mx-auto d-block' src={this.props.user.avatarURL} alt="avatar" />
			    </Nav.Item>
			    <Nav.Link onClick={this.handleLogout}>
			       Logout
			    </Nav.Link>
			  </Navbar.Collapse>
			</Navbar>	
					
		)
	}
}

function mapStateToProps({users, authedUser}){
	return {
		user: users[authedUser]
	}
	
}

export default connect(mapStateToProps)(AppNav)