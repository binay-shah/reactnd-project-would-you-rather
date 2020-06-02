import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredPoll from './AnsweredPoll'
import UnAnsweredPoll from './UnAnsweredPoll'
import ErrorPage from './ErrorPage'
import { Row } from 'react-bootstrap'
import AppNav from './AppNav'
import { Redirect } from 'react-router-dom'



class QuestionPage extends Component{

	render(){
		const {id, users, question, authedUser} = this.props

		if(question === null){
				return <ErrorPage />
		}

		if (this.props.authedUser === null) {
      		return <Redirect to='/' />
    	}		

    	const answeredQuestions =  Object.keys(users[authedUser].answers)
			
		return(
			<div>
				<AppNav />
				<Row className="justify-content-md-center">
					{ answeredQuestions.includes(id) ? <AnsweredPoll id={id}/> : <UnAnsweredPoll id={id}/> }
				</Row>
			</div>
		)
	}
}


function mapStateToProps ({ authedUser, questions, users }, props) {
	  const { id } = props.match.params

	  const question = questions[id] 	  

	  return {
	    id,
	    users,
	    question,
	    authedUser
	  }
}

export default connect(mapStateToProps)(QuestionPage)