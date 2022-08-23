import React from 'react';
import {Calendar, momentLocalizer, Views} from 'react-big-calendar';
import events from '../../events';
import moment from 'moment';
import '../../calendar.style.less';

let allViews = Object.keys(Views).map((k) => Views[k]);

const ColoredDateCellWrapper = ({children}) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  });
const localizer = momentLocalizer(moment);
const Basic = () => {
  return (
    <Calendar
      className='app-calendar'
      events={events}
      views={allViews}
      step={60}
      showMultiDayTimes
      defaultDate={new Date(2021, 10, 1)}
      components={{
        timeSlotWrapper: ColoredDateCellWrapper,
      }}
      localizer={localizer}
    />
  );
};
export default Basic;
