import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component{

	render(){
		const { question } = this.props
		console.log('question', question)
		return(
			<div>
				{question.optionOne.text}
			</div>
		)
	}
}

function mapStateToProps({authedUser, users, questions}, { id }){

	const question = questions[id]
  	

	return {
		authedUser,
		question: question
	  
	}

}

export default connect(mapStateToProps)(Question)