import styles from './Vacancy.module.scss'
import vacancy from '../../data/vacancy.json'
import VacancyCard from '../VacancyCard/VacancyCard'
import { useEffect, useRef, useState } from 'react';
import debounce from "lodash.debounce";

function Vacancy() {
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const listRef = useRef<HTMLUListElement>(null);

  const checkForScrollPosition = () => {
    const { current } = listRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
    }
  };

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

  const scrollContainerBy = (distance: number) =>
    listRef.current?.scrollBy({ left: distance, behavior: "smooth" });

  useEffect(() => {
    const { current } = listRef;
    checkForScrollPosition();
    current?.addEventListener("scroll", debounceCheckForScrollPosition);

    return () => {
      current?.removeEventListener("scroll", debounceCheckForScrollPosition);
      debounceCheckForScrollPosition.cancel();
    };
  });

  return (
    <section className={styles.vacancy}>
      <div className={styles.vacancy__container}>
        <div className={styles.vacancy__head}>
          <h2>вакансии в гросс маркете</h2>
          <div>
            <button
              type="button"
              disabled={!canScrollLeft}
              onClick={() => scrollContainerBy(-400)}
              className={canScrollLeft ? styles.vacancy__button : styles.vacancy__button_disable}
            >
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="1" d="M0.5 5.13399C-0.166667 5.51889 -0.166667 6.48114 0.5 6.86604L8 11.1962C8.66667 11.5811 9.5 11.0999 9.5 10.3301V1.66989C9.5 0.900087 8.66667 0.418962 8 0.803863L0.5 5.13399Z" fill="black"/>
              </svg>
            </button>
            <button
              type="button"
              disabled={!canScrollRight}
              onClick={() => scrollContainerBy(400)}
              className={canScrollRight ? styles.vacancy__button : styles.vacancy__button_disable}
            >
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="1" d="M9.5 5.13399C10.1667 5.51889 10.1667 6.48114 9.5 6.86604L2 11.1962C1.33333 11.5811 0.5 11.0999 0.5 10.3301V1.66989C0.5 0.900087 1.33333 0.418962 2 0.803863L9.5 5.13399Z" fill="black"/>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <ul className={styles.vacancy__list} ref={listRef}>
            {vacancy?.map((vacancy) => {return <VacancyCard {...vacancy} key={vacancy.id}/>})}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Vacancy