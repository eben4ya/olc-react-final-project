import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import NotesPage from "./components/NotesPage";

const App = () => {
  const [folder, setFolder] = useState<string[]>([]);
  const [file, setFile] = useState<string[]>([]);

  // Fungsi untuk menyimpan state ke localStorage
  // const saveToLocalStorage = (value: string[]) => {
  //   localStorage.setItem("folder", JSON.stringify(value)); // Simpan ke localStorage sebagai string
  // };

  // Fungsi untuk mendapatkan state dari localStorage saat komponen dimuat
  // const loadFromLocalStorage = () => {
  //   const storedFolder = localStorage.getItem("folder");
  //   if (storedFolder) {
  //     setFolder(JSON.parse(storedFolder)); // Parse kembali string menjadi nilai asli
  //   }
  // };

  // Dipanggil saat komponen dimuat untuk memuat data dari localStorage (jika ada)
  // useEffect(() => {
  //   loadFromLocalStorage();
  // }, []); // [] menandakan useEffect hanya dipanggil sekali saat komponen dimuat

  // Dipanggil setiap kali nilai state 'data' berubah untuk menyimpan ke localStorage
  // useEffect(() => {
  //   saveToLocalStorage(folder);
  // }, [folder]); // Efek ini hanya dipanggil ketika 'data' berubah

  return (
    <main className="lg:min-h-screen min-h-[100vmax] w-screen flex flex-row items-center justify-center bg-white">
      <Sidebar
        folder={folder}
        setFolder={setFolder}
        file={file}
        setFile={setFile}
      />
      <NotesPage folder={folder} setFolder={setFolder} />
    </main>
  );
};

export default App;
