import Post from './Post/Post';
import styles from './PostsList.module.scss';
const PostsList = () => {
  return (
    <div className={styles.posts_wrapper}>
      <Post />
      <Post />
    </div>
  );
};

export default PostsList;