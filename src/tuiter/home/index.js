import React from "react";
import posts from "./posts.json";
import PostItem from "./post-item.js";

const HomeComponent = () => {
return (
<ul className="list-group">
     {
       posts.map(post =>
         <PostItem
           key={post.id}
           post={post}/>
       )
     }
   </ul>
);
};

export default HomeComponent;
