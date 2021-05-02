import React from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

export default function Home() {

  const history = useHistory()
  const token = localStorage.getItem('token')
  
  if(token==undefined){
    history.push("/")
  }

  axios.get(`https://ruhack-noise.herokuapp.com/projects/recommended`, {headers: {'Authorization': "Bearer "+token}})
  .then(res => {
    console.log("GOOD")
    console.log(res)
    // RES.data CONTAINS ALL THE RECOMMENDED PROJECTS
  }).catch( err =>{
    // FAILED
    console.log("LOGIN FAILED")
  })

  return (
    <React.Fragment>
      <form>
        <input type="text" />
        <input type="file" />
      </form>
    </React.Fragment>
  );
}
