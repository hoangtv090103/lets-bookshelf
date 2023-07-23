const SideLayout = ({ genres }) => {
  return (
    <div className="flex flex-col w-[20%] items-center border-r-2 overflow-auto">
      {
        genres.map((genre) => (
          <div key={genre} className="flex flex-col items-center rounded-lg max-h-fit">
            <p>{genre}</p>
          </div>
        ))
      }
    </div>
  );
};

export default SideLayout;
