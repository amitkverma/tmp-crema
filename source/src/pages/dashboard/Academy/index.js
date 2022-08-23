import React, {useEffect} from 'react';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import GeneralStats from './GeneralStats';
import CourseCategories from './CourseCategories';
import MyProfile from './MyProfile';
import Notifications from './Notifications';
import MyCourses from './MyCourses';
import './index.style.less';
import CourseDetail from './CourseDetail';
import VideoPromo from './VideoPromo';
import MyLearning from './MyLearning';
import LatestResults from './LatestResults';
import MyClass from './MyClass';
import StudentRankings from './StudentRankings';
import PromoCard from './PromoCard';
import AverageGrades from './AverageGrades';
import RelatedCourses from './RelatedCourses';
import {useDispatch, useSelector} from 'react-redux';
import {onGetAcademyData} from '../../../redux/actions/Dashboard';
import {AppInfoView} from '../../../@crema';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const Academy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetAcademyData());
  }, [dispatch]);

  const {academyData} = useSelector(({dashboard}) => dashboard);

  return (
    <>
      <AppPageMetadata title='Academy Dashboard' />
      {academyData ? (
        <AppRowContainer>
          {academyData.academicStats.map((item, index) => (
            <Col xs={24} sm={12} lg={6} key={'a' + index}>
              <GeneralStats stats={item} />
            </Col>
          ))}
          {academyData.courseCategories.map((data, index) => (
            <Col xs={24} sm={12} lg={6} key={'b' + index}>
              <CourseCategories course={data} />
            </Col>
          ))}

          <Col xs={24} className='mb-0' key={'c'}>
            <AppRowContainer>
              <Col xs={24} sm={12} lg={6}>
                <MyProfile profile={academyData.profile} />
              </Col>

              <Col
                xs={24}
                sm={12}
                lg={6}
                key={'d'}
                className='aca-notification-root'>
                <Notifications notifications={academyData.notifications} />
              </Col>

              <Col xs={24} sm={24} lg={12} className='my-course-root' key={'e'}>
                <MyCourses courses={academyData.courses} />
              </Col>
            </AppRowContainer>
          </Col>

          {academyData.courseDetails.map((data, index) => (
            <Col xs={24} sm={24} lg={8} key={'f' + index}>
              <CourseDetail course={data} />
            </Col>
          ))}

          <Col xs={24} sm={24} lg={10} xxl={12} key={'g'}>
            <VideoPromo videoPromo={academyData.videoPromo} />
          </Col>

          <Col xs={24} sm={24} lg={14} xxl={12} className='mb-0' key={'h'}>
            <AppRowContainer>
              <Col xs={24}>
                <MyLearning learningData={academyData.learningData} />
              </Col>
              <Col xs={24} sm={12} xl={12} key={'i'}>
                <LatestResults latestResults={academyData.latestResults} />
              </Col>
              <Col xs={24} sm={12} xl={12} key={'j'}>
                <MyClass classData={academyData.classData} />
              </Col>
            </AppRowContainer>
          </Col>
          <Col xs={24} sm={24} lg={18} key={'k'}>
            <StudentRankings studentRankings={academyData.studentRankings} />
          </Col>
          <Col xs={24} sm={24} lg={6} key={'l'}>
            <PromoCard />
          </Col>
          <Col xs={24} sm={24} lg={12} key={'m'}>
            <AverageGrades grades={academyData.grades} />
          </Col>
          <Col xs={24} sm={24} lg={12} key={'n'}>
            <RelatedCourses relatedCourses={academyData.relatedCourses} />
          </Col>
        </AppRowContainer>
      ) : null}

      <AppInfoView />
    </>
  );
};

export default Academy;
