const PostItem = (post) => {
    return (`
   <li class="list-group-item">
   <div class="row">
   <div class="col-1">
          <img src="${post.dp}" class="rounded-circle" width="55px" height="50px">
</div>
<div class="col-10 ms-3">
<div class="post-summary-item row">
      <div class="post-summary-item__content">
        <div class="post-summary-item__details">
          <div class="d-flex">
            <h6 class="post-summary-item__user">${post.userName}</h6>
            <i class="fa fa-check-circle ms-1 mt-1" style="font-size: 13px"></i>
                      <text class="ms-2 text-muted">@${post.handle}</text>
            <div class="post-summary-item__time text-muted ms-2">- ${post.time}</div>
          </div>
        </div>
        <div class="post-summary-item__title">${post.title}</div>
        <div class="col-2 post-summary-item__image p-2">
        <img src="${post.image}" alt="${post.title}" style="border-radius: 10px" height="400px" width="450px">
      </div>
              <div class="post-summary-item__title">${post.desc}</div>
              <div class="post-summary-item__title text-muted"><p>${post.desc_con}</p></div>
              <div class="text-muted">
              <i class="mt-0 fa fa-link" style="color: dimgray">
              <text>${post.link}</text>
              </i>
              </div>
<div class="row text-muted mt-3">
<i class="col mt-0 fa fa-comment" style="color: dimgray">
              <text class="ms-2">${post.comments}</text>
              </i>
              <i class="col mt-0 fa fa-retweet" style="color: dimgray">
              <text>${post.retweets}</text>
              </i>
              <i class="col mt-0 fa fa-heart" style="color: dimgray">
              <text>${post.likes}</text>
              </i>
              <i class="col mt-0 fa fa-upload" style="color: dimgray">
              </i>
</div>

      </div>
      
    </div>
</div>
     
</div>
  
    </li>
  `);
}

export default PostItem;