import React from "react";

const Checkout = () => {
  return (
    <div className="bg-gray-100 px-[5%] lg:px-[8%] py-16">
        <div>
            <h1 className="text-5xl lg:text-8xl font-semibold text-center mb-5">Checkout</h1>
        </div>
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-1/2">
          <form>
            <div className="mb-4">
              <label
                htmlFor="biodataId"
                className="block text-sm font-semibold text-gray-600"
              >
                Biodata ID (Who you need to contact)
              </label>
              <input
                type="text"
                id="biodataId"
                name="biodataId"
                readOnly
                value="123"
                className="form-input mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="selfBiodataId"
                className="block text-sm font-semibold text-gray-600"
              >
                Self Biodata ID
              </label>
              <input
                type="text"
                id="selfBiodataId"
                name="selfBiodataId"
                readOnly
                value="456"
                className="form-input mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="selfEmail"
                className="block text-sm font-semibold text-gray-600"
              >
                Self Email
              </label>
              <input
                type="text"
                id="selfEmail"
                name="selfEmail"
                readOnly
                value="user@example.com"
                className="form-input mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="stripeCardNumber"
                className="block text-sm font-semibold text-gray-600"
              >
                Stripe Card Number
              </label>
              <input
                type="text"
                id="stripeCardNumber"
                name="stripeCardNumber"
                className="form-input mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
