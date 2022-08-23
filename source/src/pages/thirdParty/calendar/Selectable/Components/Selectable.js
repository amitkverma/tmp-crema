import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import events from '../../events';
import moment from 'moment';
import '../../calendar.style.less';

const localizer = momentLocalizer(moment);

const Selectable = () => {
  return (
    <div className='cr-app-calendar cr-app-cul-calendar'>
      <h3 className='cr-app-calendar-title'>
        Click an event to see more info, or drag the mouse over the calendar to
        select a date/time range.
      </h3>
      <Calendar
        className='app-calendar'
        selectable
        events={events}
        localizer={localizer}
        defaultView='week'
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date(2021, 10, 12)}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={(slotInfo) =>
          alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
              `\nend: ${slotInfo.end.toLocaleString()}` +
              `\naction: ${slotInfo.action}`,
          )
        }
      />
    </div>
  );
};

export default Selectable;
