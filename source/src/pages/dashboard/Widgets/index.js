import React, {useEffect} from 'react';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {Col} from 'antd';
import WallPaper from './WallPaper';
import HollywoodMovie from './HollywoodMovie';
import TemperatureCard from './TemperatureCard';
import DateSelector from './DatePicker';
import VisitorAnalysis from './VisitorAnalysis';
import BirthdayCard from './BirthdayCard';
import CountryMap from './CountryMap';
import RecentActivity from './RecentActivity';
import IllustrationDesign from './IllustrationDesign';
import CityInfo from './CityInfo';
import Categories from './Categories';
import Header from './Header';
import Subscribe from './Subscribe';
import Profile from './Profile';
import Messages from './Messages';
import TaskList from './TaskList';
import Colors from './Colors';
import Reviews from './Reviews';
import AddTags from './AddTags';
import CremaCard from './CremaCard';
import {blue, geekblue} from '@ant-design/colors';
import {TwitterOutlined} from '@ant-design/icons';
import Formats from './Formats';
import Price from './Price';
import {useDispatch, useSelector} from 'react-redux';
import {onGetWidgetsData} from '../../../redux/actions/Dashboard';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import {FaFacebookF} from 'react-icons/fa';

const Widgets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetWidgetsData());
  }, [dispatch]);

  const widgetsData = useSelector(({dashboard}) => dashboard.widgetsData);

  return (
    <>
      <AppPageMetadata title='Widgets' />
      {widgetsData ? (
        <>
          <h2 className='card-outer-title'>
            <IntlMessages id='dashboard.widgets' />
          </h2>

          <AppRowContainer>
            <Col xs={24} lg={12} key={'a'}>
              <WallPaper />
            </Col>
            <Col xs={24} lg={12} key={'b'}>
              <HollywoodMovie />
            </Col>
            <Col xs={24} lg={8} key={'c'}>
              <TemperatureCard temperatures={widgetsData.temperatures} />
            </Col>
            <Col xs={24} lg={8} key={'d'}>
              <DateSelector />
            </Col>
            <Col xs={24} lg={8} key={'e'}>
              <VisitorAnalysis />
            </Col>
            <Col xs={24} lg={8} key={'f'}>
              <BirthdayCard />
            </Col>
            <Col xs={24} lg={8} key={'g'}>
              <CountryMap />
            </Col>
            <Col xs={24} lg={8} key={'h'}>
              <RecentActivity data={widgetsData.recentActivity} />
            </Col>
            <Col xs={24} lg={8} key={'i'}>
              <IllustrationDesign />
            </Col>
            <Col xs={24} lg={8} key={'j'}>
              <CityInfo cityData={widgetsData.cityData} />
            </Col>
            <Col xs={24} lg={8} key={'k'}>
              <Categories data={widgetsData.categories} />
            </Col>
            <Col xs={24} lg={14} key={'l'}>
              <Header />
            </Col>
            <Col xs={24} lg={10} key={'m'}>
              <Subscribe />
            </Col>
            <Col xs={24} lg={8} key={'n'}>
              <Profile data={widgetsData.profile} />
            </Col>
            <Col xs={24} lg={8} key={'o'}>
              <Messages data={widgetsData.messages} />
            </Col>
            <Col xs={24} lg={8} key={'p'}>
              <TaskList data={widgetsData.taskList} />
            </Col>
            <Col xs={24} lg={6} key={'q'}>
              <Colors data={widgetsData.colorsList} />
            </Col>
            <Col xs={24} lg={10} key={'r'}>
              <Reviews data={widgetsData.reviewsList} />
            </Col>
            <Col xs={24} lg={8} key={'s'}>
              <AppRowContainer>
                <Col xs={24} key={'t'}>
                  <AddTags data={widgetsData.tagsList} />
                </Col>
                <Col xs={24} className='mb-0' key={'u'}>
                  <Price />
                </Col>
              </AppRowContainer>
            </Col>

            <Col xs={24} lg={8} key={'v'}>
              <CremaCard
                data={widgetsData.mateInfo.facebookInfo}
                bgColor={geekblue[6]}
                icon={<FaFacebookF />}
              />
            </Col>

            <Col xs={24} lg={8} key={'w'}>
              <CremaCard
                data={widgetsData.mateInfo.twitterInfo}
                bgColor={blue[6]}
                icon={<TwitterOutlined />}
              />
            </Col>

            <Col xs={24} lg={8} key={'x'}>
              <Formats data={widgetsData.formatList} />
            </Col>
          </AppRowContainer>
        </>
      ) : null}
    </>
  );
};

export default Widgets;
