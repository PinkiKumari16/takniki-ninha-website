// import { setAlertData } from "../redux/rootSlice";

// export const initiatePayment = (dispatch, finalAmount, orderId, apiKey) => {
//   console.log("payable amount: ",finalAmount,"api key: ", apiKey,"order id: ", orderId);
//   if (!window.Razorpay) {
//     dispatch(
//       setAlertData({
//         type: "error",
//         message: "Razorpay SDK not loaded, check your connection.",
//       })
//     );
//     return;
//   }

//   const options = {
//     key: apiKey,
//     amount: finalAmount * 100,
//     currency: "INR",
//     name: "Acme Corp",
//     description: "Course Payment",
//     order_id: orderId,
//     handler: function (response) {
//       const paymentId = response.razorpay_payment_id;
//       console.log(paymentId);
//       dispatch(
//         setAlertData({
//           type: "success",
//           message: `✅ Payment Successful! Payment ID: ${paymentId}`,
//         })
//       );

//       // if (typeof onSuccess === "function") {
//       //   onSuccess(paymentId);
//       // }
//     },
//     prefill: {
//       name: "Test User",
//       email: "test@example.com",
//       contact: "9999999999",
//     },
//     theme: {
//       color: "#3399cc",
//     },
//   };

//   const razor = new window.Razorpay(options);
//   razor.open();
// };






import { setAlertData } from "../redux/rootSlice";

export const initiatePayment = (dispatch, amount, apiKey, onSuccess) => {
  if (!window.Razorpay) {
    dispatch(
      setAlertData({
        type: "error",
        message:
          "Razorpay SDK not loaded, Please check your internet connection",
      })
    );
    return;
  }

  const options = {
    key: apiKey,
    amount: amount * 100,
    currency: "INR",
    name: "Acme Corp",
    description: "This is a test payment",
    handler: function (response) {
      const paymentId = response.razorpay_payment_id;
      dispatch(
        setAlertData({
          type: "success",
          message: `✅ Payment Successful. Payment ID: ${response.razorpay_payment_id}`,
        })
      );
      if (typeof onSuccess === "function") {
        onSuccess(paymentId);
      }
    },
    prefill: {
      name: "Test User",
      email: "test@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

