import styles from './Footer.module.scss'
import logo from '../../assets/icon-logo.svg'
import { useState } from 'react'
import Modal from 'react-modal';

function Footer() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true);
  };
  
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div className={styles.modal}>
      <div className={`${styles.modal__header} ${styles.header_scroll}`}>
        <h1 className={`${styles.modal__header_head} ${styles.header_scroll_text}`} >Обработка данных</h1>
        <button onClick={closeModal} className={styles.modal__header_close}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 3L3 21" stroke="black" strokeWidth="2"/>
            <path d="M21 21L3 3" stroke="black" strokeWidth="2"/>
          </svg>
        </button>
      </div>
      <ol className={styles.modal__content}>
        <li className={styles.modal__content_item}>
          <h3 className={styles.modal__content_head}>1. Что регулирует настоящая политика конфиденциальности</h3>
          <p className={styles.modal__content_text}>
          Настоящая политика конфиденциальности (далее — Политика) действует в отношении всей информации, включая персональные данные в понимании применимого законодательства (далее — «Персональная информация»), которую ООО «Гросс маркет» и/или его аффилированные лица, в том числе входящие в одну группу с ООО «Гросс маркет» (далее — «Гросс маркет»), могут получитьо Вас в процессе использования Вами любых сайтов, программ, продуктов и/или сервисов Гросс маркет (далее вместе  «Сервисы»), информацию о которых Гросс маркет может также получать Персональную информацию от своих партнеров (далее — «Партнеры»), сайты, программы, продукты или сервисы которых Вы используете (например, от рекламодателей Гросс маркет или службами такси). В таких случаях передача Персональной информации возможна только в случаях, установленных применимым законодательством, и осуществляется на основании специальных договоров между Гросс маркет и каждым из Партнеров.
          </p>
          <span>
            Пожалуйста, обратите внимание, что использование любого из Сайтов и/или Сервисов может регулироваться дополнительными условиями, которые могут вносить в настоящую Политику изменения и/или дополнения, и/или иметь специальные условия в отношении персональной информации, размещенные в соответствующих разделах документов для таких Сайтов /или Сервисов.
          </span>
        </li>
        <li className={styles.modal__content_item}>
          <h3 className={styles.modal__content_head}>2. Кто обрабатывает информацию</h3>
          <p className={styles.modal__content_text}>Для обеспечения использования Вами Сайтов и Сервисов Ваша Персональная информация собирается и используется Яндексом, в том числе включая общество с ограниченной ответственностью «Гросс маркет», юридическое лицо, созданное по законодательству Российской Федерации и зарегистрированное по адресу: 123351, Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), или его аффилированным лицом, предоставляющим соответствующий Сервис в иных юрисдикциях. С информацией о том, какое лицо предоставляет тот или иной Сервис, Вы можете ознакомиться в условиях использования соответствующего Сервиса.</p>
        </li>
        <li className={styles.modal__content_item}>
          <h3 className={styles.modal__content_head}>3. Какова цель данной Политики</h3>
          <p className={styles.modal__content_text}>Защита Вашей Персональной информации и Вашей конфиденциальности чрезвычайно важны для Гросс маркета. Поэтому при использовании Вами Сайтов и Сервисов Гросс маркет защищает и обрабатывает Вашу Персональную информацию в строгом соответствии с применимым законодательством.</p>
        </li>
        <li className={styles.modal__content_item}>
          <h3 className={styles.modal__content_head}>4. Какую Персональную информацию о Вас собирает Гросс маркет</h3>
          <p className={styles.modal__content_text}>Для обеспечения использования Вами Сайтов и Сервисов Ваша Персональная информация собирается и используется Яндексом, в том числе включая общество с ограниченной ответственностью «Гросс маркет», юридическое лицо, созданное по законодательству Российской Федерации и зарегистрированное по адресу: 123351, Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), или его аффилированным лицом, предоставляющим соответствующий Сервис в иных юрисдикциях. С информацией о том, какое лицо предоставляет тот или иной Сервис, Вы можете ознакомиться в условиях использования соответствующего Сервиса.</p>
        </li>
      </ol>
    </div>
  )

  const shareData = {
    title: 'Gross market',
    url: 'https://dan4iiiiik.github.io/Gross-market/',
    text: 'Поделитесь вакансиями с вашими друзьями'
  }

  const clickShare = async() => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.footer__block}>
        <div className={styles.footer__block_area}>
          <a href="" className={styles.footer__logo}>
            <img src={logo} alt="" className={styles.footer__logo_img}/>
            <h2 className={styles.footer__logo_text}>гросс маркет</h2>
          </a>
          <button className={styles.footer__button_share} onClick={clickShare}>поделиться</button>
          <div className={styles.footer__block_button}>
            <a href='' className={styles.footer__button_fcb}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM15 8H13.65C13.112 8 13 8.221 13 8.778V10H15L14.791 12H13V19H10V12H8V10H10V7.692C10 5.923 10.931 5 13.029 5H15V8Z" fill="black"/>
              </svg>
            </a>
            <a href='' className={styles.footer__button_vk}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM18.344 16.163H16.477C15.422 16.163 15.245 15.562 14.375 14.694C13.59 13.909 13.155 14.511 13.173 15.629C13.179 15.926 13.032 16.163 12.678 16.163C11.573 16.163 9.984 16.319 8.374 14.583C6.727 12.804 5 9.235 5 8.884C5 8.676 5.172 8.583 5.459 8.583H7.357C7.86 8.583 7.902 8.832 8.043 9.151C8.627 10.482 10.024 13.153 10.397 11.662C10.611 10.806 10.698 8.823 9.782 8.652C9.262 8.556 10.178 8 11.504 8C11.834 8 12.192 8.035 12.558 8.12C13.231 8.276 13.234 8.578 13.224 9.018C13.19 10.684 12.989 11.804 13.428 12.087C13.847 12.358 14.949 10.585 15.532 9.216C15.691 8.838 15.723 8.584 16.175 8.584H18.497C19.713 8.584 18.338 10.332 17.287 11.696C16.44 12.795 16.485 12.816 17.47 13.73C18.171 14.381 19 15.27 19 15.773C19 16.011 18.814 16.163 18.344 16.163Z" fill="black"/>
              </svg>
            </a>
          </div>
        </div>
          <div className={styles.footer__block_peacement}>
            <p className={styles.footer__peacement_text}>&#169; Гросс маркет 2020</p>
            <button className={styles.footer__peacement_modal} onClick={openModal}>Политика обработки персональных данных</button>
          </div>
      </div>
    </footer>

    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      {modalContent}
    </Modal>
    </>
  )
}

export default Footer
    // const [scroll, setScroll] = useState(0)
  
  
    // const handleScroll = () => {
    //   setScroll(window.scrollY)
    // }
  
    // useEffect (() => {
    //   window.addEventListener("scroll", handleScroll)
    //   return () => window.removeEventListener('scroll', handleScroll)
    // }, [])