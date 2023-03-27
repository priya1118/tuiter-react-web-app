import React, { useState } from 'react';
import {ThreeDots, PatchCheckFill, Chat, HeartFill, Heart, Upload} from 'react-bootstrap-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../home/index.css";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer.js";
import {updateTuit} from "./tuits-reducer.js";
import { useSelector } from "react-redux";

const TuitItem = (
{
tuit = {
           "_id": 234,
           "topic": "Space",
           "userName": "SpaceX",
           "time": "2h",
           "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
           "image": "SpaceX.jpg",
           "liked": true,
           "replies": 123,
           "retuits": 432,
           "likes": 2345,
           "handle": "@spacex",
           "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
}
}
) => {
  const dispatch = useDispatch();
  const updateTuitHandler = (tuit) => {
  console.log(tuit.liked)
  dispatch(updateTuit(tuit))
  };

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

 return(
    <li className="list-group-item">
     <div className="row">
       <div className="col-1">
         <img className="rounded-circle" height={48} width={48} src={`../images/${tuit.image}`}/>
       </div>
       <div className="col-11">
         <div className="row ps-2">
         <div className="col-11">
         <div className="wd-con">
           <div className="fw-bold me-1">{tuit.userName}</div>
           <div className="me-2"><PatchCheckFill style={{"color":"dodgerblue"}}/></div>
           <div className="me-1 text-muted">{tuit.handle}</div>
           <div className="me-1 text-muted wd-neg-top fw-bold">.</div>
           <div className="me-2 text-muted">{tuit.time}</div>
         </div>
         </div>
         <div className="col-1">
           <div><i className="bi bi-x-lg ps-26 col-1" onClick={() => deleteTuitHandler(tuit._id)}></i></div>
         </div>
         </div>
        <div className="ms-2">{tuit.tuit}</div>
        <div className="wd-con row" style={{"justify-content":"space-between"}}>
              <div className="col"><div className="row"><button className="col-3" style={{"border":"none","background-color":"transparent"}}><Chat style={{"color":"dimgray"}}/></button>
              <text className="col-6 pt-1" style={{"color":"dimgray"}}>{tuit.replies}</text></div></div>
              <div className="col pt-1"><div className="row"><button className="col-3" style={{"border":"none","background-color":"transparent"}}><FontAwesomeIcon icon={faRetweet} style={{"color":"gray"}} /></button>
              <text className="col-6" style={{"color":"dimgray"}}>{tuit.retuits}</text></div></div>
              <div className="col pt-1">
                <button
                  id="like-button"
                  className="col-3"
                  style={{ border: 'none', backgroundColor: 'transparent' }}>
                  {tuit.liked ? (
                    <HeartFill className="wd-red" onClick={() => updateTuitHandler(tuit)} />
                  ) : (
                    <Heart className="wd-gray" onClick={() => updateTuitHandler(tuit)} />
                  )}
                </button>
              <text className="col">{tuit.likes}</text></div>
              <button className="col" style={{"border":"none","background-color":"transparent"}}><Upload style={{"color":"dimgray"}}/></button>
        </div>
       </div>
     </div>
    </li>
 );
};
export default TuitItem;