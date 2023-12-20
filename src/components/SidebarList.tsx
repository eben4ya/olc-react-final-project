import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { FaTrash } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

// bagaimana caranya supaya saat kita klik folder, maka file yang ditampilkan hanya file dari folder tersebut?
// diakali di sidebarlist, ada fungsi handleFolder, yang berfungsi untuk menyimpan nama folder yang diklik
// mungkin dengan membuat state fileTemp menjadi array of array of string, dan diakses dengan fileTemp[indexFolder]
// diakali di sidebarlist, ada state clickFolder, yang berfungsi untuk menampilkan file dari folder yang diklik

// update : baru nambahin state allFileTemp dan console.log di fungsi handleKeyDownFile (ada bug index ke 0 tidak terbaca)

// update 2 : bikin state allFileTemp buat menyimpan semua nama file dari semua folder dan setAllFileTemp yang akan mengubah / memperbarui nilai array of arary of string, tapi waktu perulangan index di atas 0, bakal muncul error "updatedFile[index] is not iterable"

interface Props {
  folder: string[];
  setFolder: React.Dispatch<React.SetStateAction<string[]>>;
  file: string[][];
  setFile: React.Dispatch<React.SetStateAction<string[][]>>;
}

const SidebarList = ({
  folder = [],
  file = [[]],
  setFolder,
  setFile,
}: Props) => {
  const [folderTemp, setFolderTemp] = useState<string>(""); // Menyimpan nama folder
  const [isFolderTemp, setIsFolderTemp] = useState<boolean>(false); // membuka/ menutup create folder
  const [isFolderTempList, setIsFolderTempList] = useState<boolean>(true); // membuka/ menutup dropdown folder
  const [clickFolder, setClickFolder] = useState<boolean>(true); // membuka/ menutup keseluruhan file dari folder (klik 2x untuk menutup)
  const [folderIndex, setFolderIndex] = useState<number>(0); // Menyimpan index dari folder yang diklik
  const [titleFolderTemp, setTitleFolderTemp] = useState<string>(""); // Digunakan agar saat create folder, header file (judul) tidak berubah / mengikuti nama folder yang akan dicreate
  const [clickedFileTemp, setClickedFileTemp] = useState<string[]>([]); // Menyimpan nama File dari folder yang diklik
  const [fileTemp, setFileTemp] = useState<string>(""); // Menyimpan nama File dari folder
  const [isFileTemp, setIsFileTemp] = useState<boolean>(false); // membuka/ menutup create File
  const [isFileTempList, setIsFileTempList] = useState<boolean>(true); // membuka/ menutup dropdown File

  const handleKeyDownFolder = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "Enter") {
      setFolder((prev) => [...prev, folderTemp]);
      setFolderTemp("");
      setIsFolderTemp(false);
    }
  };

  const handleKeyDownFile = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      setFile((prevFile) => {
        // Duplicating the current state array
        const updatedFile = [...prevFile];

        // Updating the array element at the specified index
        // updatedFile[index] = [...updatedFile[index], fileTemp]; // ini yang error

        // updatedFile[index].push(fileTemp); // ini yang error

        if (updatedFile[index]) {
          updatedFile[index] = [...updatedFile[index], fileTemp];
        } else {
          updatedFile[index] = [fileTemp];
        }

        // console.log(file);
        // console.log(updatedFile);
        setClickedFileTemp(updatedFile[index]);
        setFileTemp("");
        setIsFileTemp(false);

        return updatedFile; // Returning the updated array as the new state
      });
    }
  };

  const handleFolder = (index: number): void => {
    folder.map((item, idx) => {
      if (idx === index) {
        setTitleFolderTemp(item);
        setFolderIndex(index);
        setClickedFileTemp(file[index]);
      }
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
            {folder.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  handleFolder(index);
                  setClickFolder(true);
                }}
                onDoubleClick={() => setClickFolder(false)}
                className="flex flex-row justify-between items-center hover:bg-[#F8F8F8] hover:rounded-[8px] hover:font-medium"
              >
                <p className="p-[10px] text-[19.2px] text-[#242424] font-normal leading-normal tracking-wide">
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
              onClick={() => {
                setIsFolderTemp((prev) => !prev);
                setFolderTemp("");
              }}
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
              {titleFolderTemp === "" ? folder[0] : titleFolderTemp}
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
              {clickedFileTemp?.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center hover:bg-[#F8F8F8] hover:rounded-[8px] p-[10px]"
                >
                  <p className="text-[19.2px] text-[#242424] font-normal leading-normal tracking-wide">
                    {item}
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
                      onClick={() => {
                        setIsFileTemp((prev) => !prev);
                        setFileTemp("");
                      }}
                      className="w-[25px] h-[25px]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Input file name"
                    className="p-[10px] border-solid border-[1px] border-[#BEBEBE] rounded-[8px] mt-[5px] "
                    value={fileTemp}
                    onKeyDown={(e) => handleKeyDownFile(e, folderIndex)}
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
