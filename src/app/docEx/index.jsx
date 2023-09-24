import Observable from "./Observable";
import Persistence from "./Persistence";
import Computed from "./Computed";
import LinkedComputed from "./LinkedComputed";
import Event from "./Event";

export default function DocsExample() {
  return (
    <>
      <h1>Documentation Examples</h1>
      <div>
        <p>No. 1 Observable</p>
        <Observable />
      </div>
      <div>
        <p>No. 2 Local Persistence</p>
        <Persistence />
      </div>
      <div>
        <p>No. 3 Computed</p>
        <Computed />
      </div>
      <div>
        <p>No. 4 Lined Computed</p>
        <LinkedComputed />
      </div>
      <div>
        <p>No. 5 Event</p>
        <Event />
      </div>
    </>
  );
}
