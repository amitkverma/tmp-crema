import React from 'react';
import PropTypes from 'prop-types';

import {Collapse} from 'antd';
import './index.style.less';

const {Panel} = Collapse;

function callback(key) {
  console.log(key);
}

const FaqList = ({faqList}) => {
  console.log(faqList[0].id);

  return (
    <div className='faq-list'>
      <Collapse defaultActiveKey={faqList[0].id} onChange={callback}>
        {faqList.map((item) => {
          return (
            <Panel header={item.ques} key={item.id}>
              <p>{item.ans}</p>
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default FaqList;

FaqList.propTypes = {
  faqList: PropTypes.array.isRequired,
};
