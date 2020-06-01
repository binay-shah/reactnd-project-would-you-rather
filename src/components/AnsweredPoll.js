import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Col, Row, ProgressBar } from 'react-bootstrap'
import { formatQuestion, formatDate } from '../utils/helpers'

class AnsweredPoll extends Component{

	render(){
		const { question, authedUser } = this.props
		const { name, avatar, optionOne, optionTwo} = question
		const totalVotes = optionOne.votes.length + optionOne.votes.length
		const optionOneVoteCount = optionOne.votes.length
		const optionTwoVoteCount = optionTwo.votes.length
		const optionOnePercent = optionOneVoteCount/totalVotes *100;
		const optionTwoPercent = optionTwoVoteCount/totalVotes *100;

		

		
		return(
			<div>
				<Card>	
				  <Card.Header>{name} asks: </Card.Header>			  
				  <Card.Body>	
				  	<Row>
				  		<Col className='vl center' xs={4}>
				  			<img className='avatar center' src={question.avatar} alt="avatar" />
				  		</Col>
				  		<Col xs={8}>			    
						    <Row>
						    	<Col xs={12}>
						    		<Card.Text>Results:</Card.Text>
						    		<Card >
						    			<Card.Body className={ optionOne.votes.includes(authedUser)? 'user-answer': ''}>
						    				<Card.Text>
						    					{`Would you rather ${optionOne.text}?`}						    					
						    				</Card.Text>
						    				<ProgressBar now={optionOnePercent} label={`${optionOnePercent}%`} />
						    				<Card.Text className='center'>
						    					{`${optionOneVoteCount} out of  ${totalVotes} votes`}						    					
						    				</Card.Text>
						    			</Card.Body>
						    		</Card>
						    	</Col>
						    </Row>
						    <Row className='row top-buffer'>
						    	<Col xs={12}>
						    		<Card>
						    		<Card.Body className={ optionTwo.votes.includes(authedUser)? 'user-answer': ''}>
						    				<Card.Text>
						    					{`Would you rather ${optionTwo.text}?`}						    					
						    				</Card.Text>
						    				<ProgressBar now={optionTwoPercent} label={`${optionTwoPercent}%`} />
						    				<Card.Text className='center'>
						    					{`${optionTwoVoteCount} out of  ${totalVotes} votes`}						    					
						    				</Card.Text>
						    			</Card.Body>
						    		</Card>				    		
						    	</Col>				    
						    </Row>
					    </Col>	
				    </Row>			    
				  </Card.Body>
				</Card>
			</div>
		)
	}
}

function mapStateToProps({authedUser, users, questions}, {id}){

	

	const question = questions[id] 	

	return {
		authedUser,
		question: question ? formatQuestion(question, users[question.author], authedUser): null	  
	}

}

export default connect(mapStateToProps)(AnsweredPoll)