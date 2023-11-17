import {
  Camera,
  Color3,
  Engine,
  FreeCamera,
  Light,
  MeshBuilder,
  PointLight,
  Scene,
  Vector3,
} from '@babylonjs/core';
import { FC, Fragment, MutableRefObject, useEffect, useRef } from 'react';
import { ToggleInspectorButtonComponent } from '../../components';
import { useInspector } from '../../hook';

type IMirrorPlanetsSceneProps = {};

export const MirrorPlanetsScene: FC<IMirrorPlanetsSceneProps> = ({}) => {
  const reactCanvas = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Engine>(null);
  const sceneRef = useRef<Scene>(null);
  const cameraRef = useRef<Camera>(null);
  const lightRef = useRef<Light>(null);

  const createEngine = (canvas: HTMLCanvasElement, sceneRef: MutableRefObject<Scene>) => {
    const engine = new Engine(canvas, true);

    engine.runRenderLoop(() => {
      sceneRef.current.render();
    });

    engineRef.current = engine;
  };

  const createScene = (engineRef: MutableRefObject<Engine>) => {
    const scene = new Scene(engineRef.current);
    scene.ambientColor = new Color3(1, 100, 1);

    sceneRef.current = scene;
  };

  const createCamera = (canvas: HTMLCanvasElement) => {
    const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), sceneRef.current);
    camera.setTarget(Vector3.Zero());
    // 방향키로 조절이 가능하도록
    camera.attachControl(canvas, true);

    cameraRef.current = camera;
  };

  const createLight = (sceneRef: MutableRefObject<Scene>) => {
    const light = new PointLight('light', new Vector3(0, 10, 0), sceneRef.current);
    light.intensity = 0.7;
    light.diffuse = new Color3(1, 0, 0);

    lightRef.current = light;
  };

  const createMesh = () => {
    const sphere = MeshBuilder.CreateSphere('sphere', {});
    sphere.position.y = 1;

    return { sphere };
  };

  const createGround = (sceneRef: MutableRefObject<Scene>) => {
    const ground = MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, sceneRef.current);

    return ground;
  };

  const { toggleInspector } = useInspector(sceneRef);

  useEffect(() => {
    const { current: canvas } = reactCanvas;
    if (!canvas) return;

    createEngine(canvas, sceneRef);
    createScene(engineRef);
    createCamera(canvas);
    createLight(sceneRef);
    createMesh();
    createGround(sceneRef);

    const resize = () => {
      sceneRef.current.getEngine().resize();
    };

    if (window) {
      window.addEventListener('resize', resize);
    }

    return () => {
      sceneRef.current.getEngine().dispose();

      if (window) {
        window.removeEventListener('resize', resize);
      }
    };
  }, []);

  return (
    <Fragment>
      <div className="float_buttons">
        <ToggleInspectorButtonComponent toggleInspector={toggleInspector} />
      </div>
      <canvas ref={reactCanvas} className="canvas" />;
    </Fragment>
  );
};
