import React, {useState} from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {RiCloseLine} from 'react-icons/ri';
import {MdAdd} from 'react-icons/md';
import {Button, Input} from 'antd';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppIconButton from '../../../../@crema/core/AppIconButton';

const AddNewList = (props) => {
  const {onAdd, onCancel} = props;

  const [listName, setListName] = useState('');

  const onClickAddButton = () => {
    if (listName !== '') {
      onAdd(listName);
      setListName('');
    }
  };

  const {messages} = useIntl();

  return (
    <AppCard className='scrum-board-add-list-card'>
      <div className='scrum-board-add-list'>
        <span className='scrum-board-add-icon'>
          <MdAdd />
        </span>
        <p className='scrum-board-add-text'>
          <IntlMessages id='scrumboard.addAList' />
        </p>
        <span className='scrum-board-add-close'>
          <AppIconButton onClick={onCancel} icon={<RiCloseLine />} />
        </span>
      </div>
      <div className='scrum-board-add-list-form-filed'>
        <Input
          placeholder={messages['scrumboard.cardTitle']}
          value={listName}
          onChange={(event) => setListName(event.target.value)}
        />
        <Button
          type='primary'
          ghost
          className='scrum-board-add-list-btn'
          onClick={() => onClickAddButton()}>
          <IntlMessages id='common.add' />
        </Button>
      </div>
    </AppCard>
  );
};

export default AddNewList;

AddNewList.propTypes = {
  onCancel: PropTypes.func,
  onAdd: PropTypes.func,
};
