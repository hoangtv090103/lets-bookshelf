const StateTag = ({ state, handleActiveState }) => {
  return (
    <div
      key={state.id}
      className="rounded-lg hover:underline cursor-pointer hover:bg-gray-200 pl-3 left-0 md:relative whitespace-nowrap truncate ... 2xl:pr-10 text-[#00635d]"
      onClick={() => handleActiveState(state.name)}
    >
      {state.name} ({state.quant})
    </div>
  );
};

export default StateTag;
