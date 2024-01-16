import React from 'react';

const BlueButton = ({ content, className }) => {
  return (
     <button
     type="button"
     className={`w-[195px] h-[60px] flex items-center justify-center bg-gradient-to-b from-[#3AADFF] to-[#0094FF] rounded-[5px] shadow-[#CADFFF] shadow-inner text-center text-white text-lg font-medium font-inter hover:opacity-90 ${className}`}
   >
     {content}
   </button>
   
  );
};

export default BlueButton;
