import React from 'react';
import PropTypes from 'prop-types';

import stylesModule from './Statistics.module.css';

function randomColor() {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={stylesModule.statistics}>
      {title && <h2 className={stylesModule.title}>{title}</h2>}

      <ul className={stylesModule['stat-list']}>
        {stats.map(({ label, percentage }, id) => (
          <li
            className={stylesModule.item}
            key={id}
            style={{
              backgroundColor: randomColor(),
            }}
          >
            <span className={stylesModule.label}>{label}</span>
            <span className={stylesModule.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

const StatisticsType = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
});

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(StatisticsType).isRequired,
};

export default Statistics;
