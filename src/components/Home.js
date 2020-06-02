import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import AppNav from './AppNav'
import { ToggleButtonGroup, ToggleButton, Row, Card } from 'react-bootstrap'

class Home extends React.Component{

	state = {
		buttonValue: '1',
		showQuestions: this.props.answeredQuestions
	}

	handleChange = (val) => {
		this.setState(() => ({
			buttonValue: val,
			showQuestions: val === '1' ? this.props.answeredQuestions : this.props.unAnsweredQuestions
		}))
	}

	render(){
		
		const { showQuestions } = this.state		
		
		return(
			<div>
				<AppNav />
				<Row className="justify-content-md-center">
					<Card style={{ width: '30rem'}}>
						<Card.Header className="text-center" variant="top">
							<ToggleButtonGroup type="radio" name="options" defaultValue={this.state.buttonValue} onChange={this.handleChange}>
							    <ToggleButton value="1">Answered Questions</ToggleButton>
							    <ToggleButton value="2">UnAnswered Questions</ToggleButton>					    
		  					</ToggleButtonGroup>
						</Card.Header>
						<Card.Body>
							<ul>
					            {showQuestions.map((id) => (
					              <li key={id}>
					                <div>
					                  <Question id={id} />
					                </div>
					              </li>
					            ))}
		          			</ul>
						</Card.Body>
					</Card>
				</ Row>
			</div>		
		)
	}
}

function mapStateToProps({questions, authedUser, users}){

	const answeredQuestions = Object.keys(users[authedUser].answers).sort((a, b) => questions[b].timeStamp - questions[a].timeStamp)
	const unAnsweredQuestions = Object.keys(questions).filter((id) => (
		!answeredQuestions.includes(id)
	)).sort((a, b) => questions[b].timeStamp - questions[a].timeStamp)

	return {
		answeredQuestions,
		unAnsweredQuestions,
		authedUser,
		users
	}

}

export default connect(mapStateToProps)(Home)




