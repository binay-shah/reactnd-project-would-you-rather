import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AnsweredPoll from './AnsweredPoll'
import UnAnsweredPoll from './UnAnsweredPoll'
import ErrorPage from './ErrorPage'


class QuestionPage extends Component{

	render(){
			const {id, answeredQuestions, questionIds, question} = this.props
			console.log(this.props)

			if(question === null){
				return <ErrorPage />
			}
			
		return(


			<div>
				{ answeredQuestions.includes(id) ? <AnsweredPoll id={id}/> : <UnAnsweredPoll id={id}/> }
			</div>
		)
	}
}


function mapStateToProps ({ authedUser, questions, users }, props) {
	  const { id } = props.match.params

	  const question = questions[id]? questions[id]:null

	  const answeredQuestions = question? Object.keys(users[authedUser].answers):null

	  return {
	    id,
	    answeredQuestions,
	    question
	  }
}

export default connect(mapStateToProps)(QuestionPage)