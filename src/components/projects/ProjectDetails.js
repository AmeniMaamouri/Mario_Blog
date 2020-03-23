import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'

const ProjectDetails = ({project, auth}) => {

    return (
        <div>
        {auth.isLoaded ? !auth.isEmpty ? <div>
            { project &&  <div className="container section project-details">
            <div className="card z-depth-0">
    
                <div className="card-content">
    
                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>
                        Posted by {project.authorFirstName} {project.authorLastName}
                    </div>
                    <div>
                        2nd September, 2am
                    </div>
                </div>
    
    
            </div>
        </div> 
                 }
           </div> : <Redirect to="/signin" /> : null} 
            </div>
        
    )
}

const mapStateToProps = (state, ownProps) => {
   
    let id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;

    
    return {
        project: project,
        auth: state.firebase.auth
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => ['projects'])
)(ProjectDetails);
