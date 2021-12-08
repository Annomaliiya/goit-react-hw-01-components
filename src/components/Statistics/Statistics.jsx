
import PropTypes  from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
    const statItems = 
     stats.map(item => <li className={styles.item} key={item.id}>
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>)
    return (
<section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statList}>
                {statItems}
            </ul>
            </section>
            )
}


export default Statistics;

const statisticsItemShape = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage : PropTypes.number
}
 
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape(statisticsItemShape)).isRequired
}