import {
  Color3,
  Engine,
  FreeCamera,
  MeshBuilder,
  PointLight,
  Scene,
  Vector3,
} from '@babylonjs/core';
import { FC, useEffect, useRef } from 'react';
import styles from './scene.component.module.css';

type ISceneComponentProps = {};

export const SceneComponent: FC<ISceneComponentProps> = ({}) => {
  const reactCanvas = useRef(null);

  useEffect(() => {
    const { current: canvas } = reactCanvas;

    if (!canvas) return;

    const createEngine = () => {
      const engine = new Engine(canvas, true);

      engine.runRenderLoop(() => {
        if (typeof onRender === 'function') onRender(scene);
        scene.render();
      });

      return engine;
    };

    const createScene = (engine) => {
      const scene = new Scene(engine);

      return scene;
    };

    const createCamera = () => {
      const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
      camera.setTarget(Vector3.Zero());
      // 방향키로 조절이 가능하도록
      camera.attachControl(canvas, true);

      return camera;
    };

    const createLight = () => {
      const light = new PointLight('light', new Vector3(0, 10, 0), scene);
      light.intensity = 0.7;
      light.diffuse = new Color3(1, 0, 0);

      return light;
    };

    const createMesh = () => {
      const sphere = MeshBuilder.CreateSphere('sphere', {});
      sphere.position.y = 1;

      return { sphere };
    };

    const createGround = () => {
      const ground = MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);

      return ground;
    };

    const engine = createEngine();
    const scene = createScene(engine);
    const camera = createCamera();
    const light = createLight();
    const { sphere } = createMesh();
    const ground = createGround();

    const onRender = (scene: Scene) => {
      if (sphere !== undefined) {
        const deltaTimeInMillis = scene.getEngine().getDeltaTime();

        const rpm = 10;
        sphere.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
      }
    };

    const resize = () => {
      scene.getEngine().resize();
    };

    if (window) {
      window.addEventListener('resize', resize);
    }

    return () => {
      scene.getEngine().dispose();

      if (window) {
        window.removeEventListener('resize', resize);
      }
    };
  }, []);
  return <canvas ref={reactCanvas} className={styles.scene} />;
};
