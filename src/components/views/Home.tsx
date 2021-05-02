import React from "react";
import { useHistory } from 'react-router-dom';


export default function Home() {

  const history = useHistory()
  const token = localStorage.getItem('token')
  if(token==undefined){
    history.push("/")
  }

  return (
    <React.Fragment>
      home page
    </React.Fragment>
  );
}
