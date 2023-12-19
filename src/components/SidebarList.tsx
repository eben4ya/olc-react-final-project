import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { FaTrash } from "react-icons/fa6";

const SidebarList = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col mt-[14px] ">
        <div className="flex flex-row justify-between items-center">
          <h6 className="text-[17.067px] text-[#242424] font-medium leading-normal tracking-wider opacity-50">
            Folders
          </h6>
          <div className="flex w-fit h-fit gap-[10px]">
            <CiCirclePlus className="w-[25px] h-[25px]" />
            <IoIosArrowUp className="w-[25px] h-[25px]" />
          </div>
        </div>
        <div className="flex flex-col gap-[5px] mt-4">
          <p className="p-[10px] hover:bg-[#F8F8F8] hover:rounded-[8px] text-[19.2px] text-[#242424] font-normal hover:font-medium leading-normal tracking-wide">
            College
          </p>
          <p className="p-[10px] hover:bg-[#F8F8F8] hover:rounded-[8px] text-[19.2px] text-[#242424] font-normal hover:font-medium leading-normal tracking-wide">
            Work
          </p>
          <p className="p-[10px] hover:bg-[#F8F8F8] hover:rounded-[8px] text-[19.2px] text-[#242424] font-normal hover:font-medium leading-normal tracking-wide">
            Home
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-[32px] ">
        <div className="flex flex-row justify-between items-center">
          <h6 className="text-[17.067px] text-[#242424] font-medium leading-normal tracking-wider opacity-50">
            College
          </h6>
          <IoIosArrowUp className="w-[25px] h-[25px]" />
        </div>
        <div className="flex flex-col gap-[5px] mt-4">
          <div className="flex justify-between items-center hover:bg-[#F8F8F8] hover:rounded-[8px] p-[10px]">
            <p className="text-[19.2px] text-[#242424] font-normal leading-normal tracking-wide">
              Calculus
            </p>
            <FaTrash className="w-[14px] h-[18px] opacity-50" />
          </div>
          <div className="flex justify-between items-center hover:bg-[#F8F8F8] hover:rounded-[8px] p-[10px]">
            <p className="text-[19.2px] text-[#242424] font-normal leading-normal tracking-wide">
              Physics
            </p>
            <FaTrash className="w-[14px] h-[18px] opacity-50" />
          </div>
          <div className="flex justify-between items-center hover:bg-[#F8F8F8] hover:rounded-[8px] p-[10px]">
            <p className="text-[19.2px] text-[#242424] font-normal leading-normal tracking-wide">
              Math
            </p>
            <FaTrash className="w-[14px] h-[18px] opacity-50" />
          </div>
          <div className="flex justify-between items-center hover:bg-[#F8F8F8] hover:rounded-[8px] p-[10px]">
            <p className="text-[19.2px] text-[#242424] font-normal leading-normal tracking-wide">
              Chem
            </p>
            <FaTrash className="w-[14px] h-[18px] opacity-50" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarList;
