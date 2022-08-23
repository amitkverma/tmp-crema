import React from 'react';
import AppList from '../../../../@crema/core/AppList';
import AppCard from '../../../../@crema/core/AppCard';
import SuggestionItem from './SuggestionItem';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import './index.style.less';

const Suggestions = ({suggestions}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl suggestion-card'
      title={messages['wall.suggestions']}
      actions={[
        <span className='suggestion-action' key={1}>
          View More
        </span>,
      ]}>
      <AppList
        data={suggestions}
        renderItem={(item, index) => <SuggestionItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default Suggestions;

Suggestions.propTypes = {
  suggestions: PropTypes.array,
};
