const PostSummaryItem = (post) => {
    return (`
   <li class="list-group-item">
    <div class="post-summary-item row">
      <div class="col-10 post-summary-item__content">
        <div class="post-summary-item__details">
          <div class="post-summary-item__topic text-muted">${post.topic}</div>
          <div class="d-flex">
            <h6 class="post-summary-item__user">${post.userName}</h6>
            <i class="fa fa-circle mt-1 ms-1" style="font-size: 13px"></i>
            <div class="post-summary-item__time text-muted ms-2">- ${post.time}</div>
          </div>
        </div>
        <div class="post-summary-item__title">${post.title}</div>
      </div>
      <div class="col-2 post-summary-item__image p-2">
        <img src="${post.image}" alt="${post.title}" style="border-radius: 10px" height="70px" width="70px">
      </div>
    </div>
    </li>
  `);
}

export default PostSummaryItem;