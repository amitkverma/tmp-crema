import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({data}) => {
  return (
    <div className='earning-month-categories'>
      {data.map((item) => {
        return (
          <div className='earning-month-categories-item' key={item.id}>
            <span className='dot' style={{backgroundColor: item.color}} />
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;

Categories.defaultProps = {
  data: [],
};

Categories.propTypes = {
  data: PropTypes.array,
};
