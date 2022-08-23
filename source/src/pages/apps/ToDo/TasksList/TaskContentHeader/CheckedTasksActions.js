import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {
  onDeleteSelectedTasks,
  onUpdateTaskLabels,
} from '../../../../../redux/actions/ToDoApp';
import {useDispatch, useSelector} from 'react-redux';
import AppsDeleteIcon from '../../../../../@crema/core/AppsDeleteIcon';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import {Dropdown, Menu} from 'antd';
import {MdLabelOutline} from 'react-icons/md';
import AppIconButton from '../../../../../@crema/core/AppIconButton';

const CheckedTasksActions = ({checkedTasks, setCheckedTasks, page}) => {
  const {pathname} = useLocation();
  const path = pathname.split('/');
  const dispatch = useDispatch();

  const labelList = useSelector(({todoApp}) => todoApp.labelList);

  const onDeleteTasks = () => {
    dispatch(
      onDeleteSelectedTasks(
        checkedTasks,
        path[path.length - 2],
        path[path.length - 1],
        page,
      ),
    );
    setCheckedTasks([]);
  };

  const onSelectLabel = ({key}) => {
    dispatch(onUpdateTaskLabels(checkedTasks, key));
    setCheckedTasks([]);
  };

  const menuLabel = (
    <Menu onClick={onSelectLabel}>
      {labelList.map((label) => {
        return (
          <Menu.Item key={label.id} value={label.id}>
            {label.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <>
      <span className='todo-header-checked-action'>
        <AppsDeleteIcon
          deleteAction={onDeleteTasks}
          deleteTitle={<IntlMessages id='todo.deleteMessage' />}
        />

        <Dropdown overlay={menuLabel} trigger={['click']}>
          <AppIconButton
            title={<IntlMessages id='common.label' />}
            icon={<MdLabelOutline />}
          />
        </Dropdown>
      </span>
    </>
  );
};

export default CheckedTasksActions;

CheckedTasksActions.propTypes = {
  checkedTasks: PropTypes.array.isRequired,
  setCheckedTasks: PropTypes.func,
  page: PropTypes.number.isRequired,
};
