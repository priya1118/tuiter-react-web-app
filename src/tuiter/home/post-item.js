import React from "react";
import "./index.css";
import {ThreeDots, PatchCheckFill, Chat, Heart, Upload} from 'react-bootstrap-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostItem = (
 {
   post = {
              "dp": "/images/SpaceX.jpg",
              "userName": "SpaceX",
              "handle": "SpaceX",
              "time": "23h",
              "desc": "",
              "desc_con": "",
              "title": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon -> spacex.com/updates",
              "image": "https://th.bing.com/th/id/R.54fd8d716e02465f1943810d94fb23d5?rik=kxEJegvhwiywEQ&riu=http%3a%2f%2fspaceflightnow.com%2fwp-content%2fuploads%2f2022%2f10%2f20221012titostarship.jpg&ehk=yiJk8zGo4UwWPSzYUTfS34FJ0rwECrLNI%2bRH9PyY6LY%3d&risl=&pid=ImgRaw&r=0",
              "likes": "11.1K",
              "retweets": "1,168",
              "comments": "595",
              "type": "retweet",
              "retweet_by" : "Elon Musk",
            }
 }
) => {
 return(
  <li className="list-group-item">
  {post.type === "retweet" ? (
        <div className="row ms-3">
          <div className="col pt-1">
            <div className="row">
              <button className="col-1 me-0 pe-0" style={{ border: "none", backgroundColor: "transparent" }}>
                <FontAwesomeIcon icon={faRetweet} style={{ color: "gray" }} />
              </button>
              <text className="fw-bold col-6 ms-0 ps-0" style={{ color: "dimgray" }}>{post.retweet_by} Retweeted</text>
            </div>
          </div>
        </div>
      ) : null}
   <div className="row">
     <div className="col-1">
       <img className="rounded-circle" height={48} width={48} src={`${post.dp}`}/>
     </div>
     <div className="col-11">
       <div className="row ps-2">
       <div className="col-11">
       <div className="wd-con">
         <div className="fw-bold me-1">{post.userName}</div>
         <div className="me-2"><PatchCheckFill style={{"color":"dodgerblue"}}/></div>
         <div className="me-1 text-muted">@{post.handle}</div>
         <div className="me-1 text-muted wd-neg-top fw-bold">.</div>
         <div className="me-2 text-muted">{post.time}</div>
       </div>
       </div>
       <div className="col-1">
         <div><button style={{"border":"none","background":"transparent"}}><ThreeDots style={{"color":"dimgray"}}/></button></div>
       </div>
       </div>
      <div className="ms-2">{post.title}</div>
      <img style={{"border-radius":"20px","border":"1px solid black"}} src={post.image} alt="sometext" height={post.image_height} width="470px"/>
      <div className="wd-con row" style={{"justify-content":"space-between"}}>
            <div className="col"><div className="row"><button className="col-3" style={{"border":"none","background-color":"transparent"}}><Chat style={{"color":"dimgray"}}/></button>
            <text className="col-6 pt-1" style={{"color":"dimgray"}}>{post.comments}</text></div></div>
            <div className="col pt-1"><div className="row"><button className="col-3" style={{"border":"none","background-color":"transparent"}}><FontAwesomeIcon icon={faRetweet} style={{"color":"gray"}} /></button>
            <text className="col-6" style={{"color":"dimgray"}}>{post.retweets}</text></div></div>
            <div className="col pt-1"><div className="row"><button className="col-3" style={{"border":"none","background-color":"transparent"}}><Heart style={{"color":"dimgray"}}/></button>
            <text className="col" style={{"color":"dimgray"}}>{post.likes}</text></div></div>
            <button className="col" style={{"border":"none","background-color":"transparent"}}><Upload style={{"color":"dimgray"}}/></button>
      </div>
      <div className="pt-1" style={{"color":"dodgerblue"}}><p>Show this thread</p></div>
     </div>
   </div>
  </li>
 );
};

export default PostItem;
