import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({data}) => {
  return (
    <div className='social-visitor-categories'>
      {data.map((item) => {
        return (
          <div className='social-visitor-categories-item' key={item.id}>
            <div className='social-visitor-categories-title'>
              <span className='dot' style={{backgroundColor: item.color}} />
              <p>{item.visitors}</p>
            </div>
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
