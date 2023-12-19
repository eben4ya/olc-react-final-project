import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { FaTrash } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

// kurang event titleFile dan dropdownnya

type File = {
  fileName: string | "";
  title: string | "";
  desc: string | "";
  content: string | "";
};

type Notes = {
  folder: string | "";
  file: File[];
};

interface Props {
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const SidebarList = ({ notes, setNotes }: Props) => {
  const [folderTemp, setFolderTemp] = useState<string>(""); // Menyimpan nama folder
  const [isFolderTemp, setIsFolderTemp] = useState<boolean>(false); // membuka/ menutup create folder
  const [isFolderTempList, setIsFolderTempList] = useState<boolean>(true); // membuka/ menutup dropdown folder
  const [clickFolder, setClickFolder] = useState<boolean>(true); // membuka/ menutup keseluruhan file dari folder
  const [titleFolderTemp, setTitleFolderTemp] = useState<string>(""); // Menyimpan nama titleFile / folder
  const [fileTemp, setFileTemp] = useState<string>(""); // Menyimpan nama File dari folder
  const [isFileTemp, setIsFileTemp] = useState<boolean>(false); // membuka/ menutup create File
  const [isFileTempList, setIsFileTempList] = useState<boolean>(true); // membuka/ menutup dropdown File

  const handleKeyDownFolder = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setNotes([...notes, { folder: folderTemp, file: [] }]);
      setFolderTemp("");
      setIsFolderTemp(false);
    }
  };

  const handleKeyDownFile = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      notes.filter((item) => {
        if (item.folder === folderTemp) {
          item.file.push({
            fileName: fileTemp,
            title: "",
            desc: "",
            content: "",
          });
        }
      });
      setFileTemp("");
      setIsFileTemp(false);
    }
  };

  const handleFolder = (index: number) => {
    notes.filter((item, idx) => {
      return idx === index ? setTitleFolderTemp(item.folder) : null;
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
              onClick={() => setIsFolderTempList((prev) => !prev)}
              className={`${
                isFolderTempList ? "rotate-180" : "rotate-0"
              } transform transition-all ease-in-out duration-100 w-[25px] h-[25px]`}
            />
          </div>
        </div>
        {isFolderTempList ? (
          <div className="flex flex-col gap-[5px] mt-4">
            {notes.map((item, index) => (
              <div
                onClick={() => {
                  handleFolder(index);
                  setClickFolder(true);
                }}
                onDoubleClick={() => setClickFolder(false)}
                className="flex flex-row justify-between items-center hover:bg-[#F8F8F8] hover:rounded-[8px] hover:font-medium"
              >
                <p
                  key={index}
                  className="p-[10px] text-[19.2px] text-[#242424] font-normal leading-normal tracking-wide"
                >
                  {item.folder}
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
            onKeyDown={handleKeyDownFolder}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFolderTemp(e.target.value)
            }
          />
        </div>
      ) : null}
      {clickFolder ? (
        <div className="flex flex-col mt-[32px] ">
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[17.067px] text-[#242424] font-medium leading-normal tracking-wider opacity-50">
              {titleFolderTemp === "" ? notes[0].folder : titleFolderTemp}
            </h6>
            <div className="flex w-fit h-fit gap-[10px]">
              <CiCirclePlus
                onClick={() => setIsFileTemp(true)}
                className="w-[25px] h-[25px]"
              />
              <IoIosArrowUp
                onClick={() => setIsFileTempList((prev) => !prev)}
                className={`${
                  isFileTempList ? "rotate-180" : "rotate-0"
                } transform transition-all ease-in-out duration-100 w-[25px] h-[25px]`}
              />
            </div>
          </div>
          {isFileTempList ? (
            <div className="flex flex-col gap-[5px] mt-4">
              {notes.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center hover:bg-[#F8F8F8] hover:rounded-[8px] p-[10px]"
                >
                  <p className="text-[19.2px] text-[#242424] font-normal leading-normal tracking-wide">
                    {item.file[index].fileName}
                  </p>
                  <FaTrash className="w-[14px] h-[18px] opacity-50" />
                </div>
              ))}
              {isFileTemp ? (
                <div className="flex flex-col my-[32px] ">
                  <div className="flex flex-row justify-between items-center">
                    <h6 className="text-[17.067px] text-[#242424] font-medium leading-normal tracking-wider opacity-50">
                      Create File
                    </h6>
                    <IoIosCloseCircleOutline
                      onClick={() => setIsFileTemp((prev) => !prev)}
                      className="w-[25px] h-[25px]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Input file name"
                    className="p-[10px] border-solid border-[1px] border-[#BEBEBE] rounded-[8px] mt-[5px] "
                    value={fileTemp}
                    onKeyDown={handleKeyDownFile}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFileTemp(e.target.value)
                    }
                  />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default SidebarList;
