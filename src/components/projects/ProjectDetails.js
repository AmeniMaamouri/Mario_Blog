import React from 'react'
import {connect} from 'react-redux'

const ProjectDetails = ({project}) => {
   
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">

                <div className="card-content">

                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>
                        Posted by Ameni Maamouri
                    </div>
                    <div>
                        2nd September, 2am
                    </div>
                </div>


            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
   
    let id = ownProps.match.params.id

    return {
        project: state.project.projects.find(post => {
            return post.id == id;
        })
    }
}


export default connect(mapStateToProps)(ProjectDetails);
