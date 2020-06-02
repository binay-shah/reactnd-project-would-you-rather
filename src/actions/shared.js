import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers, addAnswerToUser, addQuestionToUser } from './users'
import { setAuthedUser } from './authedUser'
import { receiveQuestions, addAnswerToQuestion, addQuestion } from './questions'


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

export function handleSubmitQuestionAnswer(info){
	return (dispatch) => {		
		dispatch(addAnswerToUser(info))
		dispatch(addAnswerToQuestion(info))
		return saveQuestionAnswer(info)			
	}
}

export function handleAddQuestion(question){
	return (dispatch, getState) => {		
		const  author  = getState().authedUser
		
		return saveQuestion({...question, author})
			.then((question) => {
				dispatch(addQuestionToUser(question))
				dispatch(addQuestion(question))
			}) 			
	}
}