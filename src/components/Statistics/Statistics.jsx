import css from '../Statistics/Statistics.module.css';

function Statistics({ stats }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className={css.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={css.item}>
            <span className="label">{stat.label} </span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
