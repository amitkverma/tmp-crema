import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import events from '../../events';
import moment from 'moment';
import '../../calendar.style.less';

const localizer = momentLocalizer(moment);

const Timeslots = () => {
  return (
    <Calendar
      className='app-calendar'
      events={events}
      localizer={localizer}
      step={15}
      timeslots={8}
      defaultView='week'
      defaultDate={new Date(2021, 10, 12)}
    />
  );
};

export default Timeslots;
