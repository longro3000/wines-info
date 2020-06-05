import React from 'react';

import './styles.scss'

interface SummaryProps {
  title: string
  value: string | number
  type?: 'score'
};

const Summary = ({title, value, type}: SummaryProps) => {
  return (
    <div className='summary'>
      <h4 className='summary__title'>{title}</h4>
      <h2 className={`summary__value summary__value--${type}`}>{value}</h2>
    </div>
  );
};

Summary.displayName = 'Summary'
export default Summary;