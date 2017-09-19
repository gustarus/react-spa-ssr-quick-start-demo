import React from 'react';

import styles from './index.styl';

export default function Block(props) {
  const {children} = props;
  return <div className={styles.block}>{children}</div>;
}
