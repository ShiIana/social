import styles from './Aside.module.scss';
import {FC, ReactNode} from 'react';

type AsideLinkType = {
  linkIcon: ReactNode
  linkName: string
}
const AsideLink: FC<AsideLinkType> = (props) => {
  return (
    <a href="" className={styles.link}>
      <span className={styles.link_icon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height={16} width={16} strokeWidth={1.5}
             stroke="var(--secondary)">
          {props.linkIcon}
        </svg>
      </span>
      <span className={styles.link_text}>{props.linkName}</span>
    </a>
  );
};

export default AsideLink;