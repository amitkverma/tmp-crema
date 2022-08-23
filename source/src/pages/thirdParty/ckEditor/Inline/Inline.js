import React, {useEffect} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import Inline from '@ckeditor/ckeditor5-build-inline';
import {useDispatch, useSelector} from 'react-redux';

import AppInfoView from '@crema/core/AppInfoView';
import {
  onGetInlineData,
  onUpdateInlineData,
} from '../../../../redux/actions/Editors';

let editorRef;
const InlineEditor = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetInlineData());
    return () => {
      if (editorRef) {
        editorRef = null;
      }
    };
  }, [dispatch]);
  const data = useSelector(({editors}) => editors.inline);

  return (
    <div>
      <CKEditor
        editor={Inline}
        data={data}
        onInit={(editor) => {
          editor.distroy();
        }}
        onChange={(event, editor) => console.log(event, editor)}
        onBlur={(event, editor) => {
          dispatch(onUpdateInlineData(editor.getData()));
        }}
        onFocus={(event, editor) => console.log(event, editor)}
      />
      <AppInfoView />
    </div>
  );
};

export default InlineEditor;
