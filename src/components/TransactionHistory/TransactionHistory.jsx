import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

function TransactionHistory({ props }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.head}>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {props.map((item) => (
          <tr className={styles.tr}key={item.id}>
            <td className={styles.td}>{item.type}</td>
            <td className={styles.td}>{item.amount}</td>
            <td className={styles.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;