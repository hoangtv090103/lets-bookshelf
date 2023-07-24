import GenreTag from "../components/GenreTag";
import StateTag from "../components/StateTag";

const SideLayout = ({
  genres,
  setActiveGenre,
  setSearchTerm,
  states,
  setActiveState,
}) => {
  const handleActiveGenre = (genreName) => {
    setSearchTerm("genre");
    setActiveGenre(genreName);
  };

  const handleActiveState = (stateName) => {
    setSearchTerm("state");
    setActiveState(stateName);
  };

  return (
    <div className="hidden md:flex md:flex-col md:w-[20%] relative md:border-r-2 overflow-x-hidden">
      {states.map((state) => (
        <StateTag
          state={state}
          setSearchTerm={setSearchTerm}
          handleActiveState={handleActiveState}
        />
      ))}
      <hr className="w-full border-2 border-black my-2" />
      {genres.map((genre) => (
        <GenreTag
          key={genre.id}
          genre={genre}
          handleActiveGenre={handleActiveGenre}
        />
      ))}
    </div>
  );
};

export default SideLayout;
