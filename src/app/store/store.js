import { observable } from "@legendapp/state";

export const TodoStore = observable({
  todos: []
});
export const UIStore = observable({ settings: { theme: "dark" } });

// TO DO ACTIONS
export const addTodo = (name) => {
  TodoStore.todos.push({
    id: String(Date.now()),
    name,
    done: false
  });
};

export const toggleTodo = (id) => {
  const idx = TodoStore.todos.findIndex((todo) => todo.id === id);

  TodoStore.todos[idx].assign({
    done: !TodoStore.todos[idx].done
  });
};

export const deleteTodo = (id) => {
  const idx = TodoStore.todos.findIndex((todo) => todo?.id === id);
  TodoStore.todos[idx].delete();
};

// THEME ACTIONS
export const toggleTheme = () => {
  const theme = UIStore.settings.theme === "dark" ? "light" : "dark";
  UIStore.settings.theme = theme;
};
