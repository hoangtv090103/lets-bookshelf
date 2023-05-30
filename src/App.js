import "./App.css";
import PageHeader from "./components/PageHeader";
import PageLayout from "./layout/PageLayout";
import React, { useState } from "react";
import FormModal from "./components/FormModal";
function App() {
  const [books, setBooks] = useState([]);
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  return (
    <div className="App">
      {isOpenedModal && (
        <FormModal
          setIsOpenedModal={setIsOpenedModal}
          books={books}
          setBooks={setBooks}
        />
      )}
      <PageHeader />
      <PageLayout books={books} setIsOpenedModal={setIsOpenedModal} />
    </div>
  );
}

export default App;
