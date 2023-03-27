import React from "react";
import {useSelector} from "react-redux";
import ProfileScreen from "./profile-screen.js";

const ProfileComponent = () => {
  const currentUser = useSelector(
                    state => state.user.user);
    console.log(currentUser);
return (
     <ProfileScreen user={currentUser}/>
);
};

export default ProfileComponent;
