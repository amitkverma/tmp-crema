import React from 'react';
import PropTypes from 'prop-types';
import './index.style.less';

const CoinsInfo = ({coins}) => {
  return (
    <div className='coin-info-row'>
      {coins.map((coin) => {
        return (
          <div className='coin-info-col' key={coin.id}>
            <h3>{coin.value}</h3>
            <p>{coin.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CoinsInfo;

CoinsInfo.defaultProps = {
  coins: [],
};

CoinsInfo.propTypes = {
  coins: PropTypes.array,
};
