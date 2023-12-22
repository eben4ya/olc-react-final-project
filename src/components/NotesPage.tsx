import React from "react";
import { useState } from "react";
import NotesFirstSection from "./NotesFirstSection";
import NotesAfterSection from "./NotesAfterSection";
import NotesSubmit from "./NotesSubmit";

interface INotes {
  title: string;
  desc: string;
  content: string;
}

interface IProps {
  folder: string[];
  setFolder: React.Dispatch<React.SetStateAction<string[]>>;
  isForm: boolean;
  titleFolderForm: string;
  titleFileForm: string;
  folderIndexMain: number;
  fileIndexMain: number;
  isNotes: boolean;
  setIsNotes: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotesPage = ({
  folder,
  setFolder,
  isForm,
  titleFolderForm,
  titleFileForm,
  folderIndexMain,
  fileIndexMain,
  isNotes,
  setIsNotes,
}: IProps) => {
  const [notes, setNotes] = useState<INotes[][]>([[]]);

  return (
    <>
      {folder.length === 0 ? (
        <NotesFirstSection setFolder={setFolder} />
      ) : isForm && !isNotes ? (
        <NotesAfterSection
          titleFolderForm={titleFolderForm}
          titleFileForm={titleFileForm}
          setNotes={setNotes}
          setIsNotes={setIsNotes}
          folderIndexMain={folderIndexMain}
        />
      ) : isForm && isNotes ? (
        <NotesSubmit
          titleFolderForm={titleFolderForm}
          titleFileForm={titleFileForm}
          notes={notes}
          folderIndexMain={folderIndexMain}
          fileIndexMain={fileIndexMain}
        />
      ) : null}
    </>
  );
};

export default NotesPage;
