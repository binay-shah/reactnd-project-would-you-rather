import React from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'


class  App extends React.Component {

	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
	render(){
	  	return (
		    <div className='container'>
		      <Login />
		    </div>
	  	);
  }
}



export default connect()(App);
