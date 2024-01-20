"use client";
import { useState } from "react";
import BlueButton from "./BlueButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsletterSubscribeForm = ({ className }) => {
  const [inputVal, setInputVal] = useState("");

  const notify = () =>
    toast.success(<>"Successfully Subscribed To our Newsletter." <br /> Thank you</>, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      className:"text-lg break-all"
     //  transition: Bounce,
    });

  const warn = () =>
    toast.error("Please Fill in NewsLetter before Submitting", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      className:"text-lg break-all"
     //  transition: Bounce,
    });
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputVal(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputVal.length > 5){
     setInputVal("");
    notify();
    console.log("Successfully Subscribed To our Newsletter. Thank You");
    }else {
     warn()
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex gap-2 items-center ${className}`}
    >
      <input
        type="email"
        value={inputVal}
        onChange={handleInputChange}
        className="w-4/5 h-full p-4 rounded-md bg-transparent border border-gray-300 text-sm font-inter"
        placeholder="Email address"
      />
      <BlueButton
        content="Subscribe"
        className="h-full w-30%"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      />
      <ToastContainer />
    </form>
  );
};

export default NewsletterSubscribeForm;
