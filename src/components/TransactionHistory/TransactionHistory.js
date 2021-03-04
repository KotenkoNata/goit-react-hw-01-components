import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles['transaction-history']}>
      <thead className={styles.title}>
        <tr>
          <th>Type</th>
          <th className={styles.middle}>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ type, amount, currency }, index) => (
        <tbody key={index}>
          <tr className={index % 2 ? styles.odd : styles.even}>
            <td className={styles.first}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

const TransactionType = PropTypes.shape({
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
  id: PropTypes.string,
});

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(TransactionType).isRequired,
};

export default TransactionHistory;
