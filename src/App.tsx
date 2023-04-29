import styles from './App.module.scss';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import React, {useState} from 'react';

const App = () => {
  const [isMenuHover, setMenuHover] = useState(false);
  const showMenu = (): void => {
    // @ts-ignore
    setMenuHover(prevState => setMenuHover(!prevState));
  };

  return (
    <div className={isMenuHover ? `${styles.app_wrapper} ${styles.active}` : styles.app_wrapper}>
      <Header/>
      <Aside callback={showMenu}/>
      <Profile/>
    </div>
  );
}

export default App;
