
const initState = {
    projectErr: '',

}

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Project has been created' + action.project)
            return {
                ...state,
                projectErr: ''
            }
        case 'CREATE_PROJECT_ERROR':
            console.log('create Project error' + action.err)
            return {
                ...state,
                projectErr: action.err
            }

        default:
            return state

    }



}

export default projectReducer