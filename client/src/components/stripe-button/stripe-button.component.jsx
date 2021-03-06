import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_LGXzgY8j5yTHBrtlmvfAQIgY";
  const baseURL_production = "https://corona-ropa.herokuapp.com";
  const baseURL_development = "http://localhost:5000";
  console.log("process.env:::", process.env);

  const onToken = token => {
    axios({
      url: "payment",
      baseURL:
        process.env.NODE_ENV === "production"
          ? baseURL_production
          : baseURL_development,
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        console.log("stripe response:::", response);
        alert("succesful payment");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
