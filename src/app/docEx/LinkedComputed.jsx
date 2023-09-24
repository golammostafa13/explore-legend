import { computed, observable } from '@legendapp/state';
import React from 'react';

const LinkedComputed = () => {
    const state$ = observable({
        items: ['hi', 'there', 'hello'],
        selectedIndex: 0,
        selectedItem: computed(() => state$.items[state$.selectedIndex.get()])
    })
    
    const item1 = state$.selectedItem.get()
    
    state$.selectedIndex.set(2)
    
    const item2 = state$.selectedItem.get()

    return (
        <div>
            <p>{item1}</p>
            <p>{item2}</p>
        </div>
    );
};

export default LinkedComputed;