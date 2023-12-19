import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import NotesPage from "./components/NotesPage";

const App: React.FC = () => {
  const [folder, setfolder] = useState<string[]>([]);
  return (
    <main className="lg:min-h-screen min-h-[100vmax] w-screen flex flex-row items-center justify-center bg-white">
      <Sidebar folder={folder} />
      <NotesPage folder={folder} />
    </main>
  );
};

export default App;
