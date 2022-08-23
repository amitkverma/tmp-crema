import React, {useEffect} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import Document from '@ckeditor/ckeditor5-build-decoupled-document';
import {useDispatch, useSelector} from 'react-redux';

import AppInfoView from '@crema/core/AppInfoView';
import {
  onGetDocumentData,
  onUpdateDocumentData,
} from '../../../../redux/actions/Editors';
import './ck-editor.style.less';

const DocumentEditor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetDocumentData());
  }, [dispatch]);
  const data = useSelector(({editors}) => editors.document);

  return (
    <div className='document-editor'>
      <div className='document-editor__toolbar' />
      <div className='document-editor__editable-container'>
        <div className='document-editor__editable'>
          <CKEditor
            editor={Document}
            data={data}
            onInit={(editor) => {
              const toolbarContainer = document.querySelector(
                '.document-editor__toolbar',
              );

              toolbarContainer.appendChild(editor.ui.view.toolbar.element);

              window.editor = editor;
            }}
            onChange={(event, editor) => console.log(event, editor)}
            onBlur={(event, editor) => {
              dispatch(onUpdateDocumentData(editor.getData()));
            }}
            onFocus={(event, editor) => console.log(event, editor)}
          />
          <AppInfoView />
        </div>
      </div>
    </div>
  );
};

export default DocumentEditor;
