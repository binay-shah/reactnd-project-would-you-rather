import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'
import { receiveQuestions } from './questions'


const AUTHED_ID = null

export function handleInitialData(){
	return (dispatch) => {
		
		return getInitialData()
		.then(({users, questions })=> {
			dispatch(receiveUsers(users))
			dispatch(receiveQuestions(questions))			
			dispatch(setAuthedUser(AUTHED_ID))
			
		})
	}

}