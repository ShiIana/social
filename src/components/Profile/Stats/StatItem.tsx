import {FC} from 'react';
import styles from './StatItem.module.scss';
import {StatType} from './Stats';

const StatItem: FC<StatType> = ({counter, icon, text}) => {
  function numberWithDivide(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={styles.stat}>
      <div className={styles.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height={20} width={20} stroke="var(--primary)" strokeWidth="1.5">
          {icon}
        </svg>
      </div>
      <div>
        <p className={styles.counter}>{numberWithDivide(counter)}</p>
        <p className={styles.info}>{text}</p>
      </div>
    </div>
  );
};

export default StatItem;