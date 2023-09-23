import { useObservable } from "@legendapp/state/react";
import { useInterval } from "../utils/hooks";

function TreeLeaf({ count }) {
  return <div>Count: {count}</div>;
}
function TreeLeft({ count }) {
  return <TreeLeaf count={count} />;
}
function TreeRight() {
  return <div>Unrelated element</div>;
}
function Tree() {
  const count = useObservable(1);

  useInterval(() => {
    count.set((v) => v + 1);
  }, 600);

  return (
    <>
      <div>Count: {count}</div>
      <TreeLeft count={count.get()} />
      <TreeRight />
    </>
  );
}
export default Tree;