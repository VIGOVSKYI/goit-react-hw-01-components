import PropTypes from "prop-types";
import styles from "./Statistic.module.css";

// export default function Statistic({ title, stats }) {
    
//     const oneItem = stats.map(stat => <li className="item" key = {stat.id}>
//         <span className="label">{stat.label}</span>
//         <span className="percentage">{stat.percentage}</span>
//     </li>);

//     console.log(oneItem);

//     return (<section className="statistics">

//         {title && <h2 className="title">{title}</h2>}

//     <ul className="stat-list">
//         {oneItem}
            
//     </ul>
//     </section>
//     );
// };
 const randomColor = () => {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  return `rgb(${r}, ${g}, ${b})`;
};

export default function Statistics({ title, stats }) {
  return (
    <>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
          {stats.map(stat => (
            <li
              key={stat.id}
              className={styles.item}
              style={{
                backgroundColor: randomColor(),
              }}
            >
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}


Statistics.defaultProps = {
    stats: []
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label:PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired,
        
    }))
  
};