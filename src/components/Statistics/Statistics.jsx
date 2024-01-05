import css from '../Statistics/Statistics.module.css';
import { getRandomHexColor } from '../../helpers/getRandomHexColor';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            style={{ backgroundColor: getRandomHexColor() }}
            key={stat.id}
            className={css.item}
          >
            <span className={css.label}>{stat.label} </span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
