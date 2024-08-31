import { ISlider } from '../../data/Interface'
import styles from './WrapperConten.module.scss'

function WrapperConten({name, text, vacancy, image, index, id}: ISlider) {

  return (
    <div className={`${styles.wrapper} ${id === index ? styles.wrapper_active : ''}`}>
        <div className={styles.wrapper__container}>
          <div className={styles.wrapper__content}>
            <h1 className={styles.wrapper__content_head}>{text}</h1>
          </div>
          <div className={styles.wrapper__photo}>
            <img src={`../../../public/assets/images/${image}.png`} alt={name} />
            <div className={styles.wrapper__vacancy}>
              <h3>
                {vacancy}
              </h3>
            </div>
            <div className={styles.wrapper__name}>
              <h3>
                {name} 
              </h3>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WrapperConten