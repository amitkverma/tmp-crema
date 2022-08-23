import React, {useState} from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Input} from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import './index.style.less';
import {useIntl} from 'react-intl';

const AddNewTag = (props) => {
  const {onAddNewTag} = props;
  const [newTag, setNewTag] = useState('');

  const [isAddNewTag, setAddNewTag] = useState(false);

  const onAddTag = () => {
    onAddNewTag(newTag);
    setNewTag('');
    setAddNewTag(false);
  };
  const {messages} = useIntl();

  return (
    <>
      {isAddNewTag ? (
        <div className='add-new-tag-row'>
          <div className='tag-form-field'>
            <Input
              placeholder={messages['common.tag']}
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            />
          </div>
          <span className='tag-check'>
            <CheckOutlined onClick={onAddTag} className='pointer' />
          </span>
          <span className='tag-close'>
            <CloseOutlined
              onClick={() => setAddNewTag(false)}
              className='pointer'
            />
          </span>
        </div>
      ) : (
        <span className='add-new-tag-link' onClick={() => setAddNewTag(true)}>
          <IntlMessages id='dashboard.addNewTag' />
        </span>
      )}
    </>
  );
};

export default AddNewTag;

AddNewTag.propTypes = {
  onAddNewTag: PropTypes.func,
};
