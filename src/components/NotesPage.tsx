import React from "react";
import NotesFirstSection from "./NotesFirstSection";
import NotesAfterSection from "./NotesAfterSection";

interface Props {
  folder: string[];
}

const NotesPage = ({ folder }: Props): JSX.Element => {
  return (
    <>
      {folder.length === 0 ? (
        <NotesFirstSection folder={folder} />
      ) : (
        <NotesAfterSection />
      )}
    </>
  );
};

export default NotesPage;
