import React from 'react';

import './styles.scss'
interface ButtonProps {
  text: string,
  onClickHandler: () => void
} 
const Button = ({text, onClickHandler}: ButtonProps) => {
  return (
    <div className='custom-button'>
      <button className='custom-button__button' onClick={onClickHandler}>{text}</button>
    </div> 
  );
}

Button.DisplayName = 'Button';
export default Button;