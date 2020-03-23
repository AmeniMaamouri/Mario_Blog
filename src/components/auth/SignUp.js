import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class SignUp extends Component {

    state={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    }

     handleSubmit = (e) =>{

        e.preventDefault();
        console.log(this.state)

    }

    handleChange = (e) =>{

        this.setState({  
            [e.target.id]: e.target.value
        })
       

    }

    render() {
        const {auth} = this.props
        return (
                <div>
            { auth.isLoaded? !auth.isEmpty? <Redirect to='/' /> :

            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h1 className="grey-text text-darken-3 titleInterface">Sign Up</h1>

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
       
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(SignUp);