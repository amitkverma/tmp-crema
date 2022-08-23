import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import NoticeCalendar from './NoticeCalendar';
import NoticeCalendarSource from '!raw-loader!./NoticeCalendar';
import CalendarCard from './CalendarCard';
import CalendarCardSource from '!raw-loader!./CalendarCard';
import SelectableCalendar from './SelectableCalendar';
import SelectableCalendarSource from '!raw-loader!./SelectableCalendar';
import CustomHeader from './CustomHeader';
import CustomHeaderSource from '!raw-loader!./CustomHeader';

const Calendar = () => {
  return (
    <>
      <ComponentHeader
        title='Badge'
        refUrl='https://ant.design/components/badge/'
      />
      <AppRowContainer>
        <Col span={24} key='calendar-a'>
          <AppComponentCard
            title='Notice Calendar'
            description='This component can be rendered by using dateCellRender and monthCellRender with the data you need.'
            component={NoticeCalendar}
            source={NoticeCalendarSource}
          />
        </Col>
        <Col span={24} key='calendar-b'>
          <AppComponentCard
            title='Basic'
            description='A basic calendar component with Year/Month switch.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col span={24} key='calendar-c'>
          <AppComponentCard
            title='Selectable Calendar'
            description='A basic calendar component with Year/Month switch.'
            component={SelectableCalendar}
            source={SelectableCalendarSource}
          />
        </Col>
        <Col span={24} key='calendar-d'>
          <AppComponentCard
            title='Calendar Card'
            description='Nested inside a container element for rendering in limited space.'
            component={CalendarCard}
            source={CalendarCardSource}
          />
        </Col>
        <Col span={24} key='calendar-d'>
          <AppComponentCard
            title='Custom Header'
            description='Customize Calendar header content.'
            component={CustomHeader}
            source={CustomHeaderSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Calendar;
