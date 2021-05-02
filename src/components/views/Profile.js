import React, {useState} from "react";
import Sidebar from "../modules/Sidebar";
import janedoe from "../../media/img/placeholder.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"

export default function Profile() {

  const [profile, setProfile] = useState(null)
  const [editting, setEditting] = useState(true)
  const history = useHistory();

  const token = localStorage.getItem("token");
  const userid = localStorage.getItem('user');
  console.log(userid)
  if (token == undefined) {
    history.push("/");
  }

  let getData = ()=>{
    axios
      .get(`https://ruhack-noise.herokuapp.com/user/`+userid, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {setProfile(res.data.user)})
      .catch((err) => {console.log("LOGIN FAILED"); });
  }

  if (profile==null){getData()}

  return (
    <div className="content-container">
      <div className="profile-container">
        <header>
          <div className="left-container">
            <div className="img-container">
              <img src={profile?.image||janedoe} alt="profile picture" />
            </div>
            <div className="header-container">
              <h1>{profile?.name || ""}</h1>
              <h2>{profile?.city || ""}</h2>
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
            <h1>Bio</h1>
            {
              !editting?<p>{profile?.bio || "Hello World"}</p>:
              <input
                type="text"
                contentEditable="false"
                placeholder=  {profile?.bio || "Hello World"}
                onChange={(e)=>{
                    setProfile({...profile, bio:e.target.value})
                }}
              />
            }
          </div>
          <div className="interested-positions-containers">
            <h1>Interested Positions</h1>
            <div className="interest-container">
              {profile?.tags.map((tag)=>{
                const fn = () =>{
                  let newProf = {...profile}
                  var index = newProf.tags.indexOf(tag);
                  if (index !== -1) {newProf.tags.splice(index, 1);}
                  setProfile(newProf)
                }
                return <div className="interest" id="interest1">{tag}
                <a href="#" onClick={fn}>
                  x
                </a>
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
          <div className="link-container">
            <h1>Portfolio Link</h1>
            <div className="input-container">
            {
              !editting?<p>{profile?.bio || "Hello World"}</p>:
              <input
                type="text"
                contentEditable="false"
                value={profile?.link || "None"}
              />
            }

            </div>
          </div>
          <div className="socials-container">
            <h1>Social Media Handles</h1>
            <div className="inner-socials-container">
              <div className="linkedin">janedoe7</div>
              <div className="github">janedoe7</div>
              <div className="devpost">janedoe7</div>
              <div className="facebook">janedoe7</div>
            </div>
          </div>
          {editting && <>
          <Link style={{ textDecoration: "None" }} to="#">
            <span onClick={()=>{
              getData()
            }}>Undo Changes</span>
          </Link><br/>
          <Link style={{ textDecoration: "None" }} to="#">
            <span onClick={()=>{
              axios
                .put(`https://ruhack-noise.herokuapp.com/user/`+userid, {
                  city: profile.city,
                  bio: profile.bio,
                  tags: profile.tags
                },{headers: { Authorization: "Bearer " + token }})
                .then((res) => {  setProfile(res.data.user); console.log("GOOD") })
                .catch((err) => {  console.log("LOGIN FAILED");  });
            }}>Save Profile</span>
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
