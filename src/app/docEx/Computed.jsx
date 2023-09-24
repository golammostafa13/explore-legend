import { computed, observable } from "@legendapp/state";
import React from "react";

const Computed = () => {
  const selected$ = observable([false, false, false]);
  const selectedAll$ = computed(
    // selectedAll is true when every element is selected
    () => selected$.every((val$) => val$.get()),

    // setting selectedAll sets the value of every element
    (value) => selected$.forEach((val$) => val$.set(value))
  );

  selectedAll$.set(true);
  // selected.get() === [true, true, true]
  console.log(selected$.get());
  return <div>{
    JSON.stringify(selected$.get())
    }</div>;
};

export default Computed;
