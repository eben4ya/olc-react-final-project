import React from "react";
import SidebarList from "./SidebarList";

interface Props {
  folder: string[];
}

const Sidebar = ({ folder }: Props): JSX.Element => {
  return (
    <aside className="fixed top-0 left-0 flex flex-col items-center w-[30%] h-screen ">
      <div className="w-[75.2%] h-fit mt-[62px] ">
        <h2 className="w-fit h-fit text-[#242424] text-[34.13px] font-bold leading-normal">
          Notes
        </h2>
        {folder.length === 0 ? null : <SidebarList />}
      </div>
    </aside>
  );
};

export default Sidebar;
