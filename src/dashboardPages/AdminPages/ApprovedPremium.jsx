import React from 'react';
import ApprovedPremiumTable from './ApprovedPremiumTable';

const ApprovedPremium = () => {
    return (
        <div>
            <h1 className='text-5xl text-center mb-5'>All Premium Request</h1>
            <ApprovedPremiumTable></ApprovedPremiumTable>
        </div>
    );
};

export default ApprovedPremium;