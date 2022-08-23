import React, {useCallback, useEffect, useState} from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, {Modal, ModalGateway} from 'react-images';
import {useDispatch, useSelector} from 'react-redux';

import {onGetGalleryPhotos} from '../../../../redux/actions/Gallery';
import AppInfoView from '@crema/core/AppInfoView';
import '../index.style.less';

const ReactPhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const photos = useSelector(({gallery}) => gallery.photos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetGalleryPhotos());
  }, [dispatch]);

  const openLightBox = useCallback((event, {index}) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className='react-gallery-photo'>
      <Gallery photos={photos} onClick={openLightBox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <AppInfoView />
    </div>
  );
};
export default ReactPhotoGallery;
