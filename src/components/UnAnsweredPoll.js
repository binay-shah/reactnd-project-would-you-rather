import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Col, Row, Form } from 'react-bootstrap'
import { formatQuestion, formatDate } from '../utils/helpers'

class UnAnsweredPoll extends Component{

	state = {
		selectedOption: ''
	}

	handleOptionChange = (e) => {
		this.setState({
    		selectedOption: e.target.value
  		});
	}

	render(){
		const { question } = this.props
		console.log('question', question)
		const { name, avatar, optionOne, optionTwo} = question
		return(
			<div>
				<Card>
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
				    		<Form> 
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
				    		</Form>	
				    		<Button disabled={this.state.selectedOption==''} variant="primary" block>Submit</Button>
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
		question: formatQuestion(question, users[question.author], authedUser)	  
	}

}

export default connect(mapStateToProps)(UnAnsweredPoll)