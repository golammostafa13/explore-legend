"use client"
import React from 'react';

const ViaProps = ({count}: {count: number}) => {
    return (
        <div className='bg-amber-700 p-2 text-white rounded-sm'>
            Count: {count}
        </div>
    );
};

export default ViaProps;