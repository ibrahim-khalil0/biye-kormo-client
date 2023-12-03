import axios from "axios";
import { useEffect, useState } from "react";


const AdminDashboard = () => {
  const [dataCollection, setDataCollection] = useState({})

  useEffect( () => {
    axios('https://biye-kormo-server.vercel.app/totalBiodata')
    .then(res => {
      setDataCollection(res.data)
    })
  } , [] )

  return (
    <div>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-200 p-6 rounded-md shadow-md">
            <p className="text-xl font-semibold mb-2">Total Biodata Count</p>
            <p className="text-3xl">{dataCollection.totalData}</p>
          </div>

          <div className="bg-pink-200 p-6 rounded-md shadow-md">
            <p className="text-xl font-semibold mb-2">Male Biodata Count</p>
            <p className="text-3xl">{dataCollection.totalMaleData}</p>
          </div>

          <div className="bg-purple-200 p-6 rounded-md shadow-md">
            <p className="text-xl font-semibold mb-2">Female Biodata Count</p>
            <p className="text-3xl">{dataCollection.totalFemaleData}</p>
          </div>

          <div className="bg-yellow-200 p-6 rounded-md shadow-md">
            <p className="text-xl font-semibold mb-2">Premium Biodata Count</p>
            <p className="text-3xl">{dataCollection.totalPremiumData}</p>
          </div>

          <div className="bg-green-200 p-6 col-span-2 rounded-md shadow-md">
            <p className="text-xl font-semibold mb-2">Total Revenue</p>
            <p className="text-3xl">BDT {dataCollection.revenue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
