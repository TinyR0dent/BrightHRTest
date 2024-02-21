import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

type File = {
  type: string;
  name: string;
  added: string;
  size: number;
};

type Folder = {
  type: string;
  name: string;
  files: File[];
};

type DataType = (File | Folder)[];

type FolderShowState = {
  [key: string]: boolean;
};

function DataPage() {
  const [data, setData] = useState<DataType | undefined>();
  const [showFolderFiles, setShowFolderFiles] = useState<FolderShowState>({});

  // Didn't have time to do sorting
  const [sortMethod, setSortMethod] = useState<
    "default" | "name" | "size" | "date"
  >("default");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [searchedData, setSearchedData] = useState<File | Folder>();

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/api/directories`).then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    if (searchCriteria.trim() !== "") {
      axios.get(`${apiUrl}/api/directories`).then((res) => {
        if (res.data) {
          const lowercasedSearchCriteria = searchCriteria.toLowerCase();

          const filteredData: DataType = data!.filter((item) =>
            item.name.toLowerCase().includes(lowercasedSearchCriteria)
          );

          let searchedData;

          if (filteredData.length > 0) {
            if (filteredData[0].type === "file") {
              searchedData = filteredData[0] as File;
            } else {
              searchedData = filteredData[0] as Folder;
            }
          } else {
            searchedData = res.data;
          }

          setSearchedData(searchedData);
        } else {
          return res.data;
        }
      });
    }
    return;
  }, [searchCriteria]);

  const DisplayData = (data: File | Folder) => {
    if (data.type === "folder") {
      const folderData = data as Folder;
      return (
        <div className="flex-col flex">
          <strong
            onClick={() =>
              setShowFolderFiles({
                ...showFolderFiles,
                [folderData.name]: !showFolderFiles[folderData.name],
              })
            }
          >
            <p className="text-blue-500 cursor-pointer">{folderData.name}</p>
          </strong>
          {showFolderFiles[folderData.name] && (
            <ul className="flex flex-col">
              {folderData.files.map((file, index) => (
                <li
                  key={index}
                  className="w-full border-b-2 border-white/20 p-2 flex flex-row gap-5 "
                >
                  <p className="mr-auto">
                    {file.name}.{file.type}
                  </p>
                  <p>|</p>
                  <p>{file.size}kb</p>
                  <p>|</p>
                  <p>{file.added}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    } else {
      const fileData = data as File;

      return (
        <div className="flex-row flex gap-5">
          <p className="mr-auto">
            {fileData.name}.{fileData.type}
          </p>
          <p>|</p>
          <p>{fileData.size}kb</p>
          <p>|</p>
          <p>{fileData.added}</p>
        </div>
      );
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchCriteria(event.target.value);
  };

  return (
    <div className="w-screen h-screen bg-slate-800 flex flex-col items-center justify-center text-white">
      {data ? (
        <div className="flex flex-col gap-2 bg-slate-700 drop-shadow-lg rounded-xl p-2 min-w-[500px] ">
          <div className="flex flex-row justify-between pr-5 p-2 bg-slate-600 rounded-lg mb-8">
            <p className="font-bold">Sort by:</p>
            <span
              className="group flex flex-col cursor-pointer"
              onClick={() => setSortMethod("default")}
            >
              <p> None</p>
              <span className="h-[2px] w-0 transition-all duration-100 group-hover:w-full bg-white" />
            </span>
            <span
              className="group flex flex-col cursor-pointer"
              onClick={() => setSortMethod("name")}
            >
              <p> Name</p>
              <span className="h-[2px] w-0 transition-all duration-100 group-hover:w-full bg-white" />
            </span>
            <span
              className="group flex flex-col cursor-pointer"
              onClick={() => setSortMethod("size")}
            >
              <p> Size</p>
              <span className="h-[2px] w-0 transition-all duration-100 group-hover:w-full bg-white" />
            </span>
            <span
              className="group flex flex-col cursor-pointer"
              onClick={() => setSortMethod("date")}
            >
              <p> Date</p>
              <span className="h-[2px] w-0 transition-all duration-100 group-hover:w-full bg-white" />
            </span>
            <span>
              <p
                onClick={() => setShowSearchBar(!showSearchBar)}
                className="cursor-pointer"
              >
                🔎
              </p>
              {showSearchBar && (
                <input
                  type="text"
                  className="absolute right-2 mt-2 rounded-md h-8 w-3/4 bg-slate-500 border-2 border-white px-2"
                  value={searchCriteria}
                  onChange={handleSearchChange}
                  autoFocus
                  onBlur={() => setShowSearchBar(false)}
                />
              )}
            </span>
          </div>
          {searchedData && searchCriteria !== " " && searchCriteria !== "" ? (
            // <div className="flex-row flex gap-5">
            //   {searchedData.type === "folder" ? (
            //     <div className="flex-row flex gap-5">
            //       <p className="mr-auto">
            //         {searchedData.name}.{searchedData.type}
            //       </p>
            //       <p>|</p>
            //     </div>
            //   ) : (
            //     <div className="flex-row flex gap-5">
            //       <p className="mr-auto">
            //         {searchedData.name}.{searchedData.type}
            //       </p>
            //       <p>|</p>
            //       <p>{isFile(searchedData) && searchedData.added}kb</p>
            //       <p>|</p>
            //       <p> {isFile(searchedData) && searchedData.added}</p>
            //     </div>
            //   )}
            // </div>
            DisplayData(searchedData)
          ) : (
            <div>
              {data.map((item, index) => (
                <div
                  key={index}
                  className="w-full border-b-2 border-white/50 p-2"
                >
                  {DisplayData(item)}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}

export default DataPage;
