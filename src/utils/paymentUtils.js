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

