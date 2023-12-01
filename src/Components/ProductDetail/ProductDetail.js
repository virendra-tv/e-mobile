// ProductDetail.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./productDetail.css";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Actions/Actions.js";
import { Header } from "../Header/Header.js";

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(0);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramId = queryParams.get("id");
  console.log("paramId");
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${paramId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product detail:", error));
  }, []);

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    setPrice(price * (quantity + 1));
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setPrice(price * (quantity - 1));
    }
  };

  useEffect(() => {
    setPrice(product?.price);
  }, [price]);
  const dispatch = useDispatch();

  const handleBuyClick = (product) => {
    if (quantity > 0) {
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  const succesfunc = () => {
    if (quantity > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item added succesfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire("Please Select at least a item!");
    }
  };

  return (
    <div>
      <Header />

      <div className="main1">
        <h1 className="main-h1">{product?.title}</h1>
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="main-img"
        />
        <p className="main-p">{product?.description}</p>
        <p className="main-p2">Category: {product?.category}</p>
        <p className="main-p3">Price: ${product?.price}</p>
        Qty:
        <button onClick={handleDecrease}>-</button>
        <span style={{ padding: "3px" }}>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
        <button
          className="main-button"
          onClick={() => {
            handleBuyClick(product);
            succesfunc();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
