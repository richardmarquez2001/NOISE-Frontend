import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Project from "../modules/home/Project";
import Yes from "../modules/svg/Yes";
import No from "../modules/svg/No";

export default function Home() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  if (token == undefined) {
    history.push("/");
  }

  axios
    .get(`https://ruhack-noise.herokuapp.com/projects/recommended`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      console.log("GOOD");
      console.log(res);
      // RES.data CONTAINS ALL THE RECOMMENDED PROJECTS
    })
    .catch((err) => {
      // FAILED
      console.log("LOGIN FAILED");
    });

  return (
    <div className="content-container">
      <div className="desc-container">
        <h1>Browse through local projects and opportunities!</h1>
        <h2>Get matched and gain experience.</h2>
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
