import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppGrid from '../../../../../@crema/core/AppGrid';
import AppMedialViewer from '../../../../../@crema/core/AppMedialViewer';

const Attachments = ({attachments}) => {
  const [index, setIndex] = useState(-1);

  const onClose = () => {
    setIndex(-1);
  };

  return (
    <div className='post-attachment'>
      <AppGrid
        itemPadding={8}
        data={attachments.length > 4 ? attachments.slice(0, 4) : attachments}
        column={attachments.length > 3 ? 2 : attachments.length}
        renderItem={(item, index) => (
          <div key={index} className='post-attachment-img-item'>
            <img
              src={item.preview}
              alt='attachment'
              onClick={() => setIndex(index)}
            />
            {attachments.length > 4 && index === 3 && (
              <div className='post-attachment-img-count'>
                + {attachments.length - 3}
              </div>
            )}
          </div>
        )}
      />
      <AppMedialViewer
        index={index}
        medias={attachments.map((data) => {
          return {
            url: data.preview,
            mime_type: 'image/*',
          };
        })}
        onClose={onClose}
      />
    </div>
  );
};

export default Attachments;

Attachments.propTypes = {
  attachments: PropTypes.array.isRequired,
};
