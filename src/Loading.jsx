import React from "react";
import { TbLoader3 } from "react-icons/Tb";

function Loading() {
  return (
    <div className="flex justify-center items-center">
      <TbLoader3 className="animate-spin text-6xl text-primary-default" />
    </div>
  );
}

export default Loading;
