import styles from './Message.module.scss';

const Message = () => {
  return (
    <div className={styles.message}>
        <div className={styles.userpic_wrapper}>
          <img className={styles.userpic}
               src="https://i.pinimg.com/originals/58/e2/fc/58e2fcb1953e131ec595c40f699bcf77.jpg" alt=""/>
        </div>
        <div className={styles.bubble}>
          Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в
          буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и
          обеспечивает ее всеми необходимыми правилами.
          <p className={styles.time}>13:23</p>
        </div>
      </div>
  );
};

export default Message;