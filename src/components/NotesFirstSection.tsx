import React from "react";
import { useState } from "react";

interface IProps {
  setFolder: React.Dispatch<React.SetStateAction<string[]>>;
}

const NotesFirstSection = ({ setFolder }: IProps) => {
  const [folderTemp, setFolderTemp] = useState<string>(""); // Menyimpan inputan user

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Menangani ketika tombol "Enter" ditekan
    if (e.key === "Enter") {
      if (folderTemp === "") {
        return alert("Folder name cannot be empty");
      }
      setFolder((prev) => [...prev, folderTemp]);
      console.log(folderTemp);
      setFolderTemp("");
    }
  };

  return (
    <section className="z-[9999999] flex flex-col justify-center items-center w-full h-screen">
      <label
        htmlFor="firstFolder"
        className="text-[#242424] text-[76.8px] font-normal leading-normal"
      >
        Welcome to <span className="font-bold">Notes</span>
      </label>
      <input
        type="text"
        id="firstFolder"
        value={folderTemp}
        placeholder="+  Create your first folder here"
        className="w-[59.375%] h-fit mt-[28px] p-[10px] border-solid border-[1px] border-[#BEBEBE] rounded-[8px] "
        onKeyDown={handleKeyDown}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFolderTemp(e.target.value)
        }
      />
    </section>
  );
};

export default NotesFirstSection;
