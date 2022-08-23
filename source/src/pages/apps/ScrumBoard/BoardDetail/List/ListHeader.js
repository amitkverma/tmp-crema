import React, {useState} from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import AppConfirmationModal from '../../../../../@crema/core/AppConfirmationModal';
import {HiCheck} from 'react-icons/hi';
import {CgClose} from 'react-icons/cg';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import {Input} from 'antd';
import AppCard from '../../../../../@crema/core/AppCard';
import './index.style.less';
import AppIconButton from '../../../../../@crema/core/AppIconButton';

const ListHeader = (props) => {
  const {name, id, onDelete, updateTitle} = props;

  const [isEditListName, setEditListName] = useState(false);

  const [editedListName, setEditedListName] = useState('');

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const onDeleteBoardList = () => {
    onDelete(id);
    setDeleteDialogOpen(false);
  };

  const onEditButtonClick = () => {
    setEditedListName(name);
    setEditListName(!isEditListName);
  };

  const onEditListName = () => {
    if (editedListName !== '') {
      updateTitle(editedListName);
      setEditListName(false);
    }
  };

  return (
    <AppCard className='scrum-board-list-header-card'>
      <div className='scrum-board-list-header-flex'>
        {!isEditListName ? (
          <>
            <h5>{name}</h5>
            <div className='scrum-board-list-header-flex-auto'>
              <AppIconButton
                icon={<AiOutlineEdit />}
                onClick={onEditButtonClick}
              />

              <AppIconButton
                icon={<AiOutlineDelete />}
                onClick={() => setDeleteDialogOpen(true)}
              />
            </div>
          </>
        ) : (
          <>
            <div className='scrum-board-list-header-input'>
              <Input
                label={<IntlMessages id='scrumboard.listTitle' />}
                value={editedListName}
                onChange={(event) => setEditedListName(event.target.value)}
              />
            </div>
            <div className='scrum-board-list-header-flex-auto'>
              <AppIconButton icon={<HiCheck />} onClick={onEditListName} />
              <AppIconButton
                icon={<CgClose />}
                onClick={() => setEditListName(false)}
              />
            </div>
          </>
        )}
      </div>

      {isDeleteDialogOpen ? (
        <AppConfirmationModal
          open={isDeleteDialogOpen}
          onDeny={setDeleteDialogOpen}
          onConfirm={onDeleteBoardList}
          title={<IntlMessages id='scrumboard.deleteMessage' />}
          dialogTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    </AppCard>
  );
};

export default ListHeader;

ListHeader.propTypes = {
  boardId: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
  updateTitle: PropTypes.func,
};
