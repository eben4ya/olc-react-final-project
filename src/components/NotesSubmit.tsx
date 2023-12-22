import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

interface INotes {
  title: string;
  desc: string;
  content: string;
}

interface IProps {
  titleFolderForm: string;
  titleFileForm: string;
  notes: INotes[][];
  // isNotes: boolean;
  folderIndexMain: number;
  fileIndexMain: number;
}

const NotesAfterSection = ({
  titleFolderForm,
  titleFileForm,
  notes,
  folderIndexMain,
  fileIndexMain,
}: // isNotes,
IProps) => {
  const selectedNotes: INotes | null =
    notes[folderIndexMain][fileIndexMain] === undefined
      ? null
      : notes[folderIndexMain][fileIndexMain];
  return (
    <section className="absolute top-0 right-0 flex flex-col justify-center items-center w-[70%] h-screen border-l-2">
      {selectedNotes ? (
        <div className="flex flex-col w-[95%] h-full font-normal leading-normal">
          <p className="w-fit h-fit mt-[53px] text-[17.067px]">
            {titleFolderForm} / {titleFileForm}
          </p>
          <h1 className="mt-[29px] text-[42.67px] font-bold tracking-wider">
            {selectedNotes?.title || "Data not Found"}
          </h1>

          <p className="mt-[12px] text-[19.2px] tracking-wide">
            {selectedNotes?.desc || "Data not Found"}
          </p>
          <p className="mt-[32px] text-[19.2px]">
            {selectedNotes?.content || "Data not Found"}
          </p>
          <button
            className="absolute z-10 bottom-[10%] right-[10%] w-[10%] h-fit p-[10px] bg-[#F8F8F8] border-[1px] border-solid border-[#BEBEBE] rounded-[8px] drop-shadow-xl "
            type="submit"
          >
            <div className="flex justify-center items-center gap-[10px] ">
              <FaArrowDownLong className="w-[20px] h-[20px]" />
              <p>Save</p>
            </div>
          </button>
        </div>
      ) : (
        <p className="w-fit h-fit mt-[53px] text-[17.067px]">
          {titleFolderForm} / {titleFileForm}
        </p>
      )}
    </section>
  );
};

export default NotesAfterSection;
