import { IVacancy } from "../../data/Interface"
import styles from "./VacancyCard.module.scss"

function VacancyCard({vacancy, image}: IVacancy) {
  return (
    <li className={styles.vacancy__list_item}>
      <div className={styles.vacancy__name}>
        <h3>{vacancy}</h3>
      </div>
      <div className={styles.block__hover}>
        <p>
        Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе
        </p>
      </div>
      <img src={image} alt="" />
    </li>
  )
}

export default VacancyCard