import React from 'react';
// import './SwitchButton.css';

const SwitchButton = props => {
  console.log(props.active);
  return (
    <button onClick={props.click}>{props.active ? 'Stop' : 'Start'}</button>
  )
}

export default SwitchButton;