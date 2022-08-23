import React from 'react';
import {Card} from 'antd';
import './grid.style.less';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const Grid = () => {
  return (
    <Card className='grid-card' title='Card Title'>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        Content
      </Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
    </Card>
  );
};

export default Grid;
