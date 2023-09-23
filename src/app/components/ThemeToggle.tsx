import { observer } from "@legendapp/state/react";
import { toggleTheme, UIStore } from "../store/store";

// Components re-render only when accessed observables change
const ThemeToggle = observer(function Component() {
  return (
    <div>
      <div>Theme: {UIStore.settings.theme}</div>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
});

export default ThemeToggle;
