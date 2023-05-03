import styles from './Dialogs.module.scss';
import {NavLink} from 'react-router-dom';
import Messages from './Messages/Messages';
const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        <NavLink to="/dialogs/1" className={styles.dialog}>Username</NavLink>
        <NavLink to="/dialogs/2" className={styles.dialog}>Username 2</NavLink>
      </div>
      <div className={styles.messages}>
        <Messages />
      </div>
    </div>
  );
};

export default Dialogs;