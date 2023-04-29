import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt=""/>
      <span className={styles.logo_text}>Social</span>
    </header>
  );
};

export default Header;