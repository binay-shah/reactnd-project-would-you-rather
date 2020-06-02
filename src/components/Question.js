import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Col, Row } from 'react-bootstrap'
import { formatQuestion } from '../utils/helpers'
import { Link } from 'react-router-dom'

class Question extends Component{

	render(){
		const { question } = this.props
		const { id} = question
		return(
			
				<Card>
				  <Card.Header>{question.name} asks: </Card.Header>
				  <Card.Body>				    
				    <Row>
				    	<Col className='vl' md={4}>
				    		<img className='avatar mx-auto d-block' src={question.avatar} alt="avatar" />
				    	</Col>
				    	<Col md={8}>
				    		<Card.Title>Would you Rather</Card.Title>
				    		<Card.Text>
				      			...{question.optionOne.text}...
				    		</Card.Text>
				    		<Link to={`/question/${id}`}><Button variant="primary" block>Poll</Button></Link>
				    	</Col>				    
				    </Row>				    
				  </Card.Body>
				</Card>
			
		)
	}
}

function mapStateToProps({authedUser, users, questions}, { id }){

	const question = questions[id]  	

	return {
		authedUser,
		question: formatQuestion(question, users[question.author], authedUser)	  
	}

}

export default connect(mapStateToProps)(Question)