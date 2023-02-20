const WhoToFollowListItem = (who) => {
    return(`
<li class="list-group-item">
<div class="row">
        <div class="col-2">
          <img src="${who.avatarIcon}" class="rounded-circle" width="55px" height="50px">
        </div>
        <div class="col-7 pt-1 pb-1 pl-2">
          <div class="d-flex align-items-center">
            <h6 class="mb-0 pe-1 fw-bold">${who.userName}</h6>
            <i class="fa fa-circle" style="font-size: 13px"></i>
          </div>
          <text class="ml-2">@${who.handle}</text>
        </div>
         <div class="col-3">
          <button class="btn btn-sm btn-primary rounded-pill mt-2 ps-3 pe-3" style="font-size: 17px">Follow</button>
        </div>
      </div>
</li>
 `);
}
export default WhoToFollowListItem;

