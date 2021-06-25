import {
  atom,
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function Test() {
  const state = atom({
    key: "counter",
    default: 0,
  });

  const [val, setVal] = useRecoilState(state);

  const search = selector({
    key: "search",
    get: ({ get }) => get(state),
  });

  const num = useRecoilValue(search);
  return (
    <>
      <h1>The Val is : {num}</h1>
      <button onClick={() => setVal((prev) => prev + 1)}>UP</button>
    </>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <Test />
    </RecoilRoot>
  );
}
