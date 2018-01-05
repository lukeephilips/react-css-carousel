import React, { PropTypes } from 'react';
import styleable from 'react-styleable';
import css from './styles/frame.css';

function Frame(props) {
  return <div className={props.css.root} >{props.children}</div>
}

Frame.propTypes = {
  children: PropTypes.object,
  css: PropTypes.object,
}
export default styleable(css)(Frame);
