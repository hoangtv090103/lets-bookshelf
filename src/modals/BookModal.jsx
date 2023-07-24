import React, { useState } from "react";
import ReactModal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import StateSelect from "../components/StateSelect";
import Uploader from "../components/Uploader";

const BookModal = ({
  books,
  setBooks,
  showModal,
  setShowModal,
  genres,
  setGenres,
  states,
  setStates,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [cover, setCover] = useState(null);

  const handleChangeDate = () => {
    const startDateValue = document.getElementById("startDate").value;
    const startDate = new Date(startDateValue);
    const endDateValue = document.getElementById("endDate").value;
    const endDate = new Date(endDateValue);

    if (startDate.getTime() > endDate.getTime()) {
      document.getElementById("alert").innerHTML =
        "End date must be after start date.";
      return false;
    }

    const readDays = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
    );
    document.getElementById("readDays").value = readDays > 0 ? readDays : 0;
  };

  const handleChangeReadDays = () => {
    const startDateValue = document.getElementById("startDate").value;
    const startDate = new Date(startDateValue);
    const readDays = Number(
      parseInt(document.getElementById("readDays").value)
    );
    const endDate = new Date(
      startDate.getTime() + readDays * (1000 * 3600 * 24)
    );
    document.getElementById("endDate").value = endDate
      .toISOString()
      .slice(0, 10);
  };

  const closeModal = () => {
    setCover(null);
    setShowModal(false);
    reset();
  };

  const handleKeyDown = (event) => {
    if (showModal && event.key === "Escape") {
      setShowModal(false);
      setCover(null);
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  const onSubmit = (data) => {
    const { title, author, genre, state, startDate, endDate, comment } = data;

    if (startDate && endDate) {
      if (new Date(startDate).getTime() > new Date(endDate).getTime()) {
        document.getElementById("date-alert").innerHTML =
          "End date must be after start date.";
        return false;
      }
    }

    const newBook = {
      id: uuidv4(),
      title,
      author,
      genre,
      state,
      startDate,
      endDate,
      comment,
      cover: cover ? cover : null,
    };

    const newBooks = [...books, newBook];
    const updateStates = states.map((state) => {
      if (state.name === newBook.state || state.name === "All") {
        return {
          ...state,
          quant: state.quant + 1,
        };
      }
      return state;
    });

    var newGenres = null;
    if (!genres.includes(genre)) {
      newGenres = [
        ...genres,
        {
          id: uuidv4(),
          name: genre,
          quant: 1,
        },
      ];
    } else {
      newGenres = genres.map((genre) => {
        if (genre.name === newBook.genre) {
          return {
            ...genre,
            quant: genre.quant + 1,
          };
        }
        return genre;
      });
      setGenres(newGenres);
    }

    setStates(updateStates);
    setBooks(newBooks);
    localStorage.setItem("books", JSON.stringify(newBooks));
    localStorage.setItem("genres", JSON.stringify(newGenres));
    localStorage.setItem("states", JSON.stringify(updateStates));

    closeModal();
    return true;
  };

  return (
    <ReactModal
      isOpen={showModal}
      appElement={document.getElementById("root") || undefined}
      contentElement={() => {
        return (
          <form
            id="modal-react"
            className="bg-slate-100  w-[50%] min-h-fit absolute left-[25%] p-2 rounded-xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full flex justify-end max-h-fit">
              <button
                className="btn btn-danger right-0 top-0 rounded-full"
                onClick={() => {
                  setShowModal(false);
                  setCover(null);
                  reset();
                }}
              >
                Close
              </button>
            </div>

            {!cover && (
              <>
                <div className="w-full h-40 border-2 rounded-xl"></div>
                <Uploader
                  accept="image/*"
                  setFile={setCover}
                  label="+ Add Cover"
                />
                {/* <Uploader  */}
              </>
            )}
            {cover && (
              <>
                <img
                  src={cover}
                  alt=""
                  id="cover-preview"
                  className="w-full h-40 object-cover rounded-xl"
                />
                <Uploader
                  accept="image/*"
                  label="Change Cover"
                  setFile={setCover}
                  removable={true}
                />
              </>
            )}

            <InputField
              type="text"
              noLabel={true}
              id="title"
              className="border-2 rounded text-5xl outline-none"
              placeholder="Untitled"
              register={register}
              style={{
                border: errors?.title ? "1px solid red" : "none",
              }}
              requiredField={true}
              label={"Title"}
            />

            <InputField
              type="text"
              id="author"
              className="border-2 rounded"
              register={register}
              style={{
                border: errors?.author ? "1px solid red" : "none",
              }}
              placeholder="Author"
              requiredField={true}
              label={"Author"}
            />

            <InputField
              style={{
                border: errors?.genre ? "1px solid red" : "none",
              }}
              type="text"
              id="genre"
              register={register}
              className="border-2 rounded"
              placeholder="Genre"
              requiredField={true}
              label={"Genre"}
            />

            <StateSelect
              id="state"
              className="border-2 rounded"
              register={register}
              options={["To Read", "Reading", "Read"]}
              label={"State"}
            />

            <InputField
              type="date"
              id="startDate"
              className="border-2 rounded"
              onChange={handleChangeDate}
              register={register}
              label={"Start Date"}
            />

            <InputField
              type="date"
              id="endDate"
              className="border-2 rounded"
              onChange={handleChangeDate}
              register={register}
              label={"End Date"}
            />

            <InputField
              type="number"
              id="readDays"
              className="border-2 rounded"
              min={0}
              defaultValue={0}
              onChange={handleChangeReadDays}
              register={register}
              label={"Read Days"}
            />

            <textarea
              type="text"
              id="comment"
              className="resize-none w-full h-40"
              placeholder="Comment"
              register={register}
            />

            {(errors?.title || errors?.author || errors?.genre) && (
              <div className="text-red-500 max-w-fit m-auto" id="require-alert">
                Please fill out the required fields.
              </div>
            )}

            <div
              className="text-red-500 max-w-fit m-auto"
              id="date-alert"
            ></div>

            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </form>
        );
      }}
    ></ReactModal>
  );
};

export default BookModal;
