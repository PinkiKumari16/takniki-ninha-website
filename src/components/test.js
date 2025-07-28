const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "PHPSESSID=c2a38ba87b8177956b5b677f9c92aa80");

const raw = JSON.stringify({
  "name": "test",
  "user_id": "4",
  "email": "test@gmail.com",
  "orderId": "order_QwT2D4S5aSXsfy",
  "paymentId": "pay_QwT2s5JAwuH1zS",
  "courseId": "12",
  "courseName": "Zoho Customization"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://abhinash.itflyweb.cloud/api/purchaseapi_insert.php", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));