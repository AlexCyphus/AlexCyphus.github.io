import React from 'react';
import ProjectBox from './ProjectBox'

// <p onClick={toggleOverlay}> test</p>
// the bubble should also be a component

function Overlay({display, toggleOverlay}) {
  return ([
    <div className="overlay project-box-container" style={{display: display}}>
      <div className="x clickable" onClick={toggleOverlay}><p className="m-0">x</p></div>
      <div className="inner-project-box-container container my-auto">
        <div className="row">
          <ProjectBox emoji="📈" projectID="1" title="User Personas" description="Using Python + machine learning to extract knowledge from ~1M data points" />
          <ProjectBox emoji="🅴" projectID="2" title="eProjects" description="Leading a team of 15 for UBC’s largest entrepreneurship club’s best year"/>
        </div>
        <div className="row">
          <ProjectBox emoji="🇨🇴" projectID="4" title="VICO" description="Graduating from Canadian business school and starting as a Spanish speaking software engineer"/>
          <ProjectBox emoji="🌎" projectID="6" title="Languages" description="My ongoing battles with the Spanish rr and German adjective endings"/>
        </div>
        <div className="row">
          <ProjectBox emoji="👨‍💻" projectID="5" title="alexcyph.us" description="Designing and developing my second personal website in Figma → Reactstrap"/>
          <ProjectBox emoji="❓" projectID="" title="Coming Soon" description="Very soon..."/>
        </div>
      </div>
    </div>
  ])
}

export default Overlay

/*

To be added later
<ProjectBox emoji="👨‍💻" projectID="5" title="alexcyph.us" description="Designing and developing my second personal website in Figma → Reactstrap"/>
<ProjectBox emoji="🏅" projectID="3" title="Certificates" description="Coming soon..."/>
*/
