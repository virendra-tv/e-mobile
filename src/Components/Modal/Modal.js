import React, { useState } from "react";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../../Redux/Actions/Actions.js";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ModalMUI from "@mui/material/Modal";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log("cartItems", cartItems);
  // State to manage the quantity being edited
  const [editedQuantity, setEditedQuantity] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedItemId, setEditedItemId] = useState(null);

  const handleDelete = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleEdit = (itemId, initialQuantity) => {
    setEditedItemId(itemId);
    setEditedQuantity(initialQuantity);
    setIsEditing(true);
  };

  const handleUpdateQuantity = (itemid, editedQuantity) => {
    console.log("editedQuantity", editedQuantity);
    dispatch(updateQuantity(itemid, editedQuantity));
    setIsEditing(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "auto",
    maxHeight: "500px",
  };

  return (
    <ModalMUI
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div>
          <h2>Your Cart</h2>
          {cartItems.items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.items.map((item, index) => (
              <div className="main1" key={index}>
                <div className="button-container">
                  <h1 className="main-h1">{item?.title}</h1>
                  <MdDelete
                    className="delete-button "
                    onClick={() => handleDelete(item.id)}
                  />
                </div>

                <img
                  src={item?.thumbnail}
                  alt={item?.title}
                  className="main-img"
                />
                <p className="main-p">{item?.description}</p>
                <p className="main-p2">Category: {item?.category}</p>
                <p className="main-p3">
                  Price: ${item?.price * item?.quantity}
                </p>

                {isEditing && editedItemId === item.id ? (
                  <div className="edit-quantity">
                    <input
                      type="number"
                      value={editedQuantity}
                      onChange={(e) =>
                        setEditedQuantity(parseInt(e.target.value, 10))
                      }
                      style={{ WebkitAppearance: "none" }}
                    />
                    <button
                      onClick={() => setEditedQuantity(editedQuantity + 1)}
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        setEditedQuantity(
                          editedQuantity > 1 ? editedQuantity - 1 : 1
                        )
                      }
                    >
                      -
                    </button>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, editedQuantity)
                      }
                    >
                      Update
                    </button>
                  </div>
                ) : (
                  <p className="main-p4">
                    Quantity: {item?.quantity}{" "}
                    <FaRegEdit
                      className="edit-icon"
                      onClick={() => handleEdit(item.id, item.quantity)}
                    />
                  </p>
                )}
              </div>
            ))
          )}
        </div>
        {cartItems.items.length && (
          <Link to="/Buynow">
            <button className="modal-button">Buy Now</button>
          </Link>
        )}
      </Box>
    </ModalMUI>
  );
};

export default Modal;
