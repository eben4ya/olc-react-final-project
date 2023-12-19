import React from "react";
import NotesFirstSection from "./NotesFirstSection";
import NotesAfterSection from "./NotesAfterSection";

interface Props {
  folder: string[];
  setFolder: React.Dispatch<React.SetStateAction<string[]>>;
}

const NotesPage = ({ folder, setFolder }: Props) => {
  return (
    <>
      {folder.length === 0 ? (
        <NotesFirstSection setFolder={setFolder} />
      ) : (
        <NotesAfterSection />
      )}
    </>
  );
};

export default NotesPage;
