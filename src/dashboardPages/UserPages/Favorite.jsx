import React, { useContext, useEffect, useState } from "react";
import FavoriteTable from "./FavoriteTable";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios(`https://biye-kormo-server.vercel.app/favorite/${user?.email}`).then((res) => {
      setFavorites(res.data);
    });
  }, [user]);
  return (
    <div>
      <h1 className="text-5xl text-center mb-5">All Favorite Biodata</h1>
      <div className="bg-white px-10 py-10 rounded-md">
        <FavoriteTable
          favorites={favorites}
          setFavorites={setFavorites}
        ></FavoriteTable>
      </div>
    </div>
  );
};

export default Favorite;
