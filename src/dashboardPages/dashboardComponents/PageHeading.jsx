import React from 'react';

const PageHeading = ({tittle, image}) => {
    return (
        <div>
            <img src={image} alt="" className='w-44 h-44 rounded-full mx-auto' />
            <h1 className='text-center text-5xl mb-5'>{tittle}</h1>
        </div>
    );
};

export default PageHeading;