import React from 'react';
import IntlMessages from '../../../../../../@crema/utility/IntlMessages';
import CardAttachments from './CardAttachments';
import CardCheckedList from './CardCheckedList';
import CardComments from './CardComments';
import {useIntl} from 'react-intl';
import moment from 'moment';
import PropTypes from 'prop-types';
import {Avatar, Button, Col, DatePicker, Form, Input, Select} from 'antd';
import AppRowContainer from '../../../../../../@crema/core/AppRowContainer';
import {useDispatch, useSelector} from 'react-redux';
import {onAddNewCard, onEditCardDetails} from '../../../../../../redux/actions';
import AppScrollbar from '../../../../../../@crema/core/AppScrollbar';

const {Option} = Select;
const {TextArea} = Input;

const AddCardForm = (props) => {
  const {
    board,
    list,
    checkedList,
    setCheckedList,
    comments,
    setComments,
    authUser,
    attachments,
    setAttachments,
    selectedMembers,
    setMembersList,
    selectedCard,
    onCloseAddCard,
    isSubmitting,
  } = props;

  const {messages} = useIntl();

  const labelList = useSelector(({scrumboardApp}) => scrumboardApp.labelList);

  const memberList = useSelector(({scrumboardApp}) => scrumboardApp.memberList);

  const dispatch = useDispatch();

  console.log('board, list: ', board, list);
  const onDeleteCheckedItem = (id) => {
    const updatedList = checkedList.filter((item) => item.id !== id);
    setCheckedList(updatedList);
  };

  const onAddNewCheckedItem = () => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      title: '',
    };
    const updatedList = checkedList.concat(item);
    setCheckedList(updatedList);
  };

  const onSetCheckedItemText = (title, id) => {
    const updatedList = checkedList.map((item) => {
      if (item.id === id) {
        item.title = title;
        return item;
      } else {
        return item;
      }
    });
    setCheckedList(updatedList);
  };

  const onAddNewComment = (comment) => {
    setComments(
      comments.concat({
        comment: comment,
        sender: {
          id: authUser.id,
          name: authUser.displayName ? authUser.displayName : 'User',
          image: authUser.photoURL,
        },
        date: moment().format('ll'),
      }),
    );
  };

  const onDeleteAttachment = (id) => {
    const updatedAttachments = attachments.filter(
      (attachment) => attachment.id !== id,
    );
    setAttachments(updatedAttachments);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    if (selectedCard) {
      const editedCard = {
        ...selectedCard,
        comments: comments,
        ...values,
        attachments: attachments,
        members: selectedMembers,
        label: values.members,
        checkedList: checkedList.filter((item) => item.title !== ''),
      };
      dispatch(onEditCardDetails(board, list, editedCard));
    } else {
      const newCard = {
        id: Math.floor(Math.random() * 1000),
        attachments: attachments,
        checkedList: [],
        comments: comments,
        ...values,
        label: values.members,
        members: selectedMembers,
      };
      dispatch(onAddNewCard(board, list, newCard));
    }
  };

  return (
    <Form
      className='scrum-board-add-card-form'
      noValidate
      autoComplete='off'
      initialValues={{
        title: selectedCard?.title,
        desc: selectedCard?.desc,
        date:
          selectedCard && selectedCard.date
            ? moment(selectedCard.date, 'DD-MM-YYYY')
            : '',
        label: selectedCard?.label.map((data) => data.id),
        members: selectedCard?.members.map((data) => data.id),
      }}
      onFinish={onFinish}>
      <AppScrollbar className='scrum-board-add-card-form-scroll'>
        <div className='scrum-board-add-card-form-content'>
          <AppRowContainer>
            <Col xs={24} md={16}>
              <Form.Item name='title'>
                <Input placeholder={messages['common.title']} />
              </Form.Item>
            </Col>

            <Col xs={24} md={8}>
              <Form.Item name='date'>
                <DatePicker className='scrum-board-date-picker' />
              </Form.Item>
            </Col>
          </AppRowContainer>

          <Form.Item name='desc'>
            <TextArea
              autoSize={{minRows: 3, maxRows: 5}}
              placeholder={messages['common.description']}
            />
          </Form.Item>

          <AppRowContainer>
            <Col xs={24} lg={12}>
              <Form.Item name='label'>
                <Select
                  mode='multiple'
                  allowClear
                  maxTagCount={3}
                  style={{width: '100%'}}
                  placeholder='Please select Label'
                  onChange={handleChange}>
                  {labelList.map((label) => (
                    <Option key={label.id} value={label.id}>
                      {label.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item name='members'>
                <Select
                  mode='multiple'
                  maxTagCount={2}
                  placeholder='Please select Members'
                  onChange={(value) => setMembersList(value)}>
                  {memberList.map((member) => (
                    <Option key={member.id} value={member.id}>
                      <div className='multiple-select'>
                        {member.image ? (
                          <Avatar src={member.image} />
                        ) : (
                          <Avatar>{member.name.toUpperCase()}</Avatar>
                        )}
                        <span className='multiple-select-name'>
                          {member.name}
                        </span>
                      </div>
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </AppRowContainer>

          <CardAttachments
            attachments={attachments}
            onDeleteAttachment={onDeleteAttachment}
          />

          {selectedCard ? (
            <CardCheckedList
              onAddNewCheckedItem={onAddNewCheckedItem}
              checkedList={checkedList}
              onDeleteCheckedItem={onDeleteCheckedItem}
              onSetCheckedItemText={onSetCheckedItemText}
            />
          ) : null}

          <CardComments comments={comments} onAddNewComment={onAddNewComment} />
        </div>
      </AppScrollbar>
      <div className='scrum-board-add-card-form-footer'>
        <Button type='primary' ghost onClick={onCloseAddCard}>
          <IntlMessages id='common.cancel' />
        </Button>
        <Button type='primary' disabled={isSubmitting}>
          <IntlMessages id='common.done' />
        </Button>
      </div>
    </Form>
  );
};

export default AddCardForm;

AddCardForm.defaultProps = {
  comments: [],
  attachments: [],
  selectedLabels: [],
  selectedMembers: [],
  isSubmitting: false,
};

AddCardForm.propTypes = {
  board: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func,
  checkedList: PropTypes.array.isRequired,
  setCheckedList: PropTypes.func,
  comments: PropTypes.array,
  setComments: PropTypes.func,
  authUser: PropTypes.object.isRequired,
  attachments: PropTypes.array,
  setAttachments: PropTypes.func,
  selectedLabels: PropTypes.array,
  setSelectedLabels: PropTypes.func,
  selectedMembers: PropTypes.array,
  setMembersList: PropTypes.func,
  onCloseAddCard: PropTypes.func,
  selectedCard: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool,
};
