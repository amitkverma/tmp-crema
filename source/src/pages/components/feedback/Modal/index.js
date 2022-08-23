import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Asynchronously from './Asynchronously';
import AsynchronouslySource from '!raw-loader!./Asynchronously';
import CutomizeFooter from './CutomizeFooter';
import CutomizeFooterSource from '!raw-loader!./CutomizeFooter';
import ConfirmationModal from './ConfirmationModal';
import ConfirmationModalSource from '!raw-loader!./ConfirmationModal';
import Position from './Position';
import PositionSource from '!raw-loader!./Position';
import Information from './Information';
import InformationSource from '!raw-loader!./Information';
import Manual from './Manual';
import ManualSource from '!raw-loader!./Manual';
import DestroyConfirmationModal from './DestroyConfirmationModal';
import DestroyConfirmationModalSource from '!raw-loader!./DestroyConfirmationModal';
import UseHooksToGetContext from './UseHooksToGetContext';
import UseHooksToGetContextSource from '!raw-loader!./UseHooksToGetContext';
import ToCustomizeTheWidthOfModal from './ToCustomizeTheWidthOfModal';
import ToCustomizeTheWidthOfModalSource from '!raw-loader!./ToCustomizeTheWidthOfModal';
import Internationalization from './Internationalization';
import InternationalizationSource from '!raw-loader!./Internationalization';
import CustomizeFooterButtons from './CustomizeFooterButtons';
import CustomizeFooterButtonsSource from '!raw-loader!./CustomizeFooterButtons';

class Modal extends Component {
  render() {
    return (
      <>
        <ComponentHeader
          title='Modal'
          refUrl='https://ant.design/components/modal/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='modal-a'>
            <AppComponentCard
              title='Basic'
              description='Basic modal.'
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key='modal-b'>
            <AppComponentCard
              title='Asynchronously'
              description='Asynchronously close a modal dialog when the OK button is pressed. For example, you can use this pattern when you submit a form.'
              component={Asynchronously}
              source={AsynchronouslySource}
            />
          </Col>
          <Col xs={24} lg={12} key='modal-c'>
            <AppComponentCard
              title='Cutomize Footer'
              description='A more complex example which define a customized footer button bar.'
              component={CutomizeFooter}
              source={CutomizeFooterSource}
            />
          </Col>
          <Col xs={24} lg={12} key='modal-d'>
            <AppComponentCard
              title='Confirmation Modal'
              description='Use confirm() to show a confirmation modal dialog. Let onCancel/onOk function return a promise object to delay closing the dialog.'
              component={ConfirmationModal}
              source={ConfirmationModalSource}
            />
          </Col>
          <Col xs={24} lg={12} key='modal-e'>
            <AppComponentCard
              title='Information'
              description='In the various types of information modal dialog, only one button to close dialog is provided.'
              component={Information}
              source={InformationSource}
            />
          </Col>
          <Col xs={24} lg={12} key='modal-f'>
            <AppComponentCard
              title='Manual'
              description='Manually updating and destroying a modal from Modal.method.'
              component={Manual}
              source={ManualSource}
            />
          </Col>
          <Col xs={24} lg={12} key='modal-g'>
            <AppComponentCard
              title='Position'
              description='You can use centered,style.top or other styles to set position of modal dialog.'
              component={Position}
              source={PositionSource}
            />
          </Col>
          <Col xs={24} lg={12} key='modal-g'>
            <AppComponentCard
              title='Destroy Confirmation Modal'
              description='Modal.destroyAll() will destroy all confirmation modal dialogs. Usually, you can use it in router change event to destroy confirm modal dialog automatically.'
              component={DestroyConfirmationModal}
              source={DestroyConfirmationModalSource}
            />
          </Col>
          <Col xs={24} lg={12} key='modal-g'>
            <AppComponentCard
              title='Use Hooks To Get Context'
              description='Use Modal.useModal to get contextHolder with context accessible issue.'
              component={UseHooksToGetContext}
              source={UseHooksToGetContextSource}
            />
          </Col>
          <Col xs={24} lg={12} key='modal-g'>
            <AppComponentCard
              title='To Customize The Width Of Modal'
              description='Use width to set the width of the modal dialog.'
              component={ToCustomizeTheWidthOfModal}
              source={ToCustomizeTheWidthOfModalSource}
            />
          </Col>
          <Col xs={24} lg={12} key='modal-g'>
            <AppComponentCard
              title='Internationalization'
              description='To customize the text of the buttons, you need to set okText and cancelText props.'
              component={Internationalization}
              source={InternationalizationSource}
            />
          </Col>
          <Col xs={24} lg={12} key='modal-g'>
            <AppComponentCard
              title='Customize Footer Buttons'
              description='Passing okButtonProps and cancelButtonProps will customize the OK button and cancel button props.'
              component={CustomizeFooterButtons}
              source={CustomizeFooterButtonsSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Modal;
