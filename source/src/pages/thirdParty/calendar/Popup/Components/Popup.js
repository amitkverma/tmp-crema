import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import events from '../../events';
import moment from 'moment';
import '../../calendar.style.less';

const localizer = momentLocalizer(moment);

const Popup = () => {
  return (
    <div className='cr-app-calendar cr-app-cul-calendar'>
      <h3 className='cr-app-calendar-title'>
        Click the +x more link on any calendar day that cannot fit all the days
        events to see an inline popup of all the events.
      </h3>
      <Calendar
        className='app-calendar'
        popup
        localizer={localizer}
        events={events}
        defaultDate={new Date(2021, 10, 1)}
      />
    </div>
  );
};

export default Popup;
