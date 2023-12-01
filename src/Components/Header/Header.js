import React, { useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { GiVibratingSmartphone } from "react-icons/gi";

import { FaShoppingCart } from "react-icons/fa";
import Modal from "../Modal/Modal.js";
import { useSelector } from "react-redux";
export const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <header className="Header">
        <div className="phone-div">
          <GiVibratingSmartphone className="logo" />
          <p className="phone-name">SmartPhons</p>
        </div>
        <nav className="Nav">
          <Link to="/"> Home</Link>
          <Link to="/"> about</Link>

          <div
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              paddingTop: "8px",
            }}
          >
            <span>{cartItems.items.length}</span>
            <FaShoppingCart
              style={{ cursor: "pointer" }}
              onClick={handleCartClick}
            />
          </div>
          <button>Sign Up</button>
        </nav>
      </header>
      <Modal isOpen={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
};
