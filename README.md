# Learning Recoil JS

본 Repository는 <a href="https://recoiljs.org/ko/">RecoilJS 공식문서</a>를 참고하여 만들어졌음을 밝힙니다.

## What is the Recoil JS

RecoilJS공식문서 첫 화면에 자신을 아래와 같이 소개하고있다.

<img src="gitImages\Introduce_Recoil.jpg">

즉 해당 라이브러리는 React상태를 관리해주는 라이브러리 임을 알 수 있고 장점에는 아래와 같은 대표적인 3가지를 뽑아놨는데,

<img src="gitImages\Advantages.jpg">

즉 React-Query 혹은 SWR 과 매우 유사한 기능을 하고있음을 알 수 있다.

개인적으로 위에 두 사이트보다 훨씬 깔끔하고 시각적인 자료, 및 다양한 언어 지원기능을 보고 정리할 맛이 났던 것 같다.

## 설치

NPM

```javascript
npm i recoil
```

Yarn

```javascript
yarn add recoil
```

## 시작하기

먼저 부모트리에 RecoilRoot컴포넌트를 감싸주어야 한다

```javascript
function App() {
  import { RecoilRoot } from "recoil";
  return (
    <RecoilRoot>
      <ChildComponent />
    </RecoilRoot>
  );
}
```

먼저 초기화 단계를 거치고 값을 설정하는데, 이 때에 atom함수를 사용한다

```javascript
const test = atom({
  // 고유한 식별자를 말함
  key: "test",
  // 기본값을 말함
  default: "This is Test Value",
});
```

이후 State를 관리하기위해 useState가 아닌 useRecoilState를 사용한다

```javascript
import { useRecoilState } from "recoil";

// 이전 atom함수를 사용하여 만들었던 변수를 삽입
const [val, setVal] = useRecoilState(test);
```

값을 변경할 때 에는 setVal함수를 그대로 사용하지만,
조회할 때에는 그냥 val로 조회하는 것이 아닌 selector함수로 조회한다.

```javascript
import { selector } from "recoil";

const changeVal = selector({
  // 식별자
  key: "search",
  // 매개변수로 get을 받아 받고싶은 변수를 호출
  get: ({ get }) => get(test),
});
```

후 생성된 changeVal 변수를 useRecoilValue함수에 인자로 전달해 사용이 가능하다

```javascript
import { useRecoilValue } from "recoil";

const value = useRecoilValue(changeVal);

console.log(value); // return 'This is Test Value'
```
