import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Home from './Home'
import { Navbar, Container,  Nav, Form, FormControl, Button }  from 'react-bootstrap'
import QuestionPage from './QuestionPage'


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
			    </Container>
		    </Router>		    
	  	)
  }
}

export default connect((state) => ({
	authedUser: state.authedUser
}))(App);
