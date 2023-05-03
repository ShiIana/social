import styles from './Messages.module.scss';
import Message from './Message/Message';
import ReverseMessage from './Message/ReverseMessage';
const Messages = () => {
  return (
    <div className={styles.messages}>
      <Message />
      <ReverseMessage/>
      <ReverseMessage/>
    </div>
  );
};

export default Messages;