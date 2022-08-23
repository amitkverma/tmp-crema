import React, {useEffect} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import Classic from '@ckeditor/ckeditor5-build-classic';
import {useDispatch, useSelector} from 'react-redux';

import AppInfoView from '@crema/core/AppInfoView';
import {
  onGetClassicData,
  onUpdateClassicData,
} from '../../../../redux/actions/Editors';

let editorRef;
const ClassicEditor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetClassicData());
    return () => {
      if (editorRef) {
        editorRef = null;
      }
    };
  }, [dispatch]);
  const data = useSelector(({editors}) => editors.classic);

  return (
    <div>
      <CKEditor
        editor={Classic}
        data={data}
        onInit={(editor) => {
          editorRef = editor;
        }}
        onChange={(event, editor) => console.log(event, editor)}
        onBlur={(event, editor) => {
          dispatch(onUpdateClassicData(editor.getData()));
        }}
        onFocus={(event, editor) => console.log(event, editor)}
      />
      <AppInfoView />
    </div>
  );
};

export default ClassicEditor;
