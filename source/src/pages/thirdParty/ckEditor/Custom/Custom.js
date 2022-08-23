import React, {useEffect} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import Custom from '@ckeditor/ckeditor5-build-balloon-block';
import AppInfoView from '@crema/core/AppInfoView';
import {useDispatch, useSelector} from 'react-redux';
import {
  onGetCustomData,
  onUpdateCustomData,
} from '../../../../redux/actions/Editors';

const CustomEditor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetCustomData());
  }, [dispatch]);
  const data = useSelector(({editors}) => editors.Custom);

  return (
    <div>
      <CKEditor
        editor={Custom}
        data={data}
        onInit={(editor) => console.log(editor)}
        onChange={(event, editor) => console.log(event, editor)}
        onBlur={(event, editor) => {
          dispatch(onUpdateCustomData(editor.getData()));
        }}
        onFocus={(event, editor) => console.log(event, editor)}
      />
      <AppInfoView />
    </div>
  );
};

export default CustomEditor;
