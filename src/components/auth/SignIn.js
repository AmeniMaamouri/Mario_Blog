import React, { Component } from 'react';
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {

    state={
        email:'',
        password:''
    }

     handleSubmit = (e) =>{
        
        e.preventDefault();

       this.props.SignIn(this.state)
     

    }

    handleChange = (e) =>{

        this.setState({  
            [e.target.id]: e.target.value
        })
       

    }

    render() {

        const {authError, auth} = this.props
        return (
            <div>
                { auth.isLoaded? !auth.isEmpty? <Redirect to='/' /> : <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h1 className="grey-text text-darken-3 titleInterface">Sign In</h1>
                        { authError ? <p className="errAuth">{authError}</p> : null }
                        <div className="input-field">
                            
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                        </div>
                </form>

                
            </div> : null}

            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SignIn : (user) => dispatch(signIn(user))
}
}

const mapStateToProps = (state) => {
 
    
    return {
        authError : state.auth.authError,
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);