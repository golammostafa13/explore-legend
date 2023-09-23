"use client"
import React, { useEffect } from "react";
import {
  useObservable,
  useComputed,
  Computed,
} from "@legendapp/state/react";
import { Legend } from "@legendapp/state/react-components";

const LegendComp = () => {
  const first = useObservable("");
  const last = useObservable("");
//   const name = useComputed(
//     () => (first.get() + " " + last.get()).trim() || "(unknown)"
//   );

  const renderCount = useObservable(0); // Create an observable for render count

  useEffect(() => {
    renderCount.set(renderCount.get() + 1); // Update render count on every render
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Using Legend</h1>
      <Computed><h2>Hi {first.get() + " " + last.get()}</h2></Computed>
      <div>First:</div>
      <Legend.input value$={first} />
      <div>Last:</div>
      <Legend.input value$={last} />
      <div>Render Count: {renderCount.get()}</div>
    </div>
  );
};

export default LegendComp;
