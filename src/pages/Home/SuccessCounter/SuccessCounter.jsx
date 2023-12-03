import axios from "axios";
import { useEffect, useState } from "react";


const SuccessCounter = () => {

    const [dataCollection, setDataCollection] = useState({})

  useEffect( () => {
    axios('https://biye-kormo-server.vercel.app/totalBiodata')
    .then(res => {
      setDataCollection(res.data)
    })
  } , [] )

    return (
        <div style={{backgroundImage: 'url("https://poruthammatrimony.com/wp-content/uploads/2018/09/matrimony-1170x480.jpg")'}} className="mt-20 bg-fixed bg-cover bg-no-repeat text-white">
            <div className="py-20 bg-[#000000c2]">
                <h5 className="text-center text-lg uppercase">Total Biodata</h5>
                <h1 className="text-5xl font-semibold text-center">Success Counter</h1>
                <div className="px-[5%] lg:px-[8%] flex justify-between flex-wrap gap-5 pt-20">
                    <div className="text-center">
                        <div className="bg-[#9D6824] w-[150px] h-[150px] rounded-full grid place-items-center text-6xl font-bold">
                            <h3>{dataCollection.totalData}</h3>
                        </div>
                        <h2 className="text-2xl mt-2">Total Bio Data</h2>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#9D6824] w-[150px] h-[150px] rounded-full grid place-items-center text-6xl font-bold">
                            <h3>{dataCollection.totalMaleData}</h3>
                        </div>
                        <h2 className="text-2xl mt-2">Total Male</h2>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#9D6824] w-[150px] h-[150px] rounded-full grid place-items-center text-6xl font-bold">
                            <h3>{dataCollection.totalFemaleData}</h3>
                        </div>
                        <h2 className="text-2xl mt-2">Total Female</h2>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#9D6824] w-[150px] h-[150px] rounded-full grid place-items-center text-6xl font-bold">
                        <h3>{dataCollection.totalMarriedData}</h3>
                        </div>
                        <h2 className="text-2xl mt-2">Total Marriages</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessCounter;