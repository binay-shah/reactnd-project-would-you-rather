import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends React.Component{

	render(){
		const { users, authedUser, answeredQuestions } = this.props
		console.log(answeredQuestions)
		
		return(
			<div>
				<div>
					<span>Logged in User: {users[authedUser].name}</span>
				</div>
				<div>
					<h3>Answered Question</h3>
					<ul>
						{answeredQuestions.map((id) => (
							<li key={id}>
								<div>
									<Question id={id} />
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
}

function mapStateToProps({questions, authedUser, users}){

	const answeredQuestions = Object.keys(users[authedUser].answers)

	return {
		answeredQuestions,
		authedUser,
		users
	}

}

export default connect(mapStateToProps)(Home)