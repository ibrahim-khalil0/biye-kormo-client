import { useContext, useEffect, useState } from "react";
import CustomizedTables from "./ContactRequestTable";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProviders";

const MyContactRequest = () => {

    const [contacts, setContacts] = useState([])
    const {user} = useContext(AuthContext)

    useEffect( () => {
        axios(`https://biye-kormo-server.vercel.app/contactRequest/${user?.email}`)
        .then(res => {
            setContacts(res.data)
        })
    }, [user])

    return (
        <div>
            <h1 className='text-5xl text-center mb-5'>All Contact Request</h1>
            <div className="bg-white px-10 py-10 rounded-md">
                <CustomizedTables biodata={contacts} setContacts={setContacts}></CustomizedTables>
            </div>
        </div>
    );
};

export default MyContactRequest;