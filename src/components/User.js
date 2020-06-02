import React, { Component } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { connect } from 'react-redux'

class User extends Component{

	render(){

		const { user } = this.props
		const score = Object.keys(user.answers).length +  user.questions.length
		return(
			<Card style={{ width: '30rem'}}>
				  <Card.Body>				    
				    <Row className="justify-content-md-center">
				    	<Col className='center vl' xs={3}>
				    		<img className='avatar-small mx-auto d-block' src={user.avatarURL} alt="avatar" />
				    	</Col>
				    	<Col xs={6} className='vl'>
				    		<Card.Text>
				      			<strong>{user.name}</strong>
				    		</Card.Text>
				    		<Card.Text>
				    			Answered questions: {Object.keys(user.answers).length}
				    		</Card.Text>
				    		<hr />
				    		<Card.Text>
				    			Created questions: {user.questions.length}
				    		</Card.Text>
				    	</Col>
				    	<Col  xs={3}>
				    		<Card className="text-center">
							  <Card.Header>Score</Card.Header>
							  <Card.Body bg='success'>
							    <div  className="rounded-circle score">
							    	{score}
							    </div>
							  </Card.Body>
							  
							</Card>
				    	</Col>				    
				    </Row>				    
				  </Card.Body>
			</Card>
		)
	}
}

function mapStateToProps({users}, {id}){
	return {
		user: users[id]
	}
}

export default connect(mapStateToProps)(User)