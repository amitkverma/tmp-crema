import React from 'react';
import StatsCard from './StatsCard';
import PropTypes from 'prop-types';
import './index.style.less';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
//import {blue, cyan, geekblue, red} from '@ant-design/colors';
/*import {
  UserOutlined,
  ContainerOutlined,
  FileZipOutlined,
  FileTextOutlined,
} from '@ant-design/icons';*/
import IntlMessages from '../../../../@crema/utility/IntlMessages';

const QuickStats = ({quickStatsData}) => {
  return (
    <>
      <h2 className='card-outer-title text-uppercase'>
        <IntlMessages id='dashboard.quickStats' />
      </h2>
      <AppRowContainer>
        <Col xs={24} sm={12}>
          <StatsCard
            icon={'/assets/images/dashboard/total-clients.svg'}
            data={quickStatsData.clientsData}
            heading={<IntlMessages id='dashboard.totalClients' />}
          />
        </Col>

        <Col xs={24} sm={12}>
          <StatsCard
            icon={'/assets/images/dashboard/invoices.svg'}
            data={quickStatsData.invoiceData}
            heading={<IntlMessages id='dashboard.paidInvoices' />}
          />
        </Col>

        <Col xs={24} sm={12}>
          <StatsCard
            icon={'/assets/images/dashboard/total-projects.svg'}
            data={quickStatsData.totalProjectsData}
            heading={<IntlMessages id='dashboard.totalProjects' />}
          />
        </Col>

        <Col xs={24} sm={12}>
          <StatsCard
            icon={'/assets/images/dashboard/open-projects.svg'}
            data={quickStatsData.openProjectsData}
            heading={<IntlMessages id='dashboard.openProjects' />}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default QuickStats;

QuickStats.defaultProps = {
  quickStatsData: null,
};

QuickStats.propTypes = {
  quickStatsData: PropTypes.object,
};
