import React, { useEffect, useState } from 'react';
import ManageUserTable from './ManageUserTable';
import axios from 'axios';

const ManageUsers = () => {
    const [premium, setPremium] = useState(1)
    const [admin, setAdmin] = useState(1)
    const [users, setUsers] = useState([])
    useEffect( () => {
        axios('https://biye-kormo-server.vercel.app/manageUer')
        .then(res => {
            setUsers(res.data)
        })
    }, [admin, premium])
    return (
        <div>
            <h1 className='text-5xl text-center mb-5'>Manage All Users</h1>
            <ManageUserTable users={users} premium={premium} setPremium={setPremium} admin={admin} setAdmin={setAdmin}></ManageUserTable>
        </div>
    );
};

export default ManageUsers;