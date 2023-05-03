import styles from './Aside.module.scss';
import {FC} from 'react';
import {AsideLinkType} from './Aside';
import {NavLink} from 'react-router-dom';

const AsideLink: FC<AsideLinkType> = (props) => {
  return (
    <NavLink to={props.path} className={styles.link} activeClassName={styles.active}>
      <span className={styles.link_icon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height={16} width={16} strokeWidth={1.5}
             stroke="var(--secondary)">
          {props.icon}
        </svg>
      </span>
      <span className={styles.link_text}>{props.text}</span>
    </NavLink>
  );
};

export default AsideLink;