import styles from './Header.module.scss'
import logo from '../../assets/icon-logo.svg'

function Header() {
  return (
    <header className={styles.header}>
      <a href="" className={styles.header__logo}>
        <img src={logo} alt="" className={styles.header__img}/>
        <h2 className={styles.header__text}>гросс маркет</h2>
      </a>
      <div className={styles.header__info}>
        <a href="tel:+79264331416" className={styles.header__tel}>+7 (926) 433-14-16</a>
        <button className={styles.header__button}>заполнить анкету</button>
      </div>
      <button className={styles.header__button_tel}>
        <a href="tel:+79264331416">
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 22.621L12.479 15.826C12.471 15.83 10.505 16.796 10.415 16.837C8.17504 17.923 3.61604 9.017 5.80604 7.843L7.88904 6.817L4.39604 0L2.29004 1.039C-4.91196 4.794 6.52304 27.021 13.89 23.654C14.011 23.599 15.992 22.625 16 22.621Z" fill="black"/>
          </svg>
        </a>
      </button>
    </header>
  )
}

export default Header