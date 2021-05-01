import React, { Component, useState } from "react";


export default function Register(){

  const [input, setInput] = useState("");

  function handleChange(event:React.ChangeEvent<HTMLInputElement>): void{
    setInput(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void{
    event.preventDefault();
    console.log(`The submitted value is ${input}`);
    // a call to an external ts file is called here
  }

  return (
    <form onSubmit = {handleSubmit}>
      <input type="text" onChange = {handleChange}/>
      <button type = "submit">Submit</button>
    </form>
  )
}