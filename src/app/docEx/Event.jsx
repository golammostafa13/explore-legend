import React from 'react';
import { event } from "@legendapp/state";

const onClosed = event();

const CloseButton = () => {
  const handleClose = () => {
    console.log('close');
    // Dispatch the event when the button is clicked
    onClosed.fire();
  };
  
  return (
    <button onClick={handleClose} className='bg-orange-700 px-3 py-1 text-white'>
      Close
    </button>
  );
};

const Event = () => {
  // Register a callback for the event
  onClosed.on(() => {
    alert('The close button was clicked!');
  });

  return (
    <div>
      <h1>Component with Event</h1>
      <CloseButton />
      <button onClick={() => onClosed.fire()}>cl</button>
    </div>
  );
};

export default Event;
