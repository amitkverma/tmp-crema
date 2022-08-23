import React, {useState} from 'react';
import MapChart from './MapChart';
import ReactTooltip from 'react-tooltip';
import '../index.style.less';

const MapView = () => {
  const [content, setContent] = useState('');
  return (
    <div className='mapView'>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default MapView;
