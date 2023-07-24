import "./App.css";
import { useEffect, useState } from "react";
import SideLayout from "./layout/SideLayout";
import BookLayout from "./layout/BookLayout";
import BookModal from "./modals/BookModal";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [activeGenre, setActiveGenre] = useState();
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState([
    {
      id: uuidv4(),
      name: "All",
      quant: books.length,
    },
    {
      id: uuidv4(),
      name: "To Read",
      quant: 0,
    },
    {
      id: uuidv4(),
      name: "Reading",
      quant: 0,
    },
    {
      id: uuidv4(),
      name: "Read",
      quant: 0,
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeState, setActiveState] = useState("All");

  useEffect(() => {
    setIsLoading(true);
    setBooks(JSON.parse(localStorage.getItem("books") || "[]"));
    setGenres([...JSON.parse(localStorage.getItem("genres") || "[]")]);
    setStates([...JSON.parse(localStorage.getItem("states") || "[]")]);
    setIsLoading(false);
  }, []);

  return (
    <div className="App h-full flex md:max-w-[1000px] 2xl:max-w-[1500px] 2xl w-full md:m-auto">
      <SideLayout
        genres={genres}
        setActiveGenre={setActiveGenre}
        states={states}
        setSearchTerm={setSearchTerm}
        setActiveState={setActiveState}
      />
      <BookLayout
        books={books}
        setBooks={setBooks}
        setShowModal={setShowModal}
        showModal={showModal}
        showDeleteModal={showDeleteModal}
        setDeleteModal={setDeleteModal}
        activeGenre={activeGenre}
        activeState={activeState}
        searchTerm={searchTerm}
      />
      <BookModal
        showModal={showModal}
        setShowModal={setShowModal}
        books={books}
        setBooks={setBooks}
        genres={genres}
        setGenres={setGenres}
        setStates={setStates}
        states={states}
      />
    </div>
  );
}

export default App;
