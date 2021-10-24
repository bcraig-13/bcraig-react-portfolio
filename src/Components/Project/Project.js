import React from "react";
import "./Project.css";

function Project(props) {
  return (
    
    <div className="col-md-6">
      <div className="card" style={{ width: "100%" }}>
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <hr />
          <h5 className="card-title">{props.title}</h5>
          <hr />
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-body">
          <a href={props.github} className="card-link" target="_blank" rel="noreferrer"><button type="button" className="btn btn-dark">Github Repo</button></a>
          <a href={props.deployed} className="card-link" target="_blank" rel="noreferrer"><button type="button" className="btn btn-dark">Deployed App</button></a>
        </div>
      </div>
    </div>
  );
}

export default Project;
