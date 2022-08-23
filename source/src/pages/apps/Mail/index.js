import React, {useEffect} from 'react';
import MailsList from './MailsList';
import MailDetail from './MailDetail';
import {
  onGetConnectionList,
  onGetFolderList,
  onGetLabelList,
} from '../../../redux/actions/MailApp';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import AppsContainer from '../../../@crema/core/AppsContainer';
import MailSidebar from './MailSideBar';
import {useIntl} from 'react-intl';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import {useParams} from 'react-router-dom';

const Mail = () => {
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(onGetLabelList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetFolderList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetConnectionList());
  }, [dispatch]);

  const onGetMainComponent = () => {
    if (id) {
      return <MailDetail />;
    } else {
      return <MailsList />;
    }
  };

  const {messages} = useIntl();
  return (
    <AppsContainer
      title={messages['mailApp.mail']}
      sidebarContent={<MailSidebar />}>
      <AppPageMetadata title='Mail App' />
      {onGetMainComponent()}
    </AppsContainer>
  );
};

export default Mail;

Mail.defaultProps = {
  match: null,
};

Mail.propTypes = {
  match: PropTypes.object,
};
