import { setAlertData } from "../redux/rootSlice";

export const initiatePayment = (dispatch, amount) => {
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
    key: "rzp_test_Gz8ROPegrQ0AsC",
    amount: amount * 100,
    currency: "INR",
    name: "Acme Corp",
    description: "This is a test payment",
    handler: function (response) {
      dispatch(
        setAlertData({
          type: "success",
          message: `✅ Payment Successful. Payment ID: ${response.razorpay_payment_id}`,
        })
      );
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
