import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";

const PaymentMethod = ({close}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const selectedMethod = watch("paymentMethod"); // Watch selected payment method
  const upiId = watch("upiId"); // Watch UPI ID

  const onSubmit = (data) => {
    alert(
      `Payment method: ${data.paymentMethod}, UPI ID (${selectedMethod}): ${data.upiId}`
    );
  };

  return (
    <div className="flex items-center justify-center">
    <div className="w-[400px] fixed top-20 my-auto left-0 right-0 h-fit bottom-0 mx-auto mt-10 p-5 rounded-lg shadow-lg bg-white">
      {/* Header */}
      <div className="flex justify-between">
      <div className="mb-4 text-xl font-bold text-center">Payment Method</div>
      <div onClick={close}><IoClose size={20}/></div>
      </div>
      
      {/* Payment Options */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-around mb-6">
          {/* PayPal */}
          <label className="flex flex-col items-center cursor-pointer">
            <input
              type="radio"
              value="PayPal"
              {...register("paymentMethod", { required: true })}
              className="hidden"
            />
            <img
              src="https://turn2opinion.com/dashboard/img/paypal.png"
              alt="PayPal"
              className={`w-13 h-5 ${
                selectedMethod === "PayPal"
                  ? "ring-2 ring-blue-500 rounded-full"
                  : ""
              }`}
            />
          </label>

          {/* Wire Transfer */}
          <label className="flex flex-col items-center cursor-pointer">
            <input
              type="radio"
              value="Wire Transfer"
              {...register("paymentMethod", { required: true })}
              className="hidden"
            />
            <img
              src="https://turn2opinion.com/dashboard/img/wire-transfer.png"
              alt="Wire Transfer"
              className={`w-13 h-5 ${
                selectedMethod === "Wire Transfer"
                  ? "ring-2 ring-blue-500 rounded-full"
                  : ""
              }`}
            />
          </label>

          {/* Amazon Gift Card */}
          <label className="flex flex-col items-center cursor-pointer">
            <input
              type="radio"
              value="Amazon Gift Card"
              {...register("paymentMethod", { required: true })}
              className="hidden"
            />
            <img
              src="https://turn2opinion.com/dashboard/img/amazone.png"
              alt="Amazon Gift Card"
              className={`w-13 h-5 ${
                selectedMethod === "Amazon Gift Card"
                  ? "ring-2 ring-blue-500 rounded-full"
                  : ""
              }`}
            />
          </label>

          {/* UF Card */}
          <label className="flex flex-col items-center cursor-pointer">
            <input
              type="radio"
              value="UF Card"
              {...register("paymentMethod", { required: true })}
              className="hidden"
            />
            <img
              src="https://turn2opinion.com/dashboard/img/upi.png" // Replace with actual UF logo URL
              alt="UF Card"
              className={`w-13 h-5 ${
                selectedMethod === "UF Card"
                  ? "ring-2 ring-blue-500 rounded-full"
                  : ""
              }`}
            />
          </label>
        </div>

        {/* UPI ID Input */}
        <div className="mb-4">
          <label
            htmlFor={`upiId-${selectedMethod}`}
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            UPI ID ({selectedMethod}) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id={`upiId-${selectedMethod}`} // Dynamic ID based on the selected payment method
            {...register("upiId", { required: true })}
            placeholder={`Enter your UPI ID for ${selectedMethod}`}
            defaultValue={upiId} // Persist UPI ID value across selections
            onChange={(e) => setValue("upiId", e.target.value)} // Update form state manually
            className={`w-full px-4 py-2 border ${
              errors.upiId ? "border-red-500" : "border-gray-300"
            } rounded-md focus:ring focus:ring-blue-300 focus:outline-none`}
          />
          {errors.upiId && (
            <p className="mt-1 text-sm text-red-500">UPI ID is required.</p>
          )}
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full py-2 font-semibold text-white transition duration-200 bg-orange-500 rounded-md hover:bg-orange-600"
        >
          SAVE
        </button>
      </form>

      {/* Progress Bar */}
      
    </div>
    </div>

  );
};

export default PaymentMethod;
