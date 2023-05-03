import React, {FC, useState} from 'react';
import styles from './Post.module.scss'
import {PostType} from '../PostsList';

const Post: FC<PostType> = ({id, date, user, text, likes, removePost}) => {
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [likeCounter, setLikeCounter] = useState(likes);

  const onLikeHandler = () => {
    if (isLikeActive) {
      setLikeCounter(likeCounter - 1);
    } else {
      setLikeCounter(likeCounter + 1);
    }
    setIsLikeActive(!isLikeActive);
  }

  const onDeleteHandler = (id: string) => {
    removePost(id);
  }

  return (
    <div className={styles.post}>
      <div className={styles.userpic_wrapper}>
        <img className={styles.userpic}
             src={user.avatar} alt=""/>
      </div>
      <p className={styles.username}>{user.name}</p>
      <p className={styles.date}>{date}</p>
      <p className={styles.text}>{text}</p>
      <button className={isLikeActive ? `${styles.likes} ${styles.active}` : styles.likes} onClick={onLikeHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width={18} height={18} stroke="var(--accent)"
             strokeWidth="1.5" fill="none">
          <path d="M7,12.45l-5.52-5c-3-3,1.41-8.76,5.52-4.1,4.11-4.66,8.5,1.12,5.52,4.1Z"
                strokeLinecap="round"
                strokeLinejoin="round"
          />
        </svg>
        {
          likeCounter > 0 && <span className={styles.counter}>{likeCounter}</span>
        }
      </button>
      <button className={styles.delete_btn} onClick={() => onDeleteHandler(id)}></button>
    </div>
  );
};

export default Post;