/* eslint-env jquery */
import PostSummaryList from "../PostSummaryList";
const ExploreComponent = () => {
    let list = PostSummaryList();
    return `
    <div class="row pb-2">
            <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 wd-rounded-corners-all-around wd-search-border ms-2 me-2" style="background: white; height: 37px;">
                <div class="row" style="width: 100%">
                    <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 me-0">
                        <i class="fa fa-search wd-trans mt-2 me-0" style="color: dimgray" id="basic-addon1"></i>
                    </div>
                    <input type="text" class="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 text-xxl-start wd-border-trans mt-1 wd-neg-mar-left-1" placeholder="Search Tuiter">
                </div>
            </div>
            <i class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 fa fa-cog fa-2x ms-4"style="color: steelblue"></i>
        </div>
        <div class="row p-2"style="height: 50px">
    
                    <div class="col"style="background: steelblue"><a class="col wd-no-underline fw-bold" href="for-you.html"><text class="p-3" style="color: white">For You</text></a></div>   
  
                        <a class="col wd-no-underline wd-dark-gray fw-bold" href="trending.html"><text style="color: white">Trending</text></a>
 
                       <a class="col wd-no-underline wd-dark-gray fw-bold" href="news.html"><text style="color: white">News</text></a>
            <a class="col wd-no-underline wd-dark-gray fw-bold" href="sports.html"><text style="color: white">Sports</text></a>

            <a class="col wd-no-underline wd-dark-gray fw-bold" href="entertainment.html"><text style="color: white">Entertainment</text></a>
        </div>
        <div class="text-on-image" style="background-image: url(https://cdn.bignewsnetwork.com/cus1675738874062.jpg); width: 100%">
            <div class="texty">
                <h3>SpaceX's Starship</h3>
            </div>
        </div>
      ${list}
  `;
};
export default ExploreComponent;

