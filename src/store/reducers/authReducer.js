
const initState = {
    authError: '',
}

const authReducer = (state = initState, action) => {

    switch (action.type) {
        case 'SIGN_IN_FAILED':
            return {
                ...state,
                authError: action.err
            }

        case 'SIGN_IN_SUCCESSS':
            
            return {
                ...state,
                authError: '',
            }

            case 'SIGNOUT_SUCCESS' : 
            console.log('SIGNOUT_SUCCESS')
            return state



        default:
            break;
    }
    return state;
}

export default authReducer