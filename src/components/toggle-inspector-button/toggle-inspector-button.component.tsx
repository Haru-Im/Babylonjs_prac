import { FC } from 'react';
type IToggleInspectorButtonComponentProps = {
  toggleInspector: () => void;
};

export const ToggleInspectorButtonComponent: FC<IToggleInspectorButtonComponentProps> = ({
  toggleInspector,
}) => {
  return (
    <button onClick={toggleInspector} style={{ display: 'flex', cursor: 'pointer' }}>
      <div>open inspector</div>
    </button>
  );
};
