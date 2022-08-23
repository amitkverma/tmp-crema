import React, {useCallback, useEffect} from 'react';
import Gallery from 'react-photo-gallery';
import SelectedImage from './SelectedImage';
import {useDispatch, useSelector} from 'react-redux';
import {onGetGalleryPhotos} from '../../../../redux/actions/Gallery';
import AppInfoView from '@crema/core/AppInfoView';
import '../index.style.less';

const CustomImage = () => {
  const photos = useSelector(({gallery}) => gallery.photos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetGalleryPhotos());
  }, [dispatch]);

  const imageRenderer = useCallback(
    ({index, left, top, key, photo}) => (
      <SelectedImage
        key={key}
        margin={'2px'}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    [],
  );

  return (
    <div className='react-gallery-photo'>
      <Gallery photos={photos} renderImage={imageRenderer} />
      <AppInfoView />
    </div>
  );
};
export default CustomImage;
