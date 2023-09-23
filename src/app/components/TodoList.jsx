"use client";
import { useState } from "react";
import { observer } from "@legendapp/state/react";
import { addTodo, deleteTodo, TodoStore } from "../store/store";
import {
  configureObservablePersistence,
  persistObservable,
} from "@legendapp/state/persist";
import { observable, when } from "@legendapp/state";
import { ObservablePersistIndexedDB } from "@legendapp/state/persist-plugins/indexeddb";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";

// Automatically persist state
configureObservablePersistence({
  persistLocal: ObservablePersistIndexedDB,
  persistLocalOptions: {
    indexedDB: {
      databaseName: "Legend",
      version: 1,
      tableNames: ["store"],
    },
  },
});

const state$ = observable({
  firstName: "Golam",
  lastName: "Mostafa",
});

persistObservable(state$, {
  persistLocal: ObservablePersistIndexedDB,
  local: {
    name: "store",
    indexedDB: {
      itemID: "store-1",
    },
  },
});

persistObservable(state$, {
  persistLocal: ObservablePersistLocalStorage,
  local: "state",
});

const TodoList = observer(function Component() {
  const { todos } = TodoStore;
  const [todo, setTodo] = useState("");
  const handleKeyPress = (e) => {
    state$.firstName.set("Hoho");
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        onClick={() => {
          addTodo(todo);
          setTodo("");
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex w-72 justify-between py-1">
            {todo?.name}{" "}
            <span
              onClick={() => deleteTodo(todo?.id)}
              className="bg-orange-900 px-3 rounded-md text-white"
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </>
  );
});

export default TodoList;
