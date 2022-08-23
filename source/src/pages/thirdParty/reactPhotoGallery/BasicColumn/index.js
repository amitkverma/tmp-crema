import React, {useEffect} from 'react';
import Gallery from 'react-photo-gallery';
import {useDispatch, useSelector} from 'react-redux';

import {onGetGalleryPhotos} from '../../../../redux/actions/Gallery';
import AppInfoView from '@crema/core/AppInfoView';
import '../index.style.less';

const Index = () => {
  const photos = useSelector(({gallery}) => gallery.photos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetGalleryPhotos());
  }, [dispatch]);

  return (
    <div className='react-gallery-photo'>
      <Gallery photos={photos} /*direction="column"*/ columns={4} />
      <AppInfoView />
    </div>
  );
};
export default Index;
