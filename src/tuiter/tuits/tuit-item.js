import React, { useState } from 'react';
import {ThreeDots, PatchCheckFill, Chat, HeartFill, Heart, Upload} from 'react-bootstrap-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../home/index.css";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {updateTuitThunk} from "../../services/tuits-thunks";
import { useSelector } from "react-redux";

const TuitItem = (tuits) => {

  const tuit = tuits.tuit
  console.log(tuit)
  console.log(tuit._id)
  console.log(tuit.dislikes)
  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
   dispatch(deleteTuitThunk(id));
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
                  className="col-5"
                  style={{ border: 'none', backgroundColor: 'transparent' }}>
                    <HeartFill className="wd-red" onClick={() => dispatch(updateTuitThunk({
                                                                        ...tuit,
                                                                        likes: tuit.likes + 1
                                                                      }))
                                                                      } />
                </button>
              <text className="col-6">{tuit.likes}</text></div>
              <div className="col-2 pt-1">
              <i className="col-10 bi bi-hand-thumbs-down" onClick={() => dispatch(updateTuitThunk({
                                                             ...tuit,
                                                             dislikes: tuit.dislikes + 1
                                                          })
                                                        )}></i>
              <text className="col-2">{tuit.dislikes}</text> </div>
              <button className="col-3" style={{"border":"none","background-color":"transparent"}}><Upload style={{"color":"dimgray"}}/></button>
        </div>
       </div>
     </div>
    </li>
 );
};
export default TuitItem;