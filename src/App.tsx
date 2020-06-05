import React from 'react';

import Table from 'components/Table'
import './App.scss';
import DetailCard from 'components/DetailCard';
import Summary from 'components/Summary';
import useWine from 'hooks/useWine';
import Button from 'components/Button';

const App = () => {
  const {
    wines,
    last,
    has_more,
    activeWine,
    averageScore, 
    frequentCountry,
    ratedWines,
    setLastId
  } = useWine()
  return (
    <>
      <div className='app'>
        <div className='background'>
        </div>
        <div className='app-container'>
          <div className='app-summary'>
            <div className='app-summary__main'>
              <h2>Wines</h2>
              <Summary
                title='Total rated wines'
                value={ratedWines}
              />
            </div>
            <div className='app-summary__sub'>
              <Summary
                title='Average score'
                value={averageScore}
              />
              <Summary
                title='Most represented country'
                value={frequentCountry}
              />
            </div>
          </div>
          { wines && <Table wines={wines}/> }
          { has_more && 
            <Button 
              onClickHandler={() => setLastId(last)} 
              text='Show more'
            />
          }
        </div>
      </div>   
      <DetailCard
        wine={activeWine}
      />
    </>
  );
}

App.displayName = 'App'
export default App;
