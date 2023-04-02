import React from "react";
import ExploreComponent from "./explore/index.js";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import {Routes, Route} from "react-router";
import HomeComponent from "./home/index.js";
import ProfileComponent from "./profile/index.js";
import EditProfileComponent from "./profile/edit-profile.js";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profile from "./reducers/profile.js"
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, tuitsData: tuitsReducer, user: profile}});


function Tuiter() {
  return (
    <Provider store={store}>
   <div className="row mt-2">
     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
       <NavigationSidebar active="home"/>
     </div>
     <div className="col-10 col-md-10 col-lg-7 col-xl-6"
          style={{"position": "relative"}}>
       <Routes>
                <Route path="home" element={<HomeComponent/>}/>
                <Route path="explore" element={<ExploreComponent/>}/>
                <Route path="" element={<HomeComponent/>}/>
                <Route path="profile" element={<ProfileComponent/>}/>
                <Route path="edit-profile" element={<EditProfileComponent/>}/>
       </Routes>
     </div>
     <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
       <WhoToFollowList/>
     </div>
   </div>
   </Provider>
 );
}

export default Tuiter;