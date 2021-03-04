import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(({ isOnline, name, avatar }, id) => (
        <li className={styles.item} key={id}>
          <span className={isOnline ? styles.online : styles.offline}></span>
          <img className={styles.avatar} src={avatar} alt={name} width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

const FriendType = PropTypes.shape({
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.boolean,
  id: PropTypes.number,
});

FriendList.propTypes = {
  friends: PropTypes.arrayOf(FriendType).isRequired,
};

export default FriendList;
