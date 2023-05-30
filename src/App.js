import "./App.css";
import PageHeader from "./components/PageHeader";
import PageLayout from "./layout/PageLayout";
import React, { useState } from "react";
import Modal from "./components/Modal";
function App() {
  const [books, setBooks] = useState([]);
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  return (
    <div className="App">
      {isOpenedModal && <Modal setIsOpenedModal={setIsOpenedModal} />}
      <PageHeader />
      <PageLayout
        books={books}
        setBooks={setBooks}
        isOpenedModal={isOpenedModal}
        setIsOpenedModal={setIsOpenedModal}
      />
    </div>
  );
}

export default App;
