import React from 'react';
import IntlMessages from '../../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {AiOutlineDelete} from 'react-icons/ai';
import {Button, Checkbox, Input} from 'antd';
import AppIconButton from '../../../../../../@crema/core/AppIconButton';

const CardCheckedList = (props) => {
  const {
    onAddNewCheckedItem,
    checkedList,
    onSetCheckedItemText,
    onDeleteCheckedItem,
  } = props;

  return (
    <div className='scrum-board-card-check-list'>
      <div className='scrum-board-card-check-list-header'>
        <h4>
          <IntlMessages id='scrumboard.checkedLists' />
        </h4>

        <Button ghost type='primary' onClick={() => onAddNewCheckedItem()}>
          <IntlMessages id='scrumboard.addNew' />
        </Button>
      </div>

      {checkedList.map((checkedItem) => {
        return (
          <div
            className='scrum-board-card-check-list-item'
            key={checkedItem.id}>
            <Checkbox className='scrum-board-card-check-list-item-check-box' />
            <Input
              className='scrum-board-card-check-list-item-input'
              value={checkedItem.title}
              onChange={(e) =>
                onSetCheckedItemText(e.target.value, checkedItem.id)
              }
            />
            <AppIconButton
              icon={<AiOutlineDelete />}
              onClick={() => onDeleteCheckedItem(checkedItem.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardCheckedList;

CardCheckedList.defaultProps = {
  checkedList: [],
};

CardCheckedList.propTypes = {
  onAddNewCheckedItem: PropTypes.func,
  checkedList: PropTypes.array,
  onSetCheckedItemText: PropTypes.func,
  onDeleteCheckedItem: PropTypes.func,
};
