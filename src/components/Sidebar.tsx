import React from "react";
import SidebarList from "./SidebarList";

interface Props {
  folder: string[];
  setFolder: React.Dispatch<React.SetStateAction<string[]>>;
  file: string[];
  setFile: React.Dispatch<React.SetStateAction<string[]>>;
}

const Sidebar = ({ folder = [], file = [], setFolder, setFile }: Props) => {
  return (
    <aside
      className={`fixed top-0 left-0 flex flex-col items-center w-[30%] h-screen ${
        folder.length !== 0 ? "overflow-y-scroll" : null
      }`}
    >
      <div className="w-[75.2%] h-fit mt-[62px] ">
        <h2 className="w-fit h-fit text-[#242424] text-[34.13px] font-bold leading-normal">
          Notes
        </h2>
        {folder.length === 0 ? null : (
          <SidebarList
            folder={folder}
            setFolder={setFolder}
            file={file}
            setFile={setFile}
          />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
