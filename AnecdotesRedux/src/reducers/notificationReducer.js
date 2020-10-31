
export const setVoteNotification = (content) => {
    
    return {
        type: 'VOTE',
        content: content
        }
    
  }
  export const setCreateNotification = (anecdote) => {

    return {
        type: 'ADD_NEW',
        anecdote,
      }
  }

  export const removeNotification = () => {
    
    return {
      type: 'DEL_NOTIFICATION'
    }
  }


  const reducer = (state = null, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    
    switch (action.type) {
      case 'ADD_NEW':
        const newNotification = action.anecdote.content
        return `New anecdote added: ${newNotification}`
    case 'VOTE':
       return `You have voted ${action.content}`
    case 'DEL_NOTIFICATION':
        return null;
    default:
    return state
    }  
  }

export default reducer