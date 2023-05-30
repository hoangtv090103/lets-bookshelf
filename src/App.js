import "./App.css";
import PageHeader from "./components/PageHeader";
import PageLayout from "./layout/PageLayout";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className="App">
      <PageHeader />
      <PageLayout books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
