import React from "react";
import SidebarList from "./SidebarList";

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

const Sidebar = ({ notes, setNotes }: Props) => {
  return (
    <aside
      className={`fixed top-0 left-0 flex flex-col items-center w-[30%] h-screen ${
        notes.length !== 0 ? "overflow-y-scroll" : null
      }`}
    >
      <div className="w-[75.2%] h-fit mt-[62px] ">
        <h2 className="w-fit h-fit text-[#242424] text-[34.13px] font-bold leading-normal">
          Notes
        </h2>
        {notes.length === 0 ? null : (
          <SidebarList notes={notes} setNotes={setNotes} />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
