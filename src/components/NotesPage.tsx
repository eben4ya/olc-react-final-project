import React from "react";
import NotesFirstSection from "./NotesFirstSection";
import NotesAfterSection from "./NotesAfterSection";

interface IProps {
  folder: string[];
  setFolder: React.Dispatch<React.SetStateAction<string[]>>;
  isForm: boolean;
  titleFolderForm: string;
  titleFileForm: string;
}

const NotesPage = ({
  folder,
  setFolder,
  isForm,
  titleFolderForm,
  titleFileForm,
}: IProps) => {
  return (
    <>
      {folder.length === 0 ? (
        <NotesFirstSection setFolder={setFolder} />
      ) : isForm ? (
        <NotesAfterSection
          titleFolderForm={titleFolderForm}
          titleFileForm={titleFileForm}
        />
      ) : null}
    </>
  );
};

export default NotesPage;
