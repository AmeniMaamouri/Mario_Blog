
 import firebase from 'firebase/app'
 
export const createProject = (project) => {

    return (dispatch, getState, {getFirebase, getFiresotre}) => {

      
        firebase.firestore().collection('projects').add({
            ...project,
            authorFirstName:'net',
            authorLastName:'ninja',
            authorId: 12345,
            createdAt: new Date()

        }).then(() => {
            dispatch({
                type:'CREATE_PROJECT',
                project
            })
        }).catch((err)=> {
            dispatch({
                type:'CREATE_PROJECT_ERROR',
                err
            })
        })


     
    }

};