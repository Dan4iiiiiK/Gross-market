import styles from './Wrapper.module.scss'

function Wrapper() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__content}>
          <h1 className={styles.wrapper__content_head}>У тебя к этому талант</h1>
          <div className={styles.wrapper__content_button}>
            <button className={`${styles.wrapper__button} ${styles.wrapper__button_left} ${styles.wrapper__button_active}`}>
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="1" d="M0.5 5.13399C-0.166667 5.51889 -0.166667 6.48114 0.5 6.86604L8 11.1962C8.66667 11.5811 9.5 11.0999 9.5 10.3301V1.66989C9.5 0.900087 8.66667 0.418962 8 0.803863L0.5 5.13399Z" fill="black"/>
              </svg>
            </button>
            <button className={styles.wrapper__button}>
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="1" d="M9.5 5.13399C10.1667 5.51889 10.1667 6.48114 9.5 6.86604L2 11.1962C1.33333 11.5811 0.5 11.0999 0.5 10.3301V1.66989C0.5 0.900087 1.33333 0.418962 2 0.803863L9.5 5.13399Z" fill="black"/>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.wrapper__photo}>
          <img src='../../../image/Valentin.png' alt="" />
          <div className={styles.wrapper__vacancy}>
            <h3>
              пекарь
            </h3>
          </div>
          <div className={styles.wrapper__name}>
            <h3>
              валентин 
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wrapper