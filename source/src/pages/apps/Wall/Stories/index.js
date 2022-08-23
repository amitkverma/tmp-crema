import React from 'react';
import PropTypes from 'prop-types';
import StoriesItem from './StoriesItem';
import {useIntl} from 'react-intl';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const Stories = ({stories}) => {
  const {messages} = useIntl();

  return (
    <AppCard
      className='stories-card'
      title={messages['wall.stories']}
      extra={<a href='#/'>{messages['common.viewAll']}</a>}>
      <div className='stories-row'>
        {stories.map((data) => (
          <div key={data.id} className='stories-col'>
            <StoriesItem data={data} />
          </div>
        ))}
      </div>
    </AppCard>
  );
};

export default Stories;

Stories.propTypes = {
  stories: PropTypes.array,
};
