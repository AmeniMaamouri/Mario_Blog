
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

export const createUser = (user) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        const firestore = getFirestore();
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
        user.email,
        user.password
        ).then((res) => { 
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: user.firstName,
                lastName: user.lastName,
   
            })
         
        }).then(() => {
            dispatch({type: 'SIGN_UP_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'SIGN_UP_FAILED', err})
        })

       

    }
}