import React from 'react';
import { useDispatch } from 'react-redux';

import { Wine } from 'store/types';
import { hideWine } from 'store/actions';
import Summary from 'components/Summary';
import closingicon from 'assets/image/close-btn--x.svg'
import './styles.scss';
import Button from 'components/Button';

interface DetailCardProps {
  wine: Wine | null
}
const DetailCard = ({wine}: DetailCardProps) => {
  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch(hideWine())
  }

  return (
    <div className={`detailCard detailCard--${wine === null ? 'hidden' : 'show'}`}>
      { wine !== null &&
        <div className='detailCard__container'>
          <div className='summary-cards'>
            <div className='summary-cards__main'>
              <h2>{wine!.name}</h2>
              <Summary 
                title='score'
                value={wine!.score}
                type='score'
              />
            </div>
            <div className='summary-cards__sub'>
              <Summary 
                title='grape'
                value={wine!.grape}
              />
              <Summary 
                title='country'
                value={wine!.country}
              />
              <Summary 
                title='year'
                value={wine!.year}
              />
            </div>
          </div>
          <div className='detailCard__comments'>
            <h4>Top Comments</h4>
            {
              wine!.comments.map(comment => {
                return (
                  <div className='detailCard__comment'>
                    <p>{comment.text}</p>
                  </div>
                );
              })
            }
          </div>
          <Button
            onClickHandler={() => onButtonClick()}
            text='Close'
          />
          <button className='detailCard__button-icon' onClick={() => onButtonClick()}><img src={closingicon} alt='close'/></button>
        </div>
      }
    </div>
  );
}

DetailCard.DisplayName = 'DetailCard';
export default DetailCard;