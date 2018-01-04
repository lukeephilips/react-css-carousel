import React from 'react'
import Radium from 'radium';
import styles from './nav-styles';

const { func, bool } = React.PropTypes

function getPrevStyles(props) {
  return props.hasPrevious ? styles.prev : styles.prevHidden
}
function getNextStyles(props) {
  return props.hasNext ? styles.next : styles.nextHidden
}

function Nav(props) {
  return (
    <div style={styles.root}>
      <button style={getPrevStyles(props)} onClick={props.onPrevious} key={'prev'}>&#10094;</button>
      <button style={getNextStyles(props)} onClick={props.onNext} key={'next'}>&#10095;</button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
}

export default Radium(Nav);
