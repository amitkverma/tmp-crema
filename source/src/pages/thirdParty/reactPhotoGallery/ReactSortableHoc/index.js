import React, {useEffect, useState} from 'react';
import Gallery from 'react-photo-gallery';
import arrayMove from 'array-move';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import {useDispatch, useSelector} from 'react-redux';
import '../index.style.less';

import Photo from './Photo';
import {onGetGalleryPhotos} from '../../../../redux/actions/Gallery';
import AppInfoView from '@crema/core/AppInfoView';

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({items}) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
  />
));

const ReactSortableHoc = () => {
  const dispatch = useDispatch();
  const photos = useSelector(({gallery}) => gallery.photos);
  const [items, setItems] = useState(photos);

  useEffect(() => {
    dispatch(onGetGalleryPhotos());
    if (photos.length > 0) {
      setItems(photos);
    }
  }, [dispatch, photos]);

  const onSortEnd = ({oldIndex, newIndex}) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div className='react-gallery-photo'>
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={'xy'} />
      <AppInfoView />
    </div>
  );
};
export default ReactSortableHoc;
