import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';
import DailyMotion from './DailyMotion';
import DailyMotionSource from '!raw-loader!./DailyMotion';
import Facebook from './Facebook';
import FacebookSource from '!raw-loader!./Facebook';
import Mixcloud from './Mixcloud';
import MixcloudSource from '!raw-loader!./Mixcloud';
import SoundCloud from './SoundCloud';
import SoundCloudSource from '!raw-loader!./SoundCloud';
import Streamable from './Streamable';
import StreamableSource from '!raw-loader!./Streamable';
import Twitch from './Twitch';
import TwitchSource from '!raw-loader!./Twitch';
import Vimeo from './Vimeo';
import VimeoSource from '!raw-loader!./Vimeo';
import Wistia from './Wistia';
import WistiaSource from '!raw-loader!./Wistia';
import YouTube from './YouTube';
import YouTubeSource from '!raw-loader!./YouTube';

const ReactPlayer = () => {
  return (
    <>
      <ComponentHeader
        title='ReactPlayer'
        description='A React component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion.'
        refUrl='https://cookpete.com/react-player/'
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12} key='player-a'>
          <ComponentCard
            title='YouTube'
            component={YouTube}
            source={YouTubeSource}
          />
        </Col>
        <Col xs={24} xl={12} key='player-b'>
          <ComponentCard
            title='Facebook'
            component={Facebook}
            source={FacebookSource}
          />
        </Col>
        <Col xs={24} xl={12} key='player-c'>
          <ComponentCard title='Vimeo' component={Vimeo} source={VimeoSource} />
        </Col>
        <Col xs={24} xl={12} key='player-d'>
          <ComponentCard
            title='Daily Motion'
            component={DailyMotion}
            source={DailyMotionSource}
          />
        </Col>
        <Col xs={24} xl={12} key='player-e'>
          <ComponentCard
            title='Sound Cloud'
            component={SoundCloud}
            source={SoundCloudSource}
          />
        </Col>
        <Col xs={24} xl={12} key='player-f'>
          <ComponentCard
            title='Streamable'
            component={Streamable}
            source={StreamableSource}
          />
        </Col>
        <Col xs={24} xl={12} key='player-g'>
          <ComponentCard
            title='Twitch'
            component={Twitch}
            source={TwitchSource}
          />
        </Col>
        <Col xs={24} xl={12} key='player-h'>
          <ComponentCard
            title='Wistia'
            component={Wistia}
            source={WistiaSource}
          />
        </Col>
        <Col xs={24} xl={12} key='player-i'>
          <ComponentCard
            title='Mixcloud'
            component={Mixcloud}
            source={MixcloudSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ReactPlayer;
