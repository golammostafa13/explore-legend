import { useState } from "react";
import { observer } from "@legendapp/state/react";
import { addTodo, deleteTodo, TodoStore } from "../store/store";
import { configureObservablePersistence, persistObservable } from "@legendapp/state/persist";
import { observable, when } from "@legendapp/state";
import { ObservablePersistIndexedDB } from '@legendapp/state/persist-plugins/indexeddb'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'

// Automatically persist state
configureObservablePersistence({
    persistLocal: ObservablePersistIndexedDB,
    persistLocalOptions: {
        indexedDB: {
            databaseName: 'Legend',
            version: 1,
            tableNames: [
                'store',
            ],
        },
    },
})

const state$ = observable({
    firstName: 'Golam',
    lastName: 'Mostafa'
 })

persistObservable(state$, {
    persistLocal: ObservablePersistIndexedDB,
    local: {
        name: 'store',
        indexedDB: {
            itemID: 'store-1',
        },
        
    }
})





persistObservable(state$, {
    persistLocal: ObservablePersistLocalStorage,
    local: 'state'
})


// configureObservablePersistence({
//     persistLocal: ObservablePersistLocalStorage
// })

// persistObservable(state$, {
//     // persistLocal: ObservablePersistIndexedDB,
//     local: 'storee' // IndexedDB table name
// })

// Components re-render only when accessed observables change
const TodoList = observer(function Component() {
  const { todos } = TodoStore;
  const [todo, setTodo] = useState("");
  const handleKeyPress = (e) => {
    // If the user presses the "Enter" key on the keyboard
    if (e.key === "Enter") {
      // Cancel the default action, if needed
      e.preventDefault();
      // Trigger the button element with a click
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
      <button onClick={() => {addTodo(todo); setTodo("")}}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo?.name} <span onClick={() => deleteTodo(todo?.id)}>x</span>
          </li>
        ))}
      </ul>
    </>
  );
});

export default TodoList;
