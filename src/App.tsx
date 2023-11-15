import { FC } from 'react';
import { SceneComponent } from './components';
type IAppProps = {};

export const App: FC<IAppProps> = ({}) => {
  return (
    <div id="app">
      <SceneComponent />;
    </div>
  );
};
