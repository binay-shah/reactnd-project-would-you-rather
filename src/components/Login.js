import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import { setAuthedUser } from '../actions/authedUser'
import { Card, Button, Form, Row } from 'react-bootstrap'

class Login extends React.Component{

	state = {
		selectedUser: 'user',
		toHome: false
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.dispatch(setAuthedUser(this.state.selectedUser ))
		const toHome = this.state.selectedUser !== 'user' ? true : false
		this.setState(() => ({
			toHome
		}))
	}

	handleChange = (e) => {
		const selectedUser = e.target.value
		this.setState(() => ({
			selectedUser
		}))
	}
 
	render(){
		const { userIds, users } = this.props
		const { selectedUser, toHome } = this.state	

		if(toHome === true){
			return <Home />
		}	
		return(
			<Row className="justify-content-md-center">				
				<Card className='text-center'>
				  <Card.Header><strong>Welcome to the would you Rather App!</strong><h6>Please Sign in to continue</h6></Card.Header>
				  <Card.Body>
				    <Card.Title><img src="../logo192.png" alt="logo" /></Card.Title>
				    <Card.Text>
							Sign In
					</Card.Text>
				    <Form onSubmit={this.handleSubmit}>
					  <Form.Group>							    
					    <Form.Control as="select"  onChange={this.handleChange}>
					    
							<option value="user">Select user</option>
							{   userIds.map((id) => (
								<option key={id} value={id}>{users[id].name}</option>	
							))}						
						</Form.Control>
					  </Form.Group>
					  <Button variant="primary" 
					  	disabled={selectedUser === 'user'} type="submit" size="lg" block>
						Sign In
						  </Button>
					</Form>	
				  </Card.Body>						  
				</Card>					
			</Row>
		)
	}
}

function mapStateToProps({users}){
	return {
		userIds: Object.keys(users),
		users
	}
}

export default connect(mapStateToProps)(Login)