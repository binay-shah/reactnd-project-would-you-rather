import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import User from './User'
import { Redirect } from 'react-router-dom'
import AppNav from './AppNav'

class Leaderboard extends Component{

	render(){
		const { userIds, authedUser } = this.props
		if(authedUser === null) {
			return <Redirect to='/' />
		}

		return(
			<div>
				<AppNav />
				<Row className="justify-content-md-center">
					<Col xs={6}>
						<ul>
							{userIds.map((userId) => (
								<li key={userId}><User id={userId}/></li>
							))}
						</ul>
					</Col>
				</Row>
			</div>
		)
	}
}


function mapStateToProps({users, authedUser}){
	return {
		userIds: Object.keys(users)
			.sort((a,b) => (users[b].questions.length + users[b].answers.length) -   (users[a].questions.length + users[a].answers.length)),
		authedUser	
	}
}


export default connect(mapStateToProps)(Leaderboard)