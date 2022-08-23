import React, {useEffect} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonBlock from '@ckeditor/ckeditor5-build-balloon-block';
import {useDispatch, useSelector} from 'react-redux';

import AppInfoView from '@crema/core/AppInfoView';
import {
  onGetBalloonBlockData,
  onUpdateBalloonBlockData,
} from '../../../../redux/actions/Editors';

const BalloonBlockEditor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetBalloonBlockData());
  }, [dispatch]);
  const data = useSelector(({editors}) => editors.balloonBlock);

  return (
    <div>
      <CKEditor
        editor={BalloonBlock}
        data={data}
        onInit={(editor) => console.log(editor)}
        onChange={(event, editor) => console.log(event, editor)}
        onBlur={(event, editor) => {
          dispatch(onUpdateBalloonBlockData(editor.getData()));
        }}
        onFocus={(event, editor) => console.log(event, editor)}
      />
      <AppInfoView />
    </div>
  );
};

export default BalloonBlockEditor;
