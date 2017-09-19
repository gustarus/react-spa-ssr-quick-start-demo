import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.styl';

export default function Alert(props) {
  const {type, title, children} = props;
  return (
    <div className={[styles.alert, styles[type]].join(' ')}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.message}>{children}</div>
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  title: PropTypes.string
};

Alert.defaultProps = {
  type: 'info',
  title: null
};
