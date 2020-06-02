import React, { Component } from 'react'
import { Form, Card, Button, Row, Col, FormGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'
import AppNav from './AppNav'



class NewQuestion extends Component{


	state = {
		optionOneText: '',
		optionTwoText: '',
		toHome: false
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const { optionOneText, optionTwoText }  = this.state

		this.props.dispatch(handleAddQuestion({optionOneText, optionTwoText}))
		this.setState(() => ({
			toHome: true
		}))

	}

	handleChange = (e) => {
		const target = e.target
		const value = target.value
		const name = target.name
		this.setState(() => ({
			[name]: value
		}))
	}

	render(){

		if (this.props.authedUser === null) {
      		return <Redirect to='/' />
    	}

    	if (this.state.toHome === true) {
      		return <Redirect to='/' />
    	}
		return(
			<div>
				<AppNav />
				<Row className="justify-content-md-center">
					<Col xs={5}>
						<Card>
						  <Card.Header>Create New Question</Card.Header>
						  <Card.Body>
						    <Card.Text>Complete the question</Card.Text>
						    <Card.Title>
						      Would you rather...
						    </Card.Title>
						    	<Form onSubmit={this.handleSubmit}>
						    		<FormGroup> 
							    		<Form.Control onChange={this.handleChange} value={this.state.optionOneText} type="input" name='optionOneText' placeholder="Enter optionOne text here" />
							    		<span>OR</span>
							    		<Form.Control onChange={this.handleChange} value={this.state.optionTwoText} type="input" name='optionTwoText' placeholder="Enter optionTwo text here" />						    		
						    		</FormGroup>
						    		<Button type="submit" variant="primary" block>Submit</Button>
						    	</Form>					    
						  </Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

export default connect((state) => ({
	authedUser: state.authedUser
}))(NewQuestion)