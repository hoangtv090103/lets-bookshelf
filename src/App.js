import "./App.css";
import { useEffect, useState } from "react";
import SideLayout from "./layout/SideLayout";
import BookLayout from "./layout/BookLayout";
import BookModal from "./modals/BookModal";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setBooks(JSON.parse(localStorage.getItem("books") || "[]"));
    setGenres(JSON.parse(localStorage.getItem("genres") || "[]"));
  }, []);

  return (
    <div className="App h-full flex w-full">
      <SideLayout genres={genres} />
      <BookLayout
        books={books}
        setBooks={setBooks}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <BookModal
        showModal={showModal}
        setShowModal={setShowModal}
        books={books}
        setBooks={setBooks}
        genres={genres}
        setGenres={setGenres}
      />
    </div>
  );
}

export default App;
