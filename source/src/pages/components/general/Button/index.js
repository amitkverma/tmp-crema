import React from 'react';
import {Col} from 'antd';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Icon from './Icon';
import IconSource from '!raw-loader!./Icon';
import Size from './Size';
import SizeSource from '!raw-loader!./Size';
import Disabled from './Disabled';
import DisabledSource from '!raw-loader!./Disabled';
import Loading from './Loading';
import LoadingSource from '!raw-loader!./Loading';
import DangerButton from './DangerButton';
import DangerButtonSource from '!raw-loader!./DangerButton';
import GhostButton from './GhostButton';
import GhostButtonSource from '!raw-loader!./GhostButton';
import Multiple from './Multiple';
import MultipleSource from '!raw-loader!./Multiple';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import BlockButton from './BlockButton';

const Button = () => {
  return (
    <>
      <ComponentHeader
        title='Button'
        refUrl='https://ant.design/components/button/'
      />

      <AppRowContainer>
        <Col span={24} key='btn-a'>
          <AppComponentCard
            title='Type'
            description='There are primary button, default button, dashed button, text button and link button in antd.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col span={24} key='btn-b'>
          <AppComponentCard
            title='Icon'
            description='Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button.'
            component={Icon}
            source={IconSource}
          />
        </Col>
        <Col span={24} key='btn-c'>
          <AppComponentCard
            title='Size'
            description='Ant Design supports a default button size as well as a large and small size.'
            component={Size}
            source={SizeSource}
          />
        </Col>
        <Col span={24} key='btn-d'>
          <AppComponentCard
            title='Loading'
            description='A loading indicator can be added to a button by setting the loading property on the Button'
            component={Loading}
            source={LoadingSource}
          />
        </Col>
        <Col span={24} key='btn-e'>
          <AppComponentCard
            title='Disabled'
            description='To mark a button as disabled, add the disabled property to the Button.'
            component={Disabled}
            source={DisabledSource}
          />
        </Col>
        <Col xs={24} lg={12} key='btn-f'>
          <AppComponentCard
            title='Block'
            description='Block property will make the button fit to its parent width.'
            component={BlockButton}
            source={LoadingSource}
          />
        </Col>
        <Col xs={24} lg={12} key='btn-g'>
          <AppComponentCard
            title='Multiple'
            description='If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into Dropdown.Button.'
            component={Multiple}
            source={MultipleSource}
          />
        </Col>
        <Col xs={24} lg={12} key='btn-h'>
          <AppComponentCard
            title='Danger Buttons'
            description='Danger is a property of button after antd 4.0.'
            component={DangerButton}
            source={DangerButtonSource}
          />
        </Col>
        <Col xs={24} lg={12} key='btn-i'>
          <AppComponentCard
            title='Ghost Button'
            description="ghost property will make button's background transparent, it is commonly used in colored background."
            component={GhostButton}
            source={GhostButtonSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};
export default Button;
