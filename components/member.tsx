import Image from "next/image";
import React from "react";

interface Props {
  id: string;
  name: string;
  designation: string;
}

const Member: React.FC<Props> = ({ id, name, designation }) => {
  return (
    <div>
      <div className="bg bg-black rounded-full h-32 w-32 m-auto" />
      {/* <Image /> */}
      <div className="text-xl xl:text-2xl pt-4">{name}</div>
      <div className="text-lg pt-1 text-gray-400">{designation}</div>
    </div>
  );
};

export default Member;
