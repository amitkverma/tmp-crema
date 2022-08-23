import React, {useEffect} from 'react';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import SalesState from './SalesState';
import SaleStatics from './SaleStatics';
import Application from './Application';
import ReportCard from './ReportCard';
import RecentOrders from './RecentOrders';
import Revenue from './Revenue';
import MarketingCampaign from './MarketingCampaign';
import NotificationsEcom from './Notifications';
import NewCustomers from './NewCustomers';
import PopularProducts from './PopularProducts';
import SiteVisitors from './SiteVisitors';
import Browser from './Browser';
import {AppInfoView} from '../../../@crema';
import {useDispatch, useSelector} from 'react-redux';
import {onGetECommerceData} from '../../../redux/actions/Dashboard';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const ECommerce = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetECommerceData());
  }, [dispatch]);

  const ecommerceData = useSelector(({dashboard}) => dashboard.ecommerceData);

  return (
    <>
      <AppPageMetadata title='Ecommerce Dashboard' />
      {ecommerceData ? (
        <AppRowContainer>
          {ecommerceData.salesState.map((data) => (
            <Col xs={24} sm={12} lg={6} key={'a' + data.id}>
              <SalesState data={data} />
            </Col>
          ))}

          <Col xs={24} lg={18} key={'b'}>
            <SaleStatics />
          </Col>
          <Col xs={24} lg={6} key={'c'}>
            <Application />
          </Col>

          {ecommerceData.reportCards.map((reportVal) => (
            <Col xs={24} lg={8} key={'d' + reportVal.id + Math.random()}>
              <ReportCard data={reportVal} />
            </Col>
          ))}

          <Col xs={24} lg={18} key={'e'}>
            <RecentOrders recentOrders={ecommerceData.recentOrders} />
          </Col>
          <Col xs={24} lg={6} key={'f'}>
            <Revenue />
          </Col>

          <Col xs={24} lg={12} key={'g'}>
            <MarketingCampaign
              marketingCampaign={ecommerceData.marketingCampaign}
            />
          </Col>
          <Col xs={24} lg={12} key={'h'}>
            <NotificationsEcom notifications={ecommerceData.notifications} />
          </Col>

          <Col xs={24} lg={12} key={'i'}>
            <NewCustomers newCustomers={ecommerceData.newCustomers} />
          </Col>
          <Col xs={24} lg={12} key={'j'}>
            <PopularProducts popularProducts={ecommerceData.popularProducts} />
          </Col>

          <Col xs={24} lg={18} key={'k'}>
            <SiteVisitors siteVisitorsData={ecommerceData.siteVisitors} />
          </Col>
          <Col xs={24} lg={6} key={'l'}>
            <Browser browserData={ecommerceData.browser} />
          </Col>
        </AppRowContainer>
      ) : null}
      <AppInfoView />
    </>
  );
};

export default ECommerce;
