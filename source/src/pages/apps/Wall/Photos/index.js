import React, {useState} from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppMedialViewer from '../../../../@crema/core/AppMedialViewer';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import './index.style.less';

const Photos = ({photos}) => {
  const [index, setIndex] = useState(-1);

  const onClose = () => {
    setIndex(-1);
  };

  const {messages} = useIntl();

  return (
    <AppCard className='photo-card' title={messages['wall.photos']}>
      <AppRowContainer className='photo-row'>
        {photos.map((photo, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <img
              onClick={() => setIndex(index)}
              className={clsx('photo-avatar card-hover')}
              key={index}
              src={photo.thumb}
              alt='user'
            />
          </Col>
        ))}
      </AppRowContainer>

      <span className='photos-link'>View More</span>
      <AppMedialViewer
        index={index}
        medias={photos.map((data) => {
          return {
            url: data.thumb,
            mime_type: 'image/*',
          };
        })}
        onClose={onClose}
      />
    </AppCard>
  );
};

export default Photos;

Photos.propTypes = {
  photos: PropTypes.array,
};
