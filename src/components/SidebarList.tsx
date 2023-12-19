import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { FaTrash } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

// kurang event titleFile dan dropdownnya

interface Props {
  folder: string[];
  setFolder: React.Dispatch<React.SetStateAction<string[]>>;
  setTitleFile: React.Dispatch<React.SetStateAction<string[]>>;
}

const SidebarList = ({ folder = [], setFolder, setTitleFile }: Props) => {
  const [folderTemp, setFolderTemp] = useState<string>(""); // Menyimpan inputan user
  const [titleFileTemp, setTitleFileTemp] = useState<string>(""); // Menyimpan inputan user
  const [isFolderTemp, setIsFolderTemp] = useState<boolean>(false);
  const [isFolderList, setisFolderList] = useState<boolean>(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setFolder((prev) => [...prev, folderTemp]);
      setFolderTemp("");
      setIsFolderTemp(false);
    }
  };

  const handleTitleFile = (index: number) => {
    folder.filter((item, idx) => {
      return idx === index ? setTitleFileTemp(item) : null;
    });
  };

  return (
    <>
      <div className="flex flex-col mt-[14px] ">
        <div className="flex flex-row justify-between items-center">
          <h6 className="text-[17.067px] text-[#242424] font-medium leading-normal tracking-wider opacity-50">
            Folders
          </h6>
          <div className="flex w-fit h-fit gap-[10px]">
            <CiCirclePlus
              onClick={() => setIsFolderTemp(true)}
              className="w-[25px] h-[25px]"
            />
            <IoIosArrowUp
              onClick={() => setisFolderList((prev) => !prev)}
              className="w-[25px] h-[25px]"
            />
          </div>
        </div>
        {isFolderList ? (
          <div className="flex flex-col gap-[5px] mt-4">
            {folder.map((item, index) => (
              <div className="flex flex-row justify-between items-center">
                <p
                  onClick={() => handleTitleFile(index)}
                  key={index}
                  className="p-[10px] hover:bg-[#F8F8F8] hover:rounded-[8px] text-[19.2px] text-[#242424] font-normal hover:font-medium leading-normal tracking-wide"
                >
                  {item}
                </p>
                <FaTrash className="w-[14px] h-[18px] opacity-50 mr-[10px]" />
              </div>
            ))}
          </div>
        ) : null}
      </div>
      {isFolderTemp ? (
        <div className="flex flex-col mt-[32px] ">
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[17.067px] text-[#242424] font-medium leading-normal tracking-wider opacity-50">
              Create Folder
            </h6>
            <IoIosCloseCircleOutline
              onClick={() => setIsFolderTemp((prev) => !prev)}
              className="w-[25px] h-[25px]"
            />
          </div>
          <input
            type="text"
            placeholder="Input folder name"
            className="p-[10px] border-solid border-[1px] border-[#BEBEBE] rounded-[8px] mt-[5px] "
            value={folderTemp}
            onKeyDown={handleKeyDown}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFolderTemp(e.target.value)
            }
          />
        </div>
      ) : null}
      <div className="flex flex-col mt-[32px] ">
        <div className="flex flex-row justify-between items-center">
          <h6 className="text-[17.067px] text-[#242424] font-medium leading-normal tracking-wider opacity-50">
            {titleFileTemp}
          </h6>
          <IoIosArrowUp className="w-[25px] h-[25px]" />
        </div>
        {/* {isCreateFile ? null : ( */}
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
        {/* )} */}
      </div>
    </>
  );
};

export default SidebarList;
