const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  const changedGrade = {...state}
  switch (action.type) {
    
    case 'GOOD':
      changedGrade.good += 1
      return changedGrade
    case 'OK':
      changedGrade.ok += 1
      return changedGrade
    case 'BAD':
      changedGrade.bad += 1
      return changedGrade
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer