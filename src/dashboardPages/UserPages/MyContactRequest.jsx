import CustomizedTables from "./ContactRequestTable";

const MyContactRequest = () => {
    return (
        <div>
            <h1 className='text-5xl text-center mb-5'>All Contact Request</h1>
            <div className="bg-white px-10 py-10 rounded-md">
                <CustomizedTables></CustomizedTables>
            </div>
        </div>
    );
};

export default MyContactRequest;