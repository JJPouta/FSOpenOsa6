import anecdoteService from '../services/anecdotes'


export const initAnecdotes = () => {

  return async (dispatch) => {
    const anecdoteList = await anecdoteService.getAll()
    dispatch({type: 'INIT_ANECDOTES',
    data: anecdoteList})
}
}


export const voteAnecdote = (id,updatedAnecdote) => {
  
  return async (dispatch) => {
    
    await anecdoteService.updateVotes(id,updatedAnecdote)
    dispatch({type: 'CASTVOTE',
    data: {id}})
    
  }

}

export const createAnecdote = (newAnecdoteObj) => {

return async (dispatch) => {
  
  const createdAnecdote = await anecdoteService.postNew(newAnecdoteObj)
  dispatch({ type:'ADDNEW',
  data: {createdAnecdote}})
}

}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  
  switch (action.type) {
    case 'CASTVOTE':
      const id = action.data.id
      const selectedAnecdote = state.find(a => a.id === id)
      const changedAnecdote = { 
        ...selectedAnecdote} 
        changedAnecdote.votes +=1
        return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    case 'ADDNEW':
      const newAnecdote = action.data.createdAnecdote
      return [...state,newAnecdote]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }  
}

export default reducer