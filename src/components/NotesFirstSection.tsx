import React from "react";

interface Props {
  folder: string[];
}

const NotesFirstSection = ({ folder }: Props): JSX.Element => {
  //   const handleKeyDown = (e) => {
  //     // Menangani ketika tombol "Enter" ditekan
  //     if (e.key === "Enter") {
  //       setFolder;
  //     }
  //   };

  return (
    <section className="flex flex-col justify-center items-center w-full h-screen">
      <label
        htmlFor="firstFolder"
        className="text-[#242424] text-[76.8px] font-normal leading-normal"
      >
        Welcome to <span className="font-bold">Notes</span>
      </label>
      <input
        type="text"
        id="firstFolder"
        value={folder}
        placeholder="+  Create your first folder here"
        className="w-[59.375%] h-fit mt-[28px] p-[10px] border-solid border-[1px] border-[#BEBEBE] rounded-[8px] "
        // onKeyDown={handleKeyDown}
      />
    </section>
  );
};

export default NotesFirstSection;
