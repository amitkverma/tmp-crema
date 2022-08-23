import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onUpdateSelectedTask} from '../../../../../redux/actions/ToDoApp';
import moment from 'moment';
import {useAuthUser} from '../../../../../@crema/utility/AuthHooks';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import Labels from '../../TasksList/TaskListItem/Labels';
import ChangeStaff from './ChangeStaff';
import AssignedStaff from './AssignedStaff';
import DatePicker from './DatePicker';
import TaskStatus from './TaskStatus';
import TaskPriority from './TaskPriority';
import TaskCreatedByInfo from './TaskCreatedByInfo';
import {Button, Divider, Input} from 'antd';
import TaskLabel from './TaskLabel';
import {FiSend} from 'react-icons/fi';
import {AiOutlineCheckCircle, AiOutlineEdit} from 'react-icons/ai';
import AppIconButton from '../../../../../@crema/core/AppIconButton';
import CommentsList from './CommentsList';

const TaskDetailBody = (props) => {
  const {selectedTask} = props;

  const dispatch = useDispatch();

  const {user} = useAuthUser();

  const staffList = useSelector(({todoApp}) => todoApp.staffList);

  const [isEdit, setEdit] = useState(false);

  const [title, setTitle] = useState(selectedTask.title);
  const [content, setContent] = useState(selectedTask.content);

  const [comment, setComment] = useState('');

  const [scheduleDate, setScheduleDate] = useState(
    moment(selectedTask.scheduleDate).format('YYYY/MM/DD'),
  );

  const [selectedStaff, setStaff] = useState(selectedTask.assignedTo);

  const inputLabel = React.useRef(null);

  const [labelWidth, setLabelWidth] = React.useState(0);

  useEffect(() => {
    setLabelWidth(60);
  }, []);

  const onClickEditButton = () => {
    setEdit(true);
  };

  const onDoneEditing = () => {
    const task = selectedTask;
    task.content = content;
    task.title = title;
    task.scheduleDate = scheduleDate;
    task.assignedTo = selectedStaff;
    dispatch(onUpdateSelectedTask(task));
    console.log('onDoneEditing: ', task);
    setEdit(!isEdit);
  };

  const onAddComments = () => {
    let task = selectedTask;
    task.comments = task.comments.concat({
      comment: comment,
      name: user.displayName ? user.displayName : 'User',
      image: user.photoURL,
      date: moment().format('ll'),
    });
    dispatch(onUpdateSelectedTask(task));
    setComment('');
  };

  const handleStaffChange = (value) => {
    const newStaff = staffList.find((staff) => staff.id === value);
    setStaff((staff) => {
      return {...staff, ...newStaff};
    });
  };

  const {messages} = useIntl();

  return (
    <div className='todo-detail-content'>
      <div className='todo-detail-content-header'>
        <div className='todo-detail-content-header-left'>
          {isEdit ? (
            <Input
              style={{maxWidth: 200, marginRight: 20}}
              placeholder={messages['todo.taskTitle']}
              defaultValue={title}
              onChange={({target: {value}}) => setTitle(value)}
            />
          ) : (
            <h2>{selectedTask.title}</h2>
          )}

          <div className='ant-row ant-row-middle todo-detail-content-header-label'>
            {selectedTask.label ? <Labels labels={selectedTask.label} /> : null}
          </div>

          <div className='todo-detail-content-header-tag'>
            <span
              className='todo-detail-content-header-tag-btn'
              style={{
                color: selectedTask.priority.color,
                backgroundColor: selectedTask.priority.color + '10',
              }}>
              {selectedTask.priority.name}
            </span>
          </div>
        </div>

        <TaskCreatedByInfo
          createdBy={selectedTask.createdBy}
          createdOn={selectedTask.createdOn}
        />
      </div>

      <div className='todo-detail-staff-edit'>
        <div className='todo-detail-staff-row'>
          {isEdit ? (
            <>
              <div className='todo-detail-staff'>
                <ChangeStaff
                  inputLabel={inputLabel}
                  labelWidth={labelWidth}
                  selectedStaff={selectedStaff}
                  handleStaffChange={handleStaffChange}
                />
              </div>
              <DatePicker
                scheduleDate={scheduleDate}
                setScheduleDate={setScheduleDate}
              />
            </>
          ) : (
            <AssignedStaff assignedStaff={selectedTask.assignedTo} />
          )}
        </div>

        <div className='todo-detail-staff-edit-btn-view'>
          {!isEdit ? (
            <AppIconButton
              onClick={onClickEditButton}
              icon={<AiOutlineEdit />}
            />
          ) : (
            <AppIconButton
              onClick={onDoneEditing}
              icon={<AiOutlineCheckCircle />}
            />
          )}
        </div>
      </div>

      <Divider className='todo-detail-divider' />

      {!isEdit ? (
        <p className='todo-detail-para'>{content}</p>
      ) : (
        <div className='todo-detail-textarea-form'>
          <Input.TextArea
            placeholder={messages['common.description']}
            defaultValue={content}
            onChange={({target: {value}}) => setContent(value)}
          />
        </div>
      )}

      <div className='todo-detail-status-pri'>
        <div className='todo-detail-status'>
          <TaskStatus selectedTask={selectedTask} />
        </div>

        <div className='todo-detail-status'>
          <TaskPriority selectedTask={selectedTask} />
        </div>
        <div className='todo-detail-status'>
          <TaskLabel selectedTask={selectedTask} />
        </div>
      </div>

      <Divider className='todo-detail-divider' />

      <CommentsList comments={selectedTask.comments} />

      <div className='todo-detail-textarea-form todo-detail-footer'>
        <Input.TextArea
          autoSize={{minRows: 1, maxRows: 2}}
          placeholder={messages['common.writeComment']}
          value={comment}
          onChange={({target: {value}}) => setComment(value)}
        />
        <Button
          shape='circle'
          type='primary'
          className='todo-detail-btn'
          disabled={!comment}
          onClick={onAddComments}>
          <FiSend />
        </Button>
      </div>
    </div>
  );
};

export default TaskDetailBody;

TaskDetailBody.propTypes = {
  selectedTask: PropTypes.object.isRequired,
};
