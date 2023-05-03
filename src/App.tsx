import styles from './App.module.scss';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import {useState} from 'react';
import {v1} from 'uuid';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import Logout from './components/Logout/Logout';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

// главное меню
const ASIDE_LINKS = {
  profile: {
    id: v1(),
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
    path: '/profile'
  },
  dialogs: {
    id: v1(),
    icon: <g>
      <circle cx={3.5} cy={7} r={0.5} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx={6.75} cy={7} r={0.5} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx={10} cy={7} r={0.5} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7,.5A6.5,6.5,0,0,0,1.59,10.6L.5,13.5l3.65-.66A6.5,6.5,0,1,0,7,.5Z" fill="none" stroke="var(--secondary)"
            strokeLinecap="round" strokeLinejoin="round"/>
    </g>,
    text: 'Dialogs',
    path: '/dialogs'
  },
  news: {
    id: v1(),
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
    path: '/news'
  },
  settings: {
    id: v1(),
    icon: <path
      d="M5.23,2.25l.43-1.11A1,1,0,0,1,6.59.5h.82a1,1,0,0,1,.93.64l.43,1.11,1.46.84,1.18-.18a1,1,0,0,1,1,.49l.4.7a1,1,0,0,1-.08,1.13L12,6.16V7.84l.75.93a1,1,0,0,1,.08,1.13l-.4.7a1,1,0,0,1-1,.49l-1.18-.18-1.46.84-.43,1.11a1,1,0,0,1-.93.64H6.59a1,1,0,0,1-.93-.64l-.43-1.11-1.46-.84-1.18.18a1,1,0,0,1-1-.49l-.4-.7a1,1,0,0,1,.08-1.13L2,7.84V6.16l-.75-.93A1,1,0,0,1,1.17,4.1l.4-.7a1,1,0,0,1,1-.49l1.18.18ZM5,7A2,2,0,1,0,7,5,2,2,0,0,0,5,7Z"
      fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
    text: 'Settings',
    path: '/settings'
  },
  logout: {
    id: v1(),
    icon: <g>
      <line x1={6.5} y1={7} x2={13.5} y2={7} fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
      <polyline points="11.5 5 13.5 7 11.5 9" fill="none" strokeLinecap="round"
                strokeLinejoin="round"/>
      <path d="M11.7,11.49a6.5,6.5,0,1,1,0-9" fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
    </g>,
    text: 'Log Out',
    path: '/logout'
  },
}
// статистика страницы
const STAT_INFO = {
  likes: {
    id: v1(),
    counter: 42334,
    icon: <path d="M7,12.45l-5.52-5c-3-3,1.41-8.76,5.52-4.1,4.11-4.66,8.5,1.12,5.52,4.1Z"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
    />,
    text: 'weekly likes',
  },
  followers: {
    id: v1(),
    counter: 5213,
    icon: <g>
      <circle cx={5} cy={3.75} r={2.25} fill="none" strokeLinecap="round"
              strokeLinejoin="round"/>
      <path d="M9.5,13.5H.5v-1a4.5,4.5,0,0,1,9,0Z" fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M9,1.5A2.25,2.25,0,0,1,9,6" fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M10.6,8.19a4.5,4.5,0,0,1,2.9,4.2V13.5H12" fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
    </g>,
    text: 'weekly followers',
  },
  mentions: {
    id: v1(),
    counter: 23123,
    icon: <g>
      <path d="M10.05,7A3,3,0,1,1,7,4,3,3,0,0,1,10.05,7Z" fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M10.05,7V8.3c0,3.49,5.47.2,2.6-4.54A6.59,6.59,0,0,0,7,.5,6.5,6.5,0,1,0,9.52,13" fill="none"
            strokeLinecap="round" strokeLinejoin="round"/>
    </g>,
    text: 'recent mentions',
  },
  views: {
    id: v1(),
    counter: 231123,
    icon:
      <g>
        <path
          d="M13.23,6.33a1,1,0,0,1,0,1.34C12.18,8.8,9.79,11,7,11S1.82,8.8.77,7.67a1,1,0,0,1,0-1.34C1.82,5.2,4.21,3,7,3S12.18,5.2,13.23,6.33Z"
          fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx={7} cy={7} r={2} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </g>,
    text: 'recent views',
  },
}
// посты
const POSTS = [
  {
    id: v1(),
    date: '01 мая 14:33',
    user: {
      avatar: 'https://i.pinimg.com/originals/58/e2/fc/58e2fcb1953e131ec595c40f699bcf77.jpg',
      name: 'Ashley Smith',
    },
    text: `Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в
        буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и
        обеспечивает ее всеми необходимыми правилами.`,
    likes: 4,
  },
  {
    id: v1(),
    date: '01 мая 14:32',
    user: {
      avatar: 'https://i.pinimg.com/originals/58/e2/fc/58e2fcb1953e131ec595c40f699bcf77.jpg',
      name: 'Ashley Smith',
    },
    text: `Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. 
        Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики.`,
    likes: 2,
  },
]

const formatDateTime = (date: any) => {
  return 'Сегодня в '+ date.toLocaleString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit'}
  )
}

const App = () => {
  const [isMenuHover, setMenuHover] = useState(false);
  const [posts, setPosts] = useState(POSTS);
  const showMenu = (): void => {
    // @ts-ignore
    setMenuHover(prevState => setMenuHover(!prevState));
  };

  const removePost = (id: string) => {
    const filteredPosts = posts.filter(post => {
      return post.id !== id;
    })
    setPosts(filteredPosts);
  }

  const addPost = (text: string) => {
    let newPost = {
      id: v1(),
      date: formatDateTime(new Date()),
      user: {
        avatar: 'https://i.pinimg.com/originals/58/e2/fc/58e2fcb1953e131ec595c40f699bcf77.jpg',
        name: 'Ashley Smith',
      },
      text: text,
      likes: 0,
    }

    setPosts([newPost, ...posts]);
  }

  return (
    <BrowserRouter>
      <div className={isMenuHover ? `${styles.app_wrapper} ${styles.active}` : styles.app_wrapper}>
        <Header/>
        <Aside asideLinks={Object.values(ASIDE_LINKS)} callback={showMenu}/>
        <Route path='/'>
          <Profile statInfo={Object.values(STAT_INFO)} posts={posts} removePost={removePost} addPost={addPost}/>
        </Route>

        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/news' component={News}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/logout' component={Logout}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
