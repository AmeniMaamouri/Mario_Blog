
export const signIn = (user) => {

    return (dispatch, getState, {getFirebase}) => {
        
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            user.email,
            user.password
        ).then(() => {
            dispatch({type: 'SIGN_IN_SUCCESSS'})
        }).catch(err => {
            dispatch({type: 'SIGN_IN_FAILED', err : err.message})
           
        }) 

       
    }

}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        
        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        })
    }
}