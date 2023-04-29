import styles from './AddPost.module.scss';

const AddPost = () => {
  return (
    <div>
      <textarea className={styles.input} name="" id=""></textarea>
      <button className={styles.button}>Отправить</button>
    </div>
  );
};

export default AddPost;