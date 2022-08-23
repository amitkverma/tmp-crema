import React, {useState} from 'react';
import Gallery from 'react-photo-gallery';
import photos from '../../../@crema/services/db/gallery/photos';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import './index.style.less';

import {Tabs} from 'antd';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const {TabPane} = Tabs;

const tabs = [
  {id: 323, name: <IntlMessages id='common.all' />},
  {id: 333, name: <IntlMessages id='portfolio.logo' />},
  {id: 32323, name: <IntlMessages id='portfolio.painting' />},
  {id: 421, name: <IntlMessages id='portfolio.graphicDesign' />},
  {id: 4454, name: <IntlMessages id='portfolio.webDesign' />},
  {id: 221, name: <IntlMessages id='portfolio.ui' />},
];

const Portfolio = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const shuffle = (arra1) => {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  };

  return (
    <AppAnimateGroup type='bottom'>
      <AppPageMetadata title='Portfolio' />
      <div className='portfolio' key='a'>
        <div className='portfolio-header'>
          <h2>
            <IntlMessages id='portfolio.heading' />
          </h2>
          <p>
            <IntlMessages id='portfolio.content' />
          </p>
        </div>

        <AppAnimateGroup type='bottom'>
          <div key='b'>
            <Tabs
              className='portfolio-tabs'
              defaultActiveKey={value}
              onChange={handleChange}>
              {tabs.map((tab, index) => {
                return (
                  <TabPane tab={tab.name} key={index}>
                    <Gallery
                      margin={10}
                      photos={shuffle(photos)}
                      direction='column'
                    />
                  </TabPane>
                );
              })}
            </Tabs>
          </div>
        </AppAnimateGroup>
      </div>
    </AppAnimateGroup>
  );
};

export default Portfolio;
