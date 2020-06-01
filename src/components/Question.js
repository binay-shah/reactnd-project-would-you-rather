import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Col, Row } from 'react-bootstrap'
import { formatQuestion, formatDate } from '../utils/helpers'
import { Link } from 'react-router-dom'

class Question extends Component{

	render(){
		const { question } = this.props
		const { id, name, avatar, optionOne, optionTwo} = question
		return(
			
				<Card>
				  <Card.Header>{question.name} asks: </Card.Header>
				  <Card.Body>
				    <Card.Title>Would you rather</Card.Title>
				    <Row>
				    	<Col className='vl' xs={4}>
				    		<img className='avatar' src={question.avatar} alt="avatar" />
				    	</Col>
				    	<Col xs={8}>
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