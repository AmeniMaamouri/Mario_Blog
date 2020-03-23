import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'


class CreateProject extends Component {

    state={
        title:'',
        content:''
    }

     handleSubmit = (e) =>{

        e.preventDefault();
    
        this.props.createProject(this.state)

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

            {auth.isLoaded ? !auth.isEmpty ? <div className="container">
            <form className="white" onSubmit={this.handleSubmit}>
                <h1 className="grey-text text-darken-3 titleInterface">Create Project</h1>
                    <div className="input-field">
                        
                        <label htmlFor="title">Project Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                       <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">create</button>
                    </div>
            </form>

            
        </div> : <Redirect to="/signin" /> : null} 
        </div>
            
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);