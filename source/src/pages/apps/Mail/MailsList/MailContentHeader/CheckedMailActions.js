import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {
  onUpdateMailFolders,
  onUpdateMailLabels,
} from '../../../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {Dropdown, Menu} from 'antd';
import '../index.style.less';
import {BiArchiveIn} from 'react-icons/bi';
import {HiOutlineFolderRemove} from 'react-icons/hi';
import {MdLabelOutline} from 'react-icons/md';
import {AiOutlineDelete, AiOutlineInfoCircle} from 'react-icons/ai';
import AppIconButton from '../../../../../@crema/core/AppIconButton';

const CheckedMailActions = (props) => {
  const {checkedMails, setCheckedMails} = props;
  const dispatch = useDispatch();

  const labelList = useSelector(({mailApp}) => mailApp.labelList);

  const folderList = useSelector(({mailApp}) => mailApp.folderList);

  const onChangeMailFolder = ({key}) => {
    dispatch(onUpdateMailFolders(checkedMails, key));
    setCheckedMails([]);
  };

  const onSelectLabel = ({key}) => {
    const labelType = labelList.find(
      (label) => label.id.toString() === key.toString(),
    );
    dispatch(onUpdateMailLabels(checkedMails, labelType));
    setCheckedMails([]);
  };

  const menuLabel = (
    <Menu onClick={onSelectLabel}>
      {labelList.map((label) => {
        return (
          <Menu.Item value={label.id} key={label.id}>
            {label.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const menuMoveTo = (
    <Menu onClick={onChangeMailFolder}>
      {folderList.map((folder) => {
        return <Menu.Item key={folder.id}>{folder.name}</Menu.Item>;
      })}
    </Menu>
  );

  return (
    <div className='mail-checked-action'>
      <AppIconButton
        title={<IntlMessages id='common.archive' />}
        onClick={() => onChangeMailFolder(127)}
        icon={<BiArchiveIn />}
      />

      <AppIconButton
        title={<IntlMessages id='common.reportSpam' />}
        onClick={() => onChangeMailFolder(125)}
        icon={<AiOutlineInfoCircle />}
      />

      <AppIconButton
        title={<IntlMessages id='common.trash' />}
        onClick={() => onChangeMailFolder(126)}
        icon={<AiOutlineDelete />}
      />

      <Dropdown overlay={menuLabel} trigger={['click']}>
        <AppIconButton
          title={<IntlMessages id='common.label' />}
          icon={<MdLabelOutline />}
        />
      </Dropdown>

      <Dropdown overlay={menuMoveTo} trigger={['click']}>
        <AppIconButton
          title={<IntlMessages id='common.moveTo' />}
          icon={<HiOutlineFolderRemove />}
        />
      </Dropdown>
    </div>
  );
};

export default CheckedMailActions;

CheckedMailActions.defaultProps = {
  checkedMails: [],
};

CheckedMailActions.propTypes = {
  checkedMails: PropTypes.array.isRequired,
  setCheckedMails: PropTypes.func,
};
