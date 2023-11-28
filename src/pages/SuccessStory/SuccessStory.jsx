import { FaCircle } from "react-icons/fa";
const SuccessStory = () => {
  return (
    <div className="bg-[#FDFCF7] py-20">
      <div>
        <h5 className="text-center text-[#CA9859] font-semibold text-xl uppercase">
          Reviews
        </h5>

        <h1 className="text-5xl font-semibold text-[#9D6824] text-center">
          Couples Success Story
        </h1>
        <div className="flex justify-center gap-2 text-[8px] text-[#CF902B] mb-16 mt-2">
          <FaCircle></FaCircle>
          <FaCircle></FaCircle>
          <FaCircle></FaCircle>
        </div>
      </div>
      <div className="px-[5%] lg:px-[8%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-2 md:p-5 lg:p-8 rounded-lg shadow-lg text-center">
          <img
            src="https://placekitten.com/400/300"
            alt="Couple"
            className="w-full h-48 object-cover rounded-md mb-6"
          />

          <p className="text-gray-600 mb-2">Marriage Date: June 15, 2022</p>

          <div className="flex items-center justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6 text-yellow-400"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0l2.45 6.307h6.298l-5.222 4.975 1.86 6.193L10 12.354l-5.386 4.121 1.86-6.193L1.252 6.307H7.55L10 0zm0 1.74L8.818 5.5H4.172L6.59 8.505 5.27 13.26l3.73-2.85V1.74z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>


          <p className="text-gray-800">
            "We found love on this platform! Thank you for helping us connect
            and build a beautiful life together."
          </p>
        </div>
        <div className="bg-white p-2 md:p-5 lg:p-8 rounded-lg shadow-lg text-center">

          <img
            src="https://placekitten.com/400/300"
            alt="Couple"
            className="w-full h-48 object-cover rounded-md mb-6"
          />

          {/* Marriage Date */}
          <p className="text-gray-600 mb-2">Marriage Date: June 15, 2022</p>

          {/* Review Stars */}
          <div className="flex items-center justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6 text-yellow-400"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0l2.45 6.307h6.298l-5.222 4.975 1.86 6.193L10 12.354l-5.386 4.121 1.86-6.193L1.252 6.307H7.55L10 0zm0 1.74L8.818 5.5H4.172L6.59 8.505 5.27 13.26l3.73-2.85V1.74z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>

          {/* Success Story Text */}
          <p className="text-gray-800">
            "We found love on this platform! Thank you for helping us connect
            and build a beautiful life together."
          </p>
        </div>
        <div className="bg-white p-2 md:p-5 lg:p-8 rounded-lg shadow-lg text-center">
          {/* Couple Image */}
          <img
            src="https://placekitten.com/400/300" // Replace with actual image URL
            alt="Couple"
            className="w-full h-48 object-cover rounded-md mb-6"
          />

          {/* Marriage Date */}
          <p className="text-gray-600 mb-2">Marriage Date: June 15, 2022</p>

          {/* Review Stars */}
          <div className="flex items-center justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6 text-yellow-400"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0l2.45 6.307h6.298l-5.222 4.975 1.86 6.193L10 12.354l-5.386 4.121 1.86-6.193L1.252 6.307H7.55L10 0zm0 1.74L8.818 5.5H4.172L6.59 8.505 5.27 13.26l3.73-2.85V1.74z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>

          {/* Success Story Text */}
          <p className="text-gray-800">
            "We found love on this platform! Thank you for helping us connect
            and build a beautiful life together."
          </p>
        </div>
        <div className="bg-white p-2 md:p-5 lg:p-8 rounded-lg shadow-lg text-center">
          {/* Couple Image */}
          <img
            src="https://placekitten.com/400/300" // Replace with actual image URL
            alt="Couple"
            className="w-full h-48 object-cover rounded-md mb-6"
          />

          {/* Marriage Date */}
          <p className="text-gray-600 mb-2">Marriage Date: June 15, 2022</p>

          {/* Review Stars */}
          <div className="flex items-center justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6 text-yellow-400"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0l2.45 6.307h6.298l-5.222 4.975 1.86 6.193L10 12.354l-5.386 4.121 1.86-6.193L1.252 6.307H7.55L10 0zm0 1.74L8.818 5.5H4.172L6.59 8.505 5.27 13.26l3.73-2.85V1.74z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>

          {/* Success Story Text */}
          <p className="text-gray-800">
            "We found love on this platform! Thank you for helping us connect
            and build a beautiful life together."
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
