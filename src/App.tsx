import { FC } from 'react';
import { MirrorPlanetsScene } from './scenes';

type IAppProps = {};

export const App: FC<IAppProps> = ({}) => {
  return (
    <div id="app">
      <MirrorPlanetsScene />;
    </div>
  );
};
