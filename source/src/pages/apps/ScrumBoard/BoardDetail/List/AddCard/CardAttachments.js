import React from 'react';
import IntlMessages from '../../../../../../@crema/utility/IntlMessages';
import moment from 'moment';
import PropTypes from 'prop-types';
import {AiOutlineDelete} from 'react-icons/ai';
import {BiCloudDownload} from 'react-icons/bi';
import AppIconButton from '../../../../../../@crema/core/AppIconButton';

const CardAttachments = (props) => {
  const {attachments, onDeleteAttachment} = props;

  return (
    <>
      {attachments && attachments.length > 0 ? (
        <>
          <h4 className='scrum-board-attachment-title'>
            <IntlMessages id='common.attachments' />
          </h4>

          {attachments ? (
            <div className='scrum-board-attachment'>
              {attachments.map((attachment) => {
                const {file} = attachment;
                return (
                  <div
                    className='scrum-board-attachment-items'
                    key={attachment.id}>
                    <div className='scrum-board-attachment-card'>
                      <div className='scrum-board-attachment-img'>
                        <img src={attachment.preview} alt='attachment' />

                        <div className='scrum-board-attachment-items-action'>
                          <AppIconButton icon={<BiCloudDownload />} />
                          <AppIconButton
                            icon={<AiOutlineDelete />}
                            onClick={() => onDeleteAttachment(attachment.id)}
                          />
                        </div>
                      </div>

                      <div className='scrum-board-attachment-content'>
                        <span className='text-truncate scrum-board-attachment-file-name'>
                          {file.name}
                        </span>
                        <div className='scrum-board-attachment-file-time'>
                          <span>
                            {
                              moment(file.lastModified)
                                .format('ll')
                                .split(',')[0]
                            }
                          </span>
                          <span>
                            <IntlMessages id='common.at' />
                          </span>
                          <span>{moment(file.lastModified).format('LT')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default CardAttachments;

CardAttachments.defaultProps = {
  attachments: [],
};

CardAttachments.propTypes = {
  attachments: PropTypes.array,
  onDeleteAttachment: PropTypes.func,
};
