import React, {Component} from 'react';

import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import UploadClick from './UploadClick';
import UploadClickSource from '!raw-loader!./UploadClick';
import Avatar from './Avatar';
import AvatarSource from '!raw-loader!./Avatar';
import UploadDefault from './UploadDefault';
import UploadDefaultSource from '!raw-loader!./UploadDefault';
import UploadPicture from './UploadPicture';
import UploadPictureSource from '!raw-loader!./UploadPicture';
import CompleteControl from './CompleteControl';
import CompleteControlSource from '!raw-loader!./CompleteControl';
import DragAndDrop from './DragAndDrop';
import DragAndDropSource from '!raw-loader!./DragAndDrop';
import UploadListStyle from './UploadListStyle';
import UploadListStyleSource from '!raw-loader!./UploadListStyle';
import UploadDirectory from './UploadDirectory';
import UploadDirectorySource from '!raw-loader!./UploadDirectory';
import UploadPngFileOnly from './UploadPngFileOnly';
import UploadPngFileOnlySource from '!raw-loader!./UploadPngFileOnly';
import CustomizePreviewFile from './CustomizePreviewFile';
import CustomizePreviewFileSource from '!raw-loader!./CustomizePreviewFile';
import TransformFileBeforeRequest from './TransformFileBeforeRequest';
import TransformFileBeforeRequestSource from '!raw-loader!./TransformFileBeforeRequest';
import CustomActionIcon from './CustomActionIcon';
import CustomActionIconSource from '!raw-loader!./CustomActionIcon';
import CropImageBeforeUploading from './CropImageBeforeUploading';
import CropImageBeforeUploadingSource from '!raw-loader!./CropImageBeforeUploading';
import PicturesWall from './PicturesWall';
import PicturesWallSource from '!raw-loader!./PicturesWall';
import UploadManually from './UploadManually';
import UploadManuallySource from '!raw-loader!./UploadManually';
import MaxCount from './MaxCount';
import MaxCountSource from '!raw-loader!./MaxCount';
import AliyunOss from './AliyunOss';
import AliyunOssSource from '!raw-loader!./AliyunOss';
import DragSortingOfUploadList from './DragSortingOfUploadList';
import DragSortingOfUploadListSource from '!raw-loader!./DragSortingOfUploadList';
import CustomizeProgressBar from './CustomizeProgressBar';
import CustomizeProgressBarSource from '!raw-loader!./CustomizeProgressBar';

class Upload extends Component {
  render() {
    return (
      <>
        <ComponentHeader
          title='Upload'
          refUrl='https://ant.design/components/upload/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='upload-a'>
            <AppComponentCard
              title='Upload Click'
              description='Classic mode. File selection dialog pops up when upload button is clicked.'
              component={UploadClick}
              source={UploadClickSource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-b'>
            <AppComponentCard
              title='Avatar'
              description='Click to upload users avatar, and validate size and format of picture with beforeUpload. '
              component={Avatar}
              source={AvatarSource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-c'>
            <AppComponentCard
              title='Upload Picture'
              description=''
              component={UploadPicture}
              source={UploadPictureSource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-d'>
            <AppComponentCard
              title='Complete Control'
              description='You can gain full control over filelist by configuring fileList. You can accomplish all kinds of customed functions. The following shows two circumstances:'
              component={CompleteControl}
              source={CompleteControlSource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-e'>
            <AppComponentCard
              title='Upload Default'
              description='You can select and upload a whole directory.'
              component={UploadDefault}
              source={UploadDefaultSource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-f'>
            <AppComponentCard
              title='Drag And Drop'
              description='You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting.'
              component={DragAndDrop}
              source={DragAndDropSource}
            />
          </Col>

          <Col xs={24} lg={12} key='upload-g'>
            <AppComponentCard
              title='Upload Directory'
              description='You can select and upload a whole directory.'
              component={UploadDirectory}
              source={UploadDirectorySource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-g'>
            <AppComponentCard
              title='Upload Png File Only'
              description='beforeUpload only prevent upload behavior when return false or reject promise, the prevented file would still show in file list. Here is the example you can keep prevented files out of list by return UPLOAD.LIST_IGNORE.'
              component={UploadPngFileOnly}
              source={UploadPngFileOnlySource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-g'>
            <AppComponentCard
              title='Customize Preview File'
              description='Customize local preview. Can handle with non-image format files such as video.'
              component={CustomizePreviewFile}
              source={CustomizePreviewFileSource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-g'>
            <AppComponentCard
              title='Transform File Before Request'
              description='Customize local preview. Can handle with non-image format files such as video.'
              component={TransformFileBeforeRequest}
              source={TransformFileBeforeRequestSource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-g'>
            <AppComponentCard
              title='Custom Action Icon'
              description='Use showUploadList for custom action icons of files.'
              component={CustomActionIcon}
              source={CustomActionIconSource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-g'>
            <AppComponentCard
              title='Crop Image Before Uploading'
              description='Use showUploadList for custom action icons of files.'
              component={CropImageBeforeUploading}
              source={CropImageBeforeUploadingSource}
            />
          </Col>

          <Col xs={24} lg={12} key='upload-g'>
            <AppComponentCard
              title='Max Count'
              description='Limit files with maxCount. Will replace current one when maxCount is 1.'
              component={MaxCount}
              source={MaxCountSource}
            />
          </Col>

          <Col xs={24} lg={12} key='upload-g'>
            <AppComponentCard
              title='AliyunOss'
              description='Use Aliyun OSS upload example.'
              component={AliyunOss}
              source={AliyunOssSource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-g'>
            <AppComponentCard
              title='Upload Manually'
              description='If Upload files manually after beforeUpload returns false.'
              component={UploadManually}
              source={UploadManuallySource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-g'>
            <AppComponentCard
              title='Customize ProgressBar'
              description='Use progress for customize progress bar.'
              component={CustomizeProgressBar}
              source={CustomizeProgressBarSource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-g'>
            <AppComponentCard
              title='DragSortingOfUploadList'
              description='By using itemRender, we can integrate upload with react-dnd to implement drag sorting of uploadList.'
              component={DragSortingOfUploadList}
              source={DragSortingOfUploadListSource}
            />
          </Col>

          <Col xs={24} lg={12} key='upload-g'>
            <AppComponentCard
              title='Upload List Style'
              description='If uploaded file is a picture, the thumbnail can be shown. IE8/9 do not support local thumbnail show. Please use thumbUrl instead.'
              component={UploadListStyle}
              source={UploadListStyleSource}
            />
          </Col>
          <Col xs={24} lg={12} key='upload-g'>
            <AppComponentCard
              title='Pictures Wall'
              description='After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation.'
              component={PicturesWall}
              source={PicturesWallSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Upload;
