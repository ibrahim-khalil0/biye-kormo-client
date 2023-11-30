import React from 'react';
import ManageUserTable from './ManageUserTable';

const ManageUsers = () => {
    return (
        <div>
            <h1 className='text-5xl text-center mb-5'>Manage All Users</h1>
            <ManageUserTable></ManageUserTable>
        </div>
    );
};

export default ManageUsers;