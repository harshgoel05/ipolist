import React from "react";

export default function loading() {
  return (
    <div className="bg-[#202020] min-h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
      </div>
    </div>
  );
}