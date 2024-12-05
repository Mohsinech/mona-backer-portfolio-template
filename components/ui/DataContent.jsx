import React from "react";

const DataContent = ({ label, desc }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-nohemi text-xl tracking-wide text-white">{label}</h1>
      <p className="text-md font-montreal tracking-wide text-gray-300">
        {desc}
      </p>
    </div>
  );
};

export default DataContent;
