import React, {useState} from "react";
import Sidebar from "../modules/Sidebar";
import janedoe from "../../media/img/placeholder.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"

export default function Profile() {

  const [profile, setProfile] = useState({tags:[], name:"", description:""})
  const [editting, setEditting] = useState(true)
  const history = useHistory();

  const token = localStorage.getItem("token");
  const userid = localStorage.getItem('user');
  console.log(userid)
  if (token == undefined) {
    history.push("/");
  }

  return (
    <div className="content-container">
      <div className="profile-container">
        <header>
          <div className="left-container">
            <div className="header-container">
              <h1>Create Project</h1>
            </div>
          </div>
          <div className="right-container">
            <Link style={{ textDecoration: "None" }} to="#">
              <span onClick={()=>{setEditting(!editting)}}>Edit Profile</span>
            </Link>
          </div>
        </header>
        <main>
          <div className="bio-container">
            <h1>Project Name</h1>
            {
              !editting?<p>{profile?.name || "Hello World"}</p>:
              <input
                type="text"
                contentEditable="false"
                onChange={(e)=>{
                    setProfile({...profile, name:e.target.value})
                }}
              />
            }
          </div>
          <div className="bio-container">
            <h1>Project Description</h1>
            {
              !editting?<p>{profile?.name || "Hello World"}</p>:
              <input
                type="text"
                contentEditable="false"
                onChange={(e)=>{
                    setProfile({...profile, description:e.target.value})
                }}
              />
            }
          </div>
          <div className="interested-positions-containers">
            <h1>Looking for:</h1>
            <div className="interest-container">
              {profile?.tags != undefined && profile?.tags.map((tag)=>{
                const fn = () =>{
                  let newProf = {...profile}
                  var index = newProf.tags.indexOf(tag);
                  if (index !== -1) {newProf.tags.splice(index, 1);}
                  setProfile(newProf)
                }
                return <div className="interest" id="interest1">{tag}&nbsp;
                {editting&&<a href="#" onClick={fn}>
                 x
                </a>}
              </div>})}
              {editting &&
                <>
                  <input
                    type="text"
                    contentEditable="false"
                    placeholder="interested position"
                    onKeyDown={(e)=>{
                      if(e.key === 'Enter'){
                        let newProf = {...profile}
                        newProf.tags.push(e.target.value)
                        setProfile(newProf)
                      }
                    }}
                  />
                </>}
            </div>
          </div>
          {editting && <>
          <Link style={{ textDecoration: "None" }} to="#">
            <span onClick={()=>{
              axios
                .post(`https://ruhack-noise.herokuapp.com/projects`, {
                  name: profile.name,
                  description: profile.description,
                  tags: profile.tags
                },{headers: { Authorization: "Bearer " + token }})
                .then((res) => {
                  history.push("/home");
                 })
                .catch((err) => {  console.log("POST FAILED");  });
            }}>Upload Project</span>
          </Link> </>}
        </main>
      </div>
    </div>
  );
}

/*
<div className="talent-container">
  <h1>Talent Spotlight</h1>
  <div className="images-container">
    <div className="talent-entry">
      <img src="https://picsum.photos/301/200" alt="" />
    </div>
    <div className="talent-entry">
      <img src="https://picsum.photos/300/200" alt="" />
    </div>
    <div className="talent-entry">
      <img src="https://picsum.photos/300/201" alt="" />
    </div>
    <div className="talent-entry">
      <img src="https://picsum.photos/299/200" alt="" />
    </div>
  </div>
</div>
*/
