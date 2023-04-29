import styles from './Aside.module.scss';
import AsideLink from './AsideLink';
import {FC} from 'react';

const asideLinks = {
  profile: {
    icon: <g>
      <circle cx={7} cy={3.75} r={3.25} fill="none" strokeLinecap="round"
              strokeLinejoin="round"/>
      <path
        d="M13.18,13.5a6.49,6.49,0,0,0-12.36,0Z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>,
    text: 'Profile',
  },
  messages: {
    icon: <g>
        <circle cx={3.5} cy={7} r={0.5} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx={6.75} cy={7} r={0.5} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx={10} cy={7} r={0.5} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7,.5A6.5,6.5,0,0,0,1.59,10.6L.5,13.5l3.65-.66A6.5,6.5,0,1,0,7,.5Z" fill="none" stroke="var(--secondary)"
              strokeLinecap="round" strokeLinejoin="round"/>
      </g>,
    text: 'Messages',
  },
  news: {
    icon: <g>
      <path
        d="M13.5,4.5V11a1.25,1.25,0,0,1-1.25,1.25h0A1.25,1.25,0,0,1,11,11h0V2.25a.5.5,0,0,0-.5-.5H1a.5.5,0,0,0-.5.5v9a1,1,0,0,0,1,1H12.25"
        fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x={3.5} y={4.25} width={4.5} height={2.5} fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
      <line x1={3.5} y1={9.75} x2={8} y2={9.75} fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
    </g>,
    text: 'News',
  },
  settings: {
    icon: <path
      d="M5.23,2.25l.43-1.11A1,1,0,0,1,6.59.5h.82a1,1,0,0,1,.93.64l.43,1.11,1.46.84,1.18-.18a1,1,0,0,1,1,.49l.4.7a1,1,0,0,1-.08,1.13L12,6.16V7.84l.75.93a1,1,0,0,1,.08,1.13l-.4.7a1,1,0,0,1-1,.49l-1.18-.18-1.46.84-.43,1.11a1,1,0,0,1-.93.64H6.59a1,1,0,0,1-.93-.64l-.43-1.11-1.46-.84-1.18.18a1,1,0,0,1-1-.49l-.4-.7a1,1,0,0,1,.08-1.13L2,7.84V6.16l-.75-.93A1,1,0,0,1,1.17,4.1l.4-.7a1,1,0,0,1,1-.49l1.18.18ZM5,7A2,2,0,1,0,7,5,2,2,0,0,0,5,7Z"
      fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
    text: 'Settings',
  },
  logout: {
    icon: <g>
      <line x1={6.5} y1={7} x2={13.5} y2={7} fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
      <polyline points="11.5 5 13.5 7 11.5 9" fill="none" strokeLinecap="round"
                strokeLinejoin="round"/>
      <path d="M11.7,11.49a6.5,6.5,0,1,1,0-9" fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
    </g>,
    text: 'Log Out',
  }
}

type AsideType = {
  callback: () => void
}
const Aside: FC<AsideType> = (props) => {
  const onHoverHandler = () => {
    props.callback();
  }

  return (
    <aside className={styles.aside} onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler}>
      <nav>
        {
          Object.values(asideLinks).map((link: any):JSX.Element => {
            return <AsideLink key={link.text} linkName={link.text} linkIcon={link.icon}/>
          })
        }
      </nav>
    </aside>
  );
};

export default Aside;