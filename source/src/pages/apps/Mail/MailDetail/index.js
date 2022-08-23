import React, {createRef, useEffect} from 'react';
import MailDetailHeader from './MailDetailHeader';
import MailDetailBody from './MailDetailBody';
import {useDispatch, useSelector} from 'react-redux';
import {
  onGetSelectedMail,
  onNullifyMail,
} from '../../../../redux/actions/MailApp';
import {useParams} from 'react-router-dom';
import AppsContent from '../../../../@crema/core/AppsContainer/AppsContent';
import AppsHeader from '../../../../@crema/core/AppsContainer/AppsHeader';
import AppAnimateGroup from '../../../../@crema/core/AppAnimateGroup';
import {MailDetailSkeleton} from '../../../../@crema/core/AppSkeleton/MailDetailSkeleton';
import './index.style.less';

const MailDetail = () => {
  const dispatch = useDispatch();
  const contentRef = createRef();

  const {id} = useParams();
  const selectedMail = useSelector(({mailApp}) => mailApp.selectedMail);

  useEffect(() => {
    dispatch(onGetSelectedMail(id));
    return () => {
      onNullifyMail();
    };
  }, [dispatch, id]);

  if (!selectedMail) {
    return <MailDetailSkeleton />;
  }

  return (
    <div className='mail-detail' ref={contentRef}>
      <AppsHeader>
        <MailDetailHeader selectedMail={selectedMail} />
      </AppsHeader>
      <AppsContent isDetailView>
        <AppAnimateGroup type='bottom'>
          <MailDetailBody selectedMail={selectedMail} key={'mail_detail'} />
        </AppAnimateGroup>
      </AppsContent>
    </div>
  );
};

export default MailDetail;
