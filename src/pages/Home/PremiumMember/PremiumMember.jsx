import React from "react";
import { FaStar } from "react-icons/fa6";
import MemberCard from "./MemberCard";

const PremiumMember = () => {
  return (
    <div>

        {/* premium members heading  */}
      <div className="text-center pt-10 pb-20">
        <h1
          style={{
            backgroundImage:
              "url('https://i.ibb.co/LgNwtvJ/a74cdd1ff29dbe89b1cc0e44fa718ee7-removebg-preview.png')",
          }}
          className="bg-center bg-cover w-[400px] pb-14 pt-10 mx-auto text-4xl font-semibold text-[#CF902B]"
        >
          Premium Members
        </h1>
        <div className="text-center text-[#CF902B] flex justify-center gap-4"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></div>

      </div>

          {/* premium members details card  */}
      <div>
        <div className="flex justify-around flex-wrap mx-[5%] lg:mx-[8%] gap-4 pb-20">
          <MemberCard></MemberCard>
          <MemberCard></MemberCard>
          <MemberCard></MemberCard>
          <MemberCard></MemberCard>
          <MemberCard></MemberCard>
          <MemberCard></MemberCard>
        </div>
      </div>
    </div>
  );
};

export default PremiumMember;
