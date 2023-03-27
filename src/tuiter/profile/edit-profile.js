import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../reducers/profile.js";
import user from "../data/user.json";
import "reactjs-popup/dist/index.css";
import "../home/index.css";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import {updateUserProfile} from '../reducers/profile.js'
const EditProfileComponent = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.user);
  const [profile, setProfile] = useState(currentUser);
  //console.log(profile)
  const dispatch = useDispatch();

  const save = () => {
    console.log("edit profile",profile)
  dispatch(updateUserProfile(profile));
  };

  function fnameHandleChange(event) {
    const newJson = {...profile}
    newJson["firstName"] = event.target.value
    setProfile(newJson)
    // setProfile(prevProfile => ({
    //   ...prevProfile,
    //   firstName: event.target.value,
    // }));
    console.log("first ," ,profile)
  }

  function lnameHandleChange(event) {
      setProfile(prevProfile => ({
        ...prevProfile,
        lastName: event.target.value,
      }));
    }

  function bioHandleChange(event) {
    setProfile(prevProfile => ({
        ...prevProfile,
        bio: event.target.value,
      }));
  }

function locationHandleChange(event) {
  setProfile(prevProfile => ({
    ...prevProfile,
    location: event.target.value,
  }));
}

  function dateOfBirthHandleChange(event) {
   setProfile(prevProfile => ({
         ...prevProfile,
         dateOfBirth: event.target.value,
       }));
  }
  function websiteHandleChange(event) {
   setProfile(prevProfile => ({
            ...prevProfile,
            website: event.target.value,
          }));
  }

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);
  function closeModal() {
    setIsOpen(false);
    navigate(-1, { replace: true });
  }
  // function afterOpenModal() {
  //   subtitle.style.color = "#f00";
  // }
  const customStyles = {
    content: {
      top: "48%",
          left: "43%",
          right: "10%",
          width: "600px",
          height: "800px",
          maxHeight: "500vh",
          marginRight: "auto",
          transform: "translate(-50%, -50%)",
          overflowY: "auto" // Add overflow-y property

    },
    overlay: {
        backgroundColor: 'transparent' // set the opacity of the overlay to 0.5
      }
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
     // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Edit profile"
    >
    <div className="row">
      <i className="bi bi-x-lg col-1 ps-26 col-1 wd-fw-800" onClick={closeModal}></i>
      <h4 className="col-9"> Edit Profile</h4>
    </div>
    <img width="650px" height="300px"
         src={user.bannerPicture}/>
    <img className="rounded-circle wd-mar-neg-5" height={150} width={150} src={`${user.profilePicture}`}/>

     <form onSubmit={(e) => { e.preventDefault(); save(); closeModal(); }}>
                       <button className="btn rounded-pill wd-save" style={{ color: "white", backgroundColor: "black", width:"100px" }} onClick={save}>save</button>

      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
          <div className="mt-3">
            <label style={{width:"100px", fontWeight:600}}>First Name</label>
            <input type = "text" value={profile.firstName}  onChange={(e) => { fnameHandleChange(e)} }></input>
          </div>
          <div>
                      <label style={{width:"100px", fontWeight:600}}>Last Name</label>
                      <input type="text" value={profile.lastName}  onChange={(e) => { lnameHandleChange(e)} }></input>
                    </div>
          <div>
            <label style={{width:"100px", fontWeight:600}}>Bio</label>
            <input type="text" value={profile.bio} onChange={(e) => { bioHandleChange(e)} }></input>
          </div>
          <div>
            <label style={{width:"100px", fontWeight:600}}>Location</label>
            <input type="text" value={profile.location} onChange={(e) => { locationHandleChange(e)} }></input>
          </div>
          <div>
            <label style={{width:"100px", fontWeight:600}}>Website</label>
            <input type="text" value={profile.website} onChange={(e) => { websiteHandleChange(e)} }></input>
          </div>
          <div>
            <label style={{width:"100px", fontWeight:600}}>Birth Date</label>
            <input type="text" value={profile.dateOfBirth} onChange={(e) => { dateOfBirthHandleChange(e)} }></input>
          </div>
          </div>

        </div>
      </li>
      </form>
    </ReactModal>
  );
};

export default EditProfileComponent;
