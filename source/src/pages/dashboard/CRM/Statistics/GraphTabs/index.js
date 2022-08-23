import React, {useState} from 'react';
import StatGraphs from './StatGraphs';
import PropTypes from 'prop-types';
import AppSelect from '../../../../../@crema/core/AppSelect';
import {Tabs} from 'antd';
import '../index.style.less';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';

const GraphTabs = (props) => {
  const {clientsData, incomeData, projectData} = props;

  const [value, setValue] = useState(0);

  const [projectGraphData, setProjectGraphData] = useState(projectData);
  const [clientsGraphData, setClientsGraphData] = useState(clientsData);
  const [incomeGraphData, setIncomeGraphData] = useState(incomeData);
  const {TabPane} = Tabs;

  const onSetGraphValue = (data) => {
    switch (value) {
      case 0: {
        setProjectGraphData(data);
        break;
      }
      case 1: {
        setClientsGraphData(data);
        break;
      }
      case 2: {
        setIncomeGraphData(data);
        break;
      }
      default:
        return null;
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleYearChange = (value) => {
    switch (value) {
      case 2017:
        onSetGraphValue(incomeData);
        break;
      case 2018:
        onSetGraphValue(clientsData);
        break;
      case 2021:
        onSetGraphValue(projectData);
        break;
      default:
        onSetGraphValue(projectData);
    }
  };

  const handleMonthChange = (value) => {
    switch (value) {
      case 'June':
        onSetGraphValue(incomeData);
        break;
      case 'July':
        onSetGraphValue(clientsData);
        break;
      case 'August':
        onSetGraphValue(projectData);
        break;
      default:
        onSetGraphValue(projectData);
    }
  };

  return (
    <div className='statistics-content'>
      <div className='statistics-header'>
        <h3>
          <IntlMessages id='dashboard.statistics' />
        </h3>

        <div className='statistics-header-action'>
          <AppSelect
            menus={[2021, 2018, 2017]}
            defaultValue={2021}
            onChange={handleYearChange}
          />
          <AppSelect
            menus={['June', 'July', 'August']}
            defaultValue='June'
            onChange={handleMonthChange}
          />
        </div>
      </div>
      <Tabs
        className='statistics-tabs'
        defaultActiveKey='1'
        onChange={handleChange}>
        <TabPane tab={<IntlMessages id='dashboard.project' />} key='1'>
          <StatGraphs data={projectGraphData} />
        </TabPane>
        <TabPane tab={<IntlMessages id='dashboard.newClients' />} key='2'>
          <StatGraphs data={clientsGraphData} />
        </TabPane>
        <TabPane tab={<IntlMessages id='dashboard.income' />} key='3'>
          <StatGraphs data={incomeGraphData} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default GraphTabs;

GraphTabs.defaultProps = {
  clientsData: [],
  incomeData: [],
  projectData: [],
};

GraphTabs.propTypes = {
  clientsData: PropTypes.array,
  incomeData: PropTypes.array,
  projectData: PropTypes.array,
};
