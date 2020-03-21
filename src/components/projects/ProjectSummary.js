import React from 'react'


const ProjectSummary = ({project}) => {
    return (
      
               <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3"> 
                    <a className="card-title" href={'/project/' + project.id}>{project.title}</a>
                    <p>Posted by Ameni Maamouri</p>
                    <p className="grey-text">3rd september, 2am</p>
                </div>

            </div>
       
    )
}


export default ProjectSummary
