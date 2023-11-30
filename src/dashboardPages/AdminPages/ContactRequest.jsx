import React from 'react';
import ContactRequestTable from './ContactRequestTable';

const ContactRequestApproved = () => {
    return (
        <div>
            <h1 className='text-5xl text-center mb-5'>All Contact Request</h1>
            <ContactRequestTable></ContactRequestTable>
        </div>
    );
};

export default ContactRequestApproved;