

const initialState = {
    data : [],
    error:{},
    isLoading:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'UserRequest':
    return { ...state, isLoading:true }

    case 'UserSuc':
        return { ...state, isLoading:false, data:payload }

        case 'UserError':
            return { ...state, isLoading:false,error:payload }

  default:
    return state
  }
}