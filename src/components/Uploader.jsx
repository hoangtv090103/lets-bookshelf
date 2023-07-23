const Uploader = (props) => {
  const { setFile, label, removable } = props;
  const className = `bg-gray-400 m-auto w-fit h-fit p-1 rounded file-uploader cursor-pointer ${
    props.className || ""
  }`;
  return (
    <div className={className}>
      <label htmlFor="file" className="cursor-pointer">
        {label}
      </label>
      <input
        type="file"
        id="file"
        className="hidden"
        accept={props.accept}
        onChange={(event) => {
          setFile(URL.createObjectURL(event.target.files[0]));
        }}
      />
      {removable && (
        <>
          <div className="border-2 m-1 border-black"></div>
          <button className="" onClick={() => setFile(null)}>
            Remove Cover
          </button>
        </>
      )}
    </div>
  );
};

export default Uploader;
