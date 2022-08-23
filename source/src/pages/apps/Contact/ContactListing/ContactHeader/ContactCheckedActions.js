import React, {useState} from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {onUpdateContactLabel} from '../../../../../redux/actions/ContactApp';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AiOutlineDelete} from 'react-icons/ai';
import {Dropdown, Menu} from 'antd';
import {MdLabelOutline} from 'react-icons/md';
import AppIconButton from '../../../../../@crema/core/AppIconButton';

const ContactCheckedActions = (props) => {
  const {checkedContacts, setCheckedContacts, onSelectContactsForDelete} =
    props;

  const dispatch = useDispatch();

  const {pathname} = useLocation();

  const [isLabelOpen, onOpenLabel] = useState(false);

  const onLabelOpen = () => {
    onOpenLabel(true);
  };

  const onLabelClose = () => {
    onOpenLabel(false);
  };

  const onSelectLabel = ({key}) => {
    const path = pathname.split('/');
    dispatch(onUpdateContactLabel(checkedContacts, key, path[path.length - 2]));
    setCheckedContacts([]);
    onLabelClose();
  };

  const menuLabel = (
    <Menu
      keepMounted
      elevation={0}
      open={isLabelOpen}
      onClick={onSelectLabel}
      onClose={onLabelClose}>
      <Menu.Item value={311} key={311}>
        <IntlMessages id='common.crema' />
      </Menu.Item>
      <Menu.Item value={312} key={312}>
        <IntlMessages id='common.personal' />
      </Menu.Item>
      <Menu.Item value={313} key={313}>
        <IntlMessages id='common.work' />
      </Menu.Item>
    </Menu>
  );

  return (
    <span className='contact-checked-action'>
      <AppIconButton
        icon={<AiOutlineDelete />}
        title={<IntlMessages id='common.delete' />}
        onClick={() => onSelectContactsForDelete(checkedContacts)}
      />

      <Dropdown onClick={onLabelOpen} overlay={menuLabel} trigger={['click']}>
        <AppIconButton
          icon={<MdLabelOutline />}
          title={<IntlMessages id='common.label' />}
        />
      </Dropdown>
    </span>
  );
};

export default ContactCheckedActions;

ContactCheckedActions.propTypes = {
  checkedContacts: PropTypes.array.isRequired,
  setCheckedContacts: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
};
