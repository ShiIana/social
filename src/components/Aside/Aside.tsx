import styles from './Aside.module.scss';
import AsideLink from './AsideLink';
import {FC} from 'react';

export type AsideType = {
  asideLinks: Array<AsideLinkType>
  callback: () => void
}

export type AsideLinkType = {
  id?: string
  icon: JSX.Element
  text: string
  path: string
}

const Aside: FC<AsideType> = ({asideLinks, callback}) => {
  const onHoverHandler = () => {
    callback();
  }

  return (
    <aside className={styles.aside} onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler}>
      <nav>
        {
          asideLinks.map(link => {
            return <AsideLink key={link.id} text={link.text} icon={link.icon} path={link.path}/>
          })
        }
      </nav>
    </aside>
  );
};

export default Aside;