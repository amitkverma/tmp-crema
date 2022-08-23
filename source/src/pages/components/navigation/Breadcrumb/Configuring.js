import {Breadcrumb} from 'antd';

import React from 'react';

const Configuring = () => {
  return (
    <Breadcrumb separator=''>
      <Breadcrumb.Item>Location</Breadcrumb.Item>
      <Breadcrumb.Separator>:</Breadcrumb.Separator>
      <Breadcrumb.Item href=''>Application Center</Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item href=''>Application List</Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Configuring;
