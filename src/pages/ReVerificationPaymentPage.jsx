import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading, setAlertData } from "../redux/rootSlice";
// import { initiatePayment } from "../utils/paymentUtils";
import { initiatePayment } from "../utils/paymentUtils";

export const ReVerificationPaymentPage = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const [course, setCourse] = useState(null);
  const [finalAmount, setFinalAmount] = useState(0);
  const [gstAmount, setGstAmount] = useState(0);
  const navigate = useNavigate();

  // Utility function
  const calculateGST = (amount) => {
    return +(amount * 0.18).toFixed(2);
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        dispatch(showLoading());
        const res = await axios.get(
          `https://abhinash.itflyweb.cloud/api/getCourseDetails.php?course_id=${courseId}`
        );
        if (res.status === 200) {
          const fetchedCourse = res.data;
          setCourse(fetchedCourse);

          // Calculate amounts after course is loaded
          const gst = calculateGST(fetchedCourse.discounted_price);
          setGstAmount(gst);
          setFinalAmount(+(fetchedCourse.discounted_price + gst).toFixed(2));
        } else {
          dispatch(setAlertData({ type: "error", message: res.statusText }));
        }
      } catch (err) {
        dispatch(
          setAlertData({
            type: "error",
            message: "Failed to fetch course data: " + err.message,
          })
        );
      } finally {
        dispatch(hideLoading());
      }
    };

    fetchCourse();
  }, [courseId]);

  const purchaseCourse = async (orderId, paymentId ) => {
    // console.log("order id: ", orderId, "payment id : ", paymentId);
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      console.error("User not logged in");
      return;
    }

    const payload = {
      "name": user.name,
      "user_id": user.id,
      "email": user.email,
      "orderId": orderId,
      "paymentId": paymentId,
      "courseId": course.id,
      "courseName": course.title,
    };
    console.log(payload);

    try {
      const res = await axios.post(
        "https://abhinash.itflyweb.cloud/api/purchaseapi_insert.php",
        {payload}
      );
      console.log("✅ Purchase saved:", res.data);
      // navigate(`/user-profile/${user.id}`);
      // return res.data;
    } catch (err) {
      console.error("❌ Failed to record purchase", err);
    }
  };

  const handleConfirmPayment = async () => {
    try {
      dispatch(showLoading());

      const response = await axios.post(
        "https://abhinash.itflyweb.cloud/api/paymentkey.php",
        { totalamount: finalAmount }
      );
      console.log(response.data);
      if (response.data.Status) {
        const orderId = response.data.OrderID;
        const apiKey = response.data.apiKey;

        dispatch(
          setAlertData({
            type: "success",
            message: "Order created successfully!",
          })
        );

        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
          dispatch(
            setAlertData({ type: "error", message: "User not logged in!" })
          );
          return;
        }
        initiatePayment(dispatch, finalAmount, apiKey, async (paymentId) => {
          // console.log("🎉 Payment successful. Payment ID:", paymentId);
          await purchaseCourse(orderId, paymentId);
        });
        // ✅ Trigger Razorpay and capture payment ID
        // initiatePayment(
        //   dispatch,
        //   finalAmount,
        //   orderId,
        //   apiKey
        //   // async (paymentId) => {
        //   //   console.log("🎉 Payment successful. Payment ID:", paymentId);

        //   //   // ✅ Now call purchaseCourse after payment success
        //   //   
        //   // }
        // )
      } else {
        dispatch(
          setAlertData({
            type: "error",
            message: response.data.message || "Payment init failed!",
          })
        );
      }
    } catch (error) {
      dispatch(
        setAlertData({
          type: "error",
          message:
            error.response?.data?.message ||
            "Something went wrong with payment!",
        })
      );
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <>
      <Navbar />
      {course && (
        <div className="container mx-auto px-4 py-10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Course Details */}
          <div className="md:col-span-2 bg-white border rounded-lg shadow p-6 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">{course.title}</h1>
            <p className="text-gray-600">{course.description}</p>

            {/* Info Summary */}
            <div className="flex text-sm text-border-color space-x-10">
              <p className="border-2 border-border-color  px-3 py-1 rounded-2xl">
                🎓 <strong>Total Lectures:</strong>{" "}
                {course.total_lectures || 11}
              </p>
              <p className="border-2 border-border-color  px-3 py-1 rounded-2xl">
                ⏰ <strong>Duration:</strong> {course.duration || "2h 50min"}
              </p>
              <p className="border-2 border-border-color  px-3 py-1 rounded-2xl">
                📘 <strong>Level:</strong> {course.level || "Advanced"}
              </p>
            </div>

            {/* Course Content */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Course Content
              </h2>
              {course.sections.map((section) => (
                <div key={section.id} className="space-y-2">
                  <h3 className="font-semibold text-gray-800">
                    {section.section_title}
                  </h3>
                  <ul className="pl-4 list-disc text-sm text-gray-600">
                    {section.lectures.map((lecture, index) => (
                      <li key={index}>{lecture.lecture_title}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Payment Summary */}
          <div className="bg-white border rounded-lg shadow p-6 space-y-6">
            <h2 className="text-xl font-bold text-gray-800">Payment Summary</h2>
            <table className="w-full text-sm text-left text-gray-600">
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Original Price</td>
                  <td className="py-2 text-right">
                    ₹{course.original_price.toFixed(2)}
                  </td>
                </tr>

                <tr className="border-b text-red-600">
                  <td className="py-2">
                    Discount (
                    {Math.round(
                      ((course.original_price - course.discounted_price) /
                        course.original_price) *
                        100
                    )}
                    %)
                  </td>
                  <td className="py-2 text-right">
                    - ₹
                    {(course.original_price - course.discounted_price).toFixed(
                      2
                    )}
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-2">Price After Discount</td>
                  <td className="py-2 text-right text-green-600 font-semibold">
                    ₹{course.discounted_price.toFixed(2)}
                  </td>
                </tr>

                <tr className="border-b text-blue-700">
                  <td className="py-2">GST (+18%)</td>
                  <td className="py-2 text-right">+ ₹{gstAmount}</td>
                </tr>

                <tr className="border-b font-bold text-gray-900">
                  <td className="py-2">Total Payable</td>
                  <td className="py-2 text-right">₹{finalAmount}</td>
                </tr>
              </tbody>
            </table>

            <div className="text-2xl font-extrabold text-center text-gray-800 border-t pt-4">
              ₹{finalAmount}
            </div>

            <button
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition"
              onClick={handleConfirmPayment}
            >
              Confirm Payment
            </button>
          </div>
        </div>
      )}
    </>
  );
};
