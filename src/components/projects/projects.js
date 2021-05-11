import React from "react";
import './projects.css'
import projectList from './project-list.json'

const Projects=()=>{
    console.log("projects:" + JSON.stringify(projectList.project));
  return <ul>sdffsaf{projectList.project.map((p,key)=>{
      return <div>
        <h3>{p.title}</h3>
        <h3>{p.description}</h3>
        <h3>{p.githubLink}</h3>
      </div>
    })}</ul>
}

export default Projects


