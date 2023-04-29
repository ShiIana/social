import React, {useState} from 'react';
import styles from './Post.module.scss'

const Post = () => {
  console.log(styles);
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [likeCounter, setLikeCounter] = useState(0);
  const onClickHandler = () => {
    if (isLikeActive) {
      setLikeCounter(likeCounter - 1);
    } else {
      setLikeCounter(likeCounter + 1);
    }

    setIsLikeActive(!isLikeActive);
  }

  return (
    <div className={styles.post}>
      <div className={styles.userpic_wrapper}>
        <img className={styles.userpic}
             src="https://i.pinimg.com/originals/58/e2/fc/58e2fcb1953e131ec595c40f699bcf77.jpg" alt=""/>
      </div>
      <p className={styles.username}>Ashley Smith</p>
      <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в
        буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и
        обеспечивает ее всеми необходимыми правилами.
      </p>
      <button className={isLikeActive ? `${styles.likes} ${styles.active}` : styles.likes} onClick={onClickHandler}>
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
    </div>
  );
};

export default Post;