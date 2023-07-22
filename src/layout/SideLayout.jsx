const SideLayout = ({ genres }) => {
  return (
    <div className="flex flex-col w-[20%] items-center border-r-2">
      {
        genres.map((genre) => (
          <div key={genre.id} className="flex flex-col items-center border-2 rounded-lg max-h-fit">
            <h1>{genre.name}</h1>
          </div>
        ))
      }
    </div>
  );
};

export default SideLayout;
