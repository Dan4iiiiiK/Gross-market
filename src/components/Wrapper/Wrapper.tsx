import styles from './Wrapper.module.scss'
import slider from '../../data/slider.json'
import { useEffect, useState } from 'react'
import WrapperConten from '../WrapperContent/WrapperConten'

function Wrapper() {
  // const [isActive, setIsActive] = useState(false)
  const [index, setIndex] = useState(1)
  const [scroll, setScroll] = useState(0)

  // const handleButtonWrapper = () => {
  //   setIsActive(!isActive)
  // } 

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  useEffect (() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleButtonPrevSlide = () => {
    setIndex(index - 1)
  }

  const handleButtonNextSlide = () => {
    setIndex(index + 1)
  }

  return (
    <>
      <button className={`${styles.button_sticky} ${scroll < 350 ? '' : styles.button_show}`}>заполнить анкету</button>
      <section className={styles.wrapper__slider}>
        {slider.map((slider) => {
          return <WrapperConten key={slider.id} {...slider} index={index}/>
        })}
        <div className={styles.wrapper__content_button}>
          <button className={`${styles.wrapper__button} ${styles.wrapper__button_left} ${index === 1 ? styles.wrapper__button_active : ''}`} onClick={handleButtonPrevSlide} disabled={index === 1}>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="1" d="M0.5 5.13399C-0.166667 5.51889 -0.166667 6.48114 0.5 6.86604L8 11.1962C8.66667 11.5811 9.5 11.0999 9.5 10.3301V1.66989C9.5 0.900087 8.66667 0.418962 8 0.803863L0.5 5.13399Z" fill="black"/>
            </svg>
          </button>
          <button className={`${styles.wrapper__button} ${index === slider.length ? styles.wrapper__button_active : ''}`} onClick={handleButtonNextSlide} disabled={index === slider.length}>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="1" d="M9.5 5.13399C10.1667 5.51889 10.1667 6.48114 9.5 6.86604L2 11.1962C1.33333 11.5811 0.5 11.0999 0.5 10.3301V1.66989C0.5 0.900087 1.33333 0.418962 2 0.803863L9.5 5.13399Z" fill="black"/>
            </svg>
          </button>
        </div>
      </section>
    </>
  )
}

export default Wrapper