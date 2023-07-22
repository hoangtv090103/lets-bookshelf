import React, { useState } from "react";
import ReactModal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

const BookModal = ({
  showModal,
  setBooks,
  setShowModal,
  books,
  setGenres,
  genres,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const titleWatch = watch("title");
  const authorWatch = watch("author");
  const genreWatch = watch("genre");
  const stateWatch = watch("state");
  const startDateWatch = watch("startDate");
  const endDateWatch = watch("endDate");
  const readDaysWatch = watch("readDays");
  const commentWatch = watch("comment");

  const [cover, setCover] = useState(null);
  const handleChangeDate = (event) => {
    const { id, value } = event.target;
    const startDate = startDateWatch;
    const endDate = endDateWatch;
    const readDays = document.getElementById("readDays");

    if (id === "startDate") {
      if (new Date(value) > new Date(endDate)) {
        document.getElementById("endDate").value = value;
      }
    } else if (id === "endDate") {
      if (new Date(value) < new Date(startDate)) {
        document.getElementById("startDate").value = value;
      }

      const diffTime = Math.abs(new Date(value) - new Date(startDate));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      readDays.value = diffDays;
    } else if (id === "readDays") {
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + parseInt(value));
      document.getElementById("endDate").value = endDate
        .toISOString()
        .slice(0, 10);
    }
  };

  const onSubmit = () => {
    if (titleWatch === "" || authorWatch === "" || genreWatch === "") {
      document.getElementById("alert").innerHTML =
        "Please fill out the required fields.";
      highlightRequiredFields();
      return false;
    }

    const newBooks = [
      ...books,
      {
        cover: cover ? URL.createObjectURL(cover) : null,
        id: uuidv4(),
        title: titleWatch,
        author: authorWatch,
        genre: genreWatch,
        state: stateWatch,
        startDate: startDateWatch,
        endDate: endDateWatch,
        readDays: readDaysWatch,
        comment: commentWatch,
      },
    ];

    setGenres([...genres, genreWatch]);
    setBooks(newBooks);
    localStorage.setItem("books", JSON.stringify(newBooks));
    localStorage.setItem("genres", JSON.stringify([...genres, genreWatch]));

    reset();
    setShowModal(false);
    setCover(null);
    return true;
  };

  const highlightRequiredFields = () => {
    const requiredFields = document.querySelectorAll("[required]");
    requiredFields.forEach((field) => {
      field.classList.add("border-red-500");
    });
  };

  return (
    <ReactModal
      isOpen={showModal}
      contentElement={() => {
        return (
          <form
            id="modal-react"
            className="bg-slate-100  w-[50%] min-h-fit absolute left-[25%] p-2 rounded-xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            {cover && (
              <img
                src={URL.createObjectURL(cover)}
                alt=""
                id="cover-preview"
                className="w-full h-40 object-cover rounded-xl"
              />
            )}

            <input
              type="file"
              id="cover"
              className="border-2 rounded w-full h-full"
              accept="image/*"
              {...register("cover")}
              onChange={(event) => {
                setCover(event.target.files[0]);
              }}
            />

            <input
              type="text"
              id="title"
              className="border-2 rounded text-5xl outline-none"
              placeholder="Untitled"
              {...register("title", { required: true })}
              style={{
                border: errors?.title ? "2px solid red" : "none",
              }}
            />

            <div>
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                className="border-2 rounded"
                {...register("author", { required: true })}
                style={{
                  border: errors?.author ? "2px solid red" : "none",
                }}
                placeholder="Author"
              />
            </div>

            <div>
              <label htmlFor="genre">Genre</label>
              <input
                style={{
                  border: errors?.genre ? "2px solid red" : "none",
                }}
                type="text"
                id="genre"
                {...register("genre", { required: true })}
                className="border-2 rounded"
                placeholder="Genre"
              />
            </div>

            <div>
              <label htmlFor="state">State</label>
              <select
                id="state"
                className="border-2 rounded"
                {...register("state", { required: true })}
              >
                <option value="Available">To Read</option>
                <option value="Reading">Reading</option>
                <option value="Read">Read</option>
              </select>
            </div>

            <div>
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                className="border-2 rounded"
                onChange={handleChangeDate}
                defaultValue={new Date().toISOString().slice(0, 10)}
                {...register("startDate")}
              />
            </div>
            <div>
              <label htmlFor="endDate">Finish Date</label>
              <input
                type="date"
                id="endDate"
                className="border-2 rounded"
                onChange={handleChangeDate}
                defaultValue={new Date().toISOString().slice(0, 10)}
                {...register("endDate")}
              />
            </div>
            <div>
              <label htmlFor="readDays">Read Days</label>
              <input
                type="number"
                id="readDays"
                className="border-2 rounded"
                min={0}
                defaultValue={0}
                onChange={handleChangeDate}
                {...register("readDays")}
              />
            </div>
            <textarea
              type="text"
              id="comment"
              className="resize-none w-full h-40"
              placeholder="Comment"
              {...register("comment")}
            />
            {errors.title || errors.author || errors.genre ? (
              <div className="text-red-500">
                Please fill out the required fields.
              </div>
            ) : null}

            <div id="alert" className="text-red-500"></div>
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
