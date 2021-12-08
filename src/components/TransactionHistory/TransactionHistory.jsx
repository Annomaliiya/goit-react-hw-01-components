import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {

  const renderRaw = items.map((item) => (
    <tr className={styles.tr} key={item.id}>
      <td className={styles.td}>{item.type}</td>
      <td className={styles.td}>{item.amount}</td>
      <td className={styles.td}>{item.currency}</td>
    </tr>
  ));

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
        {renderRaw}
      </tbody>
    </table>
  );
}

const itemShape = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency : PropTypes.string.isRequired
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(itemShape)).isRequired,
};

export default TransactionHistory;