import React from "react";
import NotesFirstSection from "./NotesFirstSection";
import NotesAfterSection from "./NotesAfterSection";

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

const NotesPage = ({ notes, setNotes }: Props) => {
  return (
    <>
      {notes[0].folder === "" ? (
        <NotesFirstSection notes={notes} setNotes={setNotes} />
      ) : (
        <NotesAfterSection />
      )}
    </>
  );
};

export default NotesPage;
