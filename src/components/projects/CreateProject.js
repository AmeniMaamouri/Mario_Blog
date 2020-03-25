import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase';


class CreateProject extends Component {

    state={
        title:'',
        content:''
    }

     handleSubmit = (e) =>{

        e.preventDefault();
    
        this.props.createProject(this.state)

        if(!this.props.projectErr){
            this.props.history.push('/')
        }

    }

    handleChange = (e) =>{

        this.setState({  
            [e.target.id]: e.target.value
        })
       

    }

    render() {  
        const {auth} = this.props
        var html

        if (auth.isLoaded && !auth.isEmpty){
          html =  <div className="container">
            <form className="white" onSubmit={this.handleSubmit}>
                <h1 className="grey-text text-darken-3 titleInterface">Create Article</h1>
                    <div className="input-field">
                        
                        <label htmlFor="title">Article Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Article Content</label>
                       <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">create</button>
                    </div>
            </form>

            
        </div>
        }else {
            html = <Redirect to="/signin" /> 
        }

        return (
            <div>
                {html}
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
        auth: state.firebase.auth,
        projectErr: state.project.projectErr
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(() => ['projects'])
)(CreateProject);