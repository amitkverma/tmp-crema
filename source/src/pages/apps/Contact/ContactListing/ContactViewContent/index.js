import React from 'react';
import ContactListItem from './ContactListItem';
import ContactGridItem from './ContactGridItem';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import AppList from '../../../../../@crema/core/AppList';
import AppGrid from '../../../../../@crema/core/AppGrid';
import ListEmptyResult from '../../../../../@crema/core/AppList/ListEmptyResult';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import ContactListSkeleton from '../../../../../@crema/core/AppSkeleton/ContactListSkeleton';
import {AppAnimates} from '../../../../../shared/constants/AppEnums';
import ContactListItemMobile from './ContactListItemMobile';

const ContactViewContent = (props) => {
  const {
    list,
    pageView,
    loading,
    handleAddContactOpen,
    onChangeStarred,
    onChangeCheckedContacts,
    checkedContacts,
    onSelectContactsForDelete,
    onOpenEditContact,
    onViewContactDetail,
  } = props;
  const labelList = useSelector(({contactApp}) => contactApp.labelList);

  return (
    <>
      {pageView === 'list' ? (
        <>
          <div className='contact-list-desktop'>
            <AppList
              data={list}
              animation={AppAnimates.SLIDEUPIN}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={loading}
                  actionTitle={<IntlMessages id='contactApp.createContact' />}
                  onClick={handleAddContactOpen}
                  placeholder={<ContactListSkeleton />}
                />
              }
              renderItem={(contact) => (
                <ContactListItem
                  key={contact.id}
                  contact={contact}
                  labelList={labelList}
                  onChangeCheckedContacts={onChangeCheckedContacts}
                  checkedContacts={checkedContacts}
                  onSelectContactsForDelete={onSelectContactsForDelete}
                  onChangeStarred={onChangeStarred}
                  onViewContactDetail={onViewContactDetail}
                  onOpenEditContact={onOpenEditContact}
                />
              )}
            />
          </div>
          <div className='contact-list-mobile'>
            <AppList
              data={list}
              animation={AppAnimates.SLIDEUPIN}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={loading}
                  actionTitle={<IntlMessages id='contactApp.createContact' />}
                  onClick={handleAddContactOpen}
                  placeholder={<ContactListSkeleton />}
                />
              }
              renderItem={(contact) => (
                <ContactListItemMobile
                  key={contact.id}
                  contact={contact}
                  labelList={labelList}
                  checkedContacts={checkedContacts}
                  onChangeStarred={onChangeStarred}
                  onViewContactDetail={onViewContactDetail}
                  onChangeCheckedContacts={onChangeCheckedContacts}
                />
              )}
            />
          </div>
        </>
      ) : (
        <div className='contact-grid-view'>
          <AppGrid
            responsive={{
              xs: 1,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 2,
              xxl: 3,
            }}
            data={list}
            renderItem={(contact) => (
              <ContactGridItem
                key={contact.id}
                contact={contact}
                labelList={labelList}
                onChangeCheckedContacts={onChangeCheckedContacts}
                checkedContacts={checkedContacts}
                onChangeStarred={onChangeStarred}
                onSelectContactsForDelete={onSelectContactsForDelete}
                onViewContactDetail={onViewContactDetail}
                onOpenEditContact={onOpenEditContact}
              />
            )}
          />
        </div>
      )}
    </>
  );
};

export default ContactViewContent;

ContactViewContent.defaultProps = {
  list: [],
  checkedContacts: [],
};

ContactViewContent.propTypes = {
  list: PropTypes.array,
  pageView: PropTypes.string.isRequired,
  checkedContacts: PropTypes.array,
  onChangeCheckedContacts: PropTypes.func,
  onChangeStarred: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  onOpenEditContact: PropTypes.func,
  onViewContactDetail: PropTypes.func,
  handleAddContactOpen: PropTypes.func,
  loading: PropTypes.bool,
};
