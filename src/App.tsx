import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import NotesPage from "./components/NotesPage";

// const getFolder = async () => {
//   try {
//     await fetch("https://cashier.rulim34.dev/directories", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${process.env.Api_Key}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Folder " + data);
//       });
//   } catch (err) {
//     console.log(err);
//   }
// };

// const getFile = async () => {
//   try {
//     await fetch("https://cashier.rulim34.dev/notes", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${process.env.Api_Key}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("File " + data);
//       });
//   } catch (err) {
//     console.log(err);
//   }
// };

const App = () => {
  const [folder, setFolder] = useState<string[]>([]);
  const [file, setFile] = useState<string[][]>([[]]);

  const fetchFolder = async () => {
    try {
      const response = await fetch("https://cashier.rulim34.dev/directories", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.ApiKey}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      // Lakukan sesuatu dengan data yang diterima, misalnya:
      // setFolder(data.folder);
      // setFile(data.file);
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    }
  };

  useEffect(() => {
    fetchFolder(); // Panggil fungsi fetch saat komponen dimuat
  }, []); // [] menandakan useEffect hanya dipanggil sekali saat komponen dimuat

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
