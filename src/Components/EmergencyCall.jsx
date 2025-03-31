import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "./style.css";

const EmergencyCall = () => {
  const makeCall = () => {
    window.location.href = "tel:8282823832";
  };

  return (
    <button
      onClick={makeCall}
      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
    >
      <FaPhoneAlt /> Call Emergency
    </button>
  );
};

const EmergencyAutoCall = ({ trigger }) => {
  useEffect(() => {
    if (trigger) {
      window.location.href = "tel:8282823832";
    }
  }, [trigger]);

  return <p className="text-gray-700 text-sm">Monitoring for emergency...</p>;
};

export { EmergencyCall, EmergencyAutoCall };