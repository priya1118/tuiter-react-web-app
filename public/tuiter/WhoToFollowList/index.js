import WhoToFollowListItem from './WhoToFollowListItem.js';
import who from './who.js';

const WhoToFollowList = () => {
       let items = '';
       who.forEach((user) => {
              items += WhoToFollowListItem(user);
       });
       return `
    <ul class="list-group">
     <li class="list-group-item">
     <text class="fw-bold p-0">Who to follow</text>
      ${items}
    </ul>
  `;
};

export default WhoToFollowList;




