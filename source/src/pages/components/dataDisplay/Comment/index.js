import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import BasicComment from './BasicComment';
import BasicCommentSource from '!raw-loader!./BasicComment';
import UsageWithList from './UsageWithList';
import UsageWithListSource from '!raw-loader!./UsageWithList';
import NestedComments from './NestedComments';
import NestedCommentsSource from '!raw-loader!./NestedComments';
import ReplyEditor from './ReplyEditor';
import ReplyEditorSource from '!raw-loader!./ReplyEditor';

const Comment = () => {
  return (
    <>
      <ComponentHeader
        title='Comment'
        refUrl='https://ant.design/components/comment/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='BasicComment'
            description='A basic comment with author, avatar, time and actions.'
            component={BasicComment}
            source={BasicCommentSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Reply Editor'
            description='Comment can be used as an editor, so the user can customize the contents of the component.'
            component={ReplyEditor}
            source={ReplyEditorSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Usage With List'
            description='Displaying a series of comments using the antd List Component.'
            component={UsageWithList}
            source={UsageWithListSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Nested Comments'
            description='Comments can be nested.'
            component={NestedComments}
            source={NestedCommentsSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Comment;
