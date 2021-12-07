
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title, stats}) => {
    return (
<section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statList}>
                <StatItems itemList={stats}/>
            </ul>
            </section>
            )
}
const StatItems = ({ itemList }) => {
    console.log(itemList);
    return itemList.map(item => <li className={styles.item} key={item.id}>
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>)
}
export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}