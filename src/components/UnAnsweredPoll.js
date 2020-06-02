import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Col, Row, Form } from 'react-bootstrap'
import { formatQuestion } from '../utils/helpers'
import { handleSubmitQuestionAnswer } from '../actions/shared'

class UnAnsweredPoll extends Component{

	state = {
		selectedOption: ''
	}

	handleOptionChange = (e) => {
		this.setState({
    		selectedOption: e.target.value
  		});
	}



	handleSubmit = (e) => {
		e.preventDefault()
		const {qid, authedUser, dispatch} = this.props
		const answer = this.state.selectedOption
		const info = {authedUser, qid,  answer}
		console.log('info', info)
		dispatch(handleSubmitQuestionAnswer(info))
		
		//dispatch(saveQuestionAnswer({authedUser, qid, this.state.selectedOption}))

	}

	render(){
		const { question } = this.props
		console.log('question', question)
		const { name, avatar, optionOne, optionTwo} = question
		return(
			
				<Card style={{ width: '30rem'}}>
				  <Card.Header>{name} asks: </Card.Header>
				  <Card.Body>	
				  			    
				    <Row>
				    	<Col className='vl center' xs={4}>
				    		<img  className='center avatar' src={avatar} alt="avatar" />
				    	</Col>
				    	<Col xs={8}>
				    		<Card.Text>
				      			Would You Rather..
				    		</Card.Text>
				    		<Form onSubmit={this.handleSubmit}> 
				    			<Form.Check 
					    			value='optionOne'
					    			type="radio"
					    			checked={this.state.selectedOption === 'optionOne'} 
					    			label={optionOne.text}
					    			onChange={this.handleOptionChange} 
				    			/>
				    			<Form.Check 
					    			value="optionTwo"
					    			type="radio"
					    			checked={this.state.selectedOption === 'optionTwo'} 
					    			label={optionTwo.text}
					    			onChange={this.handleOptionChange} 
				    			/>
				    			<Button 
					    			disabled={this.state.selectedOption===''} 
					    			variant="primary" block
					    			type="submit"
				    			>
				    				Submit
				    			</Button>
				    		</Form>	
				    		
				    	</Col>				    
				    </Row>				    
				  </Card.Body>
				</Card>
			
		)
	}
}

function mapStateToProps({authedUser, users, questions}, {id}){

	const question = questions[id]	

	return {
		authedUser,
		question: formatQuestion(question, users[question.author], authedUser),	
		qid: id
	}

}

export default connect(mapStateToProps)(UnAnsweredPoll)