import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import styles from './index.styl';

function Layout(props) {
  const {loading, children} = props;

  const style = {
    transitionProperty: loading ? 'width' : 'none',
    width: loading ? loading + '%' : 0
  };

  return (
    <div>
      <div style={style} className={styles.loader}/>
      {children}
    </div>
  );
}

Layout.propTypes = {
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};

function mapStateToProps(state) {
  return {
    loading: state.api.loading
  };
}

export default connect(mapStateToProps)(Layout);
