import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from "./Map.module.scss"
import map from "../../data/map.json"

function MapComponent() {
  const mapObject = {
    iconContent: ''
  }

  return (
    <section className={styles.map}>
      <h2 className={styles.map__head}>география</h2>
      <div className={styles.map__block}>
        <YMaps query={{ lang: 'en_RU' }} >
          <Map defaultState={{ center: [55.75, 37.57], zoom: 10 }} className={styles.map_container}>
            {map?.map((map) => { 
              return <Placemark geometry={ map.geometry } key={map.id}/>
            })}
            <div className={styles.button__block}>
              <button className={styles.button}>юрлица</button>
              <button className={styles.button}>физлица</button>
              <button className={`${styles.button} ${styles.button_active}`}>показать все</button>
            </div>
          </Map>
        </YMaps>
      </div>
    </section>
  )
}

export default MapComponent