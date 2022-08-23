import React from 'react';
import {useSelector} from 'react-redux';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import SelectTasksDropdown from './SelectTasksDropdown';
import CheckedTasksActions from './CheckedTasksActions';
import AppsPagination from '../../../../../@crema/core/AppsPagination';
import ViewSelectButtons from './ViewSelectButtons';
import {Checkbox, Input} from 'antd';

const TaskContentHeader = (props) => {
  const {
    checkedTasks,
    setCheckedTasks,
    filterText,
    onSetFilterText,
    onChange,
    page,
    pageView,
    onChangePageView,
  } = props;

  const taskList = useSelector(({todoApp}) => todoApp.taskList);

  const totalTasks = useSelector(({todoApp}) => todoApp.totalTasks);

  const {Search} = Input;

  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const taskIds = taskList.map((task) => task.id);
      setCheckedTasks(taskIds);
    } else {
      setCheckedTasks([]);
    }
  };

  const onSelectTasks = (value) => {
    switch (value) {
      case 0:
        setCheckedTasks(taskList.map((task) => task.id));
        break;
      case 1:
        setCheckedTasks([]);
        break;

      case 2:
        setCheckedTasks(
          taskList.filter((task) => task.isStarred).map((task) => task.id),
        );
        break;

      case 3:
        setCheckedTasks(
          taskList.filter((task) => task.hasAttachments).map((task) => task.id),
        );
        break;

      default:
        setCheckedTasks([]);
    }
  };

  const {messages} = useIntl();

  return (
    <>
      <div className='todo-content-header'>
        <span className='todo-content-header-checkbox-view'>
          <Checkbox
            color='primary'
            indeterminate={
              checkedTasks.length > 0 && checkedTasks.length < taskList.length
            }
            checked={
              taskList.length > 0 && checkedTasks.length === taskList.length
            }
            onChange={onHandleMasterCheckbox}
          />
        </span>

        <SelectTasksDropdown onSelectTasks={onSelectTasks} />

        <span className='todo-header-checked-action-view'>
          {checkedTasks.length > 0 ? (
            <CheckedTasksActions
              checkedTasks={checkedTasks}
              setCheckedTasks={setCheckedTasks}
              page={page}
            />
          ) : null}
        </span>

        <Search
          className='todo-search'
          placeholder={messages['common.searchHere']}
          value={filterText}
          onChange={(event) => onSetFilterText(event.target.value)}
        />
        <ViewSelectButtons
          pageView={pageView}
          onChangePageView={onChangePageView}
        />
      </div>
      {pageView === 'list' && taskList.length > 0 ? (
        <AppsPagination
          className='todo-content-header-pagination'
          count={totalTasks}
          page={page}
          onChange={onChange}
        />
      ) : null}
    </>
  );
};

export default TaskContentHeader;

TaskContentHeader.defaultProps = {
  checkedTasks: [],
  filterText: '',
  page: 0,
};

TaskContentHeader.propTypes = {
  checkedTasks: PropTypes.array,
  setCheckedTasks: PropTypes.func,
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  page: PropTypes.number,
  onChange: PropTypes.func,
  pageView: PropTypes.string.isRequired,
  onChangePageView: PropTypes.func,
};
