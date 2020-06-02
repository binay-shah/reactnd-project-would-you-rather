import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Home from './Home'
import { Container }  from 'react-bootstrap'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'


class  App extends React.Component {

	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
	render(){
		const { authedUser } = this.props

	  	return (
	  		<Router>
			    <Container>
				    <Route  path='/' exact  component={authedUser === null ? Login : Home} />
				    <Route 	path='/question/:id' component={QuestionPage} />
				    <Route 	path='/add' component={NewQuestion} />
				    <Route 	path='/leaderboard' component={Leaderboard} />			    	
			    </Container>
		    </Router>		    
	  	)
  }
}

export default connect((state) => ({
	authedUser: state.authedUser
}))(App);
