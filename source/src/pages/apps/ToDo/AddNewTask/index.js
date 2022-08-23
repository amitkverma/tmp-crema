import React from 'react';
import AddTaskForm from './AddTaskForm';
import PropTypes from 'prop-types';
import {Modal} from 'antd';
import {useIntl} from 'react-intl';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';
import './index.style.less';

const AddNewTask = ({isAddTaskOpen, selectedDate, onCloseAddTask}) => {
  const {messages} = useIntl();

  return (
    <Modal
      width={900}
      title={messages['todo.addNewTask']}
      visible={isAddTaskOpen}
      footer={false}
      onOk={isAddTaskOpen}
      onCancel={() => onCloseAddTask(false)}
      className='todo-modal'>
      <AppScrollbar className='todo-modal-scrollbar'>
        <AddTaskForm
          onCloseAddTask={onCloseAddTask}
          selectedDate={selectedDate}
        />
      </AppScrollbar>
    </Modal>
  );
};

export default AddNewTask;

AddNewTask.propTypes = {
  isAddTaskOpen: PropTypes.bool.isRequired,
  onCloseAddTask: PropTypes.func.isRequired,
  selectedDate: PropTypes.any,
};
