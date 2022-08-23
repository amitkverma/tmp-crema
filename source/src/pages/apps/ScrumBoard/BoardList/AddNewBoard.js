import React, {useState} from 'react';

import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Button, Input, Modal} from 'antd';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';

const AddNewBoard = ({
  isModalVisible,
  handleCancel,
  onAddBoard,
  selectedBoard,
  handleOk,
}) => {
  const [boardName, setBoardName] = useState(() =>
    selectedBoard ? selectedBoard.name : '',
  );

  const onClickAddButton = () => {
    if (boardName !== '') {
      onAddBoard(boardName);
      setBoardName('');
      handleCancel();
    }
  };
  const {messages} = useIntl();

  return (
    <Modal
      title={messages['scrumboard.addNewBoard']}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      className='scrum-add-board-modal'
      footer={
        <Button
          type='primary'
          className='scrum-add-board-card-footer-btn'
          onClick={onClickAddButton}>
          <IntlMessages id='common.add' />
        </Button>
      }>
      <AppCard className='scrum-add-board-card'>
        <Input
          placeholder='Basic usage'
          label={<IntlMessages id='scrumboard.boardTitle' />}
          value={boardName}
          onChange={(event) => setBoardName(event.target.value)}
        />
      </AppCard>
    </Modal>
  );
};

export default AddNewBoard;

AddNewBoard.defaultProps = {
  selectedBoard: null,
};

AddNewBoard.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  onAddBoard: PropTypes.func,
  handleOk: PropTypes.func,
  selectedBoard: PropTypes.node,
};
