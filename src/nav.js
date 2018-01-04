import React from 'react';
import classnames from 'classnames';

const { func, bool } = React.PropTypes

function getPrevStyles(props) {
  return classnames('dft__nav__btn dft__nav__btn__prev', {
    'dft__nav__btn__hidden': !props.hasPrevious
  })
}
function getNextStyles(props) {
  return classnames('dft__nav__btn dft__nav__btn__next', {
    'dft__nav__btn__hidden': !props.hasNext
  })
}

function Nav(props) {
  return (
    <div className='dft__nav'>
      <button
        className={getPrevStyles(props)}
        onClick={props.onPrevious}
        key={'prev'}>&#10094;</button>
      <button
        className={getNextStyles(props)}
        onClick={props.onNext}
        key={'next'}
      >&#10095;</button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
}

export default Nav;
