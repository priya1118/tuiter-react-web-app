import PostSummaryItem from './PostSummaryItem.js';
import exploreItems from './posts.js';


const PostSummaryList = () => {
    let posts = '';
    exploreItems.forEach((post) => {
        posts += PostSummaryItem(post);
    });
    return `
    <ul class="list-group">
      ${posts}
    </ul>
  `;
};
export default PostSummaryList;