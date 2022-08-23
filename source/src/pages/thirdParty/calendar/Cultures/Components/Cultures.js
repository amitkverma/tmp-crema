import React, {useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import events from '../../events';
import moment from 'moment';
import '../../calendar.style.less';

const localizer = momentLocalizer(moment);

// require('globalize/lib/cultures/globalize.culture.en-GB');
// require('globalize/lib/cultures/globalize.culture.es');
// require('globalize/lib/cultures/globalize.culture.fr');
// require('globalize/lib/cultures/globalize.culture.ar-AE');

const Cultures = () => {
  const [culture, setCulture] = useState('fr');

  let cultures = ['en', 'en-GB', 'es', 'fr', 'ar-AE'];
  let rtl = culture === 'ar-AE';

  return (
    <div className='cr-app-calendar cr-app-cul-calendar'>
      <h3>
        <label>Select a Culture</label>
        <select
          className='cr-app-calendar-select'
          style={{width: 200, display: 'inline-block'}}
          defaultValue={'fr'}
          onChange={(e) => setCulture(e.target.value)}>
          {cultures.map((c, idx) => (
            <option key={idx} value={c}>
              {c}
            </option>
          ))}
        </select>
      </h3>
      <Calendar
        className='app-calendar'
        rtl={rtl}
        localizer={localizer}
        events={events}
        // culture={this.state.culture}
        defaultDate={new Date(2021, 10, 1)}
      />
    </div>
  );
};

export default Cultures;
