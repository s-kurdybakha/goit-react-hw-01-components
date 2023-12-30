import css from '../Statistics/Statistics.module.css';

const Statistics = data => {
  const { label, percentage } = data;
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className={css.statList}>
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
