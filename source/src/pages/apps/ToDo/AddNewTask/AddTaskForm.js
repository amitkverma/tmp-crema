import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {useDispatch, useSelector} from 'react-redux';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Avatar, Button, Col, DatePicker, Form, Input, Select} from 'antd';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import './index.style.less';
import {onCreateTask} from '../../../../redux/actions';
import moment from 'moment';
import {useAuthUser} from '../../../../@crema/utility/AuthHooks';

const AddTaskForm = ({onCloseAddTask, selectedDate}) => {
  const labelList = useSelector(({todoApp}) => todoApp.labelList);

  const priorityList = useSelector(({todoApp}) => todoApp.priorityList);

  const staffList = useSelector(({todoApp}) => todoApp.staffList);
  const {user} = useAuthUser();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const staff = staffList.find((staff) => staff.id === +values.staffList);

    const priority = priorityList.find(
      (label) => +values.priorityList === label.id,
    );
    const label = labelList.filter((label) => +values.labelList === label.id);

    const newTask = {
      ...values,
      id: Math.floor(Math.random() * 1000000),
      isStarred: false,
      hasAttachments: false,
      sentAt: '10.30am',
      isRead: true,
      folderValue: 120,
      createdBy: {
        name: user.displayName ? user.displayName : 'user',
        image: user.photoURL ? user.photoURL : '/assets/images/dummy2.jpg',
      },
      scheduleDate: moment(values.scheduleDate).format('lll'),
      assignedTo: staff,
      createdOn: moment().format('ll'),
      status: 1,
      comments: [],
      label: label,
      priority: priority,
    };
    console.log(newTask);
    dispatch(onCreateTask(newTask));
    onCloseAddTask();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    onCloseAddTask(true);
  };

  const {messages} = useIntl();

  const {Option} = Select;

  return (
    <Form
      className='todo-addTask-form'
      name='basic'
      initialValues={{
        scheduleDate: selectedDate ? moment(selectedDate, 'YYYY-MM-DD') : '',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <div className='todo-modal-content'>
        <Form.Item
          className='form-field'
          name='title'
          rules={[{required: true, message: 'Please input your Task Title!'}]}>
          <Input
            className='todo-addTask-input'
            placeholder={messages['todo.taskTitle']}
          />
        </Form.Item>

        <AppRowContainer>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name='staffList' className='form-field'>
              <Select placeholder={messages['common.staff']}>
                {staffList.map((staff) => {
                  return (
                    <Option value={staff.id} key={staff.id}>
                      <div className='todo-select-row'>
                        {staff.image ? (
                          <Avatar
                            className='todo-select-avatar'
                            src={staff.image}
                          />
                        ) : (
                          <Avatar className='todo-select-avatar'>
                            {staff.name.toUpperCase()}
                          </Avatar>
                        )}
                        <span className='todo-select-name text-truncate'>
                          {staff.name}
                        </span>
                      </div>
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Form.Item className='form-field' name='scheduleDate'>
              <DatePicker className='add-task-form-date' />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Form.Item className='form-field' name='priorityList'>
              <Select placeholder={messages['common.priority']}>
                {priorityList.map((priority) => {
                  return (
                    <Option value={priority.id} key={priority.id}>
                      {priority.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Form.Item className='form-field' name='labelList'>
              <Select
                placeholder={messages['common.label']}
                mode='multiple'
                maxTagCount={2}>
                {labelList.map((label) => {
                  return (
                    <Option value={label.id} key={label.id}>
                      {label.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
        </AppRowContainer>

        <Form.Item className='form-field' name='description'>
          <Input.TextArea
            placeholder={messages['common.description']}
            autoSize={{minRows: 3, maxRows: 5}}
          />
        </Form.Item>
      </div>

      <div className='todo-modal-footer'>
        <Button className='todo-modal-btn' type='primary' htmlType='submit'>
          <IntlMessages id='common.save' />
        </Button>
      </div>
    </Form>
  );
};

export default AddTaskForm;

AddTaskForm.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func,
  taskLabels: PropTypes.array.isRequired,
  setTaskLabels: PropTypes.func,
  isSubmitting: PropTypes.bool,
  onCloseAddTask: PropTypes.func,
  selectedDate: PropTypes.any,
};
