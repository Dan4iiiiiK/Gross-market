import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./Map.module.scss";
import map from "../../data/map.json";
import { useState } from "react";
import logo from "../../../public/assets/images/icon-logo.svg";

function MapComponent() {
  const [filterText, setFilterText] = useState<"fs" | "yr" | "all">("all");

  const handleClickButtonFilterYr = () => {
    setFilterText("fs");
  };

  const handleClickButtonFilterFs = () => {
    setFilterText("yr");
  };

  const handleClickButtonAll = () => {
    setFilterText("all");
  };

  const filterMapPLacemark = map.filter((map) => {
    const filter = map.nameGeo !== filterText;
    return filter;
  });

  return (
    <section className={styles.map}>
      <h2 className={styles.map__head}>география</h2>
      <div className={styles.map__block}>
        <YMaps query={{ lang: "en_RU" }}>
          <Map
            defaultState={{ center: [55.75, 37.57], zoom: 10 }}
            className={styles.map_container}
          >
            {filterMapPLacemark.map((map) => {
              return (
                <Placemark
                  geometry={map.geometry}
                  key={map.id}
                  options={{
                    iconImageHref: logo,
                    iconLayout: "default#image",
                    iconImageSize: [16.8, 24],
                  }}
                />
              );
            })}
            <div className={styles.button__block}>
              <button
                className={`${styles.button} ${
                  filterText === "fs" ? styles.button_active : ""
                }`}
                onClick={handleClickButtonFilterYr}
              >
                юрлица
              </button>
              <button
                className={`${styles.button} ${
                  filterText === "yr" ? styles.button_active : ""
                }`}
                onClick={handleClickButtonFilterFs}
              >
                физлица
              </button>
              <button
                className={`${styles.button} ${
                  filterText === "all" ? styles.button_active : ""
                }`}
                onClick={handleClickButtonAll}
              >
                показать все
              </button>
            </div>
          </Map>
        </YMaps>
      </div>
    </section>
  );
}

export default MapComponent;
