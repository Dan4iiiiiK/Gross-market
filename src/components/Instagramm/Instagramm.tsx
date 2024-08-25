import { useState } from "react"
import inst from "../../data/inst.json"
import styles from "./Instagramm.module.scss"

function Instagramm() {
  const [buttonIsActive, setButtonsIsActive] = useState(false)

  const handleButtonActive = () => {
    setButtonsIsActive(!buttonIsActive)
  } 

  const instRemove = buttonIsActive === false ? inst.slice(8) : inst 

  return (
    <section className={styles.instBlock}>
      <h2 className={styles.instBlock__head}>мы в инстаграмме</h2>
      <ul className={buttonIsActive === true ? styles.instBlock__list : styles.instBlock__list_notactive}>
        {instRemove.map((inst) => { return(<li className={styles.instBlock__list_item} key={inst}></li>) })}
      </ul>
      <button className={styles.instBlock__button} onClick={handleButtonActive}>{buttonIsActive === false ? 'показать ещё' : 'скрыть'}</button>
    </section>
  )
}

export default Instagramm