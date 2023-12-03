import React, { useEffect, useState } from 'react';
import ContactRequestTable from './ContactRequestTable';
import axios from 'axios';

const ContactRequestApproved = () => {
    const [users, setUsers] = useState([])
    useEffect( () => {
        axios('https://biye-kormo-server.vercel.app/approvedContact')
        .then(res => {
            setUsers(res.data)
        })
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-center mb-5'>All Contact Request</h1>
            <ContactRequestTable users={users} setUsers={setUsers}></ContactRequestTable>
        </div>
    );
};

export default ContactRequestApproved;