import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import events from '../../events';
import moment from 'moment';
import PropTypes from 'prop-types';
import '../../calendar.style.less';

const localizer = momentLocalizer(moment);

function Event({event}) {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && ':  ' + event.desc}
    </span>
  );
}
Event.propTypes = {
  event: PropTypes.object,
};
function EventAgenda({event}) {
  return (
    <span>
      <em style={{color: 'magenta'}}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  );
}

EventAgenda.propTypes = {
  event: PropTypes.object,
};
const Rendering = () => {
  return (
    <div className='cr-app-calendar'>
      <Calendar
        className='app-calendar'
        events={events}
        localizer={localizer}
        defaultDate={new Date(2021, 10, 1)}
        defaultView='agenda'
        components={{
          event: Event,
          agenda: {
            event: EventAgenda,
          },
        }}
      />
    </div>
  );
};

export default Rendering;
