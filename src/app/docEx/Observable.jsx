import { computed, observable } from "@legendapp/state";
import { Reactive, useObserve } from "@legendapp/state/react";
import { Profile, State } from "./State";
import { enableReactComponents } from "@legendapp/state/config/enableReactComponents";

enableReactComponents();

export default function Observable() {

  return (
    <div>
      <p>
        First Name: <span className="text-orange-900">{Profile.fname}</span>
      </p>
      <p>
        Last Name: <span className="text-orange-900">{Profile.lname}</span>
      </p>
      <p>
        Full Name:{" "}
        <span className="text-orange-900">{Profile.fullname.get()}</span>
      </p>
      <div className="flex flex-col gap-2">
        <Reactive.input
          className={classNameInput}
          $value={Profile.fname}
          placeholder="Type here..."
        />
        <Reactive.input
          className={classNameInput}
          $value={Profile.lname}
          placeholder="Type here..."
        />
      </div>
      <p>Full Name: {Profile.fullname.get()}</p>
    </div>
  );
}

const classNameInput = "border rounded border-gray-300 px-2 py-1 mt-2"
