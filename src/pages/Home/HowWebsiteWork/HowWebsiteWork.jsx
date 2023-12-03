import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const HowWebsiteWork = () => {
  return (
    <div className="bg-[#FDFCF7] py-20">
        <h5 className="text-center text-[#CA9859] font-semibold text-xl uppercase">Moments</h5>
        
        <h1 className="text-5xl font-semibold text-[#9D6824] text-center">How It Works</h1>
        <div className="flex justify-center gap-2 text-[8px] text-[#CF902B] mb-16 mt-2">
            <FaCircle></FaCircle>
            <FaCircle></FaCircle>
            <FaCircle></FaCircle>
        </div>
        <div className="text-center">
            <h1><FaCircle className="inline text-[#9D6824] text-[14px]"></FaCircle></h1>

            <div className="grid grid-cols-2 px-[5%] lg:px-[8%]">
                <div className="border-r border-[#9D6824] text-right">
                    <img src="https://rn53themes.net/themes/matrimo/images/icon/rings.png" alt="" className="w-[130px] inline mr-16" />
                </div>
                <div className="text-left pl-5 sm:pl-10 lg:pl-16">
                    <h1 className="text-3xl text-[#9D6824]">Register</h1>
                    <h5 className="text-[#CA9859]">How To Register</h5>
                    <p className="lg:mr-36 mt-6 mb-14 text-gray-600 leading-8">If you new on this website then you have to go to <Link to={'/register'}><strong>Register</strong></Link> page. Then Register your account with Name, Email, Photo URL and Password.</p>
                </div>
            </div>

            <h1><FaCircle className="inline text-[#9D6824] text-[14px]"></FaCircle></h1>

            <div className="grid grid-cols-2 px-[5%] lg:px-[8%]">
                <div className="text-right pr-5 sm:pr-10 lg:pr-16">
                    <h1 className="text-3xl text-[#9D6824]">Find your Match</h1>
                    <h5 className="text-[#CA9859]">How To Find</h5>
                    <p className="lg:ml-36 mt-6 mb-14 text-gray-600 leading-8">Go to the <Link to={'/biodatas'}><strong>Biodatas</strong></Link> page. Then Find Your Favorite biodata. You can filter biodata with age range, division and biodata type.</p>
                </div>
                <div className="border-l border-[#9D6824] text-left">
                    <img src="https://rn53themes.net/themes/matrimo/images/icon/wedding-2.png" alt="" className="w-[130px] inline ml-16" />
                </div>
                
            </div>

            <h1><FaCircle className="inline text-[#9D6824] text-[14px]"></FaCircle></h1>

            <div className="grid grid-cols-2 px-[5%] lg:px-[8%]">
                <div className="border-r border-[#9D6824] text-right">
                    <img src="https://rn53themes.net/themes/matrimo/images/icon/love-birds.png" alt="" className="w-[130px] inline mr-16" />
                </div>
                <div className="text-left pl-5 sm:pl-10 lg:pl-16">
                    <h1 className="text-3xl text-[#9D6824]">Send Interest</h1>
                    <h5 className="text-[#CA9859]">How To Send a Interest</h5>
                    <p className="lg:mr-36 mt-6 mb-14 text-gray-600 leading-8">If you get your favorite biodata then click view profile button. Then you will see the biodata details except contact information. Only premium user will see the contact information. You have to send a contact request</p>
                </div>
            </div>

            <h1><FaCircle className="inline text-[#9D6824] text-[14px]"></FaCircle></h1>

            <div className="grid grid-cols-2 px-[5%] lg:px-[8%]">
                <div className="text-right pr-5 sm:pr-10 lg:pr-16">
                    <h1 className="text-3xl text-[#9D6824]">Get Contact Information</h1>
                    <h5 className="text-[#CA9859]">Check The Contact Information</h5>
                    <p className="lg:ml-36 mt-6 mb-14 text-gray-600 leading-8">After send the contact request You will see the all request in your dashboard's contact request area. If your request approved by admin you will see the biodata's contact Email and mobile number</p>
                </div>
                <div className="border-l border-[#9D6824] text-left">
                    <img src="https://rn53themes.net/themes/matrimo/images/icon/network.png" alt="" className="w-[130px] inline ml-16" />
                </div>
                
            </div>

            <h1><FaCircle className="inline text-[#9D6824] text-[14px]"></FaCircle></h1>

            <div className="grid grid-cols-2 px-[5%] lg:px-[8%]">
                <div className="border-r border-[#9D6824] text-right">
                    <img src="https://rn53themes.net/themes/matrimo/images/icon/chat.png" alt="" className="w-[130px] inline mr-16" />
                </div>
                <div className="text-left pl-5 sm:pl-10 lg:pl-16">
                    <h1 className="text-3xl text-[#9D6824]">Start Meetups</h1>
                    <h5 className="text-[#CA9859]">Meet With interested person</h5>
                    <p className="lg:mr-36 mt-6 mb-14 text-gray-600 leading-8">After get contact information of interested person then contact with the person and arrange a meet with discuss the person</p>
                </div>
            </div>

            <h1><FaCircle className="inline text-[#9D6824] text-[14px]"></FaCircle></h1>

            <div className="grid grid-cols-2 px-[5%] lg:px-[8%]">
                <div className="text-right pr-5 sm:pr-10 lg:pr-16">
                    <h1 className="text-3xl text-[#9D6824]">Getting Marriage</h1>
                    <h5 className="text-[#CA9859]">Finally Get Married</h5>
                    <p className="lg:ml-36 mt-6 mb-14 text-gray-600 leading-8">If you two agree for get marriage then shovo kam da sere felen joto tara tari paren</p>
                </div>
                <div className="border-l border-[#9D6824] text-left">
                    <img src="https://rn53themes.net/themes/matrimo/images/icon/wedding-couple.png" alt="" className="w-[130px] inline ml-16" />
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default HowWebsiteWork;
