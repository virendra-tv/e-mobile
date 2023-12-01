import React, { useState } from "react";
import "./buynow.css";
import { Header } from "../Header/Header.js";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  let Navigate = useNavigate();
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    state: "",
    zipCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  const handleBillingDetailsChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required address fields are filled
    const isAddressComplete =
      billingDetails.firstName &&
      billingDetails.lastName &&
      billingDetails.country &&
      billingDetails.streetAddress &&
      billingDetails.state &&
      billingDetails.zipCode;

    // Check if a payment method is selected
    const isPaymentMethodSelected = paymentMethod !== "";

    // If both conditions are met, show success alert
    if (isAddressComplete && isPaymentMethodSelected) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Order Place Successfully ",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        Navigate("/");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the required details!",
      });
    }
  };

  return (
    <div>
      <Header />
      <h1 style={{ paddingLeft: "27%" }}>BILLING DETAILS</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={billingDetails.firstName}
              onChange={handleBillingDetailsChange}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={billingDetails.lastName}
              onChange={handleBillingDetailsChange}
            />
          </label>
        </div>
        <div>
          <label>
            Company Name (optional):
            <input
              type="text"
              name="companyName"
              value={billingDetails.companyName}
              onChange={handleBillingDetailsChange}
            />
          </label>
        </div>
        <div>
          <label>
            Country / Region:
            <input
              type="text"
              name="country"
              value={billingDetails.country}
              onChange={handleBillingDetailsChange}
            />
          </label>
        </div>
        <div>
          <label>
            Street Address:
            <input
              type="text"
              name="streetAddress"
              value={billingDetails.streetAddress}
              onChange={handleBillingDetailsChange}
            />
          </label>
        </div>
        <div>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={billingDetails.state}
              onChange={handleBillingDetailsChange}
            />
          </label>
        </div>
        <div>
          <label>
            ZIP Code:
            <input
              type="text"
              name="zipCode"
              value={billingDetails.zipCode}
              onChange={handleBillingDetailsChange}
            />
          </label>
        </div>
        <div>
          <h2 id="pay">PAYMENT</h2>
          <label className="label-payment">
            Card Payment
            <input
              className="input-payment"
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === "card"}
              onChange={handlePaymentMethodChange}
            />
          </label>
          <label className="label-payment">
            COD (Cash on Delivery)
            <input
              className="input-payment"
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={handlePaymentMethodChange}
            />
          </label>
          <label className="label-payment">
            UPI / Netbanking
            <input
              className="input-payment"
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={handlePaymentMethodChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
