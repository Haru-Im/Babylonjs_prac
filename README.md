# My Babylonjs Practice 👩🏻‍💻

## Table of Contents
- [Canvas, Engine, Scene, Camera](#canvas-engine-scene-camera)
-  [Vertex Shader / Fragment Shader](#vertex-shader와-fragment-shader에-대해)
- [Colors](#colors)
- [Engine Options](#engine-options)
    - [antialias](#antialias)


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


## Vertex Shader와 Fragment Shader에 대해

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

## Engine Options

### antialias

antialias 옵션은 MSAA(Multisample Anti-Aliasing)를 캔버스에 적용할 것인지를 결정하는 기능이다. MSAA는 그래픽 렌더링 과정에서 객체의 가장자리를 부드럽게 처리하여, 계단 현상(jaggies)을 감소시키는 방법이다. 이 방법은 각 픽셀 주변의 여러 샘플을 취하여 평균 색을 계산함으로써 가장자리를 더 매끄럽게 만든다. 이런 처리는 3D 그래픽스에서 특히 중요하며, 더 높은 화질의 이미지를 제공한다. Antialias 옵션을 활성화하면 이미지의 전반적인 시각적 품질이 향상되지만, 그만큼 그래픽 처리에 더 많은 자원이 소모될 수 있다.  

#### Engine에서 antialias 옵션 활성화하는 방법

React 컴포넌트에서 BabylonJS의 antialias 옵션을 추가하려면, `Engine` 객체를 생성할 때 antialias 옵션을 활성화해야 한다. `Engine` 생성자는 antialias를 활성화할 수 있는 옵션을 제공한다.

```javascript
const engine = new Engine(canvas, true); // antialias를 활성화
```

위의 코드에서 `true` 값은 antialias를 활성화하겠다는 것을 의미한다. 이 변경을 통해 생성되는 3D 그래픽스의 가장자리가 더 부드러워질 것이다.