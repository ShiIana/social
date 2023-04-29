import {FC, ReactNode} from 'react';
import styles from './Stat.module.scss';

type StatType = {
  stat: {
    id: number
    counter: number
    icon: ReactNode
    text: string
  }
}

const Stat: FC<StatType> = (props) => {
  function numberWithDivide(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={styles.stat}>
      <div className={styles.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height={20} width={20} stroke="var(--primary)" strokeWidth="1.5">
          {props.stat.icon}
        </svg>
      </div>
      <div>
        <p className={styles.counter}>{numberWithDivide(props.stat.counter)}</p>
        <p className={styles.info}>{props.stat.text}</p>
      </div>
    </div>
  );
};

export default Stat;