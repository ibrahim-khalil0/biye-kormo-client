import { FaHome, FaRegEdit, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="bg-[#9D6824] min-h-screen w-64 px-8 py-8 text-white dashboard relative">
        <Link to={'/'}>
            <img
            src="https://i.ibb.co/Kmphzg1/logo-b.png"
            alt=""
            className="w-20 mx-auto"
        />
        </Link>
        <h3 className="text-center text-2xl mb-10">Biye Kormo</h3>

        {isAdmin ? (
            // admin dashboard 
          <div className="text-white text-[18px] flex flex-col gap-6">
            <NavLink to={"/dashboard/admin"}>
              <div className="flex items-center gap-3">
                <FaHome></FaHome>
                <h5>Dashboard</h5>
              </div>
            </NavLink>
            <NavLink to={"/dashboard/manageUser"}>
              <div className="flex items-center gap-3">
                <FaRegEdit></FaRegEdit>
                <h5>Manage Users</h5>
              </div>
            </NavLink>
            <NavLink to={"/dashboard/premiumRequest"}>
              <div className="flex items-center gap-3">
                <FiSend></FiSend>
                <h5>Approved Premium</h5>
              </div>
            </NavLink>
            <NavLink to={"/dashboard/contactRequestApproved"}>
              <div className="flex items-center gap-3">
                <FaRegHeart></FaRegHeart>
                <h5>Contact Request</h5>
              </div>
            </NavLink>
            <button
              type="button"
              class="border absolute bottom-5 py-2 rounded-md hover:bg-white hover:text-[#9D6824] w-3/4"
            >
              Logout
            </button>
          </div>
        ) : (
            // normal user dashboard 
          <div className="text-white text-[18px] flex flex-col gap-6">
            <NavLink to={"/dashboard/biodata"}>
              <div className="flex items-center gap-3">
                <FaHome></FaHome>
                <h5>View Biodata</h5>
              </div>
            </NavLink>
            <NavLink to={"/dashboard/edit"}>
              <div className="flex items-center gap-3">
                <FaRegEdit></FaRegEdit>
                <h5>Edit Biodata</h5>
              </div>
            </NavLink>
            <NavLink to={"/dashboard/contactRequest"}>
              <div className="flex items-center gap-3">
                <FiSend></FiSend>
                <h5>Contact Request</h5>
              </div>
            </NavLink>
            <NavLink to={"/dashboard/favorite"}>
              <div className="flex items-center gap-3">
                <FaRegHeart></FaRegHeart>
                <h5>Favorite Biodata</h5>
              </div>
            </NavLink>
            <button
              type="button"
              className="border absolute bottom-5 py-2 rounded-md hover:bg-white hover:text-[#9D6824] w-3/4"
            >
              Logout
            </button>
          </div>
        )}

      </div>

      <div className="flex-1 bg-[#FDFCF7] px-[5%] pt-10 pb-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
