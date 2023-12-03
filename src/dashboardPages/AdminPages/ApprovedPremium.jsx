import React, { useEffect, useState } from 'react';
import ApprovedPremiumTable from './ApprovedPremiumTable';
import axios from 'axios';

const ApprovedPremium = () => {
    const [users, setUsers] = useState([])
    useEffect( () => {
        axios('https://biye-kormo-server.vercel.app/approvedPremium')
        .then(res => {
            setUsers(res.data)
        })
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-center mb-5'>All Premium Request</h1>
            <ApprovedPremiumTable users={users} setUsers={setUsers}></ApprovedPremiumTable>
        </div>
    );
};

export default ApprovedPremium;