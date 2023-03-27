import { FiArrowLeft } from 'react-icons/fi';
import "../home/index.css";
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import React from "react";

const ProfileScreen = (currentUser) =>{
const user= currentUser.user
console.log(user)
console.log(user.firstName)

return(
<div>
<div className="row">
 <a href="home.html" class="col-1">
   <button className="col" style={{"border":"none","background-color":"transparent"}}><FiArrowLeft style={{"color":"dimgray"}}/></button>
 </a>
 <div className="col">
  <h3>{user.firstName} {user.lastName}</h3>
  <h6 className="text-muted">{user.tweetsCount} Tweets</h6>
 </div>
 </div>

<img width="650px" height="300px"
     src={user.bannerPicture}/>

<img className="rounded-circle wd-mar-neg-5" height={100} width={100} src={`${user.profilePicture}`}/>
<div><Link to="/tuiter/edit-profile" className="btn btn-outline-dark rounded-pill float-end">
           Edit profile
         </Link></div>

  <div><h4>{user.firstName} {user.lastName}</h4>
   <p className="text-muted wd-neg-top">{user.handle}</p></div>
<p>{user.bio}</p>
<div className="row no-gutters">
<i class="col bi bi-geo-alt"></i>
<p className="col wd-neg-left-90">{user.location}</p>
<i class="col bi bi-balloon"></i>
<p className="col wd-neg-left-100">Born on</p>
<p className="col wd-neg-left-70">{user.dateOfBirth}</p>
<i class="col bi bi-calendar3"></i>
<p className="col wd-neg-left-100">Joined</p>
<p className="col wd-neg-left-80">{user.dateJoined}</p>

</div>
<p><b>{user.followingCount}</b> Following <b>{user.followersCount}</b> Followers</p>


</div>
);
};

export default ProfileScreen;