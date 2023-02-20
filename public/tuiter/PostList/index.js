import PostItem from './PostItem.js';
import explorePosts from './posts.js';


const PostList = () => {
    let posts = '';
    explorePosts.forEach((post) => {
        posts += PostItem(post);
    });
    return `
    <ul class="list-group">
      ${posts}
    </ul>
  `;
};
export default PostList;