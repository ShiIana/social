import {ReactNode} from 'react';
import styles from './Card.module.scss';

type CardType = {
  children: ReactNode
}
const Card = (props: CardType) => {
  return (
    <div className={styles.card}>
      {props.children}
    </div>
  );
};

export default Card;