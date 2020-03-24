import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {createUser} from '../../store/actions/authActions'

class SignUp extends Component {

    state={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    }

     handleSubmit = (e) =>{

        e.preventDefault();
        this.props.createUser(this.state)

    }

    handleChange = (e) =>{

        this.setState({  
            [e.target.id]: e.target.value
        })
       

    }

    render() {
        const {auth, authError} = this.props
    
        return (
                <div>
            { auth.isLoaded? !auth.isEmpty? <Redirect to='/' /> :

            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h1 className="grey-text text-darken-3 titleInterface">Sign Up</h1>
                        { authError ? <p className="errAuth">{authError}</p> : null}
                    <div className="input-field">
                            <label htmlFor="firstName">FirstName</label>
                            <input type="text" id="firstName" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="lastName">LastName</label>
                            <input type="text" id="lastName" onChange={this.handleChange}/>
                        </div>


                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                        </div>
                </form>

                
            </div>: null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
       authError: state.auth.authError,
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createUser : (user) => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);