"use client";

import { ToastContainer as ToastContainerComponent } from "react-toastify";

import "./ToastContainer.scss";

const ToastContainer = () => {
  return (
    <ToastContainerComponent
      position="top-center"
      autoClose={5000}
      closeButton={false}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
    />
  );
};

export default ToastContainer;
