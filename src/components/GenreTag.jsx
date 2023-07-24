import React from "react";

const GenreTag = ({ genre, handleActiveGenre }) => {
  return (
    <div
      key={genre.id}
      className="rounded-lg hover:underline cursor-pointer hover:bg-gray-200 pl-3 left-0 md:relative whitespace-nowrap truncate ... 2xl:pr-10 text-[#00635d]"
      onClick={() => handleActiveGenre(genre.name)}
    >
      {genre.name} ({genre.quant})
    </div>
  );
};

export default GenreTag;
