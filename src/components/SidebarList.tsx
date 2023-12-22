import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { FaTrash } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaPen } from "react-icons/fa";

// bagaimana caranya supaya saat kita klik folder, maka file yang ditampilkan hanya file dari folder tersebut?
// diakali di sidebarlist, ada fungsi handleFolder, yang berfungsi untuk menyimpan nama folder yang diklik
// mungkin dengan membuat state fileTemp menjadi array of array of string, dan diakses dengan fileTemp[indexFolder]
// diakali di sidebarlist, ada state clickFolder, yang berfungsi untuk menampilkan file dari folder yang diklik

// update : baru nambahin state allFileTemp dan console.log di fungsi handleKeyDownFile (ada bug index ke 0 tidak terbaca)

// update 2 : bikin state allFileTemp buat menyimpan semua nama file dari semua folder dan setAllFileTemp yang akan mengubah / memperbarui nilai array of arary of string, tapi waktu perulangan index di atas 0, bakal muncul error "updatedFile[index] is not iterable"

interface IProps {
  folder: string[];
  setFolder: React.Dispatch<React.SetStateAction<string[]>>;
  file: string[][];
  setFile: React.Dispatch<React.SetStateAction<string[][]>>;
  setIsForm: React.Dispatch<React.SetStateAction<boolean>>;
  setTitleFolderForm: React.Dispatch<React.SetStateAction<string>>;
  setTitleFileForm: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarList = ({
  folder = [],
  file = [[]],
  setFolder,
  setFile,
  setIsForm,
  setTitleFolderForm,
  setTitleFileForm,
}: IProps) => {
  const [folderTemp, setFolderTemp] = useState<string>(""); // Menyimpan nama folder
  const [isFolderTemp, setIsFolderTemp] = useState<boolean>(false); // membuka/ menutup create folder
  const [isFolderTempList, setIsFolderTempList] = useState<boolean>(true); // membuka/ menutup dropdown folder
  const [clickFolder, setClickFolder] = useState<boolean>(true); // membuka/ menutup keseluruhan file dari folder (klik 2x untuk menutup)
  const [folderIndex, setFolderIndex] = useState<number>(0); // Menyimpan index dari folder yang diklik
  const [titleFolderTemp, setTitleFolderTemp] = useState<string>(""); // Digunakan agar saat create folder, header file (judul) tidak berubah / mengikuti nama folder yang akan dicreate
  const [editFolder, setEditFolder] = useState<boolean>(false); // ketika set edit true maka akan mengubah nama folder yang diklik
  const [clickedFileTemp, setClickedFileTemp] = useState<string[]>([]); // Menyimpan nama File dari folder yang diklik
  const [fileTemp, setFileTemp] = useState<string>(""); // Menyimpan nama File dari folder
  const [isFileTemp, setIsFileTemp] = useState<boolean>(false); // membuka/ menutup create File
  const [isFileTempList, setIsFileTempList] = useState<boolean>(true); // membuka/ menutup dropdown File
  const [editFile, setEditFile] = useState<boolean>(false); // ketika set edit true maka akan mengubah nama file yang diklik
  const [fileIndex, setFileIndex] = useState<number>(0); // Menyimpan index dari file yang diklik

  const handleKeyDownFolder = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "Enter") {
      if (folderTemp === "") {
        return alert("Folder name cannot be empty");
      }
      setFolder((prev) => [...prev, folderTemp]);
      setFolderTemp("");
      setIsFolderTemp(false);
    }
  };

  const handleEditFolder = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      if (folderTemp === "") {
        return alert("Folder name cannot be empty");
      }
      setFolder((prev) => {
        const updatedFolder = [...prev];
        updatedFolder[index] = folderTemp;
        setTitleFolderTemp(folderTemp);
        setFolderTemp("");
        setIsFolderTemp(false);
        setEditFolder(false);

        return updatedFolder;
      });
    }
  };

  const handleDeleteFolder = (index: number) => {
    const confirm = window.confirm("Are you sure want to delete this folder?");
    if (confirm) {
      setFolder((prev) => {
        let updatedFolder = [...prev]; // harus let karena arraynya akan diubah
        // const updatedFolder = [...prev]; // kalau pake splice, pake const
        // updatedFolder.splice(index, 1); // Menghapus 1 elemen pada index yang diberikan
        updatedFolder = updatedFolder.filter((item, idx) => idx !== index);

        return updatedFolder;
      });
    }
  };

  const handleKeyDownFile = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      if (fileTemp === "") {
        return alert("File name cannot be empty");
      }
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

  const handleEditFile = (
    e: React.KeyboardEvent<HTMLInputElement>,
    FolderIndex: number,
    FileIndex: number
  ) => {
    if (e.key === "Enter") {
      if (fileTemp === "") {
        return alert("File name cannot be empty");
      }
      setFile((prevFile) => {
        const updatedFile = [...prevFile];
        updatedFile[FolderIndex][FileIndex] = fileTemp;
        setFileTemp("");
        setIsFileTemp(false);
        setEditFile(false);

        return updatedFile;
      });
    }
  };

  const handleDeleteFile = (FolderIndex: number, FileIndex: number) => {
    const confirm = window.confirm("Are you sure want to delete this file?");
    if (confirm) {
      setFile((prevFile) => {
        // -> yang ini perlu direfresh / dipencet folder yang lain dulu baru bisa kehapus
        // const updatedFile = [...prevFile];
        // updatedFile[FolderIndex] = updatedFile[FolderIndex].filter(
        //   (item, index) => index !== FileIndex
        // );
        // return updatedFile;
        const updatedFile = [...prevFile];
        updatedFile[FolderIndex] = updatedFile[FolderIndex].filter(
          (item, index) => index !== FileIndex
        );
        setClickedFileTemp(updatedFile[FolderIndex]); // ini memperbarui state clickedFileTemp
        return updatedFile;
      });
    }
  };

  const handleFolder = (index: number): void => {
    folder.map((item, idx) => {
      if (idx === index) {
        setTitleFolderTemp(item);
        setFolderIndex(index);
        setClickedFileTemp(file[index]);
        setTitleFolderForm(item); // ini memperbarui state titleFolderForm dengan nilai folder yang diklik untuk path notes folder / file
        setIsForm(false); // ketika folder diklik, maka form notes akan ditutup
      }
    });
  };

  return (
    <>
      <div className="flex flex-col mt-[14px] ">
        {/* Title Folder */}
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
        {/* List Folder */}
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
                <div className="flex w-fit h-fit gap-[16px]">
                  <FaPen
                    className="w-[15px] h-[15px]"
                    onClick={() => {
                      setIsFolderTemp(true);
                      setEditFolder(true);
                      setFolderTemp(item);
                      setFolderIndex(index);
                    }}
                  />
                  <FaTrash
                    className="w-[14px] h-[18px] opacity-50 mr-[10px]"
                    onClick={() => {
                      setTitleFolderTemp(""); // ini memperbarui state titleFolderTemp dengan nilai folder[0]
                      setFolderIndex(index);
                      handleDeleteFolder(index);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      {/* Create / Edit Folder */}
      {isFolderTemp ? (
        <div className="flex flex-col mt-[32px] ">
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[17.067px] text-[#242424] font-medium leading-normal tracking-wider opacity-50">
              {editFolder ? "Edit Folder" : "Create Folder"}
            </h6>
            <IoIosCloseCircleOutline
              onClick={() => {
                setIsFolderTemp((prev) => !prev);
                setFolderTemp("");
                setEditFolder(false);
              }}
              className="w-[25px] h-[25px]"
            />
          </div>
          <input
            type="text"
            placeholder="Input folder name"
            className="p-[10px] border-solid border-[1px] border-[#BEBEBE] rounded-[8px] mt-[5px] "
            value={folderTemp}
            onKeyDown={
              editFolder
                ? (e) => handleEditFolder(e, folderIndex)
                : handleKeyDownFolder
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFolderTemp(e.target.value)
            }
          />
        </div>
      ) : null}
      {/* Title Folder for file */}
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
          {/* List File */}
          {isFileTempList ? (
            <div className="flex flex-col gap-[5px] mt-4">
              {clickedFileTemp?.map((item, index) => (
                <div
                  onClick={() => {
                    setTitleFileForm(item);
                    setIsForm(true);
                  }}
                  key={index}
                  className="flex justify-between items-center hover:bg-[#F8F8F8] hover:rounded-[8px] p-[10px]"
                >
                  <p className="text-[19.2px] text-[#242424] font-normal leading-normal tracking-wide">
                    {item}
                  </p>
                  <div className="flex w-fit h-fit gap-[16px]">
                    <FaPen
                      className="w-[15px] h-[15px]"
                      onClick={() => {
                        setIsFileTemp(true);
                        setEditFile(true);
                        setFileTemp(item);
                        setFileIndex(index);
                      }}
                    />
                    <FaTrash
                      className="w-[14px] h-[18px] opacity-50 "
                      onClick={() => {
                        setFileIndex(index);
                        handleDeleteFile(folderIndex, index);
                      }}
                    />
                  </div>
                </div>
              ))}
              {/* Create / Edit File */}
              {isFileTemp ? (
                <div className="flex flex-col my-[32px] ">
                  <div className="flex flex-row justify-between items-center">
                    <h6 className="text-[17.067px] text-[#242424] font-medium leading-normal tracking-wider opacity-50">
                      {editFile ? "Edit File" : "Create File"}
                    </h6>
                    <IoIosCloseCircleOutline
                      onClick={() => {
                        setIsFileTemp((prev) => !prev);
                        setFileTemp("");
                        setEditFile(false);
                      }}
                      className="w-[25px] h-[25px]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Input file name"
                    className="p-[10px] border-solid border-[1px] border-[#BEBEBE] rounded-[8px] mt-[5px] "
                    value={fileTemp}
                    onKeyDown={
                      editFile
                        ? (e) => handleEditFile(e, folderIndex, fileIndex)
                        : (e) => handleKeyDownFile(e, folderIndex)
                    }
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
