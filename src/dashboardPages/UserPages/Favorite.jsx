import React from 'react';
import FavoriteTable from './FavoriteTable';

const Favorite = () => {
    return (
        <div>
            <h1 className='text-5xl text-center mb-5'>All Favorite Biodata</h1>
            <div className="bg-white px-10 py-10 rounded-md">
                <FavoriteTable></FavoriteTable>
            </div>
        </div>
    );
};

export default Favorite;