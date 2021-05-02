import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Project from "../modules/home/Project";
import Yes from "../modules/svg/Yes";
import No from "../modules/svg/No";

export default () => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const [match, setMatch] = useState(null);

  if (token == undefined) {
    history.push("/");
  }

  const getNext = ()=>{
    axios
      .get(`https://ruhack-noise.herokuapp.com/projects/recommended`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        let projects = res.data;
        let project = projects[Math.floor(Math.random() * projects.length)]
        console.log(project)
        setMatch(project)
      })
      .catch((err) => {
        // FAILED
        console.log("LOGIN FAILED");
      });
  }

  if (match==null){ getNext()}
  const getObject = ()=>{
    if(match!=null){
      return (<Project
        ownerImg={match.owner.image}
        ownerName={match.owner.name}
        city={match.owner.city}
        tags={match.tags}
        projectName={match.name}
        projectInfo={match.description}
        images={match.images}
      />)
    }
  }
  return (
    <div className="content-container">
      <div className="desc-container">
        <h1>Browse through local projects and opportunities!</h1>
        <h2>Get matched and gain experience.</h2>
        {getObject()}
      </div>
      <Project
        ownerImg="https://picsum.photos/200"
        ownerName="Dylan"
        city="Toronto"
        tags={["UX/UI Designer", "Front-End Developer"]}
        projectName="noise."
        projectInfo="Vestibulum pellentesque laoreet gravida. Cras a pretium risus. Ut urna nulla, euismod vitae erat vitae, pharetra consectetur justo. Praesent quis porta ligula, et iaculis sapien. Etiam vitae rutrum massa. Fusce id mi nisl."
        images={[
          "https://picsum.photos/200",
          "https://picsum.photos/200",
          "https://picsum.photos/200",
          "https://picsum.photos/200",
          "https://picsum.photos/200",
        ]}
      />
      <button><No /></button>
      <button><Yes /></button>
    </div>
  );
}
