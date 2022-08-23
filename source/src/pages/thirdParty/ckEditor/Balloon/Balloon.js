import React, {useEffect} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import Balloon from '@ckeditor/ckeditor5-build-balloon/build/ckeditor';
import {useDispatch, useSelector} from 'react-redux';

import AppInfoView from '@crema/core/AppInfoView';
import {
  onGetBalloonData,
  onUpdateBalloonData,
} from '../../../../redux/actions/Editors';

const BalloonEditor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetBalloonData());
  }, [dispatch]);
  const data = useSelector(({editors}) => editors.balloon);

  return (
    <div>
      <CKEditor
        editor={Balloon}
        data={data}
        onInit={(editor) => console.log(editor)}
        onChange={(event, editor) => console.log(event, editor)}
        onBlur={(event, editor) => {
          dispatch(onUpdateBalloonData(editor.getData()));
        }}
        onFocus={(event, editor) => console.log(event, editor)}
      />
      <AppInfoView />
    </div>
  );
};

export default BalloonEditor;
