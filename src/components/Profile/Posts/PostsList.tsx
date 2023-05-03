import Post from './Post/Post';
import styles from './PostsList.module.scss';
import {FC} from 'react';

export type PostsListType = {
  posts: Array<PostType>
  removePost: (id: string) => void
}

export type PostType = {
  id: string
  date: string
  user: userType
  text: string
  likes: number
  removePost: (id: string) => void
}

export type userType = {
  avatar: string
  name: string
}

const PostsList: FC<PostsListType> = ({posts, removePost}) => {
  return (
    <div className={styles.posts_wrapper}>
      {
        posts.map(post => {
          return <Post
                  key={post.id}
                  id={post.id}
                  date={post.date}
                  user={post.user}
                  text={post.text}
                  likes={post.likes}
                  removePost={removePost}
                />
        })
      }
    </div>
  );
};

export default PostsList;