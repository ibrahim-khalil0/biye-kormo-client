import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const useSingleData = () => {
    const {user} = useContext(AuthContext)

    const axiosSecure = useAxiosSecure()
    const  {data: singleBiodata = []} = useQuery({
        queryKey: ['singleBiodata'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/biodata/${user.email}`)
            return res.data
        }
    })
    return [singleBiodata]
};

export default useSingleData;