# My Babylonjs Practice with React, TypeScript 👩🏻‍💻

## Table of Contents
- [Canvas, Engine, Scene, Camera](#canvas-engine-scene-camera)
- [Math.PI와 라디안](#mathpi와-라디안의-개념)
- [segments](#segments)
-  [Shaders](#shaders)
- [Colors](#colors)
- [Lights](#lights)
- [Shadow](#shadow)
- [Engine Options](#engine-options)
    - [antialias](#antialias)
- [Material](#material)
- [Inspector](#inspector)

<br/>

## Canvas, Engine, Scene, Camera

Babylon.js에서 3D 그래픽스를 렌더링하는 데 필수적인 요소들이다.

1. **Canvas**:
- Canvas는 웹 페이지에 그래픽을 그리기 위한 HTML 요소이다. WebGL과 Babylon.js는 이 Canvas 위에서 그래픽스를 렌더링한다.
- Canvas는 2D 및 3D 그래픽스를 위한 그리기 영역을 제공하며, JavaScript를 사용하여 이를 조작할 수 있다.

<br/>

2. **Engine**:
- Engine은 Babylon.js의 핵심 구성 요소로, WebGL 렌더링 컨텍스트를 관리한다. 이는 3D 그래픽스를 렌더링하기 위한 모든 기본적인 설정과 처리를 담당한다.
- Engine은 Canvas와 연동되어 있으며, 렌더링 루프와 함께 작동하여 실시간으로 3D 그래픽스를 화면에 표시한다.

<br/>

3. **Scene**:
- Scene은 3D 그래픽스가 렌더링되는 환경이다. 이는 모든 3D 객체, 카메라, 라이트, 물리적 특성 등을 포함하는 컨테이너다.
- Scene은 가상의 3D 세계를 나타내며, 사용자가 만들고자 하는 3D 환경의 모든 요소를 구성한다.

<br/>

4. **Camera**:
- Camera는 3D Scene에서의 관점을 정의한다. 이는 사용자가 3D 공간을 어떻게 보고 인식하는지 결정한다.
- Babylon.js에서 다양한 유형의 카메라를 사용할 수 있으며, 이들은 회전, 줌, 이동 등 다양한 방식으로 Scene을 관찰할 수 있게 한다.

<br/>
<br/>

## Math.PI와 라디안의 개념

1. **라디안의 정의와 중요성**:
- 라디안은 각도를 측정하는 단위이다.
- 원의 중심에서 반지름 길이만큼 원의 둘레를 따라 이동했을 때의 각이 1 라디안이다.
- 360도는 약 2π 라디안과 같으며, 이는 원 한 바퀴를 도는 각도이다.
- 라디안은 컴퓨터 그래픽스와 수학 계산에서 효율적이고 표준화된 방식을 제공한다.

<br/>

2. **Math.PI의 역할과 사용**:
- `Math.PI`는 원주율 π를 나타내는 상수이다.
- 각도를 라디안으로 표현할 때 `Math.PI`를 사용한다.
- 예를 들어, 객체를 180도 회전시키려면 `Math.PI` (π 라디안)를 사용한다.
- `Math.PI`는 직접적인 라디안 계산에 사용되며, 기본적인 각도 회전에 적합하다.

<br/>

3. **BABYLON.Tools.ToRadians의 사용과 메커니즘**:
- `BABYLON.Tools.ToRadians` 함수는 도 단위의 각도를 라디안으로 변환한다.
- 내부적으로 `각도 / 180 * Math.PI`라는 공식을 사용한다.
- 이 함수는 사용자가 도 단위로 주어진 각도를 라디안으로 쉽게 변환할 수 있게 한다.
- `BABYLON.Tools.ToRadians`는 사용자가 특정 각도를 직접 입력하는 경우에 적합하다.

<br/>

4. **Babylon.js에서의 회전 예시**:
- Babylon.js에서 박스를 생성하고 회전시키는 예시:
    ```javascript
    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 1}, scene);
    box.position.x = -2;
    box.position.y = 0.5;
    box.rotation = new BABYLON.Vector3(0, BABYLON.Tools.ToRadians(60), 0);
    ```
- 이 코드에서 `BABYLON.Tools.ToRadians(60)`은 60도를 라디안으로 변환한다.
- 결과적으로 박스는 y축을 중심으로 약 1.047 라디안(60도에 해당)만큼 회전한다.


<br/>
<br/>

## segments

1. **Segments의 정의와 사용**:
- `segments`는 Babylon.js에서 3D 객체를 만들 때 객체의 표면을 이루는 세분화된 부분의 수를 나타낸다.
- 높은 `segments` 값은 더 많은 다각형을 생성하여 객체의 표면을 더 세밀하게 만든다.
- 이는 객체의 곡선이나 원형 부분이 더 부드럽고 자연스럽게 보이게 하는 데 도움이 된다.
- 하지만 `segments` 값이 높을수록 더 많은 계산이 필요하고, 그래픽 성능에 영향을 줄 수 있다.

<br/>

2. **Babylon.js에서의 Segments 예시**:
- Babylon.js에서 구체를 생성하고, `segments`를 조절하여 구체의 세부 정도를 변경하는 예시:
    ```javascript
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1, segments: 16}, scene);
    sphere.position = new BABYLON.Vector3(0, 1, 0);
    ```
- 이 코드에서 `CreateSphere` 함수는 구체를 생성한다.
- `segments: 16`은 구체의 표면을 16개의 세그먼트로 나누어 세밀하게 표현한다.
- 결과적으로 생성된 구체는 더 많은 다각형으로 이루어져 있어 더 부드러운 곡선을 가진다.


<br/>
<br/>

## Shaders

버텍스 셰이더(Vertex Shader)와 프래그먼트 셰이더(Fragment Shader)는 3D 그래픽 렌더링 과정에서 중요한 역할을 한다.   
이들은 GPU의 셰이더 파이프라인의 핵심 구성 요소이다.

1. **버텍스 셰이더**:
- 버텍스 셰이더는 3D 모델의 각 정점(vertex)에 대해 실행된다. 이 셰이더의 주요 목적은 정점의 위치, 색상, 질감 좌표, 정점에 적용되는 광원 정보 등을 처리하는 것이다.
- 버텍스 셰이더는 모델을 화면에 투영하기 전에 모델의 정점을 변환한다. 이는 주로 정점의 위치를 변경하고, 광원 효과를 계산하며, 카메라 뷰에 맞게 정점을 조정하는 데 사용된다.
- 버텍스 셰이더는 렌더링 파이프라인의 처음에 위치하며, 각 정점에 대해 한 번씩 실행된다.

<br/>

2. **프래그먼트 셰이더**:
- 프래그먼트 셰이더는 화면에 그려질 각 픽셀(fragment)에 대해 실행된다. 이 셰이더의 목적은 픽셀의 최종 색상과 다른 특성을 결정하는 것이다.
- 프래그먼트 셰이더는 텍스처 매핑, 색상 혼합, 광원 효과 등을 계산하여 각 픽셀에 적용한다. 이는 물체의 표면 질감과 빛의 상호작용을 렌더링하는 데 중요하다.
- 프래그먼트 셰이더는 렌더링 파이프라인의 뒷부분에 위치하며, 버텍스 셰이더에 의해 처리된 데이터를 기반으로 작동한다. 렌더링할 각 픽셀에 대해 한 번씩 실행된다.
- 이 셰이더는 화면에 표시될 최종 이미지의 품질과 세부 사항을 크게 결정한다. 예를 들어, 픽셀별 광원 계산, 그림자 효과, 반사 및 광택 효과 등을 생성하는 데 사용된다.

<br/>

3. **버텍스 셰이더와 프래그먼트 셰이더의 상호작용**:
- 버텍스 셰이더는 먼저 실행되어 각 정점의 위치와 속성을 결정한다. 이후 이 데이터는 래스터화 과정을 거쳐 프래그먼트 셰이더로 전달된다.
- 프래그먼트 셰이더는 이 데이터를 사용하여 각 픽셀의 최종 색상과 텍스처를 결정한다. 이 과정에서 버텍스 셰이더로부터 전달받은 정보와 텍스처, 라이팅 정보 등을 결합하여 픽셀별로 처리한다.
- 이 두 셰이더의 조합은 3D 그래픽스에서 물체의 형태, 색상, 조명, 질감 등을 정교하게 표현하는 데 필수적이다. 이들은 GPU의 병렬 처리 능력을 활용하여 고성능 그래픽 렌더링을 가능하게 한다.

<br/>
<br/>

## Colors

BabylonJS에서 사용되는 'Diffuse Color', 'Ambient Color', 그리고 'Specular Color'는 3D 모델링에서 중요한 역할을 하는 재질의 속성들이다. 

1. **Diffuse Color (확산 색상)**:
- 이 속성은 물체의 기본 색상이라고 할 수 있다.
- 물체에 빛이 닿았을 때, 그 빛이 어떻게 표면에서 반사되는지를 결정한다.
- 확산 색상은 물체의 표면에서 고르게 퍼져 나가는 빛의 색상을 나타낸다.
- 예를 들어, 빨간 사과의 경우, 확산 색상은 '빨강'일 것이다.

2. **Ambient Color (주변광 색상)**:
- 이는 물체가 받는 간접광의 색상을 나타낸다.
- 주변광은 주변 환경에서 반사되어 오는 빛으로, 직접적인 광원이 아닌 주변의 빛을 의미한다.
- 주변광 색상은 주로 물체가 어떤 색상의 빛을 간접적으로 반사하는지를 정의한다.
- 예를 들어, 푸른색의 방에서 물체는 푸른색의 주변광을 받을 것이다.

3. **Specular Color (반사 색상)**:
- 이 속성은 물체의 광택 또는 반사하는 능력을 나타낸다.
- 빛이 물체의 특정 부분에 직접 닿아 반사될 때 나타나는 강렬한 하이라이트의 색상이다.
- 반사 색상은 물체가 빛나는 정도와 그 빛의 색상을 결정한다.
- 예를 들어, 반질반질한 금속 표면은 강한 반사 색상을 가질 것이다.


<br/>
<br/>

## Lights

BabylonJS와 같은 3D 그래픽 환경에서 'Diffuse Light', 'Ambient Light', 그리고 'Specular Light'는 조명의 세 가지 주요 속성을 나타낸다. 이들 각각은 물체가 빛을 어떻게 받고 반사하는지에 대한 다른 측면을 강조한다:

1. **Diffuse Light (확산광)**:
- 확산광은 물체의 표면에 고르게 퍼지는 빛을 의미한다.
- 이는 물체의 기본 색상을 결정하며, 물체에 빛이 닿으면 그 빛이 여러 방향으로 확산되어 부드러운 그림자를 만든다.
- 확산광은 물체의 형태와 질감을 잘 드러내주어, 물체가 빛을 받는 방식을 자연스럽게 표현한다.
- 예를 들어, 맑은 날 햇빛을 받는 물체는 주변보다 밝게 보이며, 그림자가 부드럽게 퍼진다.

2. **Ambient Light (주변광)**:
- 주변광은 직접적인 광원으로부터 오는 것이 아니라, 주변 환경에서 반사되어 오는 빛을 의미한다.
- 이 빛은 전반적으로 약하며, 모든 방향에서 균일하게 물체에 도달한다.
- 주변광은 3D 장면의 전반적인 밝기를 증가시키며, 그림자가 너무 어둡게 되는 것을 방지하는 데 도움을 준다.
- 예를 들어, 흐린 날씨에서는 직접적인 햇빛은 없지만, 주변광으로 인해 물체가 완전히 어둡지 않게 보인다.

3. **Specular Light (반사광)**:
- 반사광은 물체의 특정 부분에서 빛이 반사되어 생기는 밝은 하이라이트를 나타낸다.
- 이는 물체의 광택이나 반질거림을 표현하며, 물체가 매끄럽고 광택이 있는 정도를 나타낸다.
- 반사광은 빛이 물체에 매우 직접적으로 닿았을 때 가장 강하게 나타나며, 물체의 재질에 따라 다르게 표현된다.
- 예를 들어, 광택이 나는 금속이나 물의 표면에서 볼 수 있는 강한 하이라이트가 이에 해당한다.


<br/>
<br/>

## Shadow

1. **그림자의 기본 개념**:
- 그림자는 물체가 빛의 영향을 받아 생성되는 어두운 영역이다.
- Babylon.js에서는 `directional`, `spot`, `point` 등의 빛(Light) 종류에 따라 그림자가 생성된다.
- 그림자는 빛의 방향, 강도 및 물체의 형태에 따라 다르게 나타난다.

<br/>

2. **ShadowGenerator**:
- `ShadowGenerator`는 그림자를 생성하기 위한 객체이다.
- 생성자는 그림자의 해상도와 그림자를 생성하는 빛을 파라미터로 받는다.
- 예시:
    ```javascript
    var shadowGenerator = new BABYLON.ShadowGenerator(1024, dirLight);
    shadowGenerator.addShadowCaster(box);   // box가 그림자를 생성하도록 설정
    shadowGenerator.useExponentialShadowMap = true;

    ground.receiveShadows = true; // 땅이 그림자를 받도록 설정
    ```
    - 2-1. **useExponentialShadowMap**:
        - `useExponentialShadowMap` 속성은 지수 그림자 맵(Exponential Shadow Map)을 사용하도록 설정한다.
        - 이 방법은 빛과 멀어질수록 그림자가 부드럽게 퍼지는 효과를 생성한다.
        - 그림자의 현실감을 높이는 데 유용하다.

<br/>


3. **그림자의 다양한 필터링 기술**:
- Babylon.js는 다양한 그림자 필터링 기술을 제공한다:
    - **PCF (Percentage-Closer Filtering)**: 그림자 경계를 부드럽게 처리하는 기법.
    - **PCSS (Percentage-Closer Soft Shadows)**: 그림자의 경계를 더욱 현실적으로 부드럽게 처리.
    - **Poisson Sampling**: 그림자의 경계에 랜덤성을 추가하여 부드러운 효과 생성.
    - **Exponential Shadow Map**: 빛과의 거리에 따라 그림자 강도가 지수적으로 변화.
    - **Blurred Exponential**: 더 부드러운 그림자 경계를 위해 지수 그림자 맵을 흐림 처리.
    - **Close Exponential**: 물체에 가까운 부분의 그림자를 더 선명하게 표현.


<br/>
<br/>

## Engine Options

### antialias

antialias 옵션은 MSAA(Multisample Anti-Aliasing)를 캔버스에 적용할 것인지를 결정하는 기능이다. MSAA는 그래픽 렌더링 과정에서 객체의 가장자리를 부드럽게 처리하여, 계단 현상(jaggies)을 감소시키는 방법이다. 이 방법은 각 픽셀 주변의 여러 샘플을 취하여 평균 색을 계산함으로써 가장자리를 더 매끄럽게 만든다. 이런 처리는 3D 그래픽스에서 특히 중요하며, 더 높은 화질의 이미지를 제공한다. Antialias 옵션을 활성화하면 이미지의 전반적인 시각적 품질이 향상되지만, 그만큼 그래픽 처리에 더 많은 자원이 소모될 수 있다.  

#### Engine에서 antialias 옵션 활성화하는 방법

React 컴포넌트에서 BabylonJS의 antialias 옵션을 추가하려면, `Engine` 객체를 생성할 때 antialias 옵션을 활성화해야 한다. `Engine` 생성자는 antialias를 활성화할 수 있는 옵션을 제공한다.

```javascript
const engine = new Engine(canvas, true); // antialias를 활성화
```

위의 코드에서 `true` 값은 antialias를 활성화하겠다는 것을 의미한다. 이 변경을 통해 생성되는 3D 그래픽스의 가장자리가 더 부드러워질 것이다.

<br/>
<br/>


## Material


1. **Material의 정의**:
- Material은 3D 객체의 표면 특성을 정의하는 데 사용된다.
- 이는 객체의 색상, 질감, 광택 등을 결정한다.

<br/>

2. **StandardMaterial**:
- `StandardMaterial`은 기본적인 Material 유형이다.
- 이는 객체의 색상과 질감 등 기본적인 시각적 특성을 설정하는 데 사용된다.
- 예시:
    ```javascript
    var stdMat = new BABYLON.StandardMaterial("stdMat", scene);
    stdMat.diffuseColor = BABYLON.Color3.Random(); // 색상 변경
    sphere.material = stdMat; // sphere에 material 적용
    ```
   - 2-1. **diffuseColor의 역할**:
     - `diffuseColor`는 Material의 기본 색상을 설정한다.
     - 이는 빛에 의해 직접적으로 반사되는 색을 나타낸다.
     - `BABYLON.Color3` 함수를 사용하여 무작위 색상을 생성할 수 있다.

<br/>

3. **PBRMaterial**:
- `PBRMaterial`은 물리 기반 렌더링(Pysically Based Rendering) Material이다.
- 이는 물체의 표면이 실제 세계의 물리 법칙에 따라 빛을 반사하고 흡수하는 방식을 모방한다.
- 예시:
    ```javascript
    var pbrMat = new BABYLON.PBRMaterial("pbrMat", scene);
    pbrMat.albedoColor = BABYLON.Color3.Yellow(); // 색상 변경
    pbrMat.metallic = 0; // metallic 설정
    var tex = new BABYLON.Texture("textures/crate.png", scene); // 텍스처 불러옴
    pbrMat.albedoTexture = tex; // pbrMat에 텍스처 적용
    box.material = pbrMat; // box에 material 적용
    ```
   - 3-1. **albedoColor와 albedoTexture의 역할**:
     - `albedoColor`는 PBRMaterial의 기본 색상을 설정한다.
     - `albedoTexture`는 Material에 적용할 텍스처를 정의한다.
     - 이들은 물체의 색과 질감을 더욱 사실적으로 표현하는 데 기여한다.
   - 3-2. **metallic의 의미와 사용**:
     - `metallic` 속성은 Material이 금속성을 얼마나 가지고 있는지 정의한다.
     - 값이 0이면 비금속성, 1에 가까우면 금속성을 나타낸다.
     - 기본값은 0이지만, 설정하지 않으면 Material이 까맣게 보일 수 있다.

<br/>

4. **ShaderMaterial**:
- `ShaderMaterial`은 사용자 정의 셰이더를 적용할 수 있는 Material이다.
- 이를 통해 고유한 렌더링 효과를 생성할 수 있다.
- 사용자가 직접 작성한 셰이더 코드를 통해 복잡한 시각적 효과를 구현한다.
- 예시:
    ```javascript
    var shaderMaterial = new BABYLON.ShaderMaterial("shader", scene, {
        vertex: "custom", 
        fragment: "custom",
    }, {
        attributes: ["position", "normal", "uv"],
        uniforms: ["world", "worldView", "worldViewProjection", "view", "projection"]
    });
    ```

<br/>

5. **GroundMaterial**:
- GroundMaterial은 지면이나 바닥에 사용되는 특별한 형태의 Material이다.
- 이는 주로 지형이나 환경의 바닥을 표현하는 데 사용된다.
- `diffuseTexture` 속성을 사용하여 지면의 질감을 설정한다.
- 예시:
    ```javascript
    var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("textures/ground.jpg", scene);
    groundMaterial.diffuseTexture.uScale = 6; // u크기 설정 (이미지 가로 크기)
    groundMaterial.diffuseTexture.vScale = 6; // v크기 설정 (이미지 세로 크기)
    groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0); // specular색상 변경
    ground.material = groundMaterial; // ground에 material 적용
    ```
    - 5-1. **uScale과 vScale의 역할**:
        - `uScale`과 `vScale`은 텍스처 매핑에서 사용된다.
        - `uScale`은 텍스처의 가로 크기를 조절한다.
        - `vScale`은 텍스처의 세로 크기를 조절한다.
        - 이를 통해 텍스처가 3D 객체에 적용되는 방식을 제어한다.

    - 5-2. **specularColor의 기능**:
        - `specularColor`는 Material의 광택 색상을 정의한다.
        - 이는 물체가 빛을 반사할 때 나타나는 하이라이트의 색을 결정한다.
        - 광택 색상을 조절하여 물체의 물질감과 광택도를 제어할 수 있다.
<br/>
<br/>


## Inspector

#### Inspector의 특징:

- 실시간으로 씬의 구조와 속성을 볼 수 있어 디버깅과 개발 과정을 간소화한다.
- 오브젝트, 라이트, 카메라, 물리 엔진 설정 등을 시각적으로 조정할 수 있다.
- 성능 모니터링 기능을 통해 프레임 레이트와 자원 사용량을 확인할 수 있다.

#### 필요 라이브러리

```
yarn add @babylonjs/inspector 
```


#### 사용 방법

```javascript
Inspector.Show(scene, userOptions) // Inspector 열기
Inspector.Hide()
Inspector.IsVisible
```

Inspector를 import한 다음 Inspector 객체 내의 메서드를 활용해 Inspector를 열고 닫을 수 있다.