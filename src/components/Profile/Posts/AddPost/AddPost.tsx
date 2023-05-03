import styles from './AddPost.module.scss';
import {ChangeEvent, FC, useState} from 'react';

type AddPostType = {
  addPost: (text: string) => void
}
const AddPost: FC<AddPostType> = ({addPost}) => {
  const [inputValue, setInputValue] = useState('');
  const onClickHandler = () => {
    addPost(inputValue);
    setInputValue('');
  }

  const onChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>)=> {
    setInputValue(evt.currentTarget.value);
  }

  return (
    <div>
      <textarea className={styles.input} name="" id="" onChange={onChangeHandler} value={inputValue}></textarea>
      <button className={styles.button} onClick={onClickHandler}>Отправить</button>
    </div>
  );
};

export default AddPost;